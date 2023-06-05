import { fetchData } from "@/api/wp-api";
import { IPostPreview, IPost } from "@/types/post.interface";

export const PostService = {
	async getAll() {
		const data = await fetchData(`
    query getAll{
      posts(where: {categoryNotIn: "366"}) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    } 	
  `);
		return data.posts.nodes as IPostPreview[];
	},

	async getBySlug(slug: string) {
		const data = await fetchData(`
    query getBySlug {
			post(id: "${slug}", idType: SLUG) {
				title
        content
			}
    } 	
  `);
		return data.post as IPost;
	},

	async getBySearch(term: string) {
		const data = await fetchData(`
    query getBySearch{
      posts(where: {search: "${term}"}) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    } 	
  `);
		return data.posts.nodes as IPostPreview[];
	},
};
