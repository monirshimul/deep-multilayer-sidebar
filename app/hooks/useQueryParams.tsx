import { useEffect, useState } from "react";

interface QueryParams {
  [key: string]: string | string[] | undefined;
}

const useQueryParams = (): [
  QueryParams,
  (params: QueryParams) => void,
  () => void
] => {
  const [queryParams, setQueryParams] = useState<QueryParams>({});

  useEffect(() => {
    // Parse query string on component mount
    const params = new URLSearchParams(window.location.search);
    console.log("params", params);
    const parsedParams: QueryParams = {};
    for (const [key, value] of params.entries()) {
      parsedParams[key] = value;
    }
    console.log("parsedParams", parsedParams);
    setQueryParams(parsedParams);
  }, []);

  const updateQueryParams = (newParams: QueryParams) => {
    const params = new URLSearchParams(window.location.search);

    // Check if new parameter value is different from current state value
    for (const key in newParams) {
      if (newParams.hasOwnProperty(key)) {
        const newValue = newParams[key] || "";
        if (queryParams[key] !== newValue) {
          // Append new parameter to URL only if it's different
          params.append(key, newValue);
        } else {
          //   toast.warning("This data already has been taken");
          alert("This data already has been taken");
        }
      }
    }

    // Update URL with new query parameters
    window.history.replaceState({}, "", `?${params.toString()}`);

    // Update state with new query parameters
    setQueryParams({ ...queryParams, ...newParams });
  };

  const resetQueryParams = () => {
    window.history.replaceState({}, "", window.location.pathname);
    setQueryParams({});
  };

  return [queryParams, updateQueryParams, resetQueryParams];
};

export default useQueryParams;
