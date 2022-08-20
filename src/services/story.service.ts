import { createAsyncThunk } from "@reduxjs/toolkit";
import { callAPI } from "./api.service";
import { StoryResponse } from "../types/StoryResponse";
import { configs } from "../utils/constants/configs.constants";
export const getStories = createAsyncThunk<
  StoryResponse,
  string,
  {
    rejectValue: string;
  }
>("questionnaires/getQuestionnaire", async (endpoint, thunkApi) => {
  const url = `${configs.API_BASE_URL}${endpoint}?api-key=${configs.API_KEY}`;
  const res = await callAPI<StoryResponse>(url, null, "GET", thunkApi);
  return res;
});
