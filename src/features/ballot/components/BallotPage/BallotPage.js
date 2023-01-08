import { ErrorBoundary } from "../../../../components/ErrorBoundary/ErrorBoundary";
import { ErrorMessage } from "../../../../components/ErrorMessage/ErrorMessage";
import { Loader } from "../../../../components/Loader/Loader";
import { useBallotQuery } from "../../data/ballotQueries";
import { Ballot } from "../Ballot/Ballot";

export function BallotPage() {
  const { status, data: ballot } = useBallotQuery();

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return <ErrorMessage />;
  }

  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <Ballot ballot={ballot} />
    </ErrorBoundary>
  );
}
