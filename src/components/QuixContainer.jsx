import { useState, useEffect } from "react"
import { Container, Typography, Box } from "@mui/material"
import StartQuiz from "./StartQuiz"
import Question from "./Question"
import ResultSummary from "./ResultSummary"
import { mockQuizData } from "../data/mockQuizData"

const QuizContainer = () => {
  const [quizData, setQuizData] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  useEffect(() => {
    // Simulate API fetch with mock data
    const fetchQuizData = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setQuizData(mockQuizData)
      } catch (error) {
        console.error("Error loading quiz data:", error)
      }
    }

    fetchQuizData()
  }, [])

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowResult(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setQuizStarted(false)
  }

  if (!quizData) {
    return (
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <Typography>Loading quiz...</Typography>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        {!quizStarted && <StartQuiz onStart={handleStartQuiz} />}
        {quizStarted && !showResult && (
          <Question
            question={quizData[currentQuestion]}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={quizData.length}
          />
        )}
        {showResult && <ResultSummary score={score} totalQuestions={quizData.length} onRestart={handleRestartQuiz} />}
      </Box>
    </Container>
  )
}

export default QuizContainer

