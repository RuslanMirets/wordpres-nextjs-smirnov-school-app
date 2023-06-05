import CGB from "@/screens/cgb/CGB";
import { PageService } from "@/services/page.service";
import { IPage } from "@/types/page.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Основы CG",
};

const CGBPage = async () => {
	const page: IPage = await PageService.getBySlug();

	return <CGB page={page} />;
};

export default CGBPage;
