"use client";

import styles from "./PostsList.module.scss";
import PostPreview from "../post-preview/PostPreview";
import { IPostPreview } from "@/types/post.interface";

interface IPostsList {
	posts: IPostPreview[];
}

const PostsList = ({ posts }: IPostsList) => {
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
