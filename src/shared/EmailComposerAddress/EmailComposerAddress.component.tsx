import React, { useLayoutEffect, useRef, useState } from "react";
import { EmailAddress } from "../EmailAddress";
import { EmailAddressInput } from "../EmailAddressInput";
import { Autocomplete } from "../Autocomplete";
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
  const containerReference = useRef<any>(null);
  const [_containerPosition, _setContainerPosition] = useState<string>("");
  const [_emailCandidate, _setEmailCandidate] = useState<string>("");
  const [_emails, _setEmails] = useState<SelectedEmail[]>([]);

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

  useLayoutEffect(() => {
    function updatePosition() {
      _setContainerPosition(
        containerReference.current?.getBoundingClientRect()
      );
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <div className={styles.wrapper} ref={containerReference}>
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

          {/* {_emailCandidate && _emailCandidate.length > 3 && ( */}
          <Autocomplete
            options={emailOptions}
            query={_emailCandidate}
            positionRef={_containerPosition}
          />
          {/* )} */}
        </div>
      </ul>
    </div>
  );
};

export default EmailComposerAddress;
