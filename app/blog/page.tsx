import Blog from "@/screens/blog/Blog";
import { PostService } from "@/services/post.service";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydra.client";
import { dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Блог",
};

const BlogPage = async () => {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["hydrate-posts"],
		queryFn: PostService.getAll,
	});
	const dehydratedState = dehydrate(queryClient);

	return (
		<Hydrate state={dehydratedState}>
			<Blog />
		</Hydrate>
	);
};

export default BlogPage;
