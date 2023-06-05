export const fetchData = async (query: string) => {
	const headers = { "Content-Type": "application/json" };

	const data = await fetch(`${process.env.WORDPRESS_API_URL}/graphql`, {
		next: { revalidate: 60 },
		headers,
		method: "POST",
		body: JSON.stringify({
			query,
		}),
	}).then((response) => response.json());

	return data.data;
};

// export const fetchData = async (query: string) => {
// 	const response = await axios.request({
// 		method: "POST",
// 		url: `${process.env.WORDPRESS_API_URL}/graphql`,
// 		headers: { "Content-Type": "application/json" },
// 		data: { query: query },
// 	});

// 	return response.data.data;
// };
