'use client'

import { useRef } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = gsap.utils.toArray<HTMLElement>('.panel');
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.position = 'absolute';
    progressBar.style.bottom = '20px';
    progressBar.style.left = '50%';
    progressBar.style.transform = 'translateX(-50%)';
    progressBar.style.width = '50%';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = 'rgba(0,0,0,0.1)';
    progressBar.style.borderRadius = '2px';
    progressBar.style.overflow = 'hidden';
    progressBar.style.zIndex = '1000';
    
    const progressFill = document.createElement('div');
    progressFill.style.height = '100%';
    progressFill.style.width = '20%';
    progressFill.style.backgroundColor = '#00724D';
    progressFill.style.transformOrigin = 'left';
    progressFill.style.transform = 'scaleX(0)';
    
    progressBar.appendChild(progressFill);
    container.appendChild(progressBar);

    const horizontalScrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        id: 'horizontalScroll', 
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => '+=' + (container.offsetWidth ?? 0),
        onUpdate: (self) => {
          gsap.to(progressFill, {
            scaleX: self.progress,
            duration: 0.3,
            ease: 'power1.out'
          });
        }
      },
    });

    sections.forEach((section, i) => {
      // Find the image container inside each section
      const imageContainer = section.querySelector('div[style*="rotate"]');
      
      // Apply animation to each image
      gsap.fromTo(
        section,
        { 
          scale: 0.85, 
          opacity: 0.6 
        },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: horizontalScrollTween,
            start: 'left center',
            end: 'right center',
            scrub: true,
          },
        }
      );
      
      // Additional animation for the image container
      if (imageContainer) {
        gsap.fromTo(
          imageContainer,
          { 
            y: 30,
            rotateY: -15,
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'
          },
          {
            y: 0,
            rotateY: 0,
            boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.2)',
            scrollTrigger: {
              trigger: section,
              containerAnimation: horizontalScrollTween,
              start: 'left center',
              end: 'center center',
              scrub: true,
            },
          }
        );
      }
      
      const indicator = document.createElement('div');
      indicator.className = `panel-indicator panel-indicator-${i}`;
      indicator.style.position = 'absolute';
      indicator.style.bottom = '30px';
      indicator.style.width = `${100 / sections.length}%`;
      indicator.style.left = `${(100 / sections.length) * i}%`;
      indicator.style.textAlign = 'center';
      indicator.style.color = 'rgba(0,0,0,0.4)';
      indicator.style.fontSize = '12px';
      indicator.style.fontWeight = 'bold';
      indicator.textContent = `${i + 1}`;
      
      container.appendChild(indicator);
      
      ScrollTrigger.create({
        trigger: section,
        containerAnimation: horizontalScrollTween,
        start: 'left center',
        end: 'right center',
        onEnter: () => gsap.to(`.panel-indicator-${i}`, { color: '#00724D', scale: 1.2, duration: 0.3 }),
        onLeave: () => gsap.to(`.panel-indicator-${i}`, { color: 'rgba(0,0,0,0.4)', scale: 1, duration: 0.3 }),
        onEnterBack: () => gsap.to(`.panel-indicator-${i}`, { color: '#00724D', scale: 1.2, duration: 0.3 }),
        onLeaveBack: () => gsap.to(`.panel-indicator-${i}`, { color: 'rgba(0,0,0,0.4)', scale: 1, duration: 0.3 }),
      });
    });
    
    const scrollHint = document.createElement('div');
    scrollHint.className = 'scroll-hint';
    scrollHint.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 16.5L12 19L14.5 16.5" stroke="#00724D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.5 11.5L12 14L14.5 11.5" stroke="#00724D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 5L12 12L5 5" stroke="#00724D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    scrollHint.style.position = 'absolute';
    scrollHint.style.transform = 'rotate(-90deg)';
    scrollHint.style.right = '20px';
    scrollHint.style.top = '50%';
    scrollHint.style.opacity = '0.7';
    
    container.appendChild(scrollHint);
    
    gsap.to(scrollHint, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });
    
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      onUpdate: (self) => {
        if (self.progress > 0.05) {
          gsap.to(scrollHint, { opacity: 0, duration: 0.5, display: 'none' });
        }
      }
    });
    
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="container relative"
      style={{
        display: 'flex',
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(180deg, rgba(254, 249, 219, 0.5) 0%, rgba(255, 255, 255, 1) 100%)',
        margin: '0 -50vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      {[
        '/journey-materials/IMG_6096.JPG',
        '/journey-materials/IMG_6420.JPG',
        '/journey-materials/IMG_8441.JPG',
        '/journey-materials/IMG_8494.JPG',
        '/journey-materials/DSC00212.JPG'
      ].map((src, index) => (
        <div
          key={index}
          className="panel"
          style={{
            flex: '0 0 100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px'
          }}
        >
          <div 
            className="relative shadow-2xl rounded-lg overflow-hidden" 
            style={{
              width: '450px',
              height: '535px',
              backgroundColor: 'white',
              padding: '15px 15px 40px 15px',
              transform: `rotate(${(index % 2 === 0 ? 3 : -3) + (index - 2) * 1.5}deg)`,
              transition: 'transform 0.5s ease',
            }}
          >
            <img 
              src={src} 
              alt={`Journey Image ${index + 1}`} 
              className="w-full h-full object-cover rounded-sm"
              style={{
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
              }}
            />
            <div 
              className="absolute bottom-[15px] left-0 right-0 h-[25px] flex items-center justify-center"
            >
              <div className="w-[8px] h-[8px] rounded-full bg-[#00724D] opacity-70 mx-1"></div>
            </div>
            <div 
              className="absolute bottom-4 left-4 w-4 h-1 bg-[rgba(0,0,0,0.1)] rounded-full"
              style={{transform: 'rotate(-45deg)'}}
            ></div>
            <div 
              className="absolute bottom-4 right-4 w-4 h-1 bg-[rgba(0,0,0,0.1)] rounded-full"
              style={{transform: 'rotate(45deg)'}}
            ></div>
            <div 
              className="absolute top-2 left-1/2 w-16 h-1.5 bg-[rgba(0,0,0,0.05)] rounded-full -translate-x-1/2"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Journey() {
  const scrollContainer = useScrollTrigger();
  
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center text-5xl font-black text-center py-12">
        <h1 className="text-[#00724D]">Hành trình "Mơ Hỏi Mở"</h1>
        <p className="text-xl mt-4 max-w-3xl text-gray-600 font-normal px-4">
          Cùng nhìn lại các mốc quan trọng trong hành trình lan tỏa tri thức và 
          nuôi dưỡng sự tò mò cho trẻ em vùng sâu vùng xa trên khắp Việt Nam
        </p>
      </section>
      
      <div className="w-full">
        {scrollContainer}
      </div>
      
      <div className="max-w-4xl mx-auto text-center my-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-[#00724D]">Cuộc hành trình tiếp tục!</h2>
        <p className="text-lg text-gray-700 mb-8">
          Qua hơn một năm hoạt động, "Mơ Hỏi Mở" đã chạm đến hơn 500 em nhỏ tại 12 tỉnh thành. 
          Nhưng hành trình của chúng tôi vẫn chưa kết thúc - với sự hỗ trợ của bạn, 
          chúng tôi có thể mang ánh sáng tri thức đến với nhiều em hơn nữa.
        </p>
      </div>
    </div>
  )
}