import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import BlogContainer from './Components/BlogContainer/BlogContainer'
import Question from './Components/Question/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <BlogContainer></BlogContainer>
      <hr />
      <Question></Question>
    </div>
  )
}

export default App
