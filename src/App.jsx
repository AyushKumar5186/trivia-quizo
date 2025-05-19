import { useState } from 'react'
import './App.css'
import data from './questions/question.js'
import LogoComp from './components/LogoComp.jsx'
import QuestionsComp from './components/QuestionsComp.jsx'

function App() {
  const [score, setScore] = useState(0)
  

  return (
    <div className=''>
      <div className='text-white  h-screen'>
        <div className='grid grid-cols-1 place-items-center gap-6 max-sm:py-8 '>
          <LogoComp/>
          <h4 className='sm:absolute sm:right-60 bg-slate-600 flex gap-2 items-center text-3xl p-4 font-bold rounded-lg'>Score: <span>{score}</span></h4>
        </div>
        <div>
          <QuestionsComp problem={data} score={score} setScore={setScore}/>
        </div>
      </div>
    </div>
  )
}

export default App
