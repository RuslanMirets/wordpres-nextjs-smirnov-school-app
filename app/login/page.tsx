import Login from "@/screens/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Логин",
};

const LoginPage = () => {
	return <Login />;
};

export default LoginPage;
