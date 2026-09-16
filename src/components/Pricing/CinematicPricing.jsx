import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PricingIntro from './Scenes/PricingIntro';
import SceneLaunch from './Scenes/SceneLaunch';
import SceneGrowth from './Scenes/SceneGrowth';
import SceneScale from './Scenes/SceneScale';
import SceneCustom from './Scenes/SceneCustom';
import SceneAISystems from './Scenes/SceneAISystems';
import PricingProgress from './PricingProgress';

gsap.registerPlugin(ScrollTrigger);

const CinematicPricing = () => {
  const containerRef = useRef(null);
  
  const introRef = useRef(null);
  const launchRef = useRef(null);
  const growthRef = useRef(null);
  const scaleRef = useRef(null);
  const customRef = useRef(null);
  const aiRef = useRef(null);

  const [currentTier, setCurrentTier] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;
    
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: isMobile ? "+=6000" : "+=10000",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const p = self.progress;
          setShowProgress(p > 0.05 && p < 0.9);
          
          if (p < 0.1) setCurrentTier(0); // Intro
          else if (p < 0.3) setCurrentTier(1); // Launch
          else if (p < 0.5) setCurrentTier(2); // Growth
          else if (p < 0.7) setCurrentTier(3); // Scale
          else if (p < 0.85) setCurrentTier(4); // Custom
          else setCurrentTier(5); // AI
        }
      }
    });

    // --- SETUP STATES ---
    const introLabel = introRef.current.querySelector('.intro-label');
    const introLine = introRef.current.querySelector('.intro-line');
    const introTiny = introRef.current.querySelector('.intro-tiny');
    const introTitle = introRef.current.querySelector('.intro-title');
    const introSub = introRef.current.querySelector('.intro-subtext');
    gsap.set([introLabel, introLine, introTiny, introTitle, introSub], { autoAlpha: 0, y: 20 });
    gsap.set(introRef.current, { autoAlpha: 1 });

    const launchHeader = launchRef.current.querySelector('.launch-header');
    const launchContent = launchRef.current.querySelector('.launch-content');
    const launchPrice = launchRef.current.querySelector('.launch-price');
    const launchLine = launchRef.current.querySelector('.launch-line');
    gsap.set([launchHeader, launchContent, launchPrice], { autoAlpha: 0 });
    gsap.set(launchLine, { width: 0, autoAlpha: 0 });

    const growthHeader = growthRef.current.querySelector('.growth-header');
    const growthContent = growthRef.current.querySelector('.growth-content');
    const growthPrice = growthRef.current.querySelector('.growth-price');
    const growthBg = growthRef.current.querySelector('.growth-bg');
    gsap.set([growthHeader, growthContent, growthPrice, growthBg], { autoAlpha: 0 });

    const scaleHeader = scaleRef.current.querySelector('.scale-header');
    const scaleTitle = scaleRef.current.querySelector('.scale-title');
    const scaleDesc = scaleRef.current.querySelector('.scale-desc');
    const scalePrice = scaleRef.current.querySelector('.scale-price');
    const scaleFeatures = scaleRef.current.querySelector('.scale-features');
    const scaleCta = scaleRef.current.querySelector('.scale-cta');
    const scaleNetwork = scaleRef.current.querySelector('.scale-network');
    gsap.set([scaleHeader, scaleTitle, scaleDesc, scalePrice, scaleFeatures, scaleCta, scaleNetwork], { autoAlpha: 0 });

    const customHeader = customRef.current.querySelector('.custom-header');
    const customTitle = customRef.current.querySelector('.custom-title');
    const customPrice = customRef.current.querySelector('.custom-price');
    const customDesc = customRef.current.querySelector('.custom-desc');
    const customSub = customRef.current.querySelector('.custom-subdesc');
    const customServices = customRef.current.querySelector('.custom-services');
    const customCta = customRef.current.querySelector('.custom-cta');
    gsap.set([customHeader, customTitle, customPrice, customDesc, customSub, customServices, customCta], { autoAlpha: 0 });

    const aiCard = aiRef.current.querySelector('.ai-card');
    gsap.set(aiCard, { autoAlpha: 0, scale: 0.9 });


    // --- TIMELINE ---
    
    // INTRO
    masterTl
      .to(introLabel, { autoAlpha: 1, y: 0, duration: 1 })
      .to(introLine, { autoAlpha: 1, y: 0, duration: 0.5 })
      .to(introTiny, { autoAlpha: 1, y: 0, duration: 0.5 })
      .to(introTitle, { autoAlpha: 1, y: 0, duration: 1.5 })
      .to(introSub, { autoAlpha: 1, y: 0, duration: 1 })
      .to({}, { duration: 1 }) // Pause
      .to(introRef.current, { autoAlpha: 0, scale: 1.1, duration: 1.5 })

    // LAUNCH
      .set(launchRef.current, { autoAlpha: 1 })
      .to(launchHeader, { autoAlpha: 1, duration: 1 })
      .to(launchPrice, { autoAlpha: 1, x: isMobile ? 0 : -50, duration: 1.5 }, "<")
      .to(launchContent, { autoAlpha: 1, duration: 1.5 }, "-=0.5")
      .to({}, { duration: 1.5 }) // Pause
      
      // LAUNCH TO GROWTH TRANSITION
      .to(launchLine, { autoAlpha: 1, width: isMobile ? "0%" : "150%", duration: 2 })
      .to(launchContent, { autoAlpha: 0, x: -30, duration: 1 }, "-=1")
      .to(launchPrice, { scale: 0.8, x: isMobile ? 0 : 50, duration: 1 }, "<")
      .to(launchHeader, { autoAlpha: 0, duration: 0.5 }, "<")
      .to(launchRef.current, { autoAlpha: 0, duration: 1 })

    // GROWTH
      .set(growthRef.current, { autoAlpha: 1 })
      .to(growthBg, { autoAlpha: 1, duration: 1 })
      .to(growthHeader, { autoAlpha: 1, duration: 0.5 }, "<")
      .to(growthPrice, { autoAlpha: 1, duration: 1 }, "-=0.5")
      .to(growthContent, { autoAlpha: 1, duration: 1.5 }, "-=0.5")
      .to({}, { duration: 1.5 }) // Pause

      // GROWTH TO SCALE TRANSITION
      .to(growthBg, { scale: 1.2, autoAlpha: 0, duration: 1.5 })
      .to(growthContent, { autoAlpha: 0, duration: 1 }, "<")
      .to(growthPrice, { autoAlpha: 0, scale: 1.5, duration: 1 }, "<")
      .to(growthRef.current, { autoAlpha: 0, duration: 0.5 })

    // SCALE
      .set(scaleRef.current, { autoAlpha: 1 })
      .to(scaleNetwork, { autoAlpha: 1, scale: 1, duration: 2 })
      .to(scaleHeader, { autoAlpha: 1, duration: 0.5 }, "-=1")
      .to(scalePrice, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.5")
      .to(scaleTitle, { autoAlpha: 1, y: 0, duration: 1 }, "-=0.5")
      .to(scaleDesc, { autoAlpha: 1, duration: 1 }, "-=0.5")
      .to(scaleFeatures, { autoAlpha: 1, duration: 1 })
      .to(scaleCta, { autoAlpha: 1, duration: 1 })
      .to({}, { duration: 1.5 }) // Pause

      // SCALE TO CUSTOM TRANSITION (Blackout)
      .to(scaleNetwork, { scale: 2, autoAlpha: 0, duration: 2 })
      .to([scaleHeader, scalePrice, scaleTitle, scaleDesc, scaleFeatures, scaleCta], { autoAlpha: 0, duration: 1 }, "-=1.5")
      .to(scaleRef.current, { autoAlpha: 0, duration: 0.5 })

    // CUSTOM
      .set(customRef.current, { autoAlpha: 1 })
      .to(customHeader, { autoAlpha: 1, duration: 1 })
      .to(customTitle, { autoAlpha: 1, scale: 1, duration: 1.5 })
      .to(customPrice, { autoAlpha: 1, duration: 1 }, "-=0.5")
      .to(customDesc, { autoAlpha: 1, duration: 1 }, "-=0.5")
      .to(customSub, { autoAlpha: 1, duration: 1 })
      .to(customServices, { autoAlpha: 1, duration: 1 })
      .to(customCta, { autoAlpha: 1, duration: 1 })
      .to({}, { duration: 1.5 }) // Pause
      
      // CUSTOM TO AI TRANSITION
      .to([customTitle, customPrice, customDesc, customSub, customServices, customCta], { autoAlpha: 0.2, filter: "blur(5px)", duration: 1.5 })

    // AI SYSTEMS
      .set(aiRef.current, { autoAlpha: 1 })
      .to(aiCard, { autoAlpha: 1, scale: 1, duration: 1.5 })
      .to({}, { duration: 2 }); // End Pause

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if(t.vars.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-mw-black relative overflow-hidden" id="pricing">
      {showProgress && <PricingProgress currentTier={currentTier} />}
      
      <PricingIntro innerRef={introRef} />
      <SceneLaunch innerRef={launchRef} />
      <SceneGrowth innerRef={growthRef} />
      <SceneScale innerRef={scaleRef} />
      <SceneCustom innerRef={customRef} />
      <SceneAISystems innerRef={aiRef} />
    </section>
  );
};

export default CinematicPricing;
