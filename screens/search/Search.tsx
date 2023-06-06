"use client";

import Container from "@/ui/container/Container";
import PostsList from "@/components/posts-list/PostsList";
import Heading from "@/ui/heading/Heading";
import SearchForm from "@/components/search-form/SearchForm";
import { PostService } from "@/services/post.service";
import Loader from "@/components/loader/Loader";
import { useQuery } from "@tanstack/react-query";

interface ISearch {
	query: string;
}

const Search = ({ query }: ISearch) => {
	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ["hydrate-search", query],
		queryFn: () => PostService.getBySearch(query),
	});

	console.log(data);

	return (
		<div>
			<Container>
				{error ? (
					<p>О нет, произошла ошибка</p>
				) : isLoading || isFetching ? (
					<Loader />
				) : data ? (
					<>
						<Heading>
							Поиск
							{query !== "" && `: «${query}»`}
						</Heading>
						<SearchForm />
						{data.length == 0 ? (
							<div>Статей не найдено!</div>
						) : (
							<PostsList posts={data} />
						)}
					</>
				) : null}
			</Container>
		</div>
	);
};

export default Search;
