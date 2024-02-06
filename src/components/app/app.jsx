import { Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { Channel, Main } from "../"

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel" element={<Channel />} />
      </Routes>
    </Box>
  )
}

export default App
