import Card from "../components/Card";
import { useState, useEffect, useRef } from 'react'

const LandingSlide2 = () => {

    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setInView(entry.isIntersecting);
        }, {
            //what is threshold?
            // definition : 
            /* The threshold is a number between 0 and 1, 
            where 0 is when the target element is 
            completely visible in the viewport 
            and 1 is when it's completely hidden. */
            threshold: .4,
        }

        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        //clean up
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        }

    }, []);

    return (
        <div ref={sectionRef} className="relative min-h-screen max-h-screen grid grid-cols-12 grid-rows-6">

            <div className="col-start-2 col-end-3 row-start-1 row-end-6 w-[.1rem] h-full bg-gray-500 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <div className="w-[5rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[5rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[5rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[5rem] h-[.1rem] bg-gray-500"></div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="w-[5rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[5rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[5rem] h-[.1rem] bg-gray-500"></div>
                    <div className="w-[5rem] h-[.1rem] bg-gray-500"></div>
                </div>
            </div>

            <div className={` ${inView ? "from-right-to-point" : " "}    col-start-2 col-end-6 row-start-2 row-end-3 h-full flex flex-col gap-2 items-center justify-center p-10`}>
                <h2 className="text-8xl font-semibold">Our Mission</h2>
                <p className="text-3xl"> At CyberSentinel, we are committed to safeguarding your digital assets with the latest in cybersecurity technology. Our mission is to provide top-tier security solutions that empower businesses to operate confidently in an ever-evolving digital landscape.</p>
            </div>

            <div className="col-start-6 col-end-12 row-start-2 row-end-5 flex flex-row items-center gap-5">

                <Card title="Training" img="/assets/images/training.jpg" animationClassForCard="drop-fade-in hover-card-primary" animationForTitle={`inView ? "slide-in-r-to-l" : " "`} />
                <Card title="Defend" img="/assets/images/defend.jpg" animationClassForCard="rise-in hover-card-primary" animationForTitle={`inView ? "slide-in-r-to-l" : " "`} />

            </div>


            <div className="col-start-12 col-end-13 row-start-6 row-end-7 w-full h-full flex flex-col items-center justify-center">
                <h5 className="text-7xl font-semibold text-yellow-500">02</h5>
            </div>
        </div>
    );
}

export default LandingSlide2;