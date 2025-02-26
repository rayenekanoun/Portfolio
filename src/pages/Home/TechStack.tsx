"use client";

import { Box, Text, Flex, Icon, HStack, Stack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Code2, Database, Layout, Settings, Globe } from "lucide-react";
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LuChartLine } from "react-icons/lu";
import { FaHotjar } from "react-icons/fa";

// Import react-icons for technology logos
import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiMysql,
  SiMongodb,
  SiOracle,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiPostman,
} from "react-icons/si";
import { DiJava } from "react-icons/di"; // For Java
import { FaAws } from "react-icons/fa"; // For AWS
import { MdCode } from "react-icons/md"; // Fallback for Assembly

import useSWR from "swr";

// Simple fetcher for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Custom hook to fetch npm downloads for a given package name
function useNpmDownloads(packageName: string) {
  const { data, error } = useSWR(
    `https://api.npmjs.org/downloads/point/last-month/${packageName}`,
    fetcher
  );
  return {
    downloads: data ? data.downloads : null,
    isLoading: !error && !data,
    isError: error,
  };
}

interface TechStackProps {
  inView?: boolean;
}

// The skillDetails object now includes an optional "npmName" field for packages
const skillDetails: {
  [key: string]: {
    name: string;
    description: string;
    npmName?: string;
    icon: React.ElementType;
  };
} = {
  "Node.js": {
    name: "Node.js",
    description: "JavaScript runtime for scalable backend applications.",
    npmName: "node",
    icon: SiNodedotjs,
  },
  "Express.js": {
    name: "Express.js",
    description: "Minimalist web framework for Node.js.",
    npmName: "express",
    icon: SiExpress,
  },
  "Nest.js": {
    name: "Nest.js",
    description: "Progressive Node.js framework for scalable apps.",
    npmName: "nestjs",
    icon: SiNestjs,
  },
  "React.js": {
    name: "React.js",
    description: "JavaScript library for building user interfaces.",
    npmName: "react",
    icon: SiReact,
  },
  HTML: {
    name: "HTML",
    description: "Markup language for structuring web pages.",
    icon: SiHtml5,
  },
  CSS: {
    name: "CSS",
    description: "Stylesheet language for designing web pages.",
    icon: SiCss3,
  },
  TailwindCSS: {
    name: "TailwindCSS",
    description: "Utility-first CSS framework for rapid UI development.",
    npmName: "tailwindcss",
    icon: SiTailwindcss,
  },
  Python: {
    name: "Python",
    description: "High-level programming language for various applications.",
    npmName: "python",
    icon: SiPython,
  },
  TypeScript: {
    name: "TypeScript",
    description: "Typed superset of JavaScript for better code quality.",
    npmName: "typescript",
    icon: SiTypescript,
  },
  JavaScript: {
    name: "JavaScript",
    description: "Popular language for web development.",
    npmName: "javascript",
    icon: SiJavascript,
  },
  Java: {
    name: "Java",
    description: "Versatile OOP language for web, mobile, and enterprise apps.",
    icon: DiJava,
  },
  "C++": {
    name: "C++",
    description:
      "Efficient language for system programming and game development.",
    icon: SiCplusplus,
  },
  C: {
    name: "C",
    description: "Low-level language for system and embedded programming.",
    icon: SiC,
  },
  Assembly: {
    name: "Assembly",
    description: "Low-level programming language for direct hardware control.",
    icon: MdCode,
  },
  SQL: {
    name: "SQL",
    description: "Language for managing structured databases.",
    icon: SiMysql,
  },
  NoSQL: {
    name: "NoSQL",
    description: "Databases for flexible, scalable data storage.",
    icon: SiMongodb,
  },
  "PL/SQL": {
    name: "PL/SQL",
    description: "Oracle's procedural language extension for SQL.",
    icon: SiOracle,
  },
  PostgreSQL: {
    name: "PostgreSQL",
    description: "Open-source relational database known for extensibility.",
    npmName: "pg", // Example package name
    icon: SiPostgresql,
  },
  MongoDB: {
    name: "MongoDB",
    description: "NoSQL database for scalable and flexible storage.",
    npmName: "mongodb",
    icon: SiMongodb,
  },
  Git: {
    name: "Git",
    description: "Version control system for tracking code changes.",
    icon: SiGit,
  },
  GitHub: {
    name: "GitHub",
    description: "Cloud-based Git repository hosting service.",
    icon: SiGithub,
  },
  GitLab: {
    name: "GitLab",
    description: "DevOps platform for CI/CD and Git repositories.",
    icon: SiGitlab,
  },
  Docker: {
    name: "Docker",
    description: "Platform for developing, shipping, and running containers.",
    npmName: "docker", // Not always applicable; can be omitted
    icon: SiDocker,
  },
  Kubernetes: {
    name: "Kubernetes",
    description: "Orchestration system for containerized applications.",
    npmName: "kubernetes", // Example value if available
    icon: SiKubernetes,
  },
  AWS: {
    name: "AWS",
    description: "Amazon's cloud computing platform.",
    icon: FaAws,
  },
  Postman: {
    name: "Postman",
    description: "API testing and development tool.",
    npmName: "postman", // Example value if applicable
    icon: SiPostman,
  },
};

