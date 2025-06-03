import React, { useEffect } from "react";

const FetchApi2 = () => {
  useEffect(() => {
    let controller = new AbortController();

    async function getUsers() {
      try {
        let resp = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });
        let data = await resp.json();
        console.log(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("API Call cancel");
        } else {
          console.log("API Error");
        }
      }
    }
    getUsers();

    return () => {
      controller.abort(); // cancels api call in unmounting phase
    };
  }, []);

  return (
    <div>
      <h1>Fetch API2</h1>
    </div>
  );
};

export default FetchApi2;
