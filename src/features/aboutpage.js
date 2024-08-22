import apiSlice from "./api-slice";

const FooterApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       aboutData: builder.query({
            query: () => ({
                url: `/about-us-page-data`,
                method: "GET",
            }),
            providesTags: [""], // Consider adding specific tags or removing this line if not needed
        }),
    }),
    // Make sure to add the endpoints to the reducer
    overrideExisting: false,
});

export const { useAboutDataQuery } = FooterApi;
