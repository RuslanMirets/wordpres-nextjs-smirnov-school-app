"use client";

import { FormEventHandler, useState } from "react";
import styles from "./SearchForm.module.scss";
import { useRouter } from "next/navigation";

const SearchForm = () => {
	const router = useRouter();

	const [query, setQuery] = useState("");

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		router.push(`/search?query=${query}`);
	};

	return (
		<form className={styles.root} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type="search"
				placeholder="Поиск..."
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className={styles.submit} type="submit">
				Искать
			</button>
		</form>
	);
};

export default SearchForm;
