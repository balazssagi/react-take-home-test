import { Modal } from "../../../../components/Modal/Modal";

export function BallotModal({ isOpen, onClose, ballotSelection }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <pre>{JSON.stringify(ballotSelection, null, 2)}</pre>
    </Modal>
  );
}
