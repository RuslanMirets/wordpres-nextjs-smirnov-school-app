import Layout from "@/src/components/Layout";
import Container from "@/src/components/container/Container";
import { IPost } from "@/src/types/post.interface";
import { FC } from "react";
import styles from "./Post.module.scss";
import Heading from "@/src/components/heading/Heading";

interface IPostProps {
	post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
	return (
		<Layout title={post.title}>
			<Container>
				<article>
					<Heading>{post.title}</Heading>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</article>
			</Container>
		</Layout>
	);
};

export default Post;
