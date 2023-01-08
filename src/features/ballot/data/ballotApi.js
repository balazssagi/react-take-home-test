const ballotApi = {
  getBallotData() {
    return fetch("/api/getBallotData").then((res) => {
      return new Promise((resolve, reject) => {
        // adding some artificial delay so it more closely resembles
        // a real, external api call and we can see the loading state
        setTimeout(() => {
          resolve(res.json());
        }, 300);
      });
    });
  },
};

export default ballotApi;
