import React from "react";
import styles from "./EmailComposerAddress.module.scss";

interface EmailComposerAddressProps {}

const EmailComposerAddress: React.FC<EmailComposerAddressProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}></div>
      <input type="text" value={`Testr`} />
    </div>
  );
};

export default EmailComposerAddress;
