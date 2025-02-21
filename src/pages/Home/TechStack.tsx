import {
  Box,
  Text,
  Flex,
  Container,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
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
                        duration: 0.1,
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
    </Box>
  );
};
export default TechStack;
