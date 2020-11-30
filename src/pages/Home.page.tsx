import React from "react";
import styles from "./Home.module.scss";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <section className={styles.wrapper}>
      <div>This is Home</div>
    </section>
  );
};

export default HomePage;
