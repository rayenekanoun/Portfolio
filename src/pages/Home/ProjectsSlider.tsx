import React from "react";
import { Box, Button, Image, Text, Stack, Tag, useDisclosure, useBreakpointValue, Flex } from "@chakra-ui/react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";


import coiffImg from "../../assets/coiff.jpg";
import expensesImg from "../../assets/expenses.png";
import expensesTrackerImg from "../../assets/expensestracker.png";
import gameReleasesImg from "../../assets/gameRealeses.png";
import venturesImg from "../../assets/ventures.png";
import weatherAppImg from "../../assets/weatherApp.png";

// Motion components with Chakra
const MotionBox = motion(Box);

const projects = [
  {
    title: "Weather App",
    image: weatherAppImg,
    color: "cyan.400",
    description: "Real-time weather forecasting application",
    stack: ["React", "OpenWeather API", "Styled Components"],
  },
  {
    title: "Coiff App",
    image: coiffImg,
    color: "purple.400",
    description: "A modern appointment booking application for hair salons",
    stack: ["React Native", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Expenses Dashboard",
    image: expensesImg,
    color: "blue.400",
    description: "Personal finance tracking dashboard with data visualization",
    stack: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
  },

  {
    title: "Expenses Tracker",
    image: expensesTrackerImg,
    color: "green.400",
    description: "Mobile-first expense tracking application with budget management",
    stack: ["React", "Firebase", "Material-UI", "Redux"],
  },

  {
    title: "Ventures Platform",
    image: venturesImg,
    color: "yellow.400",
    description: "Startup investment and management platform",
    stack: ["Vue.js", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Game Releases",
    image: gameReleasesImg,
    color: "red.400",
    description: "Video game release calendar and tracking platform",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Chakra UI"],
  },


];

const ProjectCard = ({ project, isInView, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MotionBox
        position="relative"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.1, ease: "easeOut" },
        }}

      >
        <Box
          minW={["400px", "280px", "320px", "380px"]}
          h={["350px", "350px", "350px", "300px"]}
          borderRadius="lg"
          overflow="hidden"
          position="relative"
          cursor="pointer"
        >
          <Image
            src={project.image}
            alt={project.title}
            objectFit="cover"
            w="full"
            h="full"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="blackAlpha.600"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontSize={["md", "lg", "xl"]} fontWeight="bold">
              {project.title}
            </Text>
          </Box>
        </Box>
      </MotionBox>
    </>
  );
};

const ProjectRow = ({ projectSet, direction, isInView, containerRef }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Optimize animation values for better performance
  const x = useTransform(
    scrollYProgress,
    [0,1],
    direction === "left" 
    ? [isMobile ? "-20%" : "10%", isMobile ? "10%" : "-110%"] 
    : [isMobile ? "0%" : "-10%", isMobile ? "-10%" : "110%"]
  );

  return (
    <MotionBox
      position="absolute"
      display="flex"
      gap={4}
      left="0"
      style={{ x }}

    >
      {projectSet.map((project, index) => (
        <ProjectCard
          key={`${direction}-${index}`}
          project={project}
          isInView={isInView}
          index={index}
        />
      ))}
    </MotionBox>
  );
};

const ProjectSlider = () => {
  const containerRef = React.useRef(null);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  
  const showDoubleSlider = useBreakpointValue({ base: true, lg: false });
  
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  
  // For desktop, keep original repeat behavior but with fewer duplicates for better performance
  const desktopProjects = [...projects, ...projects.slice(0, 3)];
  
  // For mobile double slider, create two different sets
  const topRowProjects = [projects[3],projects[4],projects[2]];
  const bottomRowProjects = [projects[5],projects[0],projects[2]];
  return (
    <Box
      fontSize="5xl"
      fontWeight="medium"
      width="full"
      textAlign="center"
      p={5}
    >
      <Box 
        ref={containerRef} 
        py={["8", "8", "12"]} 
      >
        <Text 
          mb={[10, 15, 20]} 
          fontSize={["3xl","3xl","4xl","5xl","6xl"]} 
          fontWeight="bold"
        >
          My Projects 🚀
        </Text>
        
        {/* First row (or single row on larger screens) */}
        <Box 
          ref={ref} 
          position="relative" 
          overflow="hidden" 
          w="full" 
          h={["350px", "350px", "350px", "300px"]}
        >
          <ProjectRow 
            projectSet={isDesktop ? desktopProjects : topRowProjects}
            direction="left" 
            isInView={inView} 
            containerRef={containerRef} 
          />
        </Box>
        
        {/* Second row (only on smaller screens) */}
        {showDoubleSlider && (
          <Box 
            position="relative" 
            overflow="hidden" 
            w="full" 
            h={["350px", "350px", "350px", "300px"]}
            mt={4}
          >
            <ProjectRow 
              projectSet={bottomRowProjects}
              direction="right" 
              isInView={inView} 
              containerRef={containerRef} 
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProjectSlider;