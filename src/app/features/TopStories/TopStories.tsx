import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxHooks";
import { getStories } from "../../../services/story.service";
import { dbdateconvert } from "../../../utils/helpers/dbdateconvert";
import { getMediaUrl } from "../../../utils/helpers/getMediaUrl";
import { sessionGetData } from "../../../utils/helpers/session";
import StoryCard from "./Containers/StoryCard/StoryCard";
import { getCachedStories } from "./topStoriesSlice";

type storyProps = {
  endpoint: string;
};

function TopStories(props: storyProps) {
  const { endpoint } = props;
  const dispatch = useAppDispatch();
  const stories = useAppSelector((state) => state.topStories.stories);

  const fetchStories = (endpoint) => {
    if (sessionGetData(endpoint)) {
      dispatch(getCachedStories(endpoint));
    } else {
      dispatch(getStories(endpoint));
    }
  };

  useEffect(() => {
    fetchStories(endpoint);
  }, [endpoint]);

  return (
    <Grid container spacing={4}>
      {stories.map((story) =>
        story.title ? (
          <Grid key={story.url} item xs={12} md={4}>
            <StoryCard
              title={story.title}
              byline={story.byline}
              date={dbdateconvert(story.updated_date)}
              mediaUrl={getMediaUrl(story.multimedia)}
              content={story.abstract}
              articleUrl={story.url}
              sections={[story.section, story.subsection]}
            />
          </Grid>
        ) : null
      )}
    </Grid>
  );
}

export default TopStories;
