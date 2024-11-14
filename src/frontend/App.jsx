import './App.css'
import Questionnaire from './components/Questionnaire'
import {QuestionnaireProvider} from './context/QuestionnaireContext'
function App() {
  return (
      <QuestionnaireProvider>
        <Questionnaire />
      </QuestionnaireProvider>
  )
}

export default App
