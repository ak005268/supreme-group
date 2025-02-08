import { useState, useEffect, useRef } from "react";
import Front from "../../assets/videos/passenger-vechicles/Front.8f5fda304d3095ab6b02.mp4";
import Cabin from "../../assets/videos/passenger-vechicles/Cabin.3260d3e4f52b3804dae5.mp4";
import Exterior from "../../assets/videos/passenger-vechicles/Exterior.a127ebb308e655c7e32c.mp4";
import PassengerAlpha from "../../assets/videos/passenger-vechicles/Passenger Alpha.bc06b347f5b526ad9a60.mp4";
import Trunk from "../../assets/videos/passenger-vechicles/Trunk.54bfaa734c0395172c08.mp4";

import CommercialAlpha from "../../assets/videos/commercial-vechicles/Commercial Alpha.92c92d40f9116c837d1d.mp4";
import CommercialCabin from "../../assets/videos/commercial-vechicles/Commercial-Cabin.69adf15a8021267cbe8c.mp4";
import Engine from "../../assets/videos/commercial-vechicles/Commercial-Engine.d8957f7c027ca396858e.mp4";

import one from '../../assets/images/passenger-vechicles/1.png';
import two from '../../assets/images/passenger-vechicles/2.png';
import three from '../../assets/images/passenger-vechicles/3.png';
import four from '../../assets/images/passenger-vechicles/4.png';
import five from '../../assets/images/passenger-vechicles/5.png';

import six from '../../assets/images/commercial-vechicles/10.svg';
import seven from '../../assets/images/commercial-vechicles/11.svg';
import eight from '../../assets/images/commercial-vechicles/12.svg';

const images = {
  passenger: [
    { image: one, title: 'Complete body', video: Front },
    { image: two, title: 'Front', video: PassengerAlpha },
    { image: three, title: 'Cabin', video: Cabin },
    { image: four, title: 'Trunk', video: Trunk },
    { image: five, title: 'Exterior', video: Exterior }
  ],

  commercial: [
    { image: six, title: 'Complete body', video: CommercialAlpha },
    { image: seven, title: 'Engine', video: Engine },
    { image: eight, title: 'Cabin', video: CommercialCabin }
  ]
};

type SelectedVideo = 'passenger' | 'commercial';

const FeatureSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo>('passenger');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0); 
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const scrollY = window.scrollY;
          setSelectedVideo(scrollY > 100 ? "commercial" : "passenger");
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleImageSelect = (index: number, video: string) => {
    setSelectedImageIndex(index); 
    videoRef.current.src = video; 
  };

  return (
    <div ref={sectionRef} className="bg-black h-[1020px] relative">
      <div className="flex flex-col items-center pt-10">
        <p className="font-light text-[28px] lg:text-[48px] text-white text-center">
          Evolving the drive with 360-degree
        </p>
        <p className="font-light text-[28px] lg:text-[48px] text-white text-center">
          nonwoven solutions
        </p>
      </div>

      <div className="hidden lg:grid grid-cols-[35%_65%] relative">
        <div className="cards-wrp pl-14 self-center ml-[15%] relative 2xl:ml-[25%] 2xl:py-10 py-5 flex flex-col">
          <button
            onClick={() => setSelectedVideo("passenger")}
            className={`text-white pb-20 transition-all duration-300 ease-in-out ${selectedVideo === "passenger" ? "font-bold text-xl" : "opacity-60"}`}
          >
            <h1 className="font-medium text-left pb-2">Passenger vehicles</h1>
            <h2 className="font-light text-left text-lg">
              Revving up innovation from <br />
              interior to exterior.
            </h2>
          </button>
          <button
            onClick={() => setSelectedVideo("commercial")}
            className={`text-white pb-20 transition-all duration-300 ease-in-out ${selectedVideo === "commercial" ? "font-bold text-xl" : "opacity-60"}`}
          >
            <h1 className="font-medium text-left pb-2">Commercial vehicles</h1>
            <h2 className="font-light text-left text-lg">
              Advancing engineering <br />
              for heavy-duty vehicles.
            </h2>
          </button>

          <div className="slider-parent absolute left-0 h-full w-[2px] rounded-md bg-gray-500 top-0">
            <div
              className="slider-height w-[2px] bg-white rounded-md transition-transform duration-500 ease-in-out"
              style={{
                height: "50%",
                transform: `translateY(${selectedVideo === "commercial" ? "100%" : "0%"})`
              }}
            ></div>
          </div>
        </div>

        <div className="relative flex items-center">
          <div className="video-slide-1 self-center mx-auto relative">
            <video
              ref={videoRef}
              key={selectedVideo}
              autoPlay
              playsInline
              loop
              className="w-auto max-h-[360px] min-h-[230px] 2xl:h-[40vh] h-24 fade-show-enter-done transition-all duration-500 ease-in-out"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source
                src={images[selectedVideo][selectedImageIndex]?.video}
                type="video/mp4"
              />
            </video>

            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
            >
              <div className="w-12 h-12 bg-white/80 flex items-center justify-center rounded-full animate-pulse">
                ▶️
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-end items-center relative w-container">
        <div className="flex justify-center w-[640px] xl:w-[720px] 2xl:w-[900px] relative">
          <div className="grid grid-cols-5 controls-slide-1">
            {images[selectedVideo].map((image, index) => (
              <button
                key={index}
                type="button"
                aria-label={image.title}
                onClick={() => handleImageSelect(index, image.video)}
                className={`flex flex-col font-light items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer ${selectedImageIndex === index ? 'opacity-100' : 'opacity-60'}`}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="max-h-16 pt-1 2xl:max-h-20"
                />
                <span className={`sg-translate -mt-1 text-sm 2xl:text-base ${selectedImageIndex === index ? 'text-white' : 'text-gray-400'}`}>
                  {image.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
