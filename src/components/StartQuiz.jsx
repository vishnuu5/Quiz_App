import { Button, Typography, Box } from "@mui/material"

const StartQuiz = ({ onStart }) => {
  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        Welcome to the Quiz!
      </Typography>
      <Typography variant="body1" paragraph>
        Test your knowledge and have fun!
      </Typography>
      <Button variant="contained" color="primary" onClick={onStart}>
        Start Quiz
      </Button>
    </Box>
  )
}

export default StartQuiz

