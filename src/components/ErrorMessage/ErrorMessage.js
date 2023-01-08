export function ErrorMessage({ children }) {
  return <p>{children ?? "Something went wrong."}</p>;
}
