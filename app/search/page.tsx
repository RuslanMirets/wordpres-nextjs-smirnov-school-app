import Search from "@/screens/search/Search";
import { PostService } from "@/services/post.service";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydra.client";
import { dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Поиск",
};

interface ISearchPage {
	searchParams: { query: string };
}

const SearchPage = async ({ searchParams }: ISearchPage) => {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["hydrate-search", searchParams.query],
		queryFn: () => PostService.getBySearch(searchParams.query),
	});
	const dehydratedState = dehydrate(queryClient);

	// const encodeQuery = encodeURIComponent(searchParams.query);

	return (
		<Hydrate state={dehydratedState}>
			<Search query={searchParams.query} />
		</Hydrate>
	);
};

export default SearchPage;
