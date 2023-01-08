import styles from "./Stack.module.css";

export function Stack({ children, spacing = "md" }) {
  return <div className={`${styles.root} ${styles[spacing]}`}>{children}</div>;
}
