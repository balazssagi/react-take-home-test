import styles from "./Button.module.css";

export function Button({ className, ...rest }) {
  return <button className={`${styles.root} ${className}`} {...rest} />;
}
