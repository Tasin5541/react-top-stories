import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStories } from "../../../services/story.service";
import { Story } from "../../../types/Story";
import { sessionStore, sessionGetData } from "../../../utils/helpers/session";
import snackActions from "../../components/SnackBarUtils/SnackBarUtils";
type InitialState = {
  stories: Story[];
  currentEndpoint: string;
};
const initialState: InitialState = {
  stories: [],
  currentEndpoint: null,
};

const topStoriesSlice = createSlice({
  name: "topStories",
  initialState,
  reducers: {
    getCachedStories: (state, action: PayloadAction<string>) => {
      state.stories = sessionGetData(action.payload) || [];
    },
    filterStories: (state, action: PayloadAction<string>) => {
      let stories = sessionGetData(state.currentEndpoint) || [];
      let searchTerm = action.payload.toLowerCase();
      state.stories = stories.filter((s) => s.title.toLowerCase().includes(searchTerm) || s.abstract.toLowerCase().includes(searchTerm));
    },
    resetSearch: (state) => {
      state.stories = sessionGetData(state.currentEndpoint) || [];
    },
    setEndpoint: (state, action: PayloadAction<string>) => {
      state.currentEndpoint = action.payload;
    },
  },
  extraReducers: (builder) => {
    //get stories
    builder.addCase(getStories.pending, (state, { payload }) => {
      state.stories = [];
    });
    builder.addCase(getStories.fulfilled, (state, { payload }) => {
      state.stories = payload.results;
      switch (payload.section) {
        case "World News":
          sessionStore("world.json", payload.results);
          break;

        case "home":
          sessionStore("home.json", payload.results);
          break;

        case "Science":
          sessionStore("science.json", payload.results);
          break;

        case "Arts":
          sessionStore("arts.json", payload.results);
          break;

        case "U.S. News":
          sessionStore("us.json", payload.results);
          break;

        default:
          break;
      }
    });
    builder.addCase(getStories.rejected, (state, { payload }) => {
      state.stories = [];
      snackActions.error(payload || "Something went wrong");
    });
  },
});

export default topStoriesSlice.reducer;

export const { getCachedStories, filterStories, resetSearch, setEndpoint } = topStoriesSlice.actions;
