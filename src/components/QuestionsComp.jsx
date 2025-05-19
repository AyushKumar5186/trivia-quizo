import React, { useEffect, useState } from 'react'
import { BackArrow } from '../assets/BackArrow'
import { NextArrow } from '../assets/NextArrow'

const QuestionsComp = ({ problem, score, setScore }) => {
    const [number, setNumber] = useState(1)
    const [disabled, setDisabled] = useState(false)

    const [answer, setAnswer] = useState(false)

    const handleAnswer = (e) => {

        const ans = problem.filter((ques, index) => index === number)
        const correctAnswer = ans[0].correctAnswer;
        const solution = ans[0].options.filter((ans, index) => index === correctAnswer)

        if (solution == e.target.innerHTML) {
            setAnswer(true)
            e.target.style.backgroundColor = "green"
            setScore(prev => prev + 1)
        } else {
            e.target.style.backgroundColor = "red"
        }
        setDisabled(true)
        setTimeout(() => {
            handleNext()
            setDisabled(false)
        }, 1500)
    }

    if(number === 44){

            window.location.reload(); 
        }


    // const handleBack = () => {
    //     number > 1 &&
    //         setNumber((prev) => prev - 1)
    // }
    const handleNext = () => {
        (number < problem.length - 1 && !disabled)
            ? setNumber((prev) => prev + 1)
            : ""
    }
    return (


        <div className=' sm:relative grid grid-cols-1 place-items-center max-h-screen gap-8'>

            {/* <div className='absolute left-56 cursor-pointer hover:bg-slate-600 p-5 rounded-lg  active:bg-blue-500'
                onClick={handleBack}
            >
                <BackArrow />
            </div> */}
            <div className='h-full xl:w-[50vw] max-lg:w-[80vw] bg-transparent rounded-lg border-gray-400 border-2 mt-6 max-md:w-[90vw] max-xl:w-[60vw] px-8 py-4'>

                {problem.filter((ques, index) => index === number).map((ques, index) => (
                    <div key={number} className='text-2xl'>
                        <h4 className='font-semibold '><span className='text-3xl text-slate-300'>{number}.</span> {ques.question}</h4>
                        <div>
                            <div className='p-8 pl-12'>
                                <ol style={{ listStyleType: 'upper-alpha' }}>
                                    {ques.options.map((option) => (

                                        <li
                                            // onClick={handleAnswer}
                                            onClick={disabled ? null : handleAnswer}

                                            key={ques.question}
                                            className={` hover:bg-slate-500/50 rounded-lg w-full p-5 cursor-pointer active:bg-red-500/50`}>
                                            {option}</li>
                                    ))
                                    }

                                </ol>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <div className='sm:absolute sm:right-56 cursor-pointer rounded-full hover:bg-slate-600 p-2 sm:p-5  active:bg-blue-500'
                onClick={handleNext}
            >
                <NextArrow />
            </div>
        </div>


    )
}

export default QuestionsComp