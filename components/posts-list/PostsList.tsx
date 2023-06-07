"use client";

import styles from "./PostsList.module.scss";
import PostPreview from "../post-preview/PostPreview";
import { IPostPreview } from "@/types/post.interface";

type Props = {
	posts: IPostPreview[];
};

const PostsList = ({ posts }: Props) => {
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
