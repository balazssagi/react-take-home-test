import { Stack } from "../../../../components/Stack/Stack";
import styles from "./BallotNominee.module.css";

export function BallotNominee({ nominee, isSelected, onSelect }) {
  return (
    <button
      className={`${styles.root} ${isSelected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <Stack>
        <h3>{nominee.title}</h3>
        <img
          className={styles.image}
          src={nominee.photoUrL}
          alt={nominee.title}
        />
        <span>{isSelected ? "Revoke" : "Select"}</span>
      </Stack>
    </button>
  );
}
