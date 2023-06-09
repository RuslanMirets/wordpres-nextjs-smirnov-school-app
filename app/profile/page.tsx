import { IUser } from "@/types/user.interface";
import Container from "@/ui/container/Container";
import Heading from "@/ui/heading/Heading";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
	title: "Профиль",
};

const ProfilePage = async () => {
	const session: IUser | undefined | null = await getServerSession(authOptions);

	return (
		<div>
			<Container>
				<Heading>Профиль</Heading>
				<h2>
					{session?.user.firstName} {session?.user?.lastName}
				</h2>
				<div>{session?.user.roles.nodes[0].name}</div>
				<Image
					src={session?.user.avatar.url || ""}
					width={100}
					height={100}
					alt={session?.user.firstName || ""}
				/>
			</Container>
		</div>
	);
};

export default ProfilePage;
