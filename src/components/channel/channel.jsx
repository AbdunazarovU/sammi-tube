import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { ChannelCard, Videos } from "../";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        const dataVideos = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setChannelDetail(data.items[0]);
        setVideos(dataVideos?.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box maxHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"}>
          <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Channel;
