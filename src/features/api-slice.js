import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl:
        process.env.NEXT_PUBLIC_BASE_URL_MAIN,
});

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    endpoints: () => ({}),
    tagTypes: [""],
});

export default apiSlice;
