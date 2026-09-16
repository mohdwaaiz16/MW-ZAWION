import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SceneIdeas from './Scenes/SceneIdeas';
import SceneSystems from './Scenes/SceneSystems';
import SceneExperiences from './Scenes/SceneExperiences';
import SceneImpact from './Scenes/SceneImpact';
import ProgressIndicator from './ProgressIndicator';

gsap.registerPlugin(ScrollTrigger);

const CinematicStory = () => {
  const containerRef = useRef(null);
  
  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene3Ref = useRef(null);
  const scene4Ref = useRef(null);

  const [currentScene, setCurrentScene] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    
    // We create a master timeline pinned to the container
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=6000", // Long scroll duration for the entire story
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          setProgress(self.progress);
          
          // Determine current scene index based on progress roughly
          if (self.progress < 0.25) setCurrentScene(0);
          else if (self.progress < 0.5) setCurrentScene(1);
          else if (self.progress < 0.75) setCurrentScene(2);
          else setCurrentScene(3);

          setShowProgress(self.progress > 0 && self.progress < 0.98);
        }
      }
    });

    // Initial States
    gsap.set(scene1Ref.current, { autoAlpha: 1 });
    const s1Text = scene1Ref.current.querySelector('.ideas-text');
    const s1Subtext = scene1Ref.current.querySelector('.ideas-subtext');
    const s1Line = scene1Ref.current.querySelector('.ideas-line');
    const s1Hint = scene1Ref.current.querySelector('.ideas-scroll-hint');
    
    gsap.set(s1Text, { scale: 0.7, autoAlpha: 0, filter: "blur(10px)" });
    gsap.set(s1Line, { width: 0, autoAlpha: 0 });

    const s2Text = scene2Ref.current.querySelector('.systems-text');
    const s2Subtext = scene2Ref.current.querySelector('.systems-subtext');
    const s2Header = scene2Ref.current.querySelector('.systems-header');
    const s2Network = scene2Ref.current.querySelector('.systems-network');
    const s2Labels = scene2Ref.current.querySelectorAll('.systems-label');
    gsap.set(s2Text, { scale: 1.5, autoAlpha: 0 });

    const s3Text = scene3Ref.current.querySelector('.experiences-text');
    const s3Subtext = scene3Ref.current.querySelector('.experiences-subtext');
    const s3Header = scene3Ref.current.querySelector('.experiences-header');
    const s3Bg = scene3Ref.current.querySelector('.experiences-bg');
    const s3Fragments = scene3Ref.current.querySelectorAll('.experiences-fragment');
    gsap.set(s3Text, { scale: 0.5, autoAlpha: 0, y: 50 });

    const s4Text = scene4Ref.current.querySelector('.impact-text');
    const s4Subtext = scene4Ref.current.querySelector('.impact-subtext');
    const s4Header = scene4Ref.current.querySelector('.impact-header');
    gsap.set(s4Text, { scale: 1.2, autoAlpha: 0 });

    // --- SCENE 1: IDEAS (0% - 25%) ---
    masterTl
      // Intro Reveal
      .to(s1Text, { scale: 1, autoAlpha: 1, filter: "blur(0px)", duration: 2 })
      .to(s1Line, { width: "40%", autoAlpha: 1, duration: 2 }, "<")
      .to(s1Subtext, { autoAlpha: 1, duration: 1 }, "-=0.5")
      .to(s1Hint, { autoAlpha: 1, duration: 1 }, "<")
      
      // Pause
      .to({}, { duration: 1 })
      
      // Transition out
      .to(s1Hint, { autoAlpha: 0, duration: 0.5 })
      .to(s1Line, { autoAlpha: 0, width: "100%", duration: 1 }, "<")
      .to(s1Subtext, { autoAlpha: 0, y: -20, duration: 1 }, "<")
      .to(s1Text, { scale: 1.2, autoAlpha: 0, filter: "blur(20px)", letterSpacing: "0.2em", duration: 1.5 }, "<")
      .set(scene1Ref.current, { autoAlpha: 0 })

    // --- SCENE 2: SYSTEMS (25% - 50%) ---
      .set(scene2Ref.current, { autoAlpha: 1 })
      .to(s2Header, { autoAlpha: 1, duration: 0.5 })
      .to(s2Network, { autoAlpha: 1, duration: 1 }, "<")
      .to(s2Text, { scale: 1, autoAlpha: 1, duration: 1.5 }, "-=0.5")
      .to(s2Labels, { autoAlpha: 1, duration: 1, stagger: 0.1 }, "-=1")
      .to(s2Subtext, { autoAlpha: 1, duration: 1 }, "-=0.5")
      
      // Pause
      .to({}, { duration: 1 })
      
      // Transition out
      .to(s2Labels, { autoAlpha: 0, scale: 0, duration: 1, stagger: 0.05 })
      .to(s2Network, { scale: 0.5, autoAlpha: 0, duration: 1 }, "<")
      .to(s2Subtext, { autoAlpha: 0, y: -20, duration: 1 }, "<")
      .to(s2Header, { autoAlpha: 0, duration: 0.5 }, "<")
      .to(s2Text, { scale: 0.8, autoAlpha: 0, duration: 1 }, "<")
      .set(scene2Ref.current, { autoAlpha: 0 })

    // --- SCENE 3: EXPERIENCES (50% - 75%) ---
      .set(scene3Ref.current, { autoAlpha: 1 })
      .to(s3Header, { autoAlpha: 1, duration: 0.5 })
      .to(s3Bg, { autoAlpha: 1, duration: 1 }, "<")
      .to(s3Text, { scale: 1, autoAlpha: 1, y: 0, duration: 1.5 }, "-=0.5")
      .to(s3Fragments, { autoAlpha: 1, y: -20, duration: 1, stagger: 0.2 }, "-=1")
      .to(s3Subtext, { autoAlpha: 1, duration: 1 }, "-=0.5")
      
      // Pause
      .to({}, { duration: 1 })
      
      // Transition out
      .to(s3Fragments, { autoAlpha: 0, y: -50, duration: 1, stagger: 0.1 })
      .to(s3Bg, { autoAlpha: 0, duration: 1 }, "<")
      .to(s3Subtext, { autoAlpha: 0, duration: 1 }, "<")
      .to(s3Header, { autoAlpha: 0, duration: 0.5 }, "<")
      .to(s3Text, { scale: 1.5, autoAlpha: 0, duration: 1 }, "<")
      .set(scene3Ref.current, { autoAlpha: 0 })

    // --- SCENE 4: IMPACT (75% - 100%) ---
      .set(scene4Ref.current, { autoAlpha: 1 })
      .to(s4Header, { autoAlpha: 1, duration: 0.5 })
      .to(s4Text, { scale: 1, autoAlpha: 1, duration: 2 }, "-=0.5")
      .to(s4Subtext, { autoAlpha: 1, duration: 1.5 }, "-=1")
      
      // End Pause
      .to({}, { duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-mw-black relative overflow-hidden">
      {showProgress && <ProgressIndicator currentScene={currentScene} progress={progress} />}
      
      <SceneIdeas innerRef={scene1Ref} />
      <SceneSystems innerRef={scene2Ref} />
      <SceneExperiences innerRef={scene3Ref} />
      <SceneImpact innerRef={scene4Ref} />
    </section>
  );
};

export default CinematicStory;
