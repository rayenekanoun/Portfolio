import { Box, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import YourSvg from "../../assets/coding-svgrepo-com.svg";
import { useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";

const MotionBox = motion(Box);

const Description = () => {
  const boxRef = useRef(null);

  const divRef = useRef(null);

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start 220px", "end 202px"], // Trigger when element crosses 80px from top
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isSmallScreen ? ["0%", "0%"] : ["0%", "75%"], // Disable on small screens
    { ease: easeInOut }
  );
  return (
    <Box
    position={"relative"}
      width={"100%"}
      display="flex"
      flexDirection={["column", "column", "row"]}
      justifyContent={"space-between"}
      ref={divRef}
      p={8}
      pb={16}
      borderBottom={"1px solid #2d3748"}
      borderTop={"1px solid #2d3748"}

      
    >
      <MotionBox
        ref={boxRef}
        style={{
          // Disable transforms on small screens
          y: isSmallScreen ? "0%" : y,
          scale: isSmallScreen ? 1 : scale,
        }}
        width={["100%", "100%", "50%"]}
        p={5}
        fontFamily={"Inter"}
        fontSize={["lg", "lg", "2xl"]}
        height={"100%"}
        color={"gray.400"}
      >
        <Box
          top={["-30px", "-40px", "-50px"]}
          left={["-10px", "-20px", "-30px"]}
          zIndex={0}
          opacity={0.9}
          width={["30px", "40px", "60px"]}
        >
          <Image
            src={YourSvg}
            alt="Decorative element"
            width={["100%", "100%", "100%"]}
            height="auto"
            brightness="0.8"
          />
        </Box>
        <Text
          fontWeight={"bold"}
          mb={5}
          fontSize={["2xl", "3xl", "5xl"]}
          color="white"
        >
          MY JOURNEY BEGAN
        </Text>
        {"when I was a child, mesmerized by the sight of my father immersed in his PC. The thrill of turning the computer on and off was a gateway to aworld of endless possibilities. This early fascination became a drivingforce in my life, shaping my path as a software engineer committed toexploring and pushing the boundaries of technology.".toLocaleUpperCase()}
      </MotionBox>
      <Box
        width={["100%", "100%", "50%"]}
        p={5}
        fontFamily={"Inter"}
        fontSize={["lg", "lg", "2xl"]}
        color={"gray.400"}
      >
        AS A DEDICATED COMPUTER ENGINEER, I BRING A DIVERSE SET OF SKILLS AND A
        PASSION FOR INNOVATION TO EVERY PROJECT. MY EXPERTISE SPANS A RANGE OF
        PROGRAMMING LANGUAGES AND TECHNOLOGIES, ENABLING ME TO TACKLE COMPLEX
        CHALLENGES WITH PRECISION AND CREATIVITY. <br /> <br />
        I AM CURRENTLY DIVING INTO THE WORLD OF AI AND MACHINE LEARNING, DRIVEN
        BY A FASCINATION WITH HOW THESE TECHNOLOGIES CAN RESHAPE OUR FUTURE. MY
        COMMITMENT TO LEARNING AND GROWTH WAS DEMONSTRATED DURING A RECENT
        MACHINE LEARNING HACKATHON, WHERE MY TEAM SECURED 4TH PLACE, SHOWCASING
        OUR ABILITY TO APPLY CUTTING-EDGE TECHNIQUES IN A COMPETITIVE
        ENVIRONMENT. <br /> <br /> IN ADDITION TO MY TECHNICAL SKILLS, I AM
        CONTINUALLY EXPLORING NEW TECHNOLOGIES AND METHODOLOGIES TO ENHANCE MY
        CAPABILITIES AND DELIVER IMPACTFUL SOLUTIONS. MY PORTFOLIO FEATURES A
        VARIETY OF PROJECTS THAT HIGHLIGHT MY PROFICIENCY IN SOFTWARE
        DEVELOPMENT AND MY DRIVE TO PUSH THE BOUNDARIES OF WHAT'S POSSIBLE.
      </Box>
    <Text position={"absolute"} bottom={6} color={"gray.500"}> ABOUT ME</Text>
    </Box>
  );
};
export default Description;
