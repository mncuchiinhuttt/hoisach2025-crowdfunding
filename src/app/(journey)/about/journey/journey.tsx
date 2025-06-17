'use client'

import { useRef, useLayoutEffect, useEffect, useState } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Footer } from "@/layout/footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Journey() {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);
  const season1GalleryRef = useRef<HTMLDivElement>(null);
  const season2GalleryRef = useRef<HTMLDivElement>(null);
  const season3GalleryRef = useRef<HTMLDivElement>(null);
  const season4GalleryRef = useRef<HTMLDivElement>(null);
  const season5TitleRef = useRef<HTMLHeadingElement>(null);
  const season5DividerRef = useRef<HTMLDivElement>(null);
  const season5ImageRef = useRef<HTMLDivElement>(null);
  const season5ContentRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPageChanging, setIsPageChanging] = useState<boolean>(false);
  const imagesPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 6;
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update imagesPerPage when window width changes
  useEffect(() => {
    // Don't run on server-side
    if (typeof window !== 'undefined') {
      // Adjust images per page based on screen size
      if (windowWidth < 768) {
        setCurrentPage(1); // Reset to first page when switching to mobile
      }
    }
  }, [windowWidth]);
  
  const season3Images = [
    { src: "/journey-materials/ss3/ss3-1.jpg", alt: "Mùa 3 - Ảnh 1" },
    { src: "/journey-materials/ss3/ss3-2.jpg", alt: "Mùa 3 - Ảnh 2" },
    { src: "/journey-materials/ss3/ss3-3.jpg", alt: "Mùa 3 - Ảnh 3" },
    { src: "/journey-materials/ss3/ss3-4.jpg", alt: "Mùa 3 - Ảnh 4" },
    { src: "/journey-materials/ss3/ss3-5.jpg", alt: "Mùa 3 - Ảnh 5" },
    { src: "/journey-materials/ss3/ss3-6.jpg", alt: "Mùa 3 - Ảnh 6" },
    { src: "/journey-materials/ss3/ss3-8.jpg", alt: "Mùa 3 - Ảnh 7" },
    { src: "/journey-materials/ss3/ss3-9.jpg", alt: "Mùa 3 - Ảnh 8" },
    { src: "/journey-materials/ss3/ss3-10.jpg", alt: "Mùa 3 - Ảnh 9" },
    { src: "/journey-materials/ss3/ss3-11.jpg", alt: "Mùa 3 - Ảnh 10" },
    { src: "/journey-materials/ss3/ss3-12.jpg", alt: "Mùa 3 - Ảnh 11" },
    { src: "/journey-materials/ss3/ss3-13.jpg", alt: "Mùa 3 - Ảnh 12" },
    { src: "/journey-materials/ss3/ss3-14.jpg", alt: "Mùa 3 - Ảnh 13" },
    { src: "/journey-materials/ss3/ss3-15.jpg", alt: "Mùa 3 - Ảnh 14" },
    { src: "/journey-materials/ss3/ss3-16.jpg", alt: "Mùa 3 - Ảnh 15" },
    { src: "/journey-materials/ss3/ss3-17.jpg", alt: "Mùa 3 - Ảnh 16" },
    { src: "/journey-materials/ss3/ss3-18.jpg", alt: "Mùa 3 - Ảnh 17" },
    { src: "/journey-materials/ss3/ss3-19.jpg", alt: "Mùa 3 - Ảnh 18" },
  ];
  
  const season4Images = [
    { src: "/journey-materials/ss4/ss4-10.jpg", alt: "Mùa 4 - Ảnh 10" },
    { src: "/journey-materials/ss4/ss4-11.jpg", alt: "Mùa 4 - Ảnh 11" },
    { src: "/journey-materials/ss4/ss4-12.jpg", alt: "Mùa 4 - Ảnh 12" },
    { src: "/journey-materials/ss4/ss4-13.jpg", alt: "Mùa 4 - Ảnh 13" },
    { src: "/journey-materials/ss4/ss4-14.jpg", alt: "Mùa 4 - Ảnh 14" },
    { src: "/journey-materials/ss4/ss4-15.jpg", alt: "Mùa 4 - Ảnh 15" },
    { src: "/journey-materials/ss4/ss4-1.jpg", alt: "Mùa 4 - Ảnh 1" },
    { src: "/journey-materials/ss4/ss4-2.jpg", alt: "Mùa 4 - Ảnh 2" },
    { src: "/journey-materials/ss4/ss4-3.jpg", alt: "Mùa 4 - Ảnh 3" },
    { src: "/journey-materials/ss4/ss4-4.jpg", alt: "Mùa 4 - Ảnh 4" },
    { src: "/journey-materials/ss4/ss4-5.jpg", alt: "Mùa 4 - Ảnh 5" },
    { src: "/journey-materials/ss4/ss4-6.jpg", alt: "Mùa 4 - Ảnh 6" },
    { src: "/journey-materials/ss4/ss4-7.jpg", alt: "Mùa 4 - Ảnh 7" },
    { src: "/journey-materials/ss4/ss4-8.jpg", alt: "Mùa 4 - Ảnh 8" },
    { src: "/journey-materials/ss4/ss4-9.jpg", alt: "Mùa 4 - Ảnh 9" },
    { src: "/journey-materials/ss4/ss4-16.jpg", alt: "Mùa 4 - Ảnh 16" },
    { src: "/journey-materials/ss4/ss4-17.jpg", alt: "Mùa 4 - Ảnh 17" },
    { src: "/journey-materials/ss4/ss4-18.jpg", alt: "Mùa 4 - Ảnh 18" },
  ];
  
  const calculateGalleryDimensions = () => {
    if (!season1GalleryRef.current) return { galleryHeight: 0, itemCount: 0, containerWidth: 0 };
    
    const container = season1GalleryRef.current;
    const galleryItems = container.querySelectorAll('.gallery-item');
    
    const itemCount = galleryItems.length;
    const galleryHeight = container.offsetHeight;
    const containerWidth = container.offsetWidth;
    
    console.log('Season 1 Gallery dimensions:', { 
      galleryHeight, 
      itemCount,
      containerWidth,
      viewportHeight: window.innerHeight
    });
    
    return { galleryHeight, itemCount, containerWidth };
  };
  
  const calculateSeason2GalleryDimensions = () => {
    if (!season2GalleryRef.current) return { galleryHeight: 0, itemCount: 0, containerWidth: 0 };
    
    const container = season2GalleryRef.current;
    const galleryItems = container.querySelectorAll('.gallery-item');
    
    const itemCount = galleryItems.length;
    const galleryHeight = container.offsetHeight;
    const containerWidth = container.offsetWidth;
    
    console.log('Season 2 Gallery dimensions:', { 
      galleryHeight, 
      itemCount,
      containerWidth,
      viewportHeight: window.innerHeight
    });
    
    return { galleryHeight, itemCount, containerWidth };
  };
  
  const calculateSeason3GalleryDimensions = () => {
    if (!season3GalleryRef.current) return { galleryHeight: 0, itemCount: 0, containerWidth: 0 };
    
    const container = season3GalleryRef.current;
    const galleryItems = container.querySelectorAll('.gallery-item');
    
    const itemCount = galleryItems.length;
    const galleryHeight = container.offsetHeight;
    const containerWidth = container.offsetWidth;
    
    console.log('Season 3 Gallery dimensions:', { 
      galleryHeight, 
      itemCount,
      containerWidth,
      viewportHeight: window.innerHeight
    });
    
    return { galleryHeight, itemCount, containerWidth };
  };
  
  const calculateSeason4GalleryDimensions = () => {
    if (!season4GalleryRef.current) return { galleryHeight: 0, itemCount: 0, containerWidth: 0 };
    
    const container = season4GalleryRef.current;
    const galleryItems = container.querySelectorAll('.gallery-item');
    
    const itemCount = galleryItems.length;
    const galleryHeight = container.offsetHeight;
    const containerWidth = container.offsetWidth;
    
    console.log('Season 4 Gallery dimensions:', { 
      galleryHeight, 
      itemCount,
      containerWidth,
      viewportHeight: window.innerHeight
    });
    
    return { galleryHeight, itemCount, containerWidth };
  };
  
  useEffect(() => {
    // Create the smooth scroller
    console.log('Initializing ScrollSmoother and ScrollTrigger');
    
    let smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1.1,
      effects: true,
      normalizeScroll: true,
    });
    
    gsap.registerEffect({
      name: "imageParallax",
      effect: (targets: any, config: any) => {
        return gsap.to(targets, {
          y: config.distance || 30,
          duration: config.duration || 1,
          ease: config.ease || "power2.inOut",
          stagger: config.stagger || 0.2
        });
      },
      defaults: { duration: 1, distance: 30 },
      extendTimeline: true,
    });
    
    if (season1GalleryRef.current) {
      const imageCaptions = season1GalleryRef.current.querySelectorAll('.image-caption');
      
      imageCaptions.forEach((caption) => {
        gsap.set(caption, { y: 20, opacity: 0 });
        
        ScrollTrigger.create({
          trigger: caption.parentElement,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            gsap.to(caption, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out"
            });
          },
          onLeaveBack: () => {
            gsap.to(caption, {
              y: 20,
              opacity: 0,
              duration: 0.3,
              ease: "power2.in"
            });
          }
        });
      });
    }      // Set up scrolling for Season 1 section
    const season1Section = document.querySelector('#season1');
    const season1Description = document.querySelector('#season1-description');
    const season1Gallery = document.querySelector('#season1-gallery');
    
    if (season1Section && season1Description && season1Gallery) {
      // Calculate dimensions
      const { galleryHeight, itemCount, containerWidth } = calculateGalleryDimensions();
      
      // Get all gallery items
      const galleryContainer = season1Gallery.querySelector('.season1-images-container');
      const galleryItems = season1Gallery.querySelectorAll('.gallery-item');
      
      if (galleryContainer && galleryItems.length > 0) {
        // Set initial state for all gallery items
        gsap.set(galleryItems, { 
          opacity: 0, 
          y: 60,
          scale: 0.92
        });
        
        // Create a main timeline for the entire gallery section
        const galleryMainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: season1Gallery,
            start: 'top 70%',
            end: 'bottom 20%',
            scrub: false,
            markers: false,
            id: 'season1GalleryMainTimeline',
            onEnter: () => {
              console.log('Gallery section entered viewport');
            }
          }
        });
        
        // Add staggered animations for each gallery item
        galleryItems.forEach((item, i) => {
          // Create reveal animations with varied delays for a cascade effect
          ScrollTrigger.create({
            trigger: item,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
            id: `item-reveal-${i}`,
            onEnter: () => {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: i * 0.15, // Staggered delay based on item index
                ease: 'power2.out',
                clearProps: 'scale' // Clear scale after animation to prevent conflicts
              });
            },
            onLeaveBack: () => {
              gsap.to(item, {
                opacity: 0,
                y: 60,
                scale: 0.92,
                duration: 0.5,
                ease: 'power1.in'
              });
            }
          });
          
          // Add a unique animation for each image and caption
          const img = item.querySelector('img');
          const caption = item.querySelector('.image-caption');
          
          if (img) {
            gsap.set(img, { scale: 1, y: 0 });

            item.addEventListener('mouseenter', () => {
              gsap.to(img, {
                scale: 1.05,
                duration: 0.4,
                ease: 'power2.out'
              })
            });

            item.addEventListener('mouseleave', () => {
              gsap.to(img, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
              })
            });
          }
          
          if (caption) {
            // Set initial state for caption
            gsap.set(caption, { opacity: 0, y: 15 });
            
            // Create caption reveal animation with delay after image appears
            ScrollTrigger.create({
              trigger: item,
              start: 'top 65%',
              toggleActions: 'play none none reverse',
              id: `caption-reveal-${i}`,
              onEnter: () => {
                gsap.to(caption, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  delay: 0.4 + (i * 0.08), // More delay for captions to appear after image
                  ease: 'power2.out'
                });
              },
              onLeaveBack: () => {
                gsap.to(caption, {
                  opacity: 0,
                  y: 15,
                  duration: 0.3,
                  ease: 'power1.in'
                });
              }
            });
          }
        });
        
        // Enhanced reveal for the gallery heading
        const galleryHeading = season1Gallery.querySelector('h3');
        if (galleryHeading) {
          gsap.set(galleryHeading, { opacity: 0, y: -20 });
          
          ScrollTrigger.create({
            trigger: season1Gallery,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
            id: 'gallery-heading-reveal',
            onEnter: () => {
              gsap.to(galleryHeading, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'back.out(1.2)' // More bouncy effect for heading
              });
            },
            onLeaveBack: () => {
              gsap.to(galleryHeading, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                ease: 'power1.in'
              });
            }
          });
        }
      }
    }
    
    // Add window resize listener to recalculate dimensions
    const handleResize = () => {
      // Recalculate gallery dimensions on resize
      const season1Dimensions = calculateGalleryDimensions();
      const season2Dimensions = calculateSeason2GalleryDimensions();
      const season3Dimensions = calculateSeason3GalleryDimensions();
      const season4Dimensions = calculateSeason4GalleryDimensions();
      console.log('Window resized, new dimensions:', { 
        season1Dimensions, 
        season2Dimensions,
        season3Dimensions,
        season4Dimensions
      });
      
      // Apply responsive adjustments based on screen size
      const screenWidth = window.innerWidth;
      const season1Items = document.querySelectorAll('#season1-gallery .gallery-item');
      const season2Items = document.querySelectorAll('#season2-gallery .gallery-item');
      const season3Items = document.querySelectorAll('#season3-gallery .gallery-item');
      const season4Items = document.querySelectorAll('#season4-gallery .gallery-item');
      const season1Heading = document.querySelector('#season1-gallery h3');
      const season2Heading = document.querySelector('#season2-gallery h3');
      const season3Heading = document.querySelector('#season3-gallery h3');
      const season4Heading = document.querySelector('#season4-gallery h3');
      
      if (season1Items.length > 0) {
        if (screenWidth < 768) {
          season1Items.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
              gsap.set(img, {
                height: '300px',
                scale: 1,
                y: 0
              });
            }
          });
          
          if (season1Heading) {
            gsap.set(season1Heading, {
              fontSize: '1.5rem'
            });
          }
        } else {
          season1Items.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
              gsap.set(img, {
                height: '400px', 
                scale: 1, 
                y: 0 
              });
            }
          });
          
          if (season1Heading) {
            gsap.set(season1Heading, {
              fontSize: '1.875rem' // Return to original size
            });
          }
        }
      }
      
      if (season2Items.length > 0) {
        if (screenWidth < 768) {
          // Mobile-specific adjustments for Season 2
          season2Items.forEach(item => {
            const img = item.querySelector('img');
            if (img && !img.classList.contains('md:h-full')) {
              gsap.set(img, {
                height: '250px',
                scale: 1, 
                y: 0, 
                x: 0, 
                rotation: 0
              });
            }
          });
          
          if (season2Heading) {
            gsap.set(season2Heading, {
              fontSize: '1.5rem' // Smaller heading on mobile
            });
          }
        } else {
          // Desktop/tablet adjustments for Season 2
          season2Items.forEach(item => {
            const img = item.querySelector('img');
            if (img && !img.classList.contains('md:h-full')) {
              gsap.set(img, {
                height: item.classList.contains('md:col-span-3') ? '300px' : '200px', // Different sizes based on layout,
                scale: 1, 
                y: 0, 
                x: 0, 
                rotation: 0
              });
            }
          });
          
          if (season2Heading) {
            gsap.set(season2Heading, {
              fontSize: '1.875rem' // Return to original size
            });
          }
        }
      }
      
      if (season3Items.length > 0) {
        if (screenWidth < 768) {
          // Mobile-specific adjustments for Season 3
          season3Items.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
              gsap.set(img, {
                height: '220px',
                scale: 1, 
                y: 0, 
                x: 0
              });
            }
          });
          
          if (season3Heading) {
            gsap.set(season3Heading, {
              fontSize: '1.5rem' // Smaller heading on mobile
            });
          }
        } else {
          // Desktop/tablet adjustments for Season 3
          season3Items.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
              gsap.set(img, {
                height: '250px',
                scale: 1, 
                y: 0, 
                x: 0
              });
            }
          });
          
          if (season3Heading) {
            gsap.set(season3Heading, {
              fontSize: '1.875rem' // Return to original size
            });
          }
        }
      }
      
      if (season4Items.length > 0) {
        if (screenWidth < 768) {
          // Mobile-specific adjustments for Season 4
          season4Items.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
              gsap.set(img, {
                height: '220px',
                scale: 1, 
                y: 0, 
                x: 0
              });
            }
          });
          
          if (season4Heading) {
            gsap.set(season4Heading, {
              fontSize: '1.5rem' // Smaller heading on mobile
            });
          }
        } else {
          // Desktop/tablet adjustments for Season 4
          season4Items.forEach(item => {
            const img = item.querySelector('img');
            if (img) {
              gsap.set(img, {
                height: '250px',
                scale: 1, 
                y: 0, 
                x: 0
              });
            }
          });
          
          if (season4Heading) {
            gsap.set(season4Heading, {
              fontSize: '1.875rem' // Return to original size
            });
          }
        }
      }
      
      // Refresh all ScrollTrigger instances to account for new dimensions
      ScrollTrigger.refresh(true); // true forces a complete recalculation
    };
    
    // Debounced resize handler to avoid too many refreshes
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 150);
    };
    
    window.addEventListener('resize', debouncedResize);
    
    // Initial calculation after component is fully rendered
    setTimeout(() => {
      calculateGalleryDimensions();
      calculateSeason2GalleryDimensions();
      calculateSeason3GalleryDimensions();
      calculateSeason4GalleryDimensions();
    }, 500);
    
    // Create a smooth transition to Season 2
    const season2Section = document.querySelector('#season2');
    const season2Gallery = document.querySelector('#season2-gallery');
    
    if (season2Section) {
      // Add a reveal animation for Season 2
      gsap.set(season2Section, { 
        opacity: 0.4, 
        y: 40,
        backgroundColor: 'rgba(254, 249, 219, 0.05)'
      });
      
      // Create intersection observer for the Season 2 section
      ScrollTrigger.create({
        trigger: season2Section,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
        id: 'season2-reveal',
        onEnter: () => {
          // Create a more dramatic entrance for Season 2
          gsap.to(season2Section, {
            opacity: 1,
            y: 0,
            backgroundColor: 'rgba(254, 249, 219, 0.3)',
            duration: 1,
            ease: 'power3.out'
          });
          
          // Animate children elements
          const season2Heading = season2Section.querySelector('h2');
          const season2Divider = season2Section.querySelector('.w-24.h-1');
          const season2Content = season2Section.querySelector('.grid');
          
          if (season2Heading && season2Divider && season2Content) {
            gsap.from(season2Heading, {
              opacity: 0,
              y: -30,
              duration: 0.8,
              delay: 0.2,
              ease: 'back.out(1.4)'
            });
            
            gsap.from(season2Divider, {
              width: 0,
              opacity: 0,
              duration: 0.8,
              delay: 0.4,
              ease: 'power2.out'
            });
            
            gsap.from(season2Content, {
              opacity: 0,
              y: 30,
              duration: 0.8,
              delay: 0.6,
              ease: 'power2.out'
            });
          }
        },
        onLeaveBack: () => {
          gsap.to(season2Section, {
            opacity: 0.4,
            y: 40,
            backgroundColor: 'rgba(254, 249, 219, 0.05)',
            duration: 0.7,
            ease: 'power2.in'
          });
        }
      });
      
      // Add animations for Season 2 gallery
      if (season2Gallery) {
        // Calculate dimensions
        const { galleryHeight, itemCount, containerWidth } = calculateSeason2GalleryDimensions();
        
        // Get all gallery items
        const galleryContainer = season2Gallery.querySelector('.season2-images-container');
        const galleryItems = season2Gallery.querySelectorAll('.gallery-item');
        
        if (galleryContainer && galleryItems.length > 0) {
          // Set initial state for all gallery items with staggered positions
          galleryItems.forEach((item, i) => {
            // Alternate between different initial states for a more dynamic reveal
            if (i % 2 === 0) {
              gsap.set(item, { 
                opacity: 0, 
                y: 40,
                scale: 0.95,
                rotation: -1
              });
            } else {
              gsap.set(item, { 
                opacity: 0, 
                y: 40,
                scale: 0.92,
                rotation: 1
              });
            }
          });
          
          // Create a staggered reveal animation for gallery items
          galleryItems.forEach((item, i) => {
            // Create reveal animations with varied delays for a cascade effect
            ScrollTrigger.create({
              trigger: item,
              start: 'top 85%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
              id: `season2-item-reveal-${i}`,
              onEnter: () => {
                // Use different animation style for Season 2 - magical theme
                gsap.to(item, {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotation: 0,
                  duration: 1.2,
                  delay: i * 0.15, 
                  ease: 'elastic.out(1, 0.75)', // Elastic easing for magical feel
                  clearProps: 'scale,rotation',
                  onComplete: () => {
                    // Add a subtle pulse effect after the item appears
                    gsap.to(item, {
                      scale: 1.02,
                      duration: 0.5,
                      ease: 'power1.inOut',
                      yoyo: true,
                      repeat: 1
                    });
                  }
                });
              },
              onLeaveBack: () => {
                gsap.to(item, {
                  opacity: 0,
                  y: 40,
                  scale: i % 2 === 0 ? 0.95 : 0.92,
                  rotation: i % 2 === 0 ? -1 : 1,
                  duration: 0.5,
                  ease: 'power1.in'
                });
              }
            });
            
            // Add a unique animation for each image and caption
            const img = item.querySelector('img');
            const caption = item.querySelector('.image-caption');
            
            if (img) {
              // Set consistent state without any movement effects
              gsap.set(img, { scale: 1, x: 0, y: 0, rotation: 0 });
              
              // Add hover effect instead of scroll-based movement
              item.addEventListener('mouseenter', () => {
                gsap.to(img, {
                  scale: 1.05,
                  filter: 'brightness(1.05) saturate(1.1)',
                  duration: 0.4,
                  ease: 'power2.out'
                });
              });
              item.addEventListener('mouseleave', () => {
                  gsap.to(img, {
                    scale: 1,
                    filter: 'brightness(1) saturate(1)',
                    duration: 0.4,
                    ease: 'power2.out'
                  });
              });
              
              // Add a subtle glow effect on hover
              item.addEventListener('mouseenter', () => {
                gsap.to(img, {
                  filter: 'brightness(1.05) saturate(1.1)',
                  boxShadow: '0 0 20px rgba(0, 114, 77, 0.2)',
                  duration: 0.4,
                  ease: 'power1.out'
                });
                
                // Add a magical sparkle effect
                const sparkle = document.createElement('div');
                sparkle.className = 'absolute w-full h-full pointer-events-none';
                sparkle.style.zIndex = '10';
                item.appendChild(sparkle);
                
                // Create 5 small sparkles
                for (let i = 0; i < 5; i++) {
                  const dot = document.createElement('div');
                  dot.className = 'absolute w-2 h-2 rounded-full bg-white';
                  
                  // Random position
                  dot.style.left = `${Math.random() * 100}%`;
                  dot.style.top = `${Math.random() * 100}%`;
                  
                  sparkle.appendChild(dot);
                  
                  // Animate the sparkle
                  gsap.fromTo(dot, 
                    { 
                      scale: 0,
                      opacity: 0
                    },
                    {
                      scale: Math.random() * 0.5 + 0.5,
                      opacity: Math.random() * 0.7 + 0.3,
                      duration: 0.4,
                      delay: Math.random() * 0.3,
                      onComplete: () => {
                        gsap.to(dot, {
                          scale: 0,
                          opacity: 0,
                          duration: 0.3,
                          delay: Math.random() * 0.5 + 0.5
                        });
                      }
                    }
                  );
                }
              });
              
              item.addEventListener('mouseleave', () => {
                gsap.to(img, {
                  filter: 'brightness(1) saturate(1)',
                  boxShadow: 'none',
                  duration: 0.4,
                  ease: 'power1.out'
                });
                
                // Remove any sparkle elements
                const sparkle = item.querySelector('.pointer-events-none');
                if (sparkle) {
                  gsap.to(sparkle, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                      sparkle.remove();
                    }
                  });
                }
              });
            }
            
            if (caption) {
              // Set initial state for caption
              gsap.set(caption, { opacity: 0, x: -10 });
              
              // Create caption reveal animation with slide-in effect
              ScrollTrigger.create({
                trigger: item,
                start: 'top 65%',
                toggleActions: 'play none none reverse',
                id: `season2-caption-reveal-${i}`,
                onEnter: () => {
                  gsap.to(caption, {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    delay: 0.5 + (i * 0.08),
                    ease: 'power2.out'
                  });
                },
                onLeaveBack: () => {
                  gsap.to(caption, {
                    opacity: 0,
                    x: -10,
                    duration: 0.3,
                    ease: 'power1.in'
                  });
                }
              });
            }
          });
          
          // Enhanced reveal for the gallery heading
          const galleryHeading = season2Gallery.querySelector('h3');
          if (galleryHeading) {
            gsap.set(galleryHeading, { opacity: 0, scale: 0.9 });
            gsap.set(galleryHeading.querySelector("::after"), { width: 0 });
            
            ScrollTrigger.create({
              trigger: season2Gallery,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
              id: 'season2-gallery-heading-reveal',
              onEnter: () => {
                gsap.to(galleryHeading, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  ease: 'back.out(1.4)'
                });
                
                gsap.to(galleryHeading.querySelector("::after"), {
                  width: 80,
                  duration: 1,
                  delay: 0.4,
                  ease: 'power2.out'
                });
              },
              onLeaveBack: () => {
                gsap.to(galleryHeading, {
                  opacity: 0,
                  scale: 0.9,
                  duration: 0.5,
                  ease: 'power1.in'
                });
              }
            });
          }
          
          // Create magical particles for Season 2 gallery
          const particlesContainer = season2Gallery.querySelector('.magical-particles');
          if (particlesContainer) {
            // Create particles
            for (let i = 0; i < 20; i++) {
              const particle = document.createElement('div');
              particle.className = 'absolute w-1 h-1 rounded-full bg-[#00724D]/30';
              
              // Set random position, size and opacity
              const size = Math.random() * 6 + 2;
              gsap.set(particle, {
                x: Math.random() * (particlesContainer as HTMLElement).offsetWidth,
                y: Math.random() * (particlesContainer as HTMLElement).offsetHeight,
                scale: 0,
                opacity: 0,
                width: size,
                height: size
              });
              
              particlesContainer.appendChild(particle);
              
              // Create random floating animation
              gsap.to(particle, {
                scale: Math.random() * 1 + 0.5,
                opacity: Math.random() * 0.7 + 0.3,
                duration: 0.8,
                ease: 'power1.out',
                onComplete: () => {
                  // Start the loop animation after initial reveal
                  gsap.to(particle, {
                    x: `+=${Math.random() * 40 - 20}`,
                    y: `+=${Math.random() * 40 - 20}`,
                    duration: Math.random() * 4 + 3,
                    opacity: Math.random() * 0.5 + 0.1,
                    scale: Math.random() * 0.8 + 0.2,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: Math.random() * 2
                  });
                }
              });
            }
            
            // Add ScrollTrigger to control particles visibility
            ScrollTrigger.create({
              trigger: season2Gallery,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play reverse play reverse',
              onEnter: () => {
                gsap.to(particlesContainer, {
                  autoAlpha: 1,
                  duration: 1
                });
              },
              onLeave: () => {
                gsap.to(particlesContainer, {
                  autoAlpha: 0,
                  duration: 0.5
                });
              },
              onEnterBack: () => {
                gsap.to(particlesContainer, {
                  autoAlpha: 1,
                  duration: 1
                });
              },
              onLeaveBack: () => {
                gsap.to(particlesContainer, {
                  autoAlpha: 0,
                  duration: 0.5
                });
              }
            });
          }
          
          // Add animated sparkle effects to the scroll indicator
          const scrollIndicator = season2Gallery.querySelector('.season2-scroll-indicator');
          if (scrollIndicator) {
            // Create a pulsing glow effect
            gsap.to(scrollIndicator, {
              boxShadow: '0 0 15px rgba(0, 114, 77, 0.3)',
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut'
            });
            
            // Create a subtle floating effect
            gsap.to(scrollIndicator, {
              y: -5,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut'
            });
          }
        }
      }
      
      // Add a subtle parallax effect to Season 2's logo image
      const season2Image = season2Section.querySelector('.aspect-square img');
      if (season2Image) {
        ScrollTrigger.create({
          trigger: season2Section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
          id: 'season2-image-parallax',
          onUpdate: (self) => {
            const moveY = (self.progress - 0.5) * -20;
            const scale = 1 + (self.progress * 0.05);
            
            gsap.to(season2Image, {
              y: moveY,
              scale: scale,
              duration: 0.1,
              ease: 'none',
              overwrite: 'auto'
            });
          }
        });
      }
      
      const topGradient = season2Gallery?.querySelector('.absolute.top-0');
      const bottomGradient = season2Gallery?.querySelector('.absolute.bottom-0');
      
      if (topGradient) {
        // Create floating particles in the top gradient
        const topGradientBg = topGradient.querySelector('.absolute');
        
        if (topGradientBg) {
          // Add subtle animation to the pattern
          gsap.to(topGradientBg, {
            backgroundPositionX: '+=20',
            duration: 15,
            repeat: -1,
            ease: 'none'
          });
          
          // Animate the light rays
          const lightRays = topGradient.querySelectorAll('.bg-gradient-to-b.from-\\[\\#00724D\\]');
          lightRays.forEach((ray, i) => {
            const htmlRay = ray as HTMLElement;
            gsap.to(ray, {
              opacity: 0.6 + (Math.random() * 0.4),   
              rotation: parseFloat(htmlRay.style.transform.replace('rotate(', '').replace('deg)', '') || '0') + (Math.random() * 5 - 2.5),  // Subtle rotation
              width: `${parseInt(htmlRay.style.width || '0') + (Math.random() * 5)}%`,  
              duration: 3 + (Math.random() * 2),     
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: i * 0.7                           // Staggered start
            });
          });
        }
        
        // Add parallax and fade effect for top gradient
        ScrollTrigger.create({
          trigger: season2Gallery,
          start: 'top bottom',
          end: 'top 20%',
          scrub: true,
          id: 'season2-top-gradient-effect',
          onUpdate: (self) => {
            // Fade in the top gradient as we scroll towards it
            gsap.to(topGradient, {
              opacity: 1 - self.progress * 1.5,  // Faster fade out
              y: self.progress * -15,  // Slight parallax effect
              duration: 0.1
            });
          }
        });
      }
      
      if (bottomGradient) {
        // Add subtle animation to the pattern in the bottom gradient
        const bottomGradientBg = bottomGradient.querySelector('.absolute');
        
        if (bottomGradientBg) {
          // Add floating animation to the pattern
          gsap.to(bottomGradientBg, {
            backgroundPositionX: '-=20',
            duration: 15,
            repeat: -1,
            ease: 'none'
          });
          
          // Animate the sparkle dots
          const sparkleDots = bottomGradient.querySelectorAll('.rounded-full');
          sparkleDots.forEach((dot, i) => {
            // Create pulsing and floating animation for each dot
            gsap.to(dot, {
              opacity: 0.2 + (Math.random() * 0.6),  // Random opacity pulsing
              y: -3 - (Math.random() * 6),           // Random float up
              x: Math.random() * 10 - 5,             // Random horizontal movement
              scale: 0.8 + (Math.random() * 0.5),    // Random scaling
              duration: 1.5 + (Math.random() * 2),   // Random duration
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: i * 0.3                         // Staggered start
            });
          });
        }
        
        // Enhanced parallax and reveal effect for bottom gradient
        ScrollTrigger.create({
          trigger: bottomGradient,
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: true,
          id: 'season2-bottom-gradient-effect',
          onUpdate: (self) => {
            // Enhance the bottom gradient as we approach it
            gsap.to(bottomGradient, {
              opacity: 0.5 + (self.progress * 0.5),
              y: (1 - self.progress) * 15,  // Parallax effect
              duration: 0.1
            });
          }
        });
      }
      
      const scrollProgressBar = season2Gallery?.querySelector('.gallery-scroll-progress');
      if (scrollProgressBar) {
        ScrollTrigger.create({
          trigger: season2Gallery,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          id: 'season2-scroll-progress',
          onUpdate: (self) => {
            gsap.to(scrollProgressBar, {
              height: `${self.progress * 100}%`,
              duration: 0.1,
              ease: 'none'
            });
            
            // Add a pulsing glow effect when reaching certain thresholds
            if (self.progress > 0.25 && self.progress < 0.3 || 
                self.progress > 0.5 && self.progress < 0.55 || 
                self.progress > 0.75 && self.progress < 0.8) {
              gsap.to(scrollProgressBar, {
                boxShadow: '0 0 8px 2px rgba(0, 114, 77, 0.5)',
                duration: 0.5,
                yoyo: true,
                repeat: 1
              });
            }
          }
        });
      }
    }
    
    // Create animations for Season 3
    const season3Section = document.querySelector('#season3');
    const season3Gallery = document.querySelector('#season3-gallery');
    
    if (season3Section) {
      // Add a reveal animation for Season 3
      gsap.set(season3Section, { 
        opacity: 0.4, 
        y: 40
      });
      
      // Create intersection observer for the Season 3 section
      ScrollTrigger.create({
        trigger: season3Section,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
        id: 'season3-reveal',
        onEnter: () => {
          // Create a clean entrance for Season 3
          gsap.to(season3Section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
          });
          
          // Animate children elements
          const season3Heading = season3Section.querySelector('h2');
          const season3Divider = season3Section.querySelector('.w-24.h-1');
          const season3Content = season3Section.querySelector('.grid');
          
          if (season3Heading && season3Divider && season3Content) {
            gsap.from(season3Heading, {
              opacity: 0,
              y: -30,
              duration: 0.8,
              delay: 0.2,
              ease: 'back.out(1.4)'
            });
            
            gsap.from(season3Divider, {
              width: 0,
              opacity: 0,
              duration: 0.8,
              delay: 0.4,
              ease: 'power2.out'
            });
            
            gsap.from(season3Content, {
              opacity: 0,
              y: 30,
              duration: 0.8,
              delay: 0.6,
              ease: 'power2.out'
            });
          }
        },
        onLeaveBack: () => {
          gsap.to(season3Section, {
            opacity: 0.4,
            y: 40,
            duration: 0.7,
            ease: 'power2.in'
          });
        }
      });
      
      // Add animations for Season 3 gallery
      if (season3Gallery) {
        // Get all gallery items
        const galleryItems = season3Gallery.querySelectorAll('.gallery-item');
        const viewMoreButton = season3Gallery.querySelector('button');
        
        if (galleryItems.length > 0) {
          // Set initial state for all gallery items
          galleryItems.forEach((item) => {
            gsap.set(item, { 
              opacity: 0, 
              y: 30,
              scale: 0.95
            });
          });
          
          // Create a staggered reveal animation for gallery items
          ScrollTrigger.create({
            trigger: season3Gallery,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
            id: 'season3-gallery-reveal',
            onEnter: () => {
              gsap.to(galleryItems, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out'
              });
              
              // Animate the view more button after gallery items
              if (viewMoreButton) {
                gsap.fromTo(viewMoreButton,
                  { opacity: 0, y: 20 },
                  { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.6, 
                    delay: 0.8,
                    ease: 'back.out(1.5)'
                  }
                );
              }
            },
            onLeaveBack: () => {
              gsap.to(galleryItems, {
                opacity: 0,
                y: 30,
                scale: 0.95,
                duration: 0.5,
                stagger: 0.05,
                ease: 'power1.in'
              });
              
              if (viewMoreButton) {
                gsap.to(viewMoreButton, {
                  opacity: 0,
                  y: 20,
                  duration: 0.4,
                  ease: 'power1.in'
                });
              }
            }
          });
          
          // Add hover effects to gallery items
          galleryItems.forEach((item) => {
            const img = item.querySelector('img');
            
            if (img) {
              item.addEventListener('mouseenter', () => {
                gsap.to(img, {
                  scale: 1.05,
                  duration: 0.4,
                  ease: 'power1.out'
                });
                
                gsap.to(item, {
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  y: -5,
                  duration: 0.4,
                  ease: 'power2.out'
                });
              });
              
              item.addEventListener('mouseleave', () => {
                gsap.to(img, {
                  scale: 1,
                  duration: 0.4,
                  ease: 'power1.out'
                });
                
                gsap.to(item, {
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  y: 0,
                  duration: 0.4,
                  ease: 'power2.out'
                });
              });
            }
          });
          
          // Enhanced reveal for the gallery heading
          const galleryHeading = season3Gallery.querySelector('h3');
          if (galleryHeading) {
            gsap.set(galleryHeading, { opacity: 0, y: -20 });
            
            ScrollTrigger.create({
              trigger: season3Gallery,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
              id: 'season3-gallery-heading-reveal',
              onEnter: () => {
                gsap.to(galleryHeading, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'back.out(1.2)'
                });
                
                gsap.to(galleryHeading.querySelector("::after"), {
                  width: 80,
                  duration: 1,
                  delay: 0.3,
                  ease: 'power2.out'
                });
              },
              onLeaveBack: () => {
                gsap.to(galleryHeading, {
                  opacity: 0,
                  y: -20,
                  duration: 0.5,
                  ease: 'power1.in'
                });
              }
            });
          }
        }
      }
    }
    
    // Create animations for Season 4
    const season4Section = document.querySelector('#season4');
    const season4Gallery = document.querySelector('#season4-gallery');
    
    if (season4Section) {
      // Add a reveal animation for Season 4
      gsap.set(season4Section, { 
        opacity: 0.4, 
        y: 40,
        backgroundColor: 'rgba(254, 249, 219, 0.05)'
      });
      
      // Create intersection observer for the Season 4 section
      ScrollTrigger.create({
        trigger: season4Section,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
        id: 'season4-reveal',
        onEnter: () => {
          // Create a clean entrance for Season 4
          gsap.to(season4Section, {
            opacity: 1,
            y: 0,
            backgroundColor: 'rgba(254, 249, 219, 0.3)',
            duration: 1,
            ease: 'power3.out'
          });
          
          // Animate children elements
          const season4Heading = season4Section.querySelector('h2');
          const season4Divider = season4Section.querySelector('.w-24.h-1');
          const season4Content = season4Section.querySelector('.grid');
          
          if (season4Heading && season4Divider && season4Content) {
            gsap.from(season4Heading, {
              opacity: 0,
              y: -30,
              duration: 0.8,
              delay: 0.2,
              ease: 'back.out(1.4)'
            });
            
            gsap.from(season4Divider, {
              width: 0,
              opacity: 0,
              duration: 0.8,
              delay: 0.4,
              ease: 'power2.out'
            });
            
            gsap.from(season4Content, {
              opacity: 0,
              y: 30,
              duration: 0.8,
              delay: 0.6,
              ease: 'power2.out'
            });
          }
        },
        onLeaveBack: () => {
          gsap.to(season4Section, {
            opacity: 0.4,
            y: 40,
            backgroundColor: 'rgba(254, 249, 219, 0.05)',
            duration: 0.7,
            ease: 'power2.in'
          });
        }
      });
      
      // Add animations for Season 4 gallery
      if (season4Gallery) {
        // Get all gallery items
        const galleryItems = season4Gallery.querySelectorAll('.gallery-item');
        const viewMoreButton = season4Gallery.querySelector('button');
        
        if (galleryItems.length > 0) {
          // Set initial state for all gallery items
          galleryItems.forEach((item) => {
            gsap.set(item, { 
              opacity: 0, 
              y: 30,
              scale: 0.95
            });
          });
          
          // Create a staggered reveal animation for gallery items
          ScrollTrigger.create({
            trigger: season4Gallery,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
            id: 'season4-gallery-reveal',
            onEnter: () => {
              gsap.to(galleryItems, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out'
              });
              
              // Animate the view more button after gallery items
              if (viewMoreButton) {
                gsap.fromTo(viewMoreButton,
                  { opacity: 0, y: 20 },
                  { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.6, 
                    delay: 0.8,
                    ease: 'back.out(1.5)'
                  }
                );
              }
            },
            onLeaveBack: () => {
              gsap.to(galleryItems, {
                opacity: 0,
                y: 30,
                scale: 0.95,
                duration: 0.5,
                stagger: 0.05,
                ease: 'power1.in'
              });
              
              if (viewMoreButton) {
                gsap.to(viewMoreButton, {
                  opacity: 0,
                  y: 20,
                  duration: 0.4,
                  ease: 'power1.in'
                });
              }
            }
          });
          
          // Add hover effects to gallery items
          galleryItems.forEach((item) => {
            const img = item.querySelector('img');
            
            if (img) {
              item.addEventListener('mouseenter', () => {
                gsap.to(img, {
                  scale: 1.05,
                  duration: 0.4,
                  ease: 'power1.out'
                });
                
                gsap.to(item, {
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  y: -5,
                  duration: 0.4,
                  ease: 'power2.out'
                });
              });
              
              item.addEventListener('mouseleave', () => {
                gsap.to(img, {
                  scale: 1,
                  duration: 0.4,
                  ease: 'power1.out'
                });
                
                gsap.to(item, {
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  y: 0,
                  duration: 0.4,
                  ease: 'power2.out'
                });
              });
            }
          });
          
          // Enhanced reveal for the gallery heading
          const galleryHeading = season4Gallery.querySelector('h3');
          if (galleryHeading) {
            gsap.set(galleryHeading, { opacity: 0, y: -20 });
            
            ScrollTrigger.create({
              trigger: season4Gallery,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
              id: 'season4-gallery-heading-reveal',
              onEnter: () => {
                gsap.to(galleryHeading, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'back.out(1.2)'
                });
                
                gsap.to(galleryHeading.querySelector("::after"), {
                  width: 80,
                  duration: 1,
                  delay: 0.3,
                  ease: 'power2.out'
                });
              },
              onLeaveBack: () => {
                gsap.to(galleryHeading, {
                  opacity: 0,
                  y: -20,
                  duration: 0.5,
                  ease: 'power1.in'
                });
              }
            });
          }
        }
      }
    }
    
    // Season 5 animations with ScrollTrigger
    if (season5TitleRef.current && season5DividerRef.current && season5ImageRef.current && season5ContentRef.current) {
      // Animation for title
      ScrollTrigger.create({
        trigger: season5TitleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(season5TitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(season5TitleRef.current, {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: "power2.in"
          });
        }
      });
      
      // Animation for divider
      ScrollTrigger.create({
        trigger: season5DividerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(season5DividerRef.current, {
            opacity: 1,
            scaleX: 1,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(season5DividerRef.current, {
            opacity: 0,
            scaleX: 0,
            duration: 0.5,
            ease: "power2.in"
          });
        }
      });
      
      // Animation for image
      ScrollTrigger.create({
        trigger: season5ImageRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(season5ImageRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.4,
            ease: "power2.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(season5ImageRef.current, {
            opacity: 0,
            x: -50,
            duration: 0.5,
            ease: "power2.in"
          });
        }
      });
      
      // Animation for content
      ScrollTrigger.create({
        trigger: season5ContentRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(season5ContentRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.6,
            ease: "power2.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(season5ContentRef.current, {
            opacity: 0,
            x: 50,
            duration: 0.5,
            ease: "power2.in"
          });
        }
      });
    }
    
    return () => {
      // Clean up on component unmount
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
      
      // Remove added DOM elements
      const scrollIndicator = document.querySelector('.scroll-indicator');
      const galleryProgress = document.querySelector('.gallery-progress');
      
      if (scrollIndicator) {
        scrollIndicator.remove();
      }
      
      if (galleryProgress) {
        galleryProgress.remove();
      }
      
      // Kill all GSAP animations
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
      gsap.killTweensOf('*'); // Kill all tweens
    };
  }, []);
  
  return (
    <div ref={smoothWrapperRef} className="smooth-wrapper overflow-hidden">
      <div ref={smoothContentRef} className="smooth-content">
        <section className="hero-section min-h-screen w-full flex flex-col items-center justify-center relative" 
          data-speed="0.8">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FEF9DB] to-white opacity-70 z-0"></div>
          <div className="container mx-auto px-4 mt-32 z-10 relative">
            <div className="text-center mb-12">
              <h1 className="text-[#F5AF28] mb-4 lg:mb-8 text-3xl mb:text-4xl lg:text-5xl xl:text-6xl font-black">10 NĂM - 5 MÙA HỘI SÁCH Ở BẾN TRE</h1>
              <h1 className="text-[#F5AF28] text-3xl mb:text-4xl font-black lg:mb-8 xl:mb-16">Một hành trình rực rỡ của sách, tri thức và nhiệt huyết tuổi trẻ</h1>
            </div>
            
            <div className="max-w-6xl mx-auto text-xl text-justify text-gray-700 font-normal">
              <p className="mb-4 lg:mb-6 xl:mb-8">
                2015, tụi mình, những thành viên của nhóm Tôi vào Đại học - đã bắt đầu hành trình này với một ước mơ rất giản đơn: đưa sách về gần hơn với các bạn học sinh quê nhà. Và thế là, mùa hội sách đầu tiên ra đời - nhỏ xinh mà chan chứa yêu thương. 
              </p>
              <p className="mb-4 lg:mb-6 xl:mb-8">
                Rồi những năm tiếp theo, 2017, 2019, hội sách được tụi mình vẽ thêm những sắc màu mới hơn: trò chơi sáng tạo, buổi trò chuyện đáng nhớ, góc đọc sách xinh xắn… Tất cả lớn dần cùng tình yêu dành cho sách và cho nhau.
              </p>
              <p className="mb-4 lg:mb-6 xl:mb-8">
                Đến 2023, hội sách "Mơ Hỏi Mở" chính thức chào đời, là sự kết hợp đặc biệt giữa nhóm Tôi Dám Thay Đổi và dự án Milibri. Đây không chỉ là nơi trưng bày sách, mà còn là không gian để ai cũng có thể "chạm" vào sách theo cách của riêng mình - nhẹ nhàng, gần gũi nhưng cũng không kém phần bất ngờ.
              </p>
              <p className="mb-4 lg:mb-6 xl:mb-8">
                Và năm 2025 này, tụi mình lại tiếp tục đồng hành - thêm nhiều ý tưởng mới mẻ hơn, nhiều kết nối sâu sắc hơn, để tri thức và những giấc mơ cứ thế lan tỏa khắp Bến Tre thân thương.
              </p>
            </div>
          </div>
          <div className="w-full text-center bg-white/80 backdrop-blur-sm rounded-lg py-8 px-4 bottom-0 left-0 right-0 z-20">
            <p className="text-xl font-medium text-[#00724D] mb-4">Cuộn xuống để khám phá từng mùa Hội sách</p>
            <div className="animate-bounce">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                <path d="M7 13L12 18L17 13" stroke="#00724D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7L12 12L17 7" stroke="#00724D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </section>
        
        <section id="season1" className="season-section min-h-screen relative" data-speed="1.0">
          <div className="top-0 bg-white py-8 z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-[#00724D]">Mùa 1: Hội sách Đa Sắc Thái 2015</h2>
            <div className="w-24 h-1 bg-[#00724D] mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div id="season1-description" className="max-w-6xl mx-auto px-6 py-6 min-h-[60vh] flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-xl duration-300">
                <img 
                  src="/journey-materials/ss1/logo.jpg"  
                  alt="Logo 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl text-gray-700 mb-6 text-justify">
                  Lần đầu tiên, một hội sách do chính học sinh - sinh viên tụi mình tổ chức ngay tại quê nhà. Hội sách ấy như một khu vườn đầy sắc màu - nơi đó tri thức được trao tay, và niềm vui từng trang sách cũ tìm được người bạn mới.
                </p>
                <p className="text-xl text-gray-700 mb-6">
                  <a className="font-bold">Ngày tổ chức:</a> 1/11/2015
                </p>
                <p className="text-xl text-gray-700">
                  <a className="font-bold">Quy mô:</a>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><a className="font-bold">Số lượng người tham gia:</a> 600 người</li>
                  <li><a className="font-bold">Số lượng sách tìm được chủ mới:</a> 2200 quyển</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          
          <div id="season1-gallery" className="season1-gallery w-full py-12 min-h-[80vh] overflow-hidden">
            <div className="sticky top-[120px] max-w-6xl mx-auto px-6">
              <h3 className="text-3xl font-bold mb-10 text-[#00724D] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#00724D] after:w-[80px] after:rounded-full">Hoạt động nổi bật</h3>
              
              <div className="season1-images-container w-full pb-8 pt-4" ref={season1GalleryRef}>
                <div className="season1-images-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="gallery-item w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative cursor-pointer hover:scale-105"
                    onClick={() => setSelectedImage('/journey-materials/ss1/ss1-1.jpg')}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src="/journey-materials/ss1/ss1-1.jpg" 
                        alt="Mùa 1 - Ảnh 1" 
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="gallery-item w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative cursor-pointer hover:scale-105"
                    onClick={() => setSelectedImage('/journey-materials/ss1/ss1-2.jpg')}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src="/journey-materials/ss1/ss1-2.jpg" 
                        alt="Mùa 1 - Ảnh 2" 
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="gallery-item w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative cursor-pointer hover:scale-105"
                    onClick={() => setSelectedImage('/journey-materials/ss1/ss1-3.jpg')}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src="/journey-materials/ss1/ss1-3.jpg" 
                        alt="Mùa 1 - Ảnh 3" 
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="gallery-item w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative cursor-pointer hover:scale-105"
                    onClick={() => setSelectedImage('/journey-materials/ss1/ss1-4.jpg')}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src="/journey-materials/ss1/ss1-4.jpg" 
                        alt="Mùa 1 - Ảnh 4" 
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="gallery-item w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative md:col-span-2 cursor-pointer hover:scale-105"
                    onClick={() => setSelectedImage('/journey-materials/ss1/ss1-5.jpg')}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src="/journey-materials/ss1/ss1-5.jpg" 
                        alt="Mùa 1 - Ảnh 5" 
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="season2" className="season-section min-h-screen py-24 relative" data-speed="1.0">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-[#FEF9DB]/10 w-full"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 text-[#00724D]">Mùa 2: Hội sách Chín Ba-phần-tư 2017</h2>
            <div className="w-24 h-1 bg-[#00724D] mx-auto mb-12 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-gray-700 mb-6 text-justify">
                  Lấy cảm hứng từ thế giới phép thuật, mùa 2 là một cuộc phiêu lưu kỳ thú với sách, nơi những người bạn “phù thủy tri thức” gặp nhau, chơi hết mình và học điều hay theo cách không ai ngờ tới.
                </p>
                <p className="text-xl text-gray-700 mb-6">
                  <a className="font-bold">Ngày tổ chức:</a> 3/12/2017
                </p>
                <p className="text-xl text-gray-700 mb-6">
                  <a className="font-bold">Chủ đề:</a> Smart Reader - Wise Wizard
                </p>
                <p className="text-xl text-gray-700">
                  <a className="font-bold">Quy mô:</a>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><a className="font-bold">Số lượng người tham gia:</a> 800 người</li>
                  <li><a className="font-bold">Số lượng sách tìm được chủ mới:</a> 4000 quyển</li>
                  </ul>
                </p>
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-xl duration-300">
                <img 
                  src="/journey-materials/ss2/logo2.jpg"  
                  alt="Mùa Hội sách thứ hai" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div id="season2-gallery" className="season2-gallery w-full py-12 min-h-[80vh] overflow-hidden bg-gradient-to-b from-[#FEF9DB]/10 to-transparent relative">              
              <div className="sticky top-[120px] max-w-6xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-6 text-[#00724D] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#00724D] after:w-[80px] after:rounded-full">Hoạt động nổi bật</h3>
                
                <div className="season2-images-container w-full pb-8 pt-4" ref={season2GalleryRef}>
                  <div className="season2-images-grid">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="gallery-item md:col-span-2 md:row-span-2 w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative">
                        <div className="relative overflow-hidden h-full">
                          <img 
                            src="/journey-materials/ss2/ss2-1.jpg" 
                            alt="Mùa 2 - Ảnh 1" 
                            className="w-full h-[400px] md:h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            onClick={() => setSelectedImage('/journey-materials/ss2/ss2-1.jpg')}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="gallery-item w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative">
                        <div className="relative overflow-hidden">
                          <img 
                            src="/journey-materials/ss2/ss2-2.jpg" 
                            alt="Mùa 2 - Ảnh 2" 
                            className="w-full h-[200px] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            onClick={() => setSelectedImage('/journey-materials/ss2/ss2-2.jpg')}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="gallery-item w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative">
                        <div className="relative overflow-hidden">
                          <img 
                            src="/journey-materials/ss2/ss2-3.jpg" 
                            alt="Mùa 2 - Ảnh 3" 
                            className="w-full h-[200px] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            onClick={() => setSelectedImage('/journey-materials/ss2/ss2-3.jpg')}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="gallery-item md:col-span-3 w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative">
                        <div className="relative overflow-hidden">
                          <img 
                            src="/journey-materials/ss2/ss2-4.jpg" 
                            alt="Mùa 2 - Ảnh 4" 
                            className="w-full h-[300px] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            onClick={() => setSelectedImage('/journey-materials/ss2/ss2-4.jpg')}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="gallery-item md:col-span-3 w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl relative">
                        <div className="relative overflow-hidden">
                          <img 
                            src="/journey-materials/ss2/ss2-5.jpg" 
                            alt="Mùa 2 - Ảnh 5" 
                            className="w-full h-[400px] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            onClick={() => setSelectedImage('/journey-materials/ss2/ss2-5.jpg')}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section id="season3" className="season-section min-h-screen py-24 relative bg-white" data-speed="1.0">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white w-full"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 text-[#00724D]">Mùa 3: Hội sách Chong chóng tre 2019</h2>
            <div className="w-24 h-1 bg-[#00724D] mx-auto mb-12 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-xl duration-300">
                <img 
                  src="/journey-materials/ss3/logo3.jpg"  
                  alt="Mùa Hội sách thứ ba" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl text-gray-700 mb-6 text-justify">
                  Chong chóng quay, gió thổi mát, ước mơ cất cánh theo từng trang sách. Mùa 3 là một lời nhắn gửi dịu dàng: sách luôn là người bạn đồng hành lặng lẽ nhưng vững vàng trên hành trình lớn lên của tụi mình.
                </p>
                <p className="text-xl text-gray-700 mb-6">
                  <a className="font-bold">Ngày tổ chức:</a> 31/03/2019
                </p>
                <p className="text-xl text-gray-700 mb-6">
                  <a className="font-bold">Chủ đề:</a> Sách - Bạn đồng hành của những ước mơ
                </p>
                <p className="text-xl text-gray-700">
                  <a className="font-bold">Quy mô:</a>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><a className="font-bold">Số lượng người tham gia:</a> 800 người</li>
                  <li><a className="font-bold">Số lượng sách tìm được chủ mới:</a> 1500 quyển</li>
                  </ul>
                </p>
              </div>
            </div>
            
            <div id="season3-gallery" className="season3-gallery w-full py-12 min-h-[80vh] overflow-hidden">
              <div className="sticky top-[120px] max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-10 text-[#00724D] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#00724D] after:w-[80px] after:rounded-full">Hoạt động nổi bật</h3>
                <div className="season3-images-container w-full pb-8 pt-4" ref={season3GalleryRef}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {season3Images.slice(0, 6).map((image, index) => (
                      <div key={index} className="gallery-item w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative cursor-pointer"
                          onClick={() => setSelectedImage(image.src)}>
                        <div className="relative overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-10">
                    <Dialog onOpenChange={(open) => {
                      if (open) {
                        setCurrentPage(1);
                        setIsPageChanging(false);
                      }
                    }}>
                      <DialogTrigger asChild>
                        <button className="px-6 py-3 bg-[#00724D] text-white rounded-full font-medium hover:bg-[#00724D]/90 transition-colors shadow-md flex items-center gap-2">
                          Xem thêm ảnh
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                            <circle cx="9" cy="9" r="2"></circle>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                          </svg>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[900px] p-0 bg-white rounded-xl overflow-hidden max-h-[90vh] flex flex-col" hideCloseButton>
                        <div className="relative p-6 pb-2 flex-shrink-0 border-b">
                          <h2 className="text-2xl font-bold text-[#00724D]">Tất cả hình ảnh Mùa 3</h2>
                          <DialogClose className="absolute top-4 right-4 rounded-full p-1.5 hover:bg-gray-100 transition-colors">
                            <X className="h-5 w-5" />
                          </DialogClose>
                        </div>
                        <div className="p-6 pt-4 overflow-y-auto flex-grow max-h-[calc(90vh-80px)]">
                          <div className="relative">
                            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-opacity duration-300 ${isPageChanging ? 'opacity-0' : 'opacity-100'}`}>
                              {season3Images
                                .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
                                .map((image, index) => (
                                  <div 
                                    key={index} 
                                    className="relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 animate-fadeIn"
                                    onClick={() => setSelectedImage(image.src)}
                                    style={{animationDelay: `${index * 50}ms`}}
                                  >
                                    <img 
                                      src={image.src} 
                                      alt={image.alt}
                                      className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                  </div>
                                ))}
                            </div>
                          </div>
                          
                          {/* Pagination controls */}
                          <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">
                            <button 
                              onClick={() => {
                                if (currentPage > 1 && !isPageChanging) {
                                  setIsPageChanging(true);
                                  setTimeout(() => {
                                    setCurrentPage(prev => Math.max(prev - 1, 1));
                                    setTimeout(() => {
                                      setIsPageChanging(false);
                                    }, 300);
                                  }, 300);
                                }
                              }}
                              disabled={currentPage === 1 || isPageChanging}
                              className={`px-3 py-1 rounded-md flex items-center gap-1 ${
                                currentPage === 1 || isPageChanging
                                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                                  : 'bg-[#00724D]/10 text-[#00724D] hover:bg-[#00724D]/20'
                              }`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                                <path d="m15 18-6-6 6-6"/>
                              </svg>
                              Trước
                            </button>
                            
                            <div className="flex items-center gap-1 mx-1 overflow-x-auto py-1 max-w-[300px] justify-center">
                              {Array.from({ length: Math.ceil(season3Images.length / imagesPerPage) }).map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    if (currentPage !== idx + 1 && !isPageChanging) {
                                      setIsPageChanging(true);
                                      setTimeout(() => {
                                        setCurrentPage(idx + 1);
                                        setTimeout(() => {
                                          setIsPageChanging(false);
                                        }, 300);
                                      }, 300);
                                    }
                                  }}
                                  disabled={isPageChanging}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    currentPage === idx + 1
                                      ? 'bg-[#00724D] text-white'
                                      : isPageChanging 
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                  }`}
                                  aria-label={`Page ${idx + 1}`}
                                >
                                  {idx + 1}
                                </button>
                              ))}
                            </div>
                            
                            <button
                              onClick={() => {
                                if (currentPage < Math.ceil(season3Images.length / imagesPerPage) && !isPageChanging) {
                                  setIsPageChanging(true);
                                  setTimeout(() => {
                                    setCurrentPage(prev => Math.min(prev + 1, Math.ceil(season3Images.length / imagesPerPage)));
                                    setTimeout(() => {
                                      setIsPageChanging(false);
                                    }, 300);
                                  }, 300);
                                }
                              }}
                              disabled={currentPage === Math.ceil(season3Images.length / imagesPerPage) || isPageChanging}
                              className={`px-3 py-1 rounded-md flex items-center gap-1 ${
                                currentPage === Math.ceil(season3Images.length / imagesPerPage) || isPageChanging
                                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                  : 'bg-[#00724D]/10 text-[#00724D] hover:bg-[#00724D]/20'
                              }`}
                            >
                              Tiếp
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6"/>
                              </svg>
                            </button>
                          </div>
                          
                          <div className="text-center text-gray-500 text-sm mt-2">
                            Trang {currentPage} / {Math.ceil(season3Images.length / imagesPerPage)}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    {selectedImage && (
                      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                        <DialogContent className="sm:max-w-[1200px] p-0 bg-transparent border-none shadow-none max-h-[95vh] overflow-auto" hideCloseButton>
                          <div className="relative rounded-lg overflow-hidden">
                            <img 
                              src={selectedImage} 
                              alt="Enlarged view"
                              className="w-full max-h-[90vh] object-contain bg-black/80"
                            />
                            <DialogClose className="absolute top-4 right-4 rounded-full p-2 bg-black/50 hover:bg-black/70 text-white transition-all duration-300 backdrop-blur-sm">
                              <X className="h-6 w-6" />
                            </DialogClose>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="season4" className="season-section min-h-screen py-8 relative" data-speed="1.0">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-[#FEF9DB]/10 w-full"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 text-[#00724D]">Mùa 4: Hội sách Mơ Hỏi Mở 2023</h2>
            <div className="w-24 h-1 bg-[#00724D] mx-auto mb-12 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-gray-700 mb-6 text-justify">
                  Một không gian mở cho những tâm hồn mơ màng và đầy khát khao. Mùa 4 này không chỉ để đọc, mà còn để hỏi, để mơ, để tìm thấy chính mình qua từng câu chuyện - và để biết rằng, đọc sách cũng là một hành trình rất riêng. 
                </p>
                <p className="text-xl text-gray-700 mb-6">
                  <a className="font-bold">Ngày tổ chức:</a> 16/07/2023
                </p>
                <p className="text-xl text-gray-700 mb-6">
                  <a className="font-bold">Chủ đề:</a> Từ Mơ màng đến Mở mang
                </p>
                <p className="text-xl text-gray-700">
                  <a className="font-bold">Quy mô:</a>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><a className="font-bold">Số lượng người tham gia:</a> 1000 người</li>
                  <li><a className="font-bold">Số lượng sách tìm được chủ mới:</a> 5000 quyển</li>
                  </ul>
                </p>
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-xl duration-300">
                <img 
                  src="/journey-materials/ss4/logo4.jpg"  
                  alt="Mùa Hội sách thứ tư" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div id="season4-gallery" className="season4-gallery w-full py-12 min-h-[80vh] overflow-hidden bg-gradient-to-b from-[#FEF9DB]/10 to-transparent relative">
              <div className="sticky top-[120px] max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-10 text-[#00724D] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] after:bg-[#00724D] after:w-[80px] after:rounded-full">Hoạt động nổi bật</h3>
                <div className="season4-images-container w-full pb-8 pt-4" ref={season4GalleryRef}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {season4Images.slice(0, 6).map((image, index) => (
                      <div key={index} className="gallery-item w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] relative cursor-pointer"
                          onClick={() => setSelectedImage(image.src)}>
                        <div className="relative overflow-hidden">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-10">
                    <Dialog onOpenChange={(open) => {
                      if (open) {
                        setCurrentPage(1);
                        setIsPageChanging(false);
                      }
                    }}>
                      <DialogTrigger asChild>
                        <button className="px-6 py-3 bg-[#00724D] text-white rounded-full font-medium hover:bg-[#00724D]/90 transition-colors shadow-md flex items-center gap-2">
                          Xem thêm ảnh
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                            <circle cx="9" cy="9" r="2"></circle>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                          </svg>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[900px] p-0 bg-white rounded-xl overflow-hidden max-h-[90vh] flex flex-col" hideCloseButton>
                        <div className="relative p-6 pb-2 flex-shrink-0 border-b">
                          <h2 className="text-2xl font-bold text-[#00724D]">Tất cả hình ảnh Mùa 4</h2>
                          <DialogClose className="absolute top-4 right-4 rounded-full p-1.5 hover:bg-gray-100 transition-colors">
                            <X className="h-5 w-5" />
                          </DialogClose>
                        </div>
                        <div className="p-6 pt-4 overflow-y-auto flex-grow max-h-[calc(90vh-80px)]">
                          <div className="relative">
                            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-opacity duration-300 ${isPageChanging ? 'opacity-0' : 'opacity-100'}`}>
                              {season4Images
                                .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
                                .map((image, index) => (
                                  <div 
                                    key={index} 
                                    className="relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 animate-fadeIn"
                                    onClick={() => setSelectedImage(image.src)}
                                    style={{animationDelay: `${index * 50}ms`}}
                                  >
                                    <img 
                                      src={image.src} 
                                      alt={image.alt}
                                      className="w-full h-[180px] object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                  </div>
                                ))}
                            </div>
                          </div>
                          
                          {/* Pagination controls */}
                          <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">
                            <button 
                              onClick={() => {
                                if (currentPage > 1 && !isPageChanging) {
                                  setIsPageChanging(true);
                                  setTimeout(() => {
                                    setCurrentPage(prev => Math.max(prev - 1, 1));
                                    setTimeout(() => {
                                      setIsPageChanging(false);
                                    }, 300);
                                  }, 300);
                                }
                              }}
                              disabled={currentPage === 1 || isPageChanging}
                              className={`px-3 py-1 rounded-md flex items-center gap-1 ${
                                currentPage === 1 || isPageChanging
                                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                                  : 'bg-[#00724D]/10 text-[#00724D] hover:bg-[#00724D]/20'
                              }`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                                <path d="m15 18-6-6 6-6"/>
                              </svg>
                              Trước
                            </button>
                            
                            <div className="flex items-center gap-1 mx-1 overflow-x-auto py-1 max-w-[300px] justify-center">
                              {Array.from({ length: Math.ceil(season4Images.length / imagesPerPage) }).map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    if (currentPage !== idx + 1 && !isPageChanging) {
                                      setIsPageChanging(true);
                                      setTimeout(() => {
                                        setCurrentPage(idx + 1);
                                        setTimeout(() => {
                                          setIsPageChanging(false);
                                        }, 300);
                                      }, 300);
                                    }
                                  }}
                                  disabled={isPageChanging}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    currentPage === idx + 1
                                      ? 'bg-[#00724D] text-white'
                                      : isPageChanging 
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                  }`}
                                  aria-label={`Page ${idx + 1}`}
                                >
                                  {idx + 1}
                                </button>
                              ))}
                            </div>
                            
                            <button
                              onClick={() => {
                                if (currentPage < Math.ceil(season4Images.length / imagesPerPage) && !isPageChanging) {
                                  setIsPageChanging(true);
                                  setTimeout(() => {
                                    setCurrentPage(prev => Math.min(prev + 1, Math.ceil(season4Images.length / imagesPerPage)));
                                    setTimeout(() => {
                                      setIsPageChanging(false);
                                    }, 300);
                                  }, 300);
                                }
                              }}
                              disabled={currentPage === Math.ceil(season4Images.length / imagesPerPage) || isPageChanging}
                              className={`px-3 py-1 rounded-md flex items-center gap-1 ${
                                currentPage === Math.ceil(season4Images.length / imagesPerPage) || isPageChanging
                                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                  : 'bg-[#00724D]/10 text-[#00724D] hover:bg-[#00724D]/20'
                              }`}
                            >
                              Tiếp
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6"/>
                              </svg>
                            </button>
                          </div>
                          
                          <div className="text-center text-gray-500 text-sm mt-2">
                            Trang {currentPage} / {Math.ceil(season4Images.length / imagesPerPage)}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FEF9DB]/10 to-white"></div>
        </section>

        <section id="season5" className="season-section min-h-screen py-8 relative bg-white" data-speed="1.0">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white w-full"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 text-[#00724D] opacity-0 transform translate-y-10 transition-all duration-700" ref={season5TitleRef}>Mùa 5: Hội sách Mơ Hỏi Mở 2025</h2>
            <div className="w-24 h-1 bg-[#00724D] mx-auto mb-12 rounded-full opacity-0 transform scale-x-0 transition-all duration-700 delay-100" ref={season5DividerRef}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-700 hover:shadow-xl opacity-0 translate-x-[-50px]" ref={season5ImageRef}>
                <img 
                  src="/journey-materials/logo5.jpg"  
                  alt="Mùa Hội sách thứ 5" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="opacity-0 translate-x-[50px] transition-all duration-700 mt-6 md:mt-0" ref={season5ContentRef}>
                <div className="relative">
                  <p className="text-4xl font-black text-gray-700 mb-8 text-center bg-gradient-to-r from-[#00724D] via-[#4ade80] to-[#00724D] bg-clip-text animate-pulse">
                    Đang làm nè!!!
                  </p>
                  <div className="flex justify-center gap-4 mb-6">
                    <span className="inline-block w-3 h-3 bg-[#00724D] rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                    <span className="inline-block w-3 h-3 bg-[#00724D] rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                    <span className="inline-block w-3 h-3 bg-[#00724D] rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                  </div>
                  <p className="text-lg text-gray-600 text-center">
                    Sự kiện sẽ diễn ra vào tháng 7/2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FEF9DB]/30 to-transparent w-full"></div> */}
        </section>
        
        {/* <section id="final" className="journey-future bg-gradient-to-b from-white to-[#FEF9DB]/30" data-speed="1.0">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-xl">
              <img 
                src="/journey-materials/ht10.png" 
                alt="10 năm hành trình" 
                className="hidden md:block w-full h-auto"
              />
              <img 
                src="/journey-materials/ht10-phone.png" 
                alt="10 năm hành trình" 
                className="block md:hidden w-full h-auto"
              />
            </div>
          </div>
        </section> */}

        {/* <a href="#" className="inline-block bg-[#00724D] text-white py-3 px-8 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 mb-12">
          Quay lại đầu trang
        </a> */}
        <section id="footer">
          <Footer />
        </section>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          className="bg-[#00724D] hover:bg-[#00724D]/90 text-white py-3 px-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  )
}