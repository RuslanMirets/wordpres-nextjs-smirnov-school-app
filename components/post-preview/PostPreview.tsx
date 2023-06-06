import Image from "next/image";
import Link from "next/link";
import styles from "./PostPreview.module.scss";
import { IPostPreview } from "@/types/post.interface";

interface IPost {
	post: IPostPreview;
}

const PostPreview = ({ post }: IPost) => {
	return (
		<Link className={styles.root} href={`/blog/${post.slug}`}>
			<Image
				className={styles.image}
				src={post.featuredImage.node.sourceUrl}
				width={300}
				height={300}
				alt={post.title}
				priority={true}
			/>
			<div className={styles.content}>
				<div className={styles.title}>{post.title}</div>
			</div>
		</Link>
	);
};

export default PostPreview;
