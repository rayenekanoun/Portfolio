import { Box, Grid, Heading, Text, Flex, Icon, Link } from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { MdBlock } from "react-icons/md"; // Unavailable icon

const ProjectsGoto = () => {
  const projects = [
    {
      title: "Expenses Tracker",
      description:
        "An expense tracking application with real-time analytics for budget management for individuals and businesses.",
      tech: "Nextjs • Nestjs • Supabase",
      link: "https://amtm.pro/",
      github: "#",
    },
    {
      title: "Game Releases",
      description:
        "A platform to track and manage video game releases with real-time updates and notifications for gamers.",
      tech: "React • Nodejs • MongoDB",
      link: "https://www.good-game-countdowns.com/",
      github: "#",
    },
    {
      title: "Swap Clothes backend",
      description:
        "A platform to swap clothes with other users to reduce waste and promote sustainable fashion.",
      tech: "Nodejs • MongoDB",
      link: "#",
      github: "https://github.com/rayenekanoun/SwapClothing",
    },
    {
      title: "Weather App",
      description:
        "A real-time weather forecasting application with location-based weather updates and alerts.",
      tech: "HTML • CSS • OpenWeatherMap API",
      link: "#",
      github: "https://github.com/rayenekanoun/WeatherApp",
    },
    {
      title: "Hotel management system",
      description:
        "A platform to manage hotel bookings, room service, and customer feedback.",
      tech: "Java • JavaSwing • MySQL",
      link: "#",
      github: "https://github.com/rayenekanoun/projet_java",
    },
  //  {
  //     title: "Ecommerce platform",
  //     description:
  //       "An online shopping platform with product listings, cart management, and payment gateway.",
  //     tech: "React • Nodejs • MongoDB",
  //     link: "#",
  //     github: "#",
  //   },
    
    {
      title: "Voyage agency website",
      description:
        "A website for a travel agency with destination listings and booking forms.",
      tech: "HTML • CSS",
      link: "#",
      github: "https://github.com/rayenekanoun/voyage_agency",
    },
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
            minH="250px"
            display="flex"
            flexDirection="column"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0px 0px 25px rgba(46, 204, 113, 0.2)",
              borderColor: "teal.300",
              cursor: "pointer",
            }}
          >
            {/* Content Area */}
            <Box flex="1">
              <Heading size="md" mb={3} color="teal.200">
                {project.title}
              </Heading>
              <Text fontSize="sm" color="gray.400" mb={4}>
                {project.description}
              </Text>
            </Box>

            {/* Bottom Section */}
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
                {/* Demo Link */}
                <Link
                  href={project.link !== "#" ? project.link : undefined}
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                  _hover={{ textDecoration: "none" }}
                  cursor={project.link === "#" ? "not-allowed" : "pointer"}
                  opacity={project.link === "#" ? 0.5 : 1}
                >
                  <Flex align="center" gap={2}>
                    <Icon as={project.link === "#" ? MdBlock : FiExternalLink} />
                    <Text fontSize="sm">
                      {project.link === "#" ? "Unavailable" : "Demo"}
                    </Text>
                  </Flex>
                </Link>

                {/* GitHub Link */}
                <Link
                  href={project.github !== "#" ? project.github : undefined}
                  target={project.github !== "#" ? "_blank" : undefined}
                  rel={project.github !== "#" ? "noopener noreferrer" : undefined}
                  _hover={{ textDecoration: "none" }}
                  cursor={project.github === "#" ? "not-allowed" : "pointer"}
                  opacity={project.github === "#" ? 0.5 : 1}
                >
                  <Flex align="center" gap={2}>
                    <Icon as={project.github === "#" ? MdBlock : FiGithub} />
                    <Text fontSize="sm">
                      {project.github === "#" ? "Unavailable" : "Code"}
                    </Text>
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
