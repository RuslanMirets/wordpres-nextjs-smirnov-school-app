import { IPage } from "@/types/page.interface";
import Container from "@/ui/container/Container";
import Heading from "@/ui/heading/Heading";
import Image from "next/image";
import { FC } from "react";

interface ICGB {
	page: IPage;
}

const CGB: FC<ICGB> = ({ page }) => {
	return (
		<div>
			<Container>
				<Heading>{page.title}</Heading>
				<div className="mb-10">
					<h2
						className="mb-4 font-bold"
						dangerouslySetInnerHTML={{ __html: page.rm.introTitle }}
					/>
					<div className="mb-4 text-neutral-500">
						<p>{page.rm.introDesc}</p>
					</div>
					<div
						style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
					>
						{page.rm.workList.map((item) => (
							<div key={item.workListImg.sourceUrl}>
								<div>{item.workListName}</div>
								<div>
									<Image
										src={item.workListImg.sourceUrl}
										width={300}
										height={300}
										alt={item.workListName}
										priority
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CGB;
