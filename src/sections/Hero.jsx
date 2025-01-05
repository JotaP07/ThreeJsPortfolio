import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera, Ring} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import {Link} from "react-scroll";

const Hero = () => {

    const isSmall = useMediaQuery({query: '(max-width: 440px)'})
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})
    const isTablet = useMediaQuery({query: '(max-width: 1024px) and (min-width: 768px)'});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id="home" className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl  text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am - Your Name -
                    <p className="hero-tag text-gray_gradient">Building Products & Brands</p>
                </p>

                <div className="w-full h-full absolute inset-0">
                    {/*<Leva/>*/}
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader/>}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                    scale={sizes.deskScale}

                                />
                            </HeroCamera>
                            <group>
                                <Target position={sizes.targetPosition}/>
                                <ReactLogo position={sizes.reactLogoPosition}/>
                                <Cube position={sizes.cubePosition}/>
                                <Rings position={sizes.ringPosition}/>
                            </group>
                            <ambientLight intensity={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                        </Suspense>
                    </Canvas>
                </div>

                <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <Link to="about" smooth={true} duration={500} className="w-fit">
                        <Button name="Let's Work together" isBeam
                                containerClass="sm:w-fit w-full sm:min-w-96"></Button>
                    </Link>
                </div>

            </div>
        </section>
    )
}
export default Hero
