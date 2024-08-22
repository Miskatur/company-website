import apiSlice from "./api-slice";

const HomepageApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        homepageData: builder.query({
            query: () => ({
                url: `/home-page-data`,
                method: "GET",
            }),
            providesTags: [""],
        }),
    }),
});

export const { useHomepageDataQuery } = HomepageApi;
