import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

// a real modal component should support focus trapping, keyboard handling, etc.
export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.root}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <header className={styles.header}>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
}
