import React, { useState, useEffect } from "react";
import music from "./music/seetakalyana.mp3";
import "./App.css"; // Import your CSS file
import BackImg from "./pics/background.jpg"; 
import b2 from "./pics/b2.png";
import { FaMapMarkerAlt } from "react-icons/fa";

function App() {
  const [audio] = useState(new Audio(music));
  const [audioPlaying, setAudioPlaying] = useState(false); 
  const [showMapLink, setShowMapLink] = useState(false);
  const [showLiveFeed, setShowLiveFeed] = useState(false); 
  const [language, setLanguage] = useState("english");
  const [colorChange, setColorChange] = useState(false);

  const playAudio = () => {
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  };

  const toggleAudio = () => {
    if (audioPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
    setAudioPlaying(!audioPlaying); 
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerScroll = 2; 

    if (scrollY >= triggerScroll) {
      // playAudio();
      setShowMapLink(true);
      setShowLiveFeed(true); 
    }
  };

  useEffect(() => {
    // Function to start audio playback
    // const playAudio = () => {
    //   audio.play().catch((error) => {
    //     console.error("Audio playback failed:", error);
    //   });
    // };

    // Event listener for clicks or touches on the document body
    // document.body.addEventListener("click", toggleAudio);
    document.body.addEventListener("touchstart", toggleAudio);

    // Cleanup the event listeners when the component unmounts
    return () => {
      // document.body.removeEventListener("click", toggleAudio);
      document.body.removeEventListener("touchstart", toggleAudio);
    };
  }, [audioPlaying]);

  const toggleLanguage = () => {
    // Toggle between English and Kannada
    setLanguage(language === "english" ? "kannada" : "english");
  };

  useEffect(() => {
    // Toggle the color every second
    const interval = setInterval(() => {
      setColorChange((prevColorChange) => !prevColorChange);
    }, 1000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  const translations = {
    english: {
      title: (
        <>
          GIRISH <br /> &<br /> AKSHATA
        </>
      ),
      gettingMarried: "Are Getting Married",
      languageButton: "ಕನ್ನಡ",
      mallayya: "Shri Bhramaramba Mallikarjuna Swamy Prasanna",
      weddin: (
        <>
          THE
          <br />
          WEDDING <br /> DAY
        </>
      ),
      place: "Where",
      date: (
        <>
          Wednesday
          
        </>
      ),
      time: (<>Dec 20, 2023 <br/> At 12:00 pm</>),
      venue: (
        <>
          KS Sharma Hall <br /> Basaveshwar Nagar,
          <br /> Gokul Road,
          <br /> Hubballi, <br />
          Karnataka 580030
        </>
      ),
    },
    kannada: {
      title: "ಗಿರೀಶ & ಅಕ್ಷತಾ",
      gettingMarried: "ಮದುವೆ ಆಗುತ್ತಿದ್ದಾರೆ",
      languageButton: "Eng",
      mallayya: " ಶ್ರೀ ಭ್ರಮರಾಂಭಾ ಮಲ್ಲಿಕಾರ್ಜುನ ಸ್ವಾಮಿ ಪ್ರಸನ್ನ",
      weddin: (
        <>
          ಮದುವೆಯ <br />
          ಶುಭ ದಿನ
        </>
      ),
      place: "ಸ್ಥಳ",
      date: (
        <>
          ಬುಧವಾರ
                 </>
      ),
      time: (<>ಡಿಸೆಂಬರ್ 20,2023<br/> ಮಧ್ಯಾಹ್ನ 12:00 ಗಂಟೆಗೆ</>),
      venue: (
        <>
          ಕೆ ಎಸ್ ಶರ್ಮಾ ಮಂಟಪ
          <br />
          ಬಸವೇಶ್ವರ ನಗರ
          <br />
          ಗೋಕುಲ್ ರಸ್ತೆ
          <br />
          ಹುಬ್ಬಳ್ಳಿ
          <br />
          ಕರ್ನಾಟಕ 580030
        </>
      ),
    },
  };
  const textColorClass = colorChange ? "text-pink-300" : "text-pink-400";
  const textColorClass1 = colorChange ? "text-gray-500" : "text-pink-400";

  return (
    <div>
      <div
        className="min-h-screen bg-slate-500 bg-center relative"
        style={{ backgroundImage: `url(${BackImg})` }} // Set the background image
      >
        <div className="p-2 text-center text-ss mt-2">
          <h1
            className={`font-bold text-pink-400`}
            style={{
              textShadow: "15px 10px 4px rgba(0, 0, 0, 0.3)",
              // color: textColor,
              // color: "gray",
            }}>
            {translations[language].mallayya}
          </h1>
        </div>
        <div className="pt-10">
          <div className={`text-gray-500 text-4xl mt-4 text-center ${textColorClass1} ${language === "kannada"? "tracking-wide text-5xl":"tracking-widest2 text-4xl"} font-poppin`}>
            <p
              style={{
                marginLeft:25,
                textShadow: "4px 4px 2px rgba(0, 0, 0, 0.3)",
                // color: "gray",
              }}>
              {/* GIRISH & AKSHATA */}
              {translations[language].title}
            </p>
          </div>
          <div
            className={`${
              language === "kannada"
                ? "text-gray-700 bg-pink-200"
                : "bg-pink-200 px-2 py-1 rounded-lg  mx-auto"
            } text-xl mt-1 text-center font-dancing tracking-wide opacity-60 `}>
            <p
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                // color: "gray",
              }}>
              {/* Are Getting Married */}
              {translations[language].gettingMarried}
            </p>
          </div>
        </div>
      </div>

      {/* ============================ */}

      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${b2})`,
          backgroundSize: "60%", // Adjust this value to control the zoom level
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center center",
        }}>
        <div className="pt-10">
          <div
            className="text-gray-500 text-2xl mt-14  tracking-widest1 font-poppin ml-5"
            style={{
              textShadow: "15px 10px 4px rgba(0, 0, 0, 0.3)",
              // color: "gray",
            }}
            >
            <p className="m-0 p-0 text-3xl"> {translations[language].weddin}</p>
            {/* <p className="m-0 p-0">WEDDING</p>
            <p className="m-0 p-0">DAY</p> */}
          </div>

          <div className="text-rose-300 text-3xl mt-20 ml-5 font-dancing tracking-wide">
            <div
              className="text-gray-500 text-1xl mt-1 font-dancing tracking-wide"
              style={{
                textShadow: "15px 10px 4px rgba(0, 0, 0, 0.3)",
                // color: "gray",
              }}>
              <p className="text-rose-300 text-3xl"
               style={{
                textShadow: "15px 10px 4px rgba(0, 0, 0, 0.3)",
                // color: "gray",
              }}
              >{translations[language].date}</p>
              <p>{translations[language].time}</p>
            </div>
          </div>

          <div className="text-rose-300 text-3xl mt-20 ml-5 font-dancing tracking-wide">
            <p
              style={{
                textShadow: "15px 10px 4px rgba(0, 0, 0, 0.3)",
                // color: "gray",
              }}
              >
              {translations[language].place}
            </p>
            <div
              className="text-gray-500 text-1xl mt-1 font-dancing tracking-wide"
              style={{
                textShadow: "15px 10px 4px rgba(0, 0, 0, 0.3)",
                // color: "gray",
              }}>
              {translations[language].venue}
            </div>
          </div>

          <div
            className="scroll-container"
            style={{
              maxHeight: "calc(100vh - 100px)",
              overflowY: "auto",
            }}></div>
        </div>
        <button
          onClick={toggleLanguage}
          className="fixed top-10 right-4 bg-pink-300 text-white px-2 py-1 rounded-md text-sm shadow-2xl"
          style={{
            textShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)",
            // color: "gray",
          }}>
          {translations[language].languageButton}
        </button>
        {/* {showMapLink && ( */}
          <a
            href="https://www.google.com/maps/place/KS+Sharma+Hall/@15.3517723,75.1022273,15z/data=!4m6!3m5!1s0x3bb8d6d937eb065d:0xc774f00c34abe7d1!8m2!3d15.3517723!4d75.1022273!16s%2Fg%2F11h9whw4kw?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-pink-500 text-white px-1 py-1 rounded-md text-2xl shadow-2xl opacity-60"
            style={{
              animation: "glitter 0.3s infinite alternate",             
            }}
            onClick={()=> audio.pause()}
            >
         <FaMapMarkerAlt />
          </a>
        {/* )} */}
      </div>
    </div>
  );
}

export default App;
