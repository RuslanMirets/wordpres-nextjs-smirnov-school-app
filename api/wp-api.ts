export const fetchData = async (query: string) => {
	const headers = { "Content-Type": "application/json" };

	const response = await fetch(`${process.env.WORDPRESS_API_URL}/graphql`, {
		next: { revalidate: 60 },
		headers,
		method: "POST",
		body: JSON.stringify({
			query,
		}),
	});

	const json = await response.json();

	return json.data;
};
