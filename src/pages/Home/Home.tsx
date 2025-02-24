import { Box } from "@chakra-ui/react";
import { useState, useEffect, useRef, useMemo } from "react";
import TechStack from "./TechStack";
import ProjectSlider from "./ProjectsSlider";
import AcademicJourney from "./AcademicJourney";
import Landing from "./Landing";
import Description from "./Description";
import ProjectsGoto from "./ProjectsGoto";

type SectionName = 'landing' | 'academic' | 'projects' | 'techstack' | 'description';

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const academicRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const techstackRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  // Memoized refs object to maintain stable reference
  const sectionRefs = useMemo(() => ({
    landing: landingRef,
    academic: academicRef,
    projects: projectsRef,
    techstack: techstackRef,
    description: descriptionRef
  }), []);

  // Harmonious dark color palette with smooth transitions
  const sectionColors: Record<SectionName, string> = {
    landing: "#000000",    // Dark Navy
    academic: "#212d40",    // Royal Purple
    projects: "#212d40  ",    // Deep Plum
    techstack: "#291938",   // Wine Red
    description: "#212d40"  // Dark Coral
  };

  const interpolateColor = (color1: string, color2: string, ratio: number): string => {
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);

    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);

    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  useEffect(() => {
    let animationFrameId: number;
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;
      
      const viewportMiddle = window.scrollY + window.innerHeight / 2;
      const sections = Object.entries(sectionRefs)
        .map(([name, ref]) => {
          if (!ref.current) return null;
          const rect = ref.current.getBoundingClientRect();
          return {
            middle: window.scrollY + rect.top + rect.height / 2,
            color: sectionColors[name as SectionName]
          };
        })
        .filter(Boolean) as { middle: number; color: string }[];

      sections.sort((a, b) => a.middle - b.middle);

      let prev = sections[0];
      let next = sections[0];

      for (let i = 0; i < sections.length; i++) {
        if (viewportMiddle < sections[i].middle) {
          prev = i > 0 ? sections[i - 1] : sections[i];
          next = sections[i];
          break;
        }
        prev = next = sections[i];
      }

      const ratio = Math.max(0, Math.min(1, 
        (viewportMiddle - prev.middle) / (next.middle - prev.middle)
      ));
      const color = prev === next ? prev.color : interpolateColor(prev.color, next.color, ratio);

      container.style.backgroundColor = color;
    };

    const throttledScroll = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    throttledScroll(); // Initial color setup

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [sectionColors, sectionRefs]);

  return (
    <Box
      ref={containerRef}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      mt={["71px", "80px", "80px", "100px"]}
      overflowX="hidden"
      position="relative"
      sx={{
        transition: 'background-color 0.5s ease',
        minHeight: '100vh'
      }}
    >
      <Box ref={sectionRefs.landing} width="100%" minH="100vh">
        <Landing />
      </Box>
      <Box ref={sectionRefs.projects} width="100%">
        <ProjectSlider />
      </Box>
      <Box ref={sectionRefs.academic} width="100%">
        <AcademicJourney />
      </Box>
      <Box ref={sectionRefs.description} width="100%" minH="100vh">
        <Description />
      </Box>
      <Box ref={sectionRefs.techstack} width="100%" minH="100vh">
        <TechStack />
      </Box>
      <Box width="100%" minH="100vh">
      <ProjectsGoto />
      </Box>
    </Box>
  );
};

export default Home;