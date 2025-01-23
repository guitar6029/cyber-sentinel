import { useState, useEffect } from 'react';
import { MoveDown } from 'lucide-react';


const LandingSlide1 : React.FC = () => {
    return ( 
        <div className="relative min-h-screen max-h-screen grid grid-cols-12 grid-rows-6">
            <div className="col-start-2 col-end-3 row-start-1 row-end-6 w-[.1rem] h-full bg-gray-500 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <div className="w-[1rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[2rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[3rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[4rem] h-[.1rem] bg-gray-500 grow"></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="w-[15rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[15rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[15rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[15rem] h-[.1rem] bg-gray-500"></div>
                </div>
            </div>

            <div style={{ zIndex: 20 }} className="col-start-3 col-end-6 row-start-2 row-end-3 drop-fade-in">
                <h1 className="text-8xl font-semibold">Empowering Tomorrow's Security Today.</h1>
            </div>


            <div className="col-start-12 col-end-13 row-start-6 row-end-7 w-full h-full flex flex-col items-center justify-center drop-fade-in">
                <h5 className="text-7xl font-semibold text-yellow-500">01</h5>
            </div>

            <div className="col-start-1 col-end-13 row-start-6 row-end-7 w-full h-[.1rem] bg-gray-500"></div>
            <div className="col-start-2 col-end-4 row-start-6 flex flex-col justify-around gap-4 from-left-to-point">
                <h2 className="text-[5rem] ml-1">CyberSentinel</h2>

            </div>

            <div style={{ zIndex: 0 }} className="col-start-6 col-end-13 row-start-2 row-end-6 bg-[url('/assets/images/cyber2.jpg')] bg-cover bg-center bg-no-repeat fade-in rounded-lg"></div>


           

        </div>
     );
}
 
export default LandingSlide1;