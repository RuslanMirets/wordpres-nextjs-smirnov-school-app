import Post from "@/screens/post/Post";
import { PostService } from "@/services/post.service";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydra.client";
import { dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

interface IPostPage {
	params: {
		slug: string;
	};
}

export async function generateMetadata({
	params,
}: IPostPage): Promise<Metadata> {
	const post = await PostService.getBySlug(params.slug);

	return {
		title: post.title,
	};
}

const PostPage = async ({ params }: IPostPage) => {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["hydrate-post", params.slug],
		queryFn: () => PostService.getBySlug(params.slug),
	});
	const dehydratedState = dehydrate(queryClient);

	return (
		<Hydrate state={dehydratedState}>
			<Post slug={params.slug} />
		</Hydrate>
	);
};

export default PostPage;
