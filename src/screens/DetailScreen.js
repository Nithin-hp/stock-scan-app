import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const DetailScreen = () => {
  const [productDetail, setproductDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6"
    )
      .then((response) => response.json())
      .then((json) => setproductDetail(json.data.find((p) => p.id == id)))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  const renderCurrentSelection = (currentSection) => {
    let result = currentSection.text;
    Object.entries(currentSection.variable).forEach((item, index) => {
      switch (item[1].type) {
        case "indicator":
          result = result.replace(item[0], item[1].default_value);
          break;
        case "value":
          result = result.replace(item[0].toString(), item[1].values[0]);
          break;
        default:
          return null;
      }
    });
    return result;
  };

  return (
    <>
      <div class="grid h-screen place-items-center overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw]">
        <div class="block hover:bg-gray-50">
          <button
            class="inline-flex gap-2 items-center my-3"
            onClick={() => navigate("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
            Go back
          </button>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <p>Error while fetching the data</p>
          ) : productDetail ? (
            <>
              <h3 className="text-2xl font-medium leading-6 text-indigo-600">
                {productDetail?.name}
              </h3>
              <div class="mt-3 flex flex-shrink-0">
                <span
                  style={{
                    backgroundColor: `${productDetail?.color}`,
                    color: `black`,
                    fontWeight: 800,
                  }}
                  class={`text-${productDetail?.color}-800 inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-${productDetail?.color}-100`}
                >
                  {productDetail?.tag}
                </span>
              </div>
              <hr className="w-full border-[0.1px] border-gray-200 mt-5" />
              <ul class="divide-y divide-gray-200">
                {productDetail?.criteria.map((item, index) => {
                  return (
                    <li class="flex py-4" key={index}>
                      <p class="font-medium text-gray-900">
                        {item.type === "plain_text" ? (
                          <p>{item.text}</p>
                        ) : (
                          renderCurrentSelection(item)
                        )}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p>No Data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailScreen;
