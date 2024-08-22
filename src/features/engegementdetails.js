import apiSlice from "./api-slice";

const EngageApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        engageData: builder.query({
            query: () => ({
                url: `/engagement-page-details`,
                method: "GET",
            }),
            providesTags: [""],
        }),
    }),
});

export const { useEngageDataQuery } = EngageApi;
