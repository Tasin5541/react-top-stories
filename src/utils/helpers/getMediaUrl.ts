import { StoryMultimedia } from "../../types/Story";

export const getMediaUrl = (multimedia: StoryMultimedia[]) => {
  let mediaUrl = "https://mui.com/static/images/cards/paella.jpg";

  if (multimedia) {
    const imageUrl = multimedia.find((m) => m.type === "image")?.url;
    return imageUrl;
  }

  return mediaUrl;
};
