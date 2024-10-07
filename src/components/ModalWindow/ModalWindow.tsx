interface FilmTemplate {
    id: string,
    name: string,
    description: string,
    category: string,
    tags: string[],
    globalRating: number,
    countryRating: object[],
    poster: string
}

const initialFilm: FilmTemplate = {
    id: "0",
    name: "a",
    description: 'abc',
    category: 'a',
    tags: [
        "0+", 'adventure',
    ],
    globalRating: 2,
    countryRating: [
        {
            'ukraine': 3,
        },
    ],
    poster: 'poster'
}

const ModalWindow = (film: any) => {
    const filmObject = film.film;
    const filmTags = filmObject.tags;

    return (
        <>
            <div id='modal-window' className='fixed h-[100%] w-[100%] z-50 bg-black/50 flex justify-center items-center hidden'>
                <div className='w-[700px] h-[500px] bg-white rounded-[6px] p-4 border border-slate-300'>
                    <div className='w-[100%] flex justify-end'>
                        <button className='hover:bg-slate-200 w-[40px] h-[40px] p-2 rounded-[6px] transition-all'
                            onClick={(e) => {
                                e.stopPropagation();
                                const modalWindow = document.getElementById('modal-window');
                                if (modalWindow) modalWindow.classList.add('hidden');
                            }}>X</button>
                    </div>
                    <video src="https://www.youtube.com/watch?v=_wFWM5E2T-s" className='w-[500px]'></video>
                    <div className='flex gap-2'>
                        {
                            // filmTags.map((el: number) => {
                            //     return <>
                            //         <div className='bg-slate-500 p-1 text-sm text-center text-white rounded-[6px]'>{el}</div>
                            //     </>
                            // })
                        }
                    </div>
                    <h1 id="modal-title" className='text-2xl font-bold'>{filmObject.name}</h1>
                    <p id='modal-description' className='text-slate-500'>{filmObject.description}</p>
                </div>
            </div>
        </>
    );
}

export default ModalWindow;
