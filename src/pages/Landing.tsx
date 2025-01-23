import { useState, useEffect } from 'react';
import { MoveDown } from 'lucide-react';
import LandingSlide1 from './LandingSlide1';
import LandingSlide2 from './LandingSlide2';

const Landing = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
        <LandingSlide1 />
        <LandingSlide2 />
        </>
    );
}

export default Landing;
