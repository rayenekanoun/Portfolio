import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";

import { Code2, Database, Layout, Settings, Globe } from "lucide-react";

const TechStack = () => {
  // Animation keyframes
  const slideIn = keyframes`
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  `;

  const float = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  `;

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

  const stackData = [
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "Nest.js"],
      icon: Globe,
      color: "blue.400",
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "HTML", "CSS", "TailwindCSS"],
      icon: Layout,
      color: "purple.400",
    },
    {
      category: "Programming Languages",
      skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C", "Assembly"],
      icon: Code2,
      color: "teal.400",
    },
    {
      category: "Database Management",
      skills: ["SQL", "NoSQL", "PL/SQL", "PostgreSQL", "MongoDB"],
      icon: Database,
      color: "pink.400",
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "GitLab", "Docker", "Kubernetes", "AWS", "Postman"],
      icon: Settings,
      color: "orange.400",
    },
  ];

  return (
    <Box
      display={["flex"]}
      p={5}
      as="section"
      w="full"
      py={20}
      position="relative"
      overflow="hidden"
    >
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Flex direction="column" align="center" mb={16}>
          <Text
            fontSize={{ base: "3xl", md: "6xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, blue.300, purple.400)"
            bgClip="text"
            color={"white"}
            mb={4}
            animation={`${float} 4s ease-in-out infinite`}
          >
            Technical Arsenal ⚙️
          </Text>
          <Text color="gray.400" fontSize="lg" textAlign="center" >
            Tools & Technologies Powering My Solutions
          </Text>
        </Flex>

        <Flex direction="column" gap={12} >
          {stackData.map((category, index) => (
            <Box
              key={index}
              animation={`${slideIn} 0.6s ease-out ${index * 0.2}s both`}
              display={["flex", "flex", "flex"]}
              flexDirection="column"
              alignItems={["center", "center", "center"]}
            >
              <Flex align="center" mb={6} gap={5}  
              >
                <Icon
                  as={category.icon}
                  boxSize={10}
                  color={category.color}
                  p={2}
                  borderRadius="xl"
                  filter="drop-shadow(0 0 8px var(--chakra-colors-purple-500))"
                />
                <Text
                  fontSize={["md", "lg", "2xl"]}
                  fontWeight="bold"
                  color="whiteAlpha.900"
                  textTransform="uppercase"
                  letterSpacing="2px"
                >
                  {category.category}
                </Text>
              </Flex>

              <Flex wrap="wrap" gap={4} px={4} display={["flex", "flex", "flex"]} justifyContent="center">
                {category.skills.map((skill, skillIndex) => (
                  <Box
                    key={skillIndex}
                    px={5}
                    py={2}
                    borderRadius="full"
                    bg="blackAlpha.400"
                    color="gray.200"
                    fontSize="md"
                    transition="all 0.2s ease"
                    _hover={{
                      bg: "blackAlpha.600",
                      color: "purple.300",
                      transform: "scale(1.05)",
                      boxShadow: "0 0 12px rgba(128, 90, 213, 0.4)",
                      _before: {
                        left: "120%",
                      },
                    }}
                    cursor="pointer"
                    title={skillDescriptions[skill]}
                    position="relative"
                    overflow="hidden"
                    _before={{
                      content: '""',
                      position: "absolute",
                      left: "-50%",
                      width: "20%",
                      height: "100%",
                      bg: "whiteAlpha.200",
                      transform: "skewX(-30deg)",
                      transition: "0.4s ease",
                    }}

                  >
                    {skill}
                  </Box>
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>

        <Text
          textAlign="center"
          mt={16}
          color="gray.600"
          fontSize="sm"
          fontStyle="italic"
        >
          *hover technologies for details
        </Text>
      </Box>
    </Box>
  );
};

export default TechStack;