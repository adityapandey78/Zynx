import React, { useRef,useState,useEffect } from 'react'
import Button from './Button';
import clsx from 'clsx';
import { useWindowScroll } from 'react-use';
import { TiLocationArrow } from 'react-icons/ti';
import gsap from 'gsap';

const navItems=["Nexus","Vault","Prologue","About","Contact"];

const Navbar = () => {
    //State for toggeling Audio and Visula Indicator
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    //refs for audio and Navigation center
    const navContainerRef =useRef(null);
    const audioElementRef=useRef(null);

    //for window scroll
    const{y:currentScrollY}=useWindowScroll();
    const[isNavVisible,setIsNavVisible]=useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    //Toggle Audio and Visula Indicator
    const toggleAudioIndicator=()=>{
        setIsAudioPlaying((prev)=>!prev);
        setIsIndicatorActive((prev)=>!prev);
    }

    //Manage Audio Playback
    useEffect(()=>{
        if(isAudioPlaying){
            audioElementRef.current.play();
        } else{
            audioElementRef.current.pause();
        }
    },[isAudioPlaying])

    //For Hiding the Nav Bar
    useEffect(()=>{
        if(currentScrollY===0){ //topmost  position show nav-var without the floating window
         setIsNavVisible(true);
         navContainerRef.current.classList.remove("floating-nav"); //it'll remove the floating background
        }else if(currentScrollY>lastScrollY){
            //scrolling down and the nav bar should not be visible
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if(currentScrollY<lastScrollY){
            //scrolling up: show navbar with floating-nav
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }
        setLastScrollY(currentScrollY);
    },[currentScrollY,lastScrollY])
    
    //using Gsap
    useEffect(()=>{
        gsap.to(navContainerRef.current,{
            y:isNavVisible?0:-100,
            opacity:isNavVisible?1:0,
            duration:0.2,
        });
    },[isNavVisible]);
  return (
    <div 
    ref={navContainerRef}
    className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
        <header className='absolute top-0 w-full'>
            <nav className='flex size-full items-center justify-between p-4'>
                {/* logo and product button** Left Part of the Nav */}
                <div className='flex items-center gap-7'>
                    <img src="/img/logo.png" alt=" logo" className='w-10' />

                    <Button
                    id="product-button"
                    title="Products"
                    rightIcon={<TiLocationArrow/>}
                    containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                    />
                </div>

                {/* Navigation Link and Audio button */}
                <div className='flex h-full items-center'>
                    <div className='hidden md:block'>
                        {navItems.map((items,index)=>(
                            <a
                            key={index} 
                            href={`#${items.toLowerCase()}`}
                            className='nav-hover-btn'>
                                {items}
                            </a>
                        ))}
                    </div>

                    <button
                    onClick={toggleAudioIndicator}
                    className='ml-10 flex items-center space-x-0.5'>
                        <audio src="/audio/loop.mp3"
                        ref={audioElementRef}
                        className='hidden'
                        loop
                        />
                        {[1,2,3,4].map((bar)=>(
                            <div
                            key={bar}
                            className={clsx("indicator-line",{
                                active:isIndicatorActive,
                            })}
                            style={{
                                animationDelay:`${bar*0.1}s`
                            }}
                            />
                        ))}
                    </button>
                </div>
            </nav>
        </header>
    </div>
  );
}

export default Navbar