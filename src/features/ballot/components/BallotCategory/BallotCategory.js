import styles from "./BallotCategory.module.css";
import { BallotNominee } from "../BallotNominee/BallotNominee";
import { Stack } from "../../../../components/Stack/Stack";

export function BallotCategory({
  category,
  selectedNomineeId,
  onSelectNominee,
}) {
  return (
    <Stack>
      <h2>{category.title}</h2>
      <ul className={styles.grid}>
        {category.items.map((nominee) => (
          <li key={nominee.id}>
            <BallotNominee
              nominee={nominee}
              isSelected={selectedNomineeId === nominee.id}
              onSelect={() => {
                onSelectNominee(category.id, nominee.id);
              }}
            />
          </li>
        ))}
      </ul>
    </Stack>
  );
}
