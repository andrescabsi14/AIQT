import React, { useEffect, useState } from "react";
import styles from "./Autocomplete.module.scss";

interface AutocompleteProps {
  options: string[];
  query: string;
  positionRef: any;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  query,
  positionRef,
}) => {
  //   const [_options, _setOption] = useState<string[]>(options);
  const [_selection, _setSelection] = useState("");
  const onSelection = (e: any) => {
    _setSelection(e.target.value);
  };

  //   const debouncedFiltering = useCallback(
  // _.debounce((query: string) => {
  //     filterItem(query)
  // }, 500),
  // []
  //   );

  //   const filterItem = (query: string) => {
  // console.log(query);
  // try {
  // _.startCase(_.toLower(str));
  // } catch (err: any) {}
  //   };

  useEffect(() => {
    // debouncedFiltering(query);
  }, [query]);

  // TO DO:
  // 1. Add debounced function to filter options, listening to changes on the query prop using useEffect
  // 2. Get the position reference of the element and position the autocomplete

  //   console.log(positionRef);

  return (
    <div
      className={styles.wrapper}
      style={{
        position: "fixed",
        top: positionRef.top,
        left: positionRef.left,
      }}
    >
      <select
        className={styles.wrapper}
        onChange={onSelection}
        value={_selection}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(Autocomplete);
