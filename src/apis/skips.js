import { URLS } from "../constants/urls";
import { loadingOFF, loadingON } from "../features/loader";
import { api } from "./_axios";

export const getSkipsByLocation = ({ postcode, area }) => async (dispatch) => {
    try {
        dispatch(loadingON());
        return await api.post(`${URLS.SKIPS_BY_LOCATION}?postcode=${postcode}&area=${area}`);
    } catch (error) {
        throw error;
    } finally {
        dispatch(loadingOFF());
    }
};