import { createAPI } from "shared/api/axiosInstance";
import { API_URL } from "shared/config";

export const api = createAPI(API_URL);
