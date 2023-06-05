import { IPostPreview } from "@/types/post.interface";
import { FC } from "react";
import styles from "./PostsList.module.scss";
import PostPreview from "../post-preview/PostPreview";

interface IPostsList {
	posts: IPostPreview[];
}

const PostsList: FC<IPostsList> = ({ posts }) => {
	return (
		<ul className={styles.root}>
			{posts.map((post) => (
				<li key={post.slug}>
					<PostPreview post={post} />
				</li>
			))}
		</ul>
	);
};

export default PostsList;
