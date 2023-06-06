"use client";

import Loader from "@/components/loader/Loader";
import PostsList from "@/components/posts-list/PostsList";
import SearchForm from "@/components/search-form/SearchForm";
import { PostService } from "@/services/post.service";
import Container from "@/ui/container/Container";
import Heading from "@/ui/heading/Heading";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ["hydrate-posts"],
		queryFn: () => PostService.getAll(),
	});

	return (
		<div>
			<Container>
				<Heading>Блог</Heading>
				<SearchForm />
				{error ? (
					<p>О нет, произошла ошибка</p>
				) : isLoading || isFetching ? (
					<Loader />
				) : data ? (
					<PostsList posts={data} />
				) : null}
			</Container>
		</div>
	);
};

export default Blog;
