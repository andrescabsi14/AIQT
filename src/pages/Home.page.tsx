import React from "react";
import { EmailComposerAddress } from "../shared/EmailComposerAddress";
import styles from "./Home.module.scss";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <section className={styles.wrapper}>
      <EmailComposerAddress />
    </section>
  );
};

export default HomePage;
