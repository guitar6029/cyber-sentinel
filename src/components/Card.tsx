import { ArrowUpRight } from 'lucide-react';
import React from 'react';

type CardProps = {
    title : string
    img: string
    animationClassForCard?: string,
    animationForTitle?: string
}

const Card : React.FC<CardProps> = ({title, img, animationClassForCard, animationForTitle}) => {
    return ( 
        <div className={`rounded-lg bg-gray-900 w-full h-full flex flex-col items-center justify-center p-10 transition duration-200 ease-in ${animationClassForCard} `}>
            <div  style={{ backgroundImage: `url(${img})` }} className="relative rounded-lg border-2 border-white w-full h-full bg-cover bg-center bg-no-repeat   ">
                <h1 className={`text-3xl ${animationForTitle} `}>{title}</h1>
                <div className="absolute bottom-0 left-0">
                    <ArrowUpRight size={40}/>
                </div>
            </div>
            
            

        </div>
     );
}
 
export default Card;