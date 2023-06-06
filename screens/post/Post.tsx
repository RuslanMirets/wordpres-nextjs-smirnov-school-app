"use client";

import styles from "./Post.module.scss";
import Heading from "@/ui/heading/Heading";
import Container from "@/ui/container/Container";
import { useQuery } from "@tanstack/react-query";
import { PostService } from "@/services/post.service";
import Loader from "@/components/loader/Loader";

interface IPost {
	slug: string;
}

const Post = ({ slug }: IPost) => {
	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ["hydrate-post", slug],
		queryFn: () => PostService.getBySlug(slug),
	});

	return (
		<div>
			<Container>
				{error ? (
					<p>О нет, произошла ошибка</p>
				) : isLoading || isFetching ? (
					<Loader />
				) : data ? (
					<article>
						<Heading>{data.title}</Heading>
						<div
							className={styles.content}
							dangerouslySetInnerHTML={{ __html: data.content }}
						/>
					</article>
				) : null}
			</Container>
		</div>
	);
};

export default Post;
