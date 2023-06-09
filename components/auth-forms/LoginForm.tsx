"use client";

import {
	FieldValues,
	FormProvider,
	SubmitHandler,
	useForm,
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import styles from "./AuthForms.module.scss";
import Input from "@/ui/input/Input";
import Button from "@/ui/button/Button";
import { signIn } from "next-auth/react";

const LoginForm = () => {
	const methods = useForm<FieldValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// const { replace } = useRouter();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		await signIn("credentials", {
			email: data.email,
			password: data.password,
			redirect: false,
		}).then((callback) => {
			if (callback?.ok) {
				// replace("/");
			}

			if (callback?.error) {
				console.log(callback.error);
			}
		});
	};

	return (
		<div className={styles.root}>
			<FormProvider {...methods}>
				<form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
					<Input name="email" type="email" placeholder="Email" />
					<Input name="password" type="password" placeholder="Password" />
					<Button type="submit" disabled={methods.formState.isSubmitting}>
						{methods.formState.isSubmitting ? "Вход" : "Войти"}
					</Button>
				</form>
			</FormProvider>
			<div>Или</div>
			<div className={styles.buttons}>
				<Button
					className={styles.googleBtn}
					onClick={() => signIn("google")}
					variant="outline"
					icon={FcGoogle}
				>
					Вход через Google
				</Button>
				<Button className={styles.googleBtn} variant="outline" icon={FaGithub}>
					Вход через Github
				</Button>
			</div>
		</div>
	);
};

export default LoginForm;
