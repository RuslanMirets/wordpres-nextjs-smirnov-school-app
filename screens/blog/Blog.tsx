import PostsList from "@/components/posts-list/PostsList";
import SearchForm from "@/components/search-form/SearchForm";
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
				<SearchForm />
				<PostsList posts={posts} />
			</Container>
		</div>
	);
};

export default Blog;
