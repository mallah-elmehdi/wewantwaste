import { createAsyncThunk } from "@reduxjs/toolkit";
import { URLS } from "../constants/urls";
import { api } from "./_axios";

export const getSkipsByLocation = createAsyncThunk('data/skips',
    async ({ postcode, area }, { dispatch }) => {
        try {
            const response = await api.get(`${URLS.SKIPS_BY_LOCATION}?postcode=${postcode}&area=${area}`);
            return response.data
        } catch (error) {
            throw error;
        }
    }
);


