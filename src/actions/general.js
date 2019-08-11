import {FAIL_LOADING, IS_LOADING} from "../constants";

export const isLoading = () => ({ type: IS_LOADING });
export const failLoading = () => ({ type: FAIL_LOADING });