import Blog from "@/screens/blog/Blog";
import { PostService } from "@/services/post.service";
import { IPostPreview } from "@/types/post.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Блог",
};

const BlogPage = async () => {
	const posts: IPostPreview[] = await PostService.getAll();

	return <Blog posts={posts} />;
};

export default BlogPage;
