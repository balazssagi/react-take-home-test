import { useState } from "react";
import { Button } from "../../../../components/Button/Button";
import { Stack } from "../../../../components/Stack/Stack";
import { BallotCategory } from "../BallotCategory/BallotCategory";
import { BallotModal } from "../BallotModal/BallotModal";

export function Ballot({ ballot }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selection, setSelection] = useState(() =>
    createInitialSelectionState(ballot.items)
  );

  const handleSelectNominee = (categoryId, nomineeId) => {
    setSelection((selection) => ({
      ...selection,
      [categoryId]: selection[categoryId] === nomineeId ? null : nomineeId,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Stack spacing="xl">
        <h1>Awards 2021</h1>
        {ballot.items.map((category) => (
          <BallotCategory
            key={category.id}
            category={category}
            selectedNomineeId={selection[category.id]}
            onSelectNominee={handleSelectNominee}
          />
        ))}
        <Button onClick={openModal}>Submit</Button>
      </Stack>
      <BallotModal
        ballotSelection={selection}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

function createInitialSelectionState(categories) {
  return categories.reduce((result, category) => {
    result[category.id] = null;
    return result;
  }, {});
}
