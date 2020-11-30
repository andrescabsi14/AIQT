import React, { useState } from "react";
import { EmailAddress } from "../EmailAddress";
import { EmailAddressInput } from "../EmailAddressInput";
import styles from "./EmailComposerAddress.module.scss";

interface EmailComposerAddressProps {
  emailOptions: string[];
}

export interface SelectedEmail {
  id: string;
  valid: boolean;
  value: string;
}
// enum EmailAddressStatus {
//   VALID = "valid",
//   INVALID = "invalid",
// }

const EmailComposerAddress: React.FC<EmailComposerAddressProps> = ({
  emailOptions,
}) => {
  const [_emailCandidate, _setEmailCandidate] = useState<string>("");
  const [_emails, _setEmails] = useState<SelectedEmail[]>([
    {
      id: `${new Date().getTime()}`,
      value: "theresa@outlook.com",
      valid: true,
    },
  ]);

  const addEmail = (value: string) => {
    const valid =
      emailOptions.includes(value) &&
      _emails.find((email) => email.value === value) === undefined;
    const newAddress = {
      id: `${new Date().getTime()} `,
      valid,
      value,
    };
    _setEmailCandidate("");
    _setEmails([..._emails, newAddress]);
  };

  const removeEmail = (value: string) => {
    const updatedselectedEmails = _emails.filter(
      (email) => email.value !== value
    );
    _setEmails([...updatedselectedEmails]);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.addresses}>
        {_emails.map((email, index) => (
          <EmailAddress
            key={email.id}
            email={email}
            removeEmail={removeEmail}
            last={_emails?.length === index + 1}
          />
        ))}
        <div className={styles.inputAutocomplete}>
          <EmailAddressInput
            addEmail={addEmail}
            setCandidate={_setEmailCandidate}
            candidate={_emailCandidate}
          />
        </div>
      </ul>
    </div>
  );
};

export default EmailComposerAddress;
