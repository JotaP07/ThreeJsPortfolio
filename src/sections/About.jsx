import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useMediaQuery} from "react-responsive";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false)
    const isMedium = useMediaQuery({query: '(min-width: 768px) and (max-width: 1279px)'})

    const handleCopy = () => {
        navigator.clipboard.writeText('your-email-here')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div className="relative xl:top-20">
                            <p className="grid-headtext">Hi, I am - Your Name - </p>
                            <p className="grid-subtext">lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div className="relative xl:top-20">
                            <p className="grid-headtext"> - Your Skills, Tech Stack... - </p>
                            <p className="grid-subtext">lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                </div>


                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15}]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">- Your Location, Country, availability -</p>
                            <p className="grid-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-4 md:col-span-1">
                    <div className={isMedium ? 'grid-container2' : 'grid-container'}>
                        <img src="/assets/grid3.png" alt="grid-3"
                             className="w-full xl:h-[246px] sm:h-[326px] h-fit object-contain"/>
                        <div className="relative xl:pt-24 mt-4">
                            <p className="grid-headtext">My Passion of Coding </p>
                            <p className="grid-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>

                {isMedium? "" : <div className="xl:col-span-1 xl:row-span-3 md:col-span-1">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[206px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"
                                     className='w-5 h-5'/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">youremail@example.com</p>  {/*you need to change the .writeText on line 10 to*/}
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </section>
    )
}
export default About
