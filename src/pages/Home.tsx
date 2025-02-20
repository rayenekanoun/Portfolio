import {
  Box,
  ColorSwatch,
  Text,
  Image,
  Flex,
  Container,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import landingImg from "../assets/3.jpg";
import {
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useRef, useState } from "react";

import { Code2, Database, Layout, Settings, Globe } from "lucide-react";

const MotionBox = motion(Box);

const TechStack = () => {
  const stackData = [
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Nest.js"],
      icon: <Icon as={Globe} boxSize="6" />,
      color: "green.400",
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "HTML", "CSS", "TailwindCSS"],
      icon: <Icon as={Layout} boxSize="6" />,
      color: "blue.400",
    },
    {
      category: "Programming Languages",
      skills: [
        "Python",
        "TypeScript",
        "JavaScript",
        "Java",
        "C++",
        "C",
        "Assembly",
      ],
      icon: <Icon as={Code2} boxSize="6" />,
      color: "purple.400",
    },
    {
      category: "Database Management",
      skills: ["SQL", "NoSQL", "PL/SQL", "PostgreSQL", "MongoDB"],
      icon: <Icon as={Database} boxSize="6" />,
      color: "yellow.400",
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Docker",
        "Kubernetes",
        "AWS",
        "Postman",
      ],
      icon: <Icon as={Settings} boxSize="6" />,
      color: "red.400",
    },
  ];

  return (
    <Box>
      <Container
        maxW="container.xl"
        px={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
          fontWeight="bold"
          color="white"
        >
          Tech Stack 🛠 ️
        </Box>

        <Flex direction="column" gap={8}>
          {stackData.map((category, index) => (
            <MotionBox
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: false, margin: "-100px" }}
              p={{ base: 6, md: 8 }}
              backdropFilter="blur(8px)"
              boxShadow="2xl"
            >
              <Flex align="center" gap={4} mb={6}>
                <Box color={category.color} p={3}>
                  {category.icon}
                </Box>
                <Text
                  fontSize={["sm", "3xl", "3xl"]}
                  fontWeight="semibold"
                  color="white"
                >
                  {category.category}
                </Text>
              </Flex>

              <Flex
                flexWrap="wrap"
                gap={3}
                display={["flex"]}
                justifyContent="center"
                alignItems={["center"]}
              >
                {category.skills.map((skill, skillIndex) => (
                  <MotionBox
                    key={skillIndex}
                    fontSize={["sm", "3xl", "3xl"]}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: skillIndex * 0.1,
                    }}
                    px={4}
                    py={2}
                    borderRadius="full"
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {skill}
                  </MotionBox>
                ))}
              </Flex>
            </MotionBox>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

const projects = [
  { title: "Project 1", color: "red.100" },
  { title: "Project 2", color: "blue.400" },
  { title: "Project 3", color: "green.400" },
  { title: "Project 4", color: "purple.400" },
  { title: "Project 5", color: "red.400" },
  { title: "Project 6", color: "blue.400" },
  { title: "Project 7", color: "green.400" },
  { title: "Project 8", color: "purple.400" },
];

const ProjectSlider = ({ direction = "left" }) => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["5%", "-20%"] : ["-5%", "20%"],
    { ease: easeInOut }
  );

  return (
    <div ref={containerRef} className=" py-12">
      <h2 className="text-2xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-6xl text-white text-center mb-8">
        My Projects 🚀
      </h2>

      <div className="relative overflow-hidden w-full h-[300px]">
        <motion.div
          className="absolute flex gap-6 left-0"
          style={{ x }}
          animate={{ opacity: isInView ? 1 : 0.4 }}
          transition={{ duration: 0.4 }}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              className={`
                )
                  min-w-[280px] md:min-w-[320px] h-[180px] md:h-[200px]
                  ${project.color} rounded-lg shadow-xl
                  flex items-center justify-center
                  cursor-pointer backdrop-blur-sm
                `}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <span className="text-white text-xl font-bold">
                {project.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const CodeInIDE = () => {
  return (
    <Box display="inline-block">
      <Text
        as="span"
        fontFamily="monospace"
        color="#f8f8f2"
        _hover={{ color: "#8be9fd", cursor: "pointer" }}
      >
        {"{"}
      </Text>
      <Text
        as="span"
        fontFamily="monospace"
        color="#ff79c6"
        _hover={{ color: "#8be9fd", cursor: "pointer" }}
      >
        CODE
      </Text>
      <Text
        as="span"
        fontFamily="monospace"
        color="#f8f8f2"
        _hover={{ color: "#8be9fd", cursor: "pointer" }}
      >
        {"}"}
      </Text>
    </Box>
  );
};

const Home = () => {
  const boxRef = useRef(null);


  const divRef = useRef(null);

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start 200px", "end 200px"] // Trigger when element crosses 80px from top
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 1], 
    isSmallScreen ? ['0%', '0%'] : ['0%', '157%'], // Disable on small screens
    { ease: easeInOut }
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-t, blue.400, blue.300)"
      color="white"
      mt={["80px", "100px"]}
      overflowX="hidden"
    >
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent={["space-between", "center", "space-between"]}
        fontWeight="medium"
        width={["100%", "100%", "100%"]}
        height={["120vh", "200%", "100vh"]}
      >
        <Box
          width={["100%", "100%", "50%"]}
          height={["60%", "50%", "100%"]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p={["5", "5", "10"]}
          mt={["20", "10", "0"]}
          mb={["20", "10", "0"]}
        >
          <Text
            fontWeight=""
            fontSize={["sm", "md", "lg"]}
            fontFamily={"monospace"}
          >
            <ColorSwatch
              borderRadius="full"
              boxSize="0.70em"
              value="Green"
              mr={2}
            />
            AVAILABLE FOR WORK
          </Text>
          <Text fontSize={["4xl", "4xl", "3xl", "5xl", "7xl"]}>
            I BUILD THE <br /> DIGITAL WORLD WITH
          </Text>
          <Text fontSize={["4xl", "4xl", "3xl", "5xl", "7xl"]}>
            <CodeInIDE /> & PASSION
          </Text>

          <Text color={"gray.400"} fontSize={["lg", "xl", "2xl"]}>
            MY NAME IS RAYENE KANOUN 🙋
            <br />
            I AM A COMPUTER ENGINEERING STUDENT
            <br />
            BASED IN TUNIS, TUNISIA
          </Text>
        </Box>

        <Box
          width={["100%", "100%", "50%"]}
          height={["100%", "50%", "100%"]}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={["center", "center", "flex-end"]}
          p={["5", "5", "20"]}
          pt={["0", "0", "0"]}
        >
          <Image
            src={landingImg}
            alt="Landing"
            width={["350px", "590px", "350px"]} // Responsive width
            height="auto"
          />
        </Box>
      </Box>
      <Box
        fontSize="5xl"
        fontWeight="medium"
        width={["100%", "100%", "100%"]}
        textAlign="center"
        p={5}
      >
        <ProjectSlider direction={"left"}></ProjectSlider>
      </Box>
      <Box
        fontSize="5xl"
        fontWeight="medium"
        width={["100%", "100%", "100%"]}
        textAlign="center"
        p={5}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={10}
      >
        <TechStack></TechStack>
      </Box>
      <Box
        width={"100%"}
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent={"space-between"}
        ref={divRef}
        p={8}
      >
        <MotionBox
         ref={boxRef}
         style={{ 
          // Disable transforms on small screens
          y: isSmallScreen ? '0%' : y,
          scale: isSmallScreen ? 1 : scale
        }}          width={["100%", "100%", "50%"]}
          p={5}
          fontFamily={"Inter"}
          fontSize={["lg", "lg", "2xl"]}
          height={"100%"}
        >
          I was ignited by a spark of curiosity as a child, mesmerized by the
          sight of my father immersed in his PC. The thrill of turning the
          computer on and off was a gateway to a world of endless possibilities.
          This early fascination became a driving force in my life, shaping my
          path as a software engineer committed to exploring and pushing the
          boundaries of technology.
        </MotionBox>
        <Box
          
          width={["100%", "100%", "50%"]}
          p={5}
          fontFamily={"Inter"}
          fontSize={["lg", "lg", "2xl"]}
        >
          As a dedicated Computer Engineer, I bring a diverse set of skills and
          a passion for innovation to every project. My expertise spans a range
          of programming languages and technologies, enabling me to tackle
          complex challenges with precision and creativity. <br /> <br />
          I am currently diving into the world of AI and machine learning,
          driven by a fascination with how these technologies can reshape our
          future. My commitment to learning and growth was demonstrated during a
          recent machine learning hackathon, where my team secured 4th place,
          showcasing our ability to apply cutting-edge techniques in a
          competitive environment. <br /> <br />  In addition to my
          technical skills, I am continually exploring new technologies and
          methodologies to enhance my capabilities and deliver impactful
          solutions. My portfolio features a variety of projects that highlight
          my proficiency in software development and my drive to push the
          boundaries of what's possible. 
          
          
          
        </Box>
      </Box>
      <Box height={"100vh"}>hey</Box>
    </Box>
  );
};
export default Home;
