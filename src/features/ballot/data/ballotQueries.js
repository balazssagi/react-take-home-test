import { useEffect, useState } from "react";
import ballotApi from "./ballotApi";

export function useBallotQuery() {
  const [query, setQuery] = useState({ status: "loading" });

  useEffect(() => {
    // using `ignore` flag to prevent race conditions:
    // https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect#useeffect-clean-up-function-with-boolean-flag
    // not really applicable to this simple app, but still, it's a good practice
    let ignore = false;

    ballotApi
      .getBallotData()
      .then((data) => {
        if (ignore) return;
        setQuery({ status: "success", data });
      })
      .catch((error) => {
        if (ignore) return;
        setQuery({ status: "error", error: error.message });
      });

    return () => {
      ignore = true;
    };
  }, []);

  return query;
}
