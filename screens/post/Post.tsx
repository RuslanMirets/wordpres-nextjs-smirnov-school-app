import { FC } from "react";
import styles from "./Post.module.scss";
import { IPost } from "@/types/post.interface";
import Heading from "@/ui/heading/Heading";
import Container from "@/ui/container/Container";

interface IPostProps {
	post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
	return (
		<div>
			<Container>
				<article>
					<Heading>{post.title}</Heading>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</article>
			</Container>
		</div>
	);
};

export default Post;
