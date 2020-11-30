import React from "react";
import styles from "./EmailComposerAddress.module.scss";

interface EmailComposerAddressProps {}

enum EmailAddressStatus {
  VALID = "valid",
  INVALID = "invalid",
}

const valid = true;

const EmailComposerAddress: React.FC<EmailComposerAddressProps> = () => {
  console.log(EmailAddressStatus);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.addresses}>
        <li>
          {/* EmailAddressStatus.VALID */}
          <div
            className={`${styles.value} ${
              valid ? styles.valid : styles.invalid
            }`}
          >
            theresa@outlook.com
          </div>

          <div className={styles.actions}>
            <div className={styles.remove}>✕</div>
          </div>
        </li>
      </ul>
      <div className={styles.inputWrapper}>
        <input type="text" value={`Testr`} />
      </div>
    </div>
  );
};

export default EmailComposerAddress;
