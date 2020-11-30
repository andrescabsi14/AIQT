import React from "react";
import { SelectedEmail } from "../EmailComposerAddress/EmailComposerAddress.component";
import styles from "./EmailAddress.module.scss";

interface EmailAddressProps {
  removeEmail: Function;
  email: SelectedEmail;
  last: boolean;
}

const EmailAddress: React.FC<EmailAddressProps> = ({
  removeEmail,
  email,
  last,
}) => {
  return (
    <>
      <li className={`${email.valid ? styles.valid : styles.invalid}`}>
        <div className={`${styles.value}`}>
          {email.value}
          {email.valid === false && (
            <span className={styles.invalidIcon}>!</span>
          )}
        </div>

        <div className={styles.actions}>
          <div
            onClick={() => removeEmail(email.value)}
            className={styles.remove}
          >
            ✕
          </div>
        </div>
      </li>
      {!last && <span className={styles.separator}>,</span>}
    </>
  );
};

export default EmailAddress;
