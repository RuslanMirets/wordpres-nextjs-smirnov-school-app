import CGB from "@/screens/cgb/CGB";
import { PageService } from "@/services/page.service";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydra.client";
import { dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Основы CG",
};

const CGBPage = async () => {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["hydrate-page-cgb"],
		queryFn: PageService.getBySlug,
	});
	const dehydratedState = dehydrate(queryClient);

	return (
		<Hydrate state={dehydratedState}>
			<CGB />
		</Hydrate>
	);
};

export default CGBPage;
