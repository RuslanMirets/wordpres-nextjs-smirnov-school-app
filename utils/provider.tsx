"use client";

import React, { PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: PropsWithChildren) => {
	const [client] = React.useState(
		new QueryClient({
			defaultOptions: {
				queries: { staleTime: 1000 * 60 * 5, refetchOnWindowFocus: false },
			},
		}),
	);

	return (
		<QueryClientProvider client={client}>
			<SessionProvider>{children}</SessionProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default Providers;
