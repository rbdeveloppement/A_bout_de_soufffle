import { useState } from "react";
import React from "react";
import AfficheFaq from "./ListComponent";

/**
 *  Component Popup modal
 *  creation of the FAQ'S Pop-up
 *  @author Cazacu Malaku
 *  https://github.com/Cazacu-tech
 */

function PopUp() {
    const [showPopUp, setPopup] = useState(false)
    function HandleClick (e) {
        e.preventDefault();
        setPopup(!showPopUp);
    }

    return  <>
                {/* <label htmlFor="my-modal-5" className="cursor-pointer" onClick={(event)=>HandleClick(event)}>FAQ'S</label>
                {
                showPopUp ?

                <div className="my-modal-5 bg-black h-96 fixed top-[20.7vh] right-40 mr-auto ml-auto rounded-lg scrollbar scrollbar-thumb-custom scrollbar-track-custom-light overflow-y-scroll">
                    <div className="max-w-5xl">

                        <div className="fixed left-[83.1vw] top-[22vh]">
                            <button  className="w-6 h-6 text-white hover:text-red-800/80 text-center text-2xl font-bold" onClick={(event)=>HandleClick(event)}>&times;</button>
                        </div>
                        <AfficheFaq/>
                    </div>
                </div>
                :null
                } */}
                <label htmlFor="my-modal-5" className="cursor-pointer">open modal</label>

                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    < label htmlFor="my-modal-5" className="btn rounded-3xl hover:bg-red-800 bg-black/60 btn-md fixed left-[80.1vw] top-[20vh] z-50">
                        ✕
                    </label>
                    <div className="modal-box w-11/12 max-w-5xl h-96">
                        <AfficheFaq/>
                        <div className="modal-action">
                            <label htmlFor="" className="btn">Yay!</label>
                        </div>
                    </div>
                </div>
            </>

}

export default PopUp;