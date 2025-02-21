import {
    Box,
    ColorSwatch,
    Text,
    Stack,
  } from "@chakra-ui/react";


const AcademicJourney = () => {
    return(
        <Box
        width="100%"
        maxW="container.xl"
        mx="auto"
        mb={10}
        p={8}
        borderRadius="xl"
        backdropFilter="blur(10px)"
        boxShadow="2xl"
        textAlign="center" // Center text in the container
      >
        {/* Centered Heading */}
        <Box display="flex" justifyContent="center" mb={8}>
          <Text
            fontSize={["3xl", "4xl"]}
            fontWeight="bold"
            color="white"
            bgGradient="linear(to-r, blue.400, purple.400)"
            position="relative"
          >
            Academic Journey 🎓
          </Text>
        </Box>

        {/* Timeline Container */}
        <Box position="relative">
          {/* Timeline Line */}
          <Box
            position="absolute"
            left={["16px", "24px"]}
            w="2px"
            h="100%"
            bg="linear-gradient(to bottom, blue.400, purple.400)"
          />

          {/* Timeline Items */}
          <Stack gap={10}>
            {/* Pre-Engineering */}
            <Box>
              <Box position="relative">
                {/* Timeline Dot */}
                <Text
                  fontSize={["xl", "2xl"]}
                  fontWeight="semibold"
                  color="blue.200"
                  mb={2}
                >
                  <ColorSwatch
                    borderRadius="full"
                    boxSize="0.70em"
                    value="lightblue"
                    mr={2}
                  />
                  PRE-ENGINEERING
                </Text>
                <Text fontSize={["md", "lg"]} color="gray.300" mb={1}>
                  Faculty of Science of Tunis, Tunisia
                </Text>
                <Text
                  fontSize={["sm", "md"]}
                  color="blue.300"
                  fontWeight="medium"
                >
                  2022 - 2024
                </Text>
              </Box>
            </Box>

            {/* Bachelor of Engineering */}
            <Box>
              <Box position="relative">
                {/* Timeline Dot */}

                <Text
                  fontSize={["xl", "2xl"]}
                  fontWeight="semibold"
                  color="purple.200"
                  mb={2}
                >
                  <ColorSwatch
                    borderRadius="full"
                    boxSize="0.70em"
                    value="#DAB1DA"
                    mr={2}
                  />
                  BACHELOR OF ENGINEERING - COMPUTER ENGINEERING
                </Text>
                <Text fontSize={["md", "lg"]} color="gray.300" mb={1}>
                  Faculty of Science of Tunis, Tunisia
                </Text>
                <Text
                  fontSize={["sm", "md"]}
                  color="purple.300"
                  fontWeight="medium"
                >
                  2024 - 2027
                </Text>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    )};
export default AcademicJourney;