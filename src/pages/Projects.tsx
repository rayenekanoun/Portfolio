import { useRef, useState, useEffect } from "react";
import { Box, Heading, Text, Flex, Badge, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

// Import Images
import expensesImg from "../assets/expenses.png";
import expensesTrackerImg from "../assets/expensestracker.png";
import gameReleasesImg from "../assets/gameRealeses.png";
import venturesImg from "../assets/ventures.png";
import weatherAppImg from "../assets/weatherApp.png";

// Motion Components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const projects = [
  {
    id: 1,
    title: "Weather App",
    image: weatherAppImg,
    color: "cyan.400",
    description: "Real-time weather forecasting application with hourly updates and location-based services for accurate forecasts.",
    stack: ["React", "OpenWeather API", "Styled Components"],
  },
  {
    id: 2,
    title: "Expenses Dashboard",
    image: expensesImg,
    color: "blue.400",
    description: "Personal finance tracking dashboard with data visualization and budgeting tools to manage your spending.",
    stack: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Expenses Tracker",
    image: expensesTrackerImg,
    color: "green.400",
    description: "Mobile-first expense tracking application with budget management and receipt scanning capabilities.",
    stack: ["React", "Firebase", "Material-UI", "Redux"],
  },
  {
    id: 4,
    title: "Ventures Platform",
    image: venturesImg,
    color: "yellow.400",
    description: "Startup investment and management platform connecting founders with investors and tracking growth metrics.",
    stack: ["Vue.js", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 5,
    title: "Game Releases",
    image: gameReleasesImg,
    color: "red.400",
    description: "Video game release calendar and tracking platform with personalized recommendations and wishlist features.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Chakra UI"],
  },
];

interface ProjectCardProps {
  project: any;
  index: number;
  activeIndex: number | null;
  isLastCardActive: boolean;
}

