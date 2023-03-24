import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import DisplayList from "../components/DisplayList";
const HomeScreen = () => {
  const [responseList, setResponseList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6"
    )
      .then((response) => response.json())
      .then((json) => setResponseList(json.data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div class="grid h-screen place-items-center overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw]">
      <div class="block hover:bg-gray-50">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <p>Error while fetching the data</p>
        ) : responseList?.length ? (
          <DisplayList displayList={responseList} />
        ) : (
          <p>No Data</p>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
