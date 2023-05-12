
import { useState } from 'react';

import ContactForm from '../../views/ContactForm';



function PopUpContact() {
    const [showPopUp, setPopup] = useState(false)
    function HandleClick (e) {
        e.preventDefault();
        setPopup(!showPopUp);
    }

    return  <>
                <button className="" href="#" onClick={(event)=>HandleClick(event)}>
                    Contactez nous !
                </button>

                {
                    showPopUp ?
                            <div className='bg-black/5 overflow-y-auto w-11/12 h-96 absolute right-16 overflow-hidden mr-auto ml-auto rounded-lg flex justify-center'>
                                <div className="relative h-5">
                                    {/* <div className="left-[1167px] absolute top-4"><button onClick={(event)=>HandleClick(event)} className='bg- text-white hover:text-red-800/80 text-center'>Fermer</button></div> */}
                                </div>
                                
                            </div>
                    :null
                }
            </>
}

export default PopUpContact;