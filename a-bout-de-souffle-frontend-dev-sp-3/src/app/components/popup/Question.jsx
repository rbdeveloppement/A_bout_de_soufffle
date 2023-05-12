import React from 'react';
/**
 * Component Popup modal
 * formatting of the FAQ'S
 *
 * @author Cazacu Malaku
 *   https://github.com/Cazacu-tech
 */
function Question({question, answer}) {
    const quest ={question, answer};
    return <div>
                <h3 className="text-red-800/70 my-7">{quest.question}</h3>
                <span className="py-10 text-white">{quest.answer}</span>
            </div>
}

export default Question ;
