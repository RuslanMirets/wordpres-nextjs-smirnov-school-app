"use client";

import LoginForm from "@/components/auth-forms/LoginForm";
import Container from "@/ui/container/Container";
import Heading from "@/ui/heading/Heading";

const Login = () => {
	return (
		<div>
			<Container>
				<Heading center>Авторизация</Heading>
				<LoginForm />
			</Container>
		</div>
	);
};

export default Login;
