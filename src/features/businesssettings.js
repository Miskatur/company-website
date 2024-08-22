import apiSlice from "./api-slice";

const FooterApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        businesssettingsData: builder.query({
            query: () => ({
                url: `/business-settings-data`,
                method: "GET",
            }),
            providesTags: [""], // Consider adding specific tags or removing this line if not needed
        }),
    }),
    // Make sure to add the endpoints to the reducer
    overrideExisting: false,
});

export const { useBusinesssettingsDataQuery } = FooterApi;
