import { Box, Grid, Heading, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectsGoto = () => {
  const projects = [
    {
      title: "Expenses Tracker",
      description:
        "An expense tracking application with real-time analytics for budget management for individuals and businesses .",
      tech: "Nextjs • Nestjs • Supabase ",
      link: "#",
      github: "#",
    },
    {
      title: "Game Releases",
      description:
        "A platform to track and manage video game releases with real-time updates and notifications for gamers .",
      tech: "React • Nodejs • MongoDB",
      link: "#",
      github: "#",
    },
    {
      title: "Swap Clothes backend",
      description:
        "A platform to swap clothes with other users to reduce waste and promote sustainable fashion .",
      tech: " Nodejs • MongoDB",
      link: "#",
      github: "#",
    },
    {
      title: "Weather App",
      description:
        "A real-time weather forecasting application with location-based weather updates and alerts .",
      tech: "HTML • CSS • OpenWeatherMap API",
      link: "#",
      github: "#",
    },
    {
      title: "Hotel management system",
      description:
        "A platform to manage hotel bookings, room service, and customer feedback .",
      tech: "Java • JavaSwing • MySQL",
      link: "#",
      github: "#",
    },
    {
      title: "Ecommerce platform",
      description:
        "An online shopping platform with product listings, cart management, and payment gateway .",
      tech: "React • Nodejs • MongoDB",
      link: "#",
      github: "#",
    },

    // Add more projects...
  ];

  return (
    <Box
      p={8}
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading
        textAlign="center"
        mb={12}
        fontSize="4xl"
        fontWeight="300"
        letterSpacing="2px"
      >
        <Text as="span" color="teal.200">
          //
        </Text>{" "}
        Explore My Work
      </Heading>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={8}
        maxW="1200px"
        mx="auto"
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            p={6}
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="lg"
            bg="blackAlpha.300"
            backdropFilter="auto"
            backdropBlur="10px"
            transition="all 0.3s ease"
            minH="250px" // Set minimum card height
            display="flex"
            flexDirection="column"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0px 0px 25px rgba(46, 204, 113, 0.2)",
              borderColor: "teal.300",
              cursor: "pointer",
            }}
          >
            {/* Content Area with fixed bottom section */}
            <Box flex="1">
              <Heading size="md" mb={3} color="teal.200">
                {project.title}
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={4}>
                {project.description}
              </Text>
            </Box>

            {/* Fixed Bottom Section */}
            <Box mt="auto">
              <Text
                fontSize="xs"
                color="whiteAlpha.600"
                mb={4}
                bg="blackAlpha.400"
                p={2}
                borderRadius="md"
              >
                {project.tech}
              </Text>
              <Flex justify="space-between" align="center">
                <Link href={project.link} _hover={{ textDecoration: "none" }}>
                  <Flex align="center" gap={2}>
                    <Icon as={FiExternalLink} />
                    <Text fontSize="sm">Demo</Text>
                  </Flex>
                </Link>
                <Link href={project.github} _hover={{ textDecoration: "none" }}>
                  <Flex align="center" gap={2}>
                    <Icon as={FiGithub} />
                    <Text fontSize="sm">Code</Text>
                  </Flex>
                </Link>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>

      <Text
        textAlign="center"
        mt={12}
        fontSize="sm"
        opacity="0.8"
        fontStyle="italic"
      >
        Scroll down to view detailed case studies →
      </Text>
    </Box>
  );
};

export default ProjectsGoto;
