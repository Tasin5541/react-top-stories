import React from "react";
import TopStories from "../../features/TopStories/TopStories";

import "./index.scss";

type storyProps = {
  endpoint: string;
};

function Stories(props: storyProps) {
  const { endpoint } = props;
  return (
    <div className="story-grid">
      <TopStories endpoint={endpoint} />
    </div>
  );
}

export default Stories;
