import Search from "@/screens/search/Search";
import { PostService } from "@/services/post.service";
import { IPostPreview } from "@/types/post.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Поиск",
};

interface ISearchPage {
	searchParams: { query: string };
}

export const dynamic = "force-dynamic";

const SearchPage = async ({ searchParams }: ISearchPage) => {
	const encodeQuery = encodeURIComponent(searchParams.query);

	const posts: IPostPreview[] = await PostService.getBySearch(encodeQuery);

	return <Search posts={posts} query={encodeQuery} />;
};

export default SearchPage;
