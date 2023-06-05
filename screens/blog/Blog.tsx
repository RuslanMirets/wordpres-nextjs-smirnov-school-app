import PostsList from "@/components/posts-list/PostsList";
import { IPostPreview } from "@/types/post.interface";
import Container from "@/ui/container/Container";
import Heading from "@/ui/heading/Heading";
import { FC } from "react";

interface IBlog {
	posts: IPostPreview[];
}

const Blog: FC<IBlog> = ({ posts }) => {
	return (
		<div>
			<Container>
				<Heading>Блог</Heading>
				<PostsList posts={posts} />
			</Container>
		</div>
	);
};

export default Blog;