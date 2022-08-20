import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";

import "./storyCard.scss";

type cardprops = {
  title: string;
  byline: string;
  date: string;
  mediaUrl: string;
  content: string;
  articleUrl: string;
  sections?: string[];
};

function StoryCard(props: cardprops) {
  const { title, byline, date, mediaUrl, content, articleUrl, sections } = props;
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <div className="h-100">
        <CardActionArea onClick={() => window.open(articleUrl, "_blank", "noopener,noreferrer")} className="h-100 action-card">
          <div className="h-100">
            <CardHeader title={title} subheader={byline} />
            <small className="date-span d-flex">{date}</small>
            <span className="chip-span d-flex">
              {sections ? sections.map((section, index) => (section ? <Chip key={index} variant="outlined" size="small" label={section} /> : undefined)) : undefined}
            </span>
            <CardMedia component="img" height="250" image={mediaUrl} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {content}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </div>
    </Card>
  );
}

export default memo(StoryCard);
