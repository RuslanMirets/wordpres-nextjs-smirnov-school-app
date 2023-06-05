import Post from "@/screens/post/Post";
import { PostService } from "@/services/post.service";
import { Metadata } from "next";

type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
	const post = await PostService.getBySlug(slug);

	return {
		title: post.title,
	};
}

const PostPage = async ({ params }: Props) => {
	const post = await PostService.getBySlug(params.slug);

	return <Post post={post} />;
};

export default PostPage;
