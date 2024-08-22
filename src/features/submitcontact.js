// src/features/api/formApi.js

import apiSlice from "./api-slice";

const FormApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        submitForm: builder.mutation({
            query: (formData) => ({
                url: `/submit-form`,
                method: "POST",
                body: formData,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useSubmitFormMutation } = FormApi;
