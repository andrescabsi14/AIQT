import React, { useEffect, useRef } from "react";
import styles from "./EmailAddressInput.module.scss";

interface EmailAddressInputProps {
  addEmail: Function;
  setCandidate: Function;
  candidate: string;
}

const EmailAddressInput: React.FC<EmailAddressInputProps> = ({
  addEmail,
  setCandidate,
  candidate,
}) => {
  const inputRef = useRef<any>(null);
  const onChange = (value: string) => {
    setCandidate(value);
  };

  const onBlur = (value: string) => {
    if (value.trim().length === 0) return;
    addEmail(value);
  };

  useEffect(() => {
    if (inputRef && inputRef.current && candidate.trim().length === 0) {
      inputRef.current.focus();
    }
  }, [candidate]);

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        ref={inputRef}
        value={candidate}
        placeholder={`Enter recipients...`}
        onChange={(e: any) => onChange(e.target.value)}
        onBlur={(e: any) => onBlur(e.target.value)}
      />
    </div>
  );
};

export default EmailAddressInput;
