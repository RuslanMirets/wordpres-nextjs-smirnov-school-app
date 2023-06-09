/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	},

	images: {
		domains: ["dev.smirnov.school", "lh3.googleusercontent.com"],
	},
};

module.exports = nextConfig;
