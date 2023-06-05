import { FC } from "react";
import Container from "@/ui/container/Container";
import PostsList from "@/components/posts-list/PostsList";
import { IPostPreview } from "@/types/post.interface";
import Heading from "@/ui/heading/Heading";
import SearchForm from "@/components/search-form/SearchForm";

interface ISearch {
	posts: IPostPreview[];
	query: any;
}

const Search: FC<ISearch> = ({ posts, query }) => {
	return (
		<div>
			<Container>
				<Heading>
					Поиск
					{query !== "" && `: «${decodeURIComponent(query)}»`}
				</Heading>
				<SearchForm />
				{posts.length == 0 ? (
					<div>Статей не найдено</div>
				) : (
					<PostsList posts={posts} />
				)}
			</Container>
		</div>
	);
};

export default Search;
