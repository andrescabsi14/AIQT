import React from "react";
import styles from "./App.module.scss";
import HomePage from "./pages/Home.page";

function App() {
  return (
    <section className={styles.wrapper}>
      <HomePage />;
    </section>
  );
}

export default App;
