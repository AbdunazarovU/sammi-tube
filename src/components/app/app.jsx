import { Routes, Route, useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Channel, Main, Navbar, Search, VideoDetail } from "../"

const App = () => {
  const params = useParams()
  console.log(params)

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  )
}

export default App