// The SkillDesc component uses the npmName field (if available) to fetch download stats.
const SkillDesc = ({
  skill,
  category,
}: {
  skill: string;
  category: string;
}) => {
  const convert = (labelValue: number) => {
    const formatNumber = (num: number) => {
      return num.toFixed(3).replace(".", ",");
    };

    return Math.abs(labelValue) >= 1.0e9
      ? formatNumber(Math.abs(labelValue) / 1.0e9) + "B"
      : Math.abs(labelValue) >= 1.0e6
      ? formatNumber(Math.abs(labelValue) / 1.0e6) + "M"
      : Math.abs(labelValue) >= 1.0e3
      ? formatNumber(Math.abs(labelValue) / 1.0e3) + "K"
      : formatNumber(Math.abs(labelValue));
  };
  console.log(category);
  const details = skillDetails[skill];
  // If npmName exists, fetch download count; otherwise show "N/A"
  const { downloads, isLoading } = details.npmName
    ? useNpmDownloads(details.npmName)
    : { downloads: null, isLoading: false };

  return (
    <HoverCardContent maxWidth="240px" p="4">
      <HoverCardArrow />
      <Stack gap="4" direction="row">
        {/* Render the react-icon; center it with mx="auto" */}
        <Icon as={details.icon} boxSize="24px" mx="auto" />
        <Stack gap="3">
          <Stack gap="1">
            <Text textStyle="sm" fontWeight="semibold">
              {details.name}
            </Text>
            <Text textStyle="sm" color="gray.500">
              {details.description}
            </Text>
          </Stack>
          <HStack color="gray.400">
            <Icon as={LuChartLine} boxSize="10px" />
            <Text textStyle="xs">
              {isLoading ? (
                "Loading..."
              ) : downloads &&
                details.name !== "Python" &&
                category !== "Tools & Platforms" ? (
                `${convert(Number(downloads))} Downloads`
              ) : (
                <Flex align="center" gap="1">
                  Hot <FaHotjar />
                </Flex>
              )}
            </Text>
          </HStack>
        </Stack>
      </Stack>
    </HoverCardContent>
  );
};

const TechStack = ({ inView = false }: TechStackProps) => {
  // Animation keyframes

  const float = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  `;

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
      skills: [
        "Python",
        "TypeScript",
        "JavaScript",
        "Java",
        "C++",
        "C",
        "Assembly",
      ],
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
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Docker",
        "Kubernetes",
        "AWS",
        "Postman",
      ],
      icon: Settings,
      color: "orange.400",
    },
  ];

  const titleAnimation = inView ? `${float} 4s ease-in-out infinite` : "none";

  return (
    <Box
      borderBottom={"1px solid #2d3748"}
      display={["flex"]}
      p={5}
      as="section"
      w="full"
      py={20}
      position="relative"
      overflow="hidden"
    >
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Flex
          direction="column"
          align="center"
          mb={16}
          opacity={inView ? 1 : 0}
          transform={inView ? "translateY(0)" : "translateY(20px)"}
          transition="opacity 0.8s ease-out, transform 0.8s ease-out"
        >
          <Text
            fontSize={{ base: "3xl", md: "6xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, blue.300, purple.400)"
            bgClip="text"
            color="white"
            mb={4}
            animation={titleAnimation}
            transitionDelay="0.2s"
          >
            Technical Arsenal ⚙️
          </Text>
          <Text
            color="gray.400"
            fontSize="lg"
            textAlign="center"
            transitionDelay="0.4s"
          >
            Tools & Technologies Powering My Solutions
          </Text>
        </Flex>

        <Flex direction="column" gap={12}>
          {stackData.map((category, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              opacity={inView ? 1 : 0}
              transform={inView ? "translateX(0)" : "translateX(-50px)"}
              transition={`opacity 0.6s ease-out ${
                index * 0.2
              }s, transform 0.6s ease-out ${index * 0.2}s`}
            >
              <Flex align="center" mb={6} gap={5}>
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

              <Flex wrap="wrap" gap={4} px={4} justifyContent="center">
                {category.skills.map((skill, skillIndex) => (
                  <HoverCardRoot
                    key={skillIndex}
                    openDelay={200}
                    closeDelay={100}
                  >
                    <HoverCardTrigger asChild>
                      <Box
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
                        opacity={inView ? 1 : 0}
                        transform={inView ? "scale(1)" : "scale(0.9)"}
                        style={{
                          transition: `opacity 0.3s ease-out ${
                            index * 0.2 + skillIndex * 0.05
                          }s, transform 0.3s ease-out ${
                            index * 0.2 + skillIndex * 0.05
                          }s, all 0.2s ease`,
                        }}
                      >
                        {skill}
                      </Box>
                    </HoverCardTrigger>
                    <SkillDesc skill={skill} category={category.category} />
                  </HoverCardRoot>
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
          opacity={inView ? 1 : 0}
          transition="opacity 1.5s ease-out"
        >
          Hover technologies for details
        </Text>
      </Box>
    </Box>
  );
};

export default TechStack;
