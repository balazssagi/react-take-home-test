import styles from "./Layout.module.css";

export function Layout({ children }) {
  return <div className={styles.root}>{children}</div>;
}
