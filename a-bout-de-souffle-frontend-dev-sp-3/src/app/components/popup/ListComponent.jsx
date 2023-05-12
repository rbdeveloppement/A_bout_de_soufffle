import Question from './Question';
import { useEffect, useState } from 'react';
import { quests } from './../../assets/data/questionData';
import React from 'react';

const AfficheFaq = () => {
    const [questions, setQuestions]= useState();

    useEffect(()=>{
        setQuestions(quests)
    },[])
    if(!questions)return <div>chargement...</div>
    return  <div className="text-center hover:clear-none py-5">
                {questions.map((quest)=>(
                    <Question key={quest.id} {...quest}/>

                ))}
            </div>
}

export default AfficheFaq;