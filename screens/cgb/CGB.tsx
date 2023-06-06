"use client";

import Loader from "@/components/loader/Loader";
import { PageService } from "@/services/page.service";
import Container from "@/ui/container/Container";
import Heading from "@/ui/heading/Heading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const CGB = () => {
	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ["hydrate-page-cgb"],
		queryFn: () => PageService.getBySlug(),
	});

	return (
		<div>
			<Container>
				{error ? (
					<p>О нет, произошла ошибка</p>
				) : isLoading || isFetching ? (
					<Loader />
				) : data ? (
					<>
						<Heading>{data.title}</Heading>
						<div className="mb-10">
							<h2
								className="mb-4 font-bold"
								dangerouslySetInnerHTML={{ __html: data.rm.introTitle }}
							/>
							<div className="mb-4 text-neutral-500">
								<p>{data.rm.introDesc}</p>
							</div>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(4, 1fr)",
								}}
							>
								{data.rm.workList.map((item) => (
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
					</>
				) : null}
			</Container>
		</div>
	);
};

export default CGB;
