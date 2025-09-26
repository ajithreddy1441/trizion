import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const ScrollPortfolio = () => {
  const swiperRef = useRef(null);
  const scrollIntervals = useRef(new Map());

  const portfolioItems = [
    {
      id: 1,
      content: (
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="project_banner1.jpg" 
            alt="Project One" 
            className="w-full h-auto object-cover"
            style={{ minHeight: '100%' }}
          />
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="project_banner2.jpg" 
            alt="Project Two" 
            className="w-full h-auto object-cover"
            style={{ minHeight: '100%' }}
          />
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="project_banner3.jpg" 
            alt="Project Three" 
            className="w-full h-auto object-cover"
            style={{ minHeight: '100%' }}
          />
        </div>
      )
    },
    {
      id: 4,
      content: (
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="project_banner4.jpg" 
            alt="Project Four" 
            className="w-full h-auto object-cover"
            style={{ minHeight: '100%' }}
          />
        </div>
      )
    },
    {
      id: 5,
      content: (
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="project_banner5.jpg" 
            alt="Project Five" 
            className="w-full h-auto object-cover"
            style={{ minHeight: '100%' }}
          />
        </div>
      )
    },
  ];

  // Smooth scroll function with easing
  const smoothScrollTo = (img, targetY, duration) => {
    return new Promise((resolve) => {
      const startY = parseFloat(img.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
      const distance = targetY - startY;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease in-out function
        const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
        
        const newY = startY + (distance * ease(progress));
        img.style.transform = `translateY(${newY}px)`;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(animateScroll);
    });
  };

  // Hover effect for image scroll
  useEffect(() => {
    const handleImageHover = (e) => {
      const slide = e.currentTarget;
      const imgContainer = slide.querySelector('div');
      const img = slide.querySelector('img');
      
      if (img && imgContainer) {
        const containerHeight = imgContainer.clientHeight;
        const imgHeight = img.naturalHeight || img.offsetHeight;
        
        if (imgHeight > containerHeight) {
          const maxScroll = imgHeight - containerHeight;
          
          if (scrollIntervals.current.has(slide)) {
            clearInterval(scrollIntervals.current.get(slide));
          }

          let currentScroll = 0;
          const scrollStep = 5; // px per frame
          const frameRate = 60; // fps
          
          const interval = setInterval(() => {
            if (currentScroll < maxScroll) {
              currentScroll = Math.min(currentScroll + scrollStep, maxScroll);
              img.style.transform = `translateY(-${currentScroll}px)`;
              
              if (currentScroll >= maxScroll) {
                clearInterval(interval);
                scrollIntervals.current.delete(slide);
              }
            }
          }, 1000 / frameRate);

          scrollIntervals.current.set(slide, interval);
        }
      }
    };

    const handleImageLeave = (e) => {
      const slide = e.currentTarget;
      const img = slide.querySelector('img');
      
      if (scrollIntervals.current.has(slide)) {
        clearInterval(scrollIntervals.current.get(slide));
        scrollIntervals.current.delete(slide);
      }

      if (img) {
        // Smooth return to top
        smoothScrollTo(img, 0, 500);
      }
    };

    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
      slide.addEventListener('mouseenter', handleImageHover);
      slide.addEventListener('mouseleave', handleImageLeave);
    });

    return () => {
      slides.forEach(slide => {
        slide.removeEventListener('mouseenter', handleImageHover);
        slide.removeEventListener('mouseleave', handleImageLeave);

        if (scrollIntervals.current.has(slide)) {
          clearInterval(scrollIntervals.current.get(slide));
          scrollIntervals.current.delete(slide);
        }
      });
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-purple-200 text-lg">Hover to explore</p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <ChevronLeft className="w-8 h-8 text-white group-hover:text-purple-300 transition-colors" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <ChevronRight className="w-8 h-8 text-white group-hover:text-purple-300 transition-colors" />
          </button>

          {/* Swiper Component */}
          <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            mousewheel={{
              forceToAxis: true,
            }}
            loop={true}
            modules={[EffectCoverflow, Navigation, Autoplay, Mousewheel]}
            className="w-full py-10"
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id} className="!w-80 !h-96">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group hover:scale-105 cursor-pointer">
                  {item.content}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-2xl transition-all duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination */}
        <div className="flex justify-center mt-8 space-x-3">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.swiper.slideToLoop(index)}
              className="w-3 h-3 rounded-full bg-gray-600 hover:bg-purple-400 transition-all duration-300 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default ScrollPortfolio;
