"use client";

import { PropsWithChildren } from "react";
import styles from "./Heading.module.scss";

const Heading = ({ children }: PropsWithChildren) => {
	return <h1 className={styles.root}>{children}</h1>;
};

export default Heading;
