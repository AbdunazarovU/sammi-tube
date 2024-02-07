import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../";

const Videos = ({ videos }) => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {videos?.map(e => (
        <Box key={e.id.videoId}>
          {e.id.videoId && <VideoCard video={e} />}
          {e.id.channelId && <ChannelCard video={e} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
