import { Typography, Button, Box, LinearProgress } from "@mui/material"

const Question = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <Box>
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        {question.question}
      </Typography>
      <Box mt={2}>
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outlined"
            fullWidth
            sx={{ mt: 1 }}
            onClick={() => onAnswer(option === question.correctAnswer)}
          >
            {option}
          </Button>
        ))}
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Question {currentQuestion} of {totalQuestions}
      </Typography>
    </Box>
  )
}

export default Question

