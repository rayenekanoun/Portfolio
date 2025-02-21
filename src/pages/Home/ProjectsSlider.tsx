import React from "react";
import { Box, Button, Image, Text, Stack, Tag, useDisclosure } from "@chakra-ui/react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerTitle,
  DrawerCloseTrigger,
} from "@/components/ui/drawer";

import coiffImg from "../../assets/coiff.jpg";
import expensesImg from "../../assets/expenses.png";
import expensesTrackerImg from "../../assets/expensestracker.png";
import gameReleasesImg from "../../assets/gameRealeses.png";
import venturesImg from "../../assets/ventures.png";
import weatherAppImg from "../../assets/weatherApp.png";

const projects = [
  {
    title: "Coiff App",
    image: coiffImg,
    color: "purple.400",
    description: "A modern appointment booking application for hair salons",
    stack: ["React Native", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Expenses Tracker",
    image: expensesTrackerImg,
    color: "green.400",
    description: "Mobile-first expense tracking application with budget management",
    stack: ["React", "Firebase", "Material-UI", "Redux"],
  },
  {
    title: "Game Releases",
    image: gameReleasesImg,
    color: "red.400",
    description: "Video game release calendar and tracking platform",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Chakra UI"],
  },
  {
    title: "Ventures Platform",
    image: venturesImg,
    color: "yellow.400",
    description: "Startup investment and management platform",
    stack: ["Vue.js", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Weather App",
    image: weatherAppImg,
    color: "cyan.400",
    description: "Real-time weather forecasting application",
    stack: ["React", "OpenWeather API", "Styled Components"],
  },
  {
    title: "Expenses Dashboard",
    image: expensesImg,
    color: "blue.400",
    description: "Personal finance tracking dashboard with data visualization",
    stack: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
  },
];

const ProjectCard = ({ project, isInView, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <motion.div
        className="relative"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.1, ease: "easeOut" },
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{
          duration: 0.2,
          delay: index * 0.1,
          ease: "easeOut",
        }}
        onClick={onOpen}
      >
        <Box
          minW={["280px", "320px"]}
          h={["180px", "200px"]}
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
            <Text color="white" fontSize="xl" fontWeight="bold">
              {project.title}
            </Text>
          </Box>
        </Box>
      </motion.div>

      <DrawerRoot open={isOpen} onOpenChange={onClose}>
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{project.title}</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="md"
                w="full"
                maxH="300px"
                objectFit="cover"
              />
              <Text fontSize="lg">{project.description}</Text>
              <Box>
                <Text fontWeight="bold" mb={2}>
                  Tech Stack:
                </Text>
                <Stack direction="row" flexWrap="wrap" gap={2}>
                  {project.stack.map((tech, index) => (
                    <Tag key={index} colorScheme={project.color.split('.')[0]}>
                      {tech}
                    </Tag>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={onClose}>Close</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </>
  );
};

const ProjectSlider = ({ direction = "left" }) => {
  const containerRef = React.useRef(null);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
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
    <Box
      fontSize="5xl"
      fontWeight="medium"
      width="full"
      textAlign="center"
      p={5}
    >
      <div ref={containerRef} className="py-12">
        <Text mb={20} fontSize={["3xl","3xl","4xl","5xl","6xl"]} fontWeight="bold">
          My Projects 🚀
        </Text>
        <div ref={ref} className="relative overflow-hidden w-full h-[300px]">
          <motion.div
            className="absolute flex gap-6 left-0"
            style={{ x }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isInView={inView}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </Box>
  );
};

export default ProjectSlider;