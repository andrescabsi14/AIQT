import React from "react";
import { EmailComposerAddress } from "../../../shared/EmailComposerAddress";
import JSONemailOptions from "../../../shared/EmailComposerAddress/EmailComposerAddress.mock.json";
import styles from "./Home.module.scss";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.form}>
        <EmailComposerAddress emailOptions={JSONemailOptions} />
      </div>
    </section>
  );
};

export default HomePage;