const ProjectCard = ({ project, index, activeIndex, isLastCardActive }: ProjectCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  
  // Enhanced scale effect
  const scaleValue = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [1, 1.03, 1.05]
  );
  
  const isMobile = useBreakpointValue({ base: true, md: false });
  const cardHeight = useBreakpointValue({ base: "auto", sm: "500px", md: "600px", lg: "650px" });
  
  // Determine if this card is active or not
  const isActive = activeIndex !== null && index <= activeIndex && !isLastCardActive;
  const isCurrent = activeIndex === index;
  
  // Card appears bigger when entering viewport and scales down when active
  // Also subtly scales up when scrolling through its content
  let initialScale = isActive ? (isCurrent ? 0.95 : 1.1) : 1;
  
  // Enhanced shadow effect
  const shadowSize = isCurrent ? "2xl" : isActive ? "xl" : "md";
  
  // Enhanced border color effect
  const borderColor = isCurrent ? project.color : "gray.200";
  const borderWidth = isCurrent ? "2px" : "1px";

  return (
    <MotionBox
      ref={ref}
      width={{ base: "95%", lg: "90%", xl: "85%" }}
      height={cardHeight}
      borderWidth={borderWidth}
      borderRadius="lg"
      borderColor={borderColor}
      boxShadow={shadowSize}
      bg="white"
      p={{ base: 4, md: 6 }}
      overflow="hidden"
      animate={{ 
        y: 0
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ 
        transformOrigin: "center center"
      }}
      _hover={{ boxShadow: "2xl" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 6 }}
        align="center"
        height="100%"
      >
        {/* Left Side (Image) - Takes 60% on large screens */}
        <Box 
          flex={{ base: "1", md: "60%" }}
          height={{ base: "250px", sm: "300px", md: "100%" }}
          overflow="hidden"
          borderRadius="md"
        >
          <MotionBox
            height="100%"
            width="100%"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              borderRadius="md"

            />
          </MotionBox>
        </Box>

        {/* Right Side (Content) - Takes 40% on large screens */}
        <Flex 
          flex={{ base: "1", md: "40%" }}
          direction="column" 
          justify="space-between"
          height={{ base: "auto", md: "100%" }}
          py={2}
        >
          <Box>
            <Heading 
              size={{ base: "md", sm: "lg" }} 
              color={project.color}
              mb={3}
            >
              {project.title}
            </Heading>
            <Text 
              fontSize={{ base: "sm", sm: "md" }} 
              color="gray.600" 
              mb={4}
              noOfLines={{ base: 4, sm: 6, md: 8 }}
            >
              {project.description}
            </Text>
          </Box>
          
          <Box mt="auto">
            <Flex flexWrap="wrap" mb={2}>
              {project.stack.map((tech: string, idx: number) => (
                <Badge 
                  key={idx} 
                  mr={2} 
                  mb={2} 
                  p={{ base: 1, sm: 2 }}
                  colorScheme={isCurrent ? project.color.split('.')[0] : "teal"} 
                  fontSize={{ base: "xs", sm: "sm" }}
                  variant={isCurrent ? "solid" : "subtle"}
                  borderRadius="md"
                >
                  {tech}
                </Badge>
              ))}
            </Flex>
            
            <Flex
              mt={4}
              justify="space-between"
              align="center"
              width="100%"
            >
              <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.500" fontWeight="medium">
                2023
              </Text>
              <Box
                as="a"
                href="#"
                py={2}
                px={4}
                bgColor={project.color}
                color="white"
                borderRadius="md"
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="bold"
                _hover={{
                  opacity: 0.9,
                  transform: "translateY(-2px)"
                }}
                transition="all 0.2s"
                display={isCurrent || isMobile ? "block" : "none"}
              >
                View Project
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </MotionBox>
  );
};

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [navBarHeight, setNavBarHeight] = useState(100);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isLastCardActive, setIsLastCardActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef<number>(0);
  
  // Update refs array for cards
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, projects.length);
  }, []);

  // Get navbar height
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector("header");
      if (navbar) {
        setNavBarHeight(navbar.getBoundingClientRect().height);
      }
    };
    
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  // Handle scroll to determine which card is active and check for footer
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRefs.current.length) return;
      
      const scrollY = window.scrollY;
      scrollProgress.current = scrollY;
      
      // Calculate the trigger point (considering navbar height + some offset)
      const triggerPoint = navBarHeight + window.innerHeight * 0.2;
      
      // Check if we're near the footer
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        // If footer is getting close to viewport
        setIsNearFooter(footerRect.top < window.innerHeight - 200);
      }
      
      // Find which card is at or just past the trigger point
      let newActiveIndex = null;
      
      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;
        
        const rect = cardRef.getBoundingClientRect();
        
        // If the top of the card is at or above the trigger point
        if (rect.top <= triggerPoint) {
          newActiveIndex = index;
        }
      });
      
      // Check if last card is active
      const isAtLastCard = newActiveIndex === projects.length - 1;
      setIsLastCardActive(isAtLastCard);
      
      // If near footer or at last card, deactivate sticky behavior
      if (isNearFooter || isAtLastCard) {
        setActiveIndex(null);
      } else {
        setActiveIndex(newActiveIndex);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navBarHeight, isNearFooter]);

  // Calculate how many cards to offset in the stack
  const getCardOffset = (index: number) => {
    if (activeIndex === null) return 0;
    return Math.min(3, index - activeIndex) * 15; // Max 3 cards in stack
  };

  // Navigation dots
  const navigationDots = (
    <Flex
      position="fixed"
      right={{ base: "1rem", md: "2rem" }}
      top="50%"
      transform="translateY(-50%)"
      direction="column"
      gap={2}
      zIndex={1000}
      display={{ base: "none", md: "flex" }}
    >
      {projects.map((_, index) => {
        const isActive = activeIndex === index;
        
        return (
          <Box
            key={index}
            width={{ base: "8px", lg: "10px" }}
            height={{ base: "8px", lg: "10px" }}
            borderRadius="full"
            bg={isActive ? projects[index].color : "gray.300"}
            cursor="pointer"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => {
              const element = cardRefs.current[index];
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          />
        );
      })}
    </Flex>
  );

  return (
    <Box 
      ref={sectionRef} 
      pt={`${navBarHeight + 20}px`} 
      px={{ base: 2, md: 4 }} 
      width="100%" 
      position="relative"
    >
      {navigationDots}
      
      <Flex 
        direction="column" 
        alignItems="center" 
        width="100%"
        position="relative"
      >
        <AnimatePresence>
          {projects.map((project, index) => {
            // Determine if this card should be sticky
            const isSticky = activeIndex !== null && 
                            index <= activeIndex && 
                            !isNearFooter && 
                            !isLastCardActive;
            
            // Calculate vertical offset for stacked cards
            const offset = getCardOffset(index);
            const verticalOffset = isSticky && activeIndex !== index
              ? `${navBarHeight + 20 + offset}px`
              : `${navBarHeight + 20}px`;
            
            // Calculate z-index for proper stacking (earlier cards on top)
            const stackingOrder = index;
            
            return (
              <Box
                key={project.id || index}
                ref={el => cardRefs.current[index] = el}
                width="100%"
                display="flex"
                justifyContent="center"
                mb={{ base: 16, md: 20 }}
                position={isSticky ? "sticky" : "relative"}
                top={isSticky ? verticalOffset : "auto"}
                zIndex={stackingOrder}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  activeIndex={activeIndex}
                  isLastCardActive={isLastCardActive}
                />
              </Box>
            );
          })}
        </AnimatePresence>
      </Flex>
      
      <Box ref={footerRef} mt={{ base: 8, md: 10 }} pb={10}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProjectsSection;