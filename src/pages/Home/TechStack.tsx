import {
    Box,
    Text,
    Flex,
    Container,
    Icon,
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  import { Code2, Database, Layout, Settings, Globe } from "lucide-react";
  import {
    HoverCardArrow,
    HoverCardContent,
    HoverCardRoot,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
  
  const MotionBox = motion(Box);
  
  const skillDescriptions: { [key: string]: string } = {
    "Node.js": "JavaScript runtime for scalable backend applications.",
    "Express.js": "Minimalist web framework for Node.js.",
    "Nest.js": "Progressive Node.js framework for scalable apps.",
    "React.js": "JavaScript library for building user interfaces.",
    HTML: "Markup language for structuring web pages.",
    CSS: "Stylesheet language for designing web pages.",
    TailwindCSS: "Utility-first CSS framework for rapid UI development.",
    Python: "High-level programming language for various applications.",
    TypeScript: "Typed superset of JavaScript for better code quality.",
    JavaScript: "Popular language for web development.",
    Java: "Versatile OOP language for web, mobile, and enterprise apps.",
    "C++": "Efficient language for system programming and game development.",
    C: "Low-level language for system and embedded programming.",
    Assembly: "Low-level programming language for direct hardware control.",
    SQL: "Language for managing structured databases.",
    NoSQL: "Databases for flexible, scalable data storage.",
    "PL/SQL": "Oracle's procedural language extension for SQL.",
    PostgreSQL: "Open-source relational database known for extensibility.",
    MongoDB: "NoSQL database for scalable and flexible storage.",
    Git: "Version control system for tracking code changes.",
    GitHub: "Cloud-based Git repository hosting service.",
    GitLab: "DevOps platform for CI/CD and Git repositories.",
    Docker: "Platform for developing, shipping, and running containers.",
    Kubernetes: "Orchestration system for containerized applications.",
    AWS: "Amazon's cloud computing platform.",
    Postman: "API testing and development tool.",
  };
  
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
        fontSize={["3xl", "3xl", "4xl", "6xl"]}
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
            <Box fontWeight="bold" color="white">
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
                    duration: 0.2,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  p={{ base: 6, md: 8 }}
                  backdropFilter="blur(8px)"
                  border="1px solid"
                  borderColor="gray.700"
                >
                  <Flex align="center" gap={4} mb={6}>
                    <Box color={category.color} p={3}>
                      {category.icon}
                    </Box>
                    <Text
                      fontSize={["sm", "3xl", "3xl"]}
                      fontWeight="semibold"
                      color="#cbb2d9"
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
                      <HoverCardRoot key={skillIndex} openDelay={180} closeDelay={180}>
                        <HoverCardTrigger>
                          <MotionBox
                            fontSize={["sm", "2xl", "2xl", "3xl"]}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.1,
                              delay: skillIndex * 0.1,
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            px={4}
                            py={2}
                            borderRadius="full"
                            color="#cbb2d9"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            cursor="pointer"
                            _hover={{ color: "gray.700" }}
                          >
                            {skill}
                          </MotionBox>
                        </HoverCardTrigger>
                        <HoverCardContent bg="gray.800" color="white" p={3} borderRadius="md">
                          {skillDescriptions[skill as keyof typeof skillDescriptions] || "No description available"}
                          <HoverCardArrow />
                        </HoverCardContent>
                      </HoverCardRoot>
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
  