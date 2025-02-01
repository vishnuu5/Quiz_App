import { Typography, Button, Box, CircularProgress } from "@mui/material"

const ResultSummary = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100

  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        Quiz Completed!
      </Typography>
      <Box position="relative" display="inline-flex" mb={2}>
        <CircularProgress variant="determinate" value={percentage} size={80} />
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(percentage)}%`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h6" gutterBottom>
        Your Score: {score} / {totalQuestions}
      </Typography>
      <Typography variant="body1" paragraph>
        {percentage >= 80
          ? "Great job! You're a quiz master!"
          : percentage >= 60
            ? "Well done! Keep practicing to improve."
            : "Good effort! Try again to boost your score."}
      </Typography>
      <Button variant="contained" color="primary" onClick={onRestart}>
        Restart Quiz
      </Button>
    </Box>
  )
}

export default ResultSummary

