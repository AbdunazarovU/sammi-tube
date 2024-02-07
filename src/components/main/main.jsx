import { useEffect, useState } from "react"
import { Stack, Box, Container, Typography } from "@mui/material"
import { colors } from "../../constants/colors"
import { Category, Videos } from "../"
import { ApiService } from "../../service/api.service"

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  const setSelectedCategoryHandler = category => setSelectedCategory(category)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = ApiService.fetching('search')
        setVideos(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()

    ApiService.fetching('search').then(data => setVideos(data))
  }, []);

  return (
    <Stack>
      <Category selectedCategory={selectedCategory} setSelectedCategoryHandler={setSelectedCategoryHandler} />
      <Box p={2} sx={{height: "90vh"}} >
        <Container maxWidth={"90%"} >
          <Typography variant={"h4"} fontWeight={"bold"} mb={2} >
            {selectedCategory} <span style={{color: colors.secondary}} >videos</span>
          </Typography>
          <Videos videos={videos} />
          {/* {videos.items?.map(e => e.kind)} */}
        </Container>
      </Box>
    </Stack>
  )
}

export default Main
