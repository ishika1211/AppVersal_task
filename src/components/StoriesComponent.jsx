import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Stories viewer component that shows story groups and handles story viewing
const StoriesComponent = () => {
  const [data] = useState({
    id: "3adb0aa2-4387-4fab-a8ed-4c38fc2334e4",
    campaign_type: "STR",
    details: [
      {
        id: "fe64197c-fa99-4f19-8132-0b61ee1956f5",
        name: "CheQ",
        thumbnail:
          "https://www.multiplyventures.com/web/wp-content/uploads/2022/07/cheq-logo.png",
        ringColor: "#d7b404",
        nameColor: "#000000",
        order: 2,
        slides: [
          {
            id: "ff9d8e07-def5-4781-9944-6fe7d8dcec28",
            parent: "fe64197c-fa99-4f19-8132-0b61ee1956f5",
            image:
              "https://www.multiplyventures.com/web/wp-content/uploads/2022/07/cheq-logo.png",
            video: null,
            link: "https://app20.in/4",
            button_text: "CheQ Offer",
            order: 1,
          },
        ],
      },
      {
        id: "38779bb3-52ac-440d-bdd3-80b6e18118a2",
        name: "Do's and Don't",
        thumbnail:
          "https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-do-and-don-t-or-good-bad-icons-w-positive-negative-vector-png-image_6628486.png",
        ringColor: "#ffea00",
        nameColor: "#111111",
        order: 4,
        slides: [
          {
            id: "17859fbc-9457-40a6-8d83-0f8482694323",
            parent: "38779bb3-52ac-440d-bdd3-80b6e18118a2",
            image:
              "https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-do-and-don-t-or-good-bad-icons-w-positive-negative-vector-png-image_6628486.png",
            video: null,
            link: "",
            button_text: "",
            order: 2,
          },
        ],
      },
      {
        id: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
        name: "IOS",
        thumbnail:
          "http://pluspng.com/img-png/apple-ios-logo-png-ios-logo-icon-1600.png",
        ringColor: "#ffd500",
        nameColor: "#111111",
        order: 5,
        slides: [
          {
            id: "7d945e48-3d3f-4a74-bd04-0b2296bbb9ea",
            parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOplEtTQI_PLtbN97VTw2hJrLG7u3sbhTu0Q&s",
            video: null,
            link: "https://app20.in/ios",
            button_text: "iOS Offer",
            order: 1,
          },
          {
            id: "59feb0e4-68ce-4c6a-a2b6-c34eb82322b4",
            parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
            image:
              "https://images.cnbctv18.com/uploads/2024/09/ios-18-2024-09-3a438036c2e92c564fca363fbee9c0f2.jpg?impolicy=website&width=400&height=225",
            video: null,
            link: "https://app20.in/ios/1",
            button_text: "iOS Offer 1",
            order: 2,
          },
          {
            id: "45f756ed-7eaf-45ca-b057-dcd784f8909f",
            parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
            image:
              "https://images.news18.com/ibnlive/uploads/2024/06/ios-18-features-android-has-2024-06-62e9b98f29addc89823a977da7400d58-3x2.jpg",
            video: null,
            link: "https://app20.in/ios/2",
            button_text: "iOS Offer 2",
            order: 3,
          },
          {
            id: "d9825fb3-0fa3-4db9-9801-e044c7936172",
            parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
            image:
              "https://www.apple.com/newsroom/images/2024/06/ios-18-makes-iphone-more-personal-capable-and-intelligent-than-ever/article/Apple-WWDC24-iOS-18-Home-Screen-larger-app-icons-240610_inline.jpg.large.jpg",
            video: null,
            link: "https://app20.in/ios/4",
            button_text: "iOS Offer 4",
            order: 4,
          },
          {
            id: "5b8043ab-2297-459d-8648-85a06b18920b",
            parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
            image:
              "https://www.cwstechnology.com/wp-content/uploads/2024/07/iOS-vs-Android.png",
            video: null,
            link: "https://app20.in/ios/5",
            button_text: "iOS Offer 5",
            order: 5,
          },
          {
            id: "39a3fba9-7527-49f4-a8ab-bbc932a373df",
            parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
            image:
              "https://i.redd.it/bsk6ntc2mjfe1.jpeg",
            video: null,
            link: "https://app20.in/ios/6",
            button_text: "iOS Offer 6",
            order: 6,
          },
        ],
      },
      {
        id: "ba82ab84-86bb-4c67-97fd-620410523119",
        name: "Zupee",
        thumbnail:
          "https://kalkinemedia.com/storage/uploads/large/1713254407_661e30072f23a_ZUPEELogo_89634.png",
        ringColor: "#ffd500",
        nameColor: "#111111",
        order: 8,
        slides: [
          {
            id: "d9afb861-cda2-484e-a714-ccddcd79f134",
            parent: "ba82ab84-86bb-4c67-97fd-620410523119",
            image:
              "https://kalkinemedia.com/storage/uploads/large/1713254407_661e30072f23a_ZUPEELogo_89634.png",
            video: null,
            link: "https://app20.in/3",
            button_text: "Start Offer",
            order: 1,
          },
        ],
      },
      {
        id: "128d0e25-cf02-4ce0-842f-fc36938701b6",
        name: "EloElo",
        thumbnail:
          "https://media.glassdoor.com/sqll/3965604/eloelo-squareLogo-1663228296886.png",
        ringColor: "#fbff00",
        nameColor: "#000000",
        order: 9,
        slides: [
          {
            id: "e19c3f6b-2108-474f-827c-beca7d3c1eb4",
            parent: "128d0e25-cf02-4ce0-842f-fc36938701b6",
            image:
              "https://media.glassdoor.com/sqll/3965604/eloelo-squareLogo-1663228296886.png",
            video: null,
            link: "https://app20.in/6",
            button_text: "EloElo App Offer",
            order: 1,
          },
        ],
      },
      {
        id: "47bc5cbe-5deb-4fe3-8fbc-ba8de055702c",
        name: "New Offers",
        thumbnail:
          "http://www.pngall.com/wp-content/uploads/2016/07/Special-offer-PNG-Images.png",
        ringColor: "#ffdd00",
        nameColor: "#000000",
        order: 10,
        slides: [
          {
            id: "f6209a23-7c11-418c-97d2-a4b69155f74f",
            parent: "47bc5cbe-5deb-4fe3-8fbc-ba8de055702c",
            image:
              "http://www.pngall.com/wp-content/uploads/2016/07/Special-offer-PNG-Images.png",
            video: null,
            link: "https://app20.in/7",
            button_text: "Ludo Supreme Offer",
            order: 1,
          },
          {
            id: "7e6f8afc-b3ff-4ddc-b9b4-759f8decfc56",
            parent: "47bc5cbe-5deb-4fe3-8fbc-ba8de055702c",
            image:
              "https://www.onlygfx.com/wp-content/uploads/2017/03/special-offer.png",
            video: null,
            link: "https://app20.in/8",
            button_text: "Pepperfry Offer",
            order: 2,
          },
        ],
      },
    ],
  });

  const [activeStory, setActiveStory] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open story modal
  const openStory = (story) => {
    setActiveStory(story);
    setActiveSlideIndex(0);
    setIsModalOpen(true);
  };

  // Close story modal
  const closeStory = useCallback(() => {
    setIsModalOpen(false);
    setActiveStory(null);
    setActiveSlideIndex(0);
  }, []);

  // Navigate between slides
  const nextSlide = useCallback(() => {
    if (activeStory && activeSlideIndex < activeStory.slides.length - 1) {
      setActiveSlideIndex((prev) => prev + 1);
    } else {
      closeStory();
    }
  }, [activeStory, activeSlideIndex, closeStory]);

  const prevSlide = useCallback(() => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex((prev) => prev - 1);
    }
  }, [activeSlideIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalOpen) {
        if (event.key === "ArrowRight") {
          nextSlide();
        } else if (event.key === "ArrowLeft") {
          prevSlide();
        } else if (event.key === "Escape") {
          closeStory();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, nextSlide, prevSlide, closeStory]);

  // Auto-advance slides after a delay
  useEffect(() => {
    if (isModalOpen && activeStory) {
      const timer = setTimeout(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isModalOpen, activeSlideIndex, activeStory, nextSlide]);

  return (
    <div className="w-full">
      {/* Story Groups */}
      <div className="flex overflow-x-auto gap-4 p-4 bg-gray-100 no-scrollbar">
        {data.details
          .sort((a, b) => a.order - b.order)
          .map((story) => (
            <div
              key={story.id}
              className="flex flex-col items-center cursor-pointer min-w-[80px]"
              onClick={() => openStory(story)}
            >
              {/* Story Circle */}
              <div
                className="w-20 h-20 rounded-full p-1 mb-2"
                style={{ backgroundColor: story.ringColor }}
              >
                <img
                  src={story.thumbnail}
                  alt={story.name}
                  className="w-full h-full rounded-full object-contain"
                />
              </div>
              {/* Story Name */}
              <span
                className="text-sm text-center truncate w-20"
                style={{ color: story.nameColor }}
              >
                {story.name}
              </span>
            </div>
          ))}
      </div>

      {/* Story Modal */}
      {isModalOpen && activeStory && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeStory}
            className="absolute top-4 right-4 text-white z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          {activeSlideIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft size={32} />
            </button>
          )}
          {activeSlideIndex < activeStory.slides.length - 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Progress Bar */}
          <div className="absolute top-2 left-0 right-0 flex gap-1 px-4">
            {activeStory.slides.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 rounded-full overflow-hidden bg-gray-600"
              >
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    index === activeSlideIndex
                      ? "w-full"
                      : index < activeSlideIndex
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Story Content */}
          <div className="w-full max-w-lg mx-auto h-full flex items-center justify-center">
            <div className="relative w-full h-4/5">
              <img
                src={activeStory.slides[activeSlideIndex].image}
                alt={`Slide ${activeSlideIndex + 1}`}
                className="w-full h-full object-contain"
              />
              {/* CTA Button */}
              {activeStory.slides[activeSlideIndex].button_text && (
                <a
                  href={activeStory.slides[activeSlideIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 
        bg-blue-500 text-white px-6 py-2 rounded-full 
        hover:bg-blue-600 transition-colors"
                >
                  {activeStory.slides[activeSlideIndex].button_text}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoriesComponent;