import React from "react";
import { FilmTemplate } from "../types";

const ModalWindow = ({ film, onClose, isOpen }: { film: FilmTemplate, onClose: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean }) => {
    const filmObject = film,
     filmTags = filmObject.tags,

     onCloseHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onClose(false);

        const modalWindow = document.getElementById('modal-window'),
         ap = document.getElementById('app');
        if (ap && modalWindow && !isOpen) {
            ap.removeChild(modalWindow);
        }
    }

    return (
        <>
            <dialog id='modal-window' className='fixed h-[100%] w-[100%] z-50 bg-black/50 flex justify-center items-center'>
                <div className='w-[700px] h-[560px] bg-hero rounded-[6px] border border-gray-700'>
                    <div className="w-[100%] h-[100%] rounded-[6px] p-4 bg-gradient-to-tr from-black via-black/10 to-slate-500/0">
                        <div className='w-[100%] flex justify-end'>
                            <button className='hover:bg-slate-500 w-[40px] h-[40px] p-2 text-white rounded-full transition-all'
                                onClick={(e) => { onCloseHandle(e) }}>X</button>
                        </div>
                        <video src="https://www.youtube.com/watch?v=_wFWM5E2T-s" className='w-[500px]'></video>
                        <h1 id="modal-title" className='text-4xl font-bold mb-2 text-white'>{filmObject.name}</h1>
                        <div className='flex gap-2'>
                            {
                                filmTags.map((el) => <>
                                        <div className='bg-gray-700 hover:bg-gray-600 p-1 text-sm text-center text-white rounded-[6px]'>{el}</div>
                                    </>)
                            }
                        </div>
                        <p id='modal-description' className='text-gray-400 mb-2'>{filmObject.description}</p>
                        <button className="text-white bg-red-500 p-2 text-left rounded-[6px] flex gap-2 font-bold">Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default ModalWindow;
