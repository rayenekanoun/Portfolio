import {
  Box,
  ColorSwatch,
  Text,
  Stack,
} from "@chakra-ui/react";

const AcademicJourney = () => {
  return (
      <Box
          width="100%"
          maxWidth="1200px"
          mx="auto"
          mt={[16, 20, 24]}
          mb={[8, 12, 40]}
          p={[4, 6, 8]}
          borderRadius="xl"
          backdropFilter="blur(10px)"
          boxShadow="2xl"
          position="relative"
          zIndex="1"
      >
          <Box 
              display="flex" 
              justifyContent="center" 
              mb={[6, 8, 10]}
          >
              <Text
                  fontSize={["2xl", "3xl", "4xl"]}
                  fontWeight="bold"
                  color="white"
                  bgGradient="linear(to-r, blue.400, purple.400)"
                  px={4}
                  py={2}
                  borderRadius="lg"
              >
                  Academic Journey 🎓
              </Text>
          </Box>

          <Box position="relative"  borderRadius="xl" p={4}>
              <Stack gap={[8, 10, 12]}>
                  <Box pl={[8, 10, 12]} position="relative">
                      <Text
                          fontSize={["lg", "xl", "2xl"]}
                          fontWeight="semibold"
                          color="blue.200"
                          mb={2}
                          display="flex"
                          alignItems="center"
                          
                      >
                          <ColorSwatch
                              borderRadius="full"
                              boxSize="0.70em"
                              value="lightblue"
                              mr={2}
                          />
                          PRE-ENGINEERING
                      </Text>
                      <Text 
                          fontSize={["sm", "md", "lg"]} 
                          color="gray.300" 
                          mb={1}
                      >
                          Faculty of Science of Tunis, Tunisia
                      </Text>
                      <Text
                          fontSize={["xs", "sm", "md"]}
                          color="blue.300"
                          fontWeight="medium"
                      >
                          2022 - 2024
                      </Text>
                  </Box>

                  <Box pl={[8, 10, 12]} position="relative">
                      <Text
                          fontSize={["lg", "xl", "2xl"]}
                          fontWeight="semibold"
                          color="purple.200"
                          mb={2}
                          display="flex"
                          alignItems="center"
                      >
                          <ColorSwatch
                              borderRadius="full"
                              boxSize="0.70em"
                              value="#DAB1DA"
                              mr={2}
                          />
                          BACHELOR OF ENGINEERING - COMPUTER ENGINEERING
                      </Text>
                      <Text 
                          fontSize={["sm", "md", "lg"]} 
                          color="gray.300" 
                          mb={1}
                      >
                          Faculty of Science of Tunis, Tunisia
                      </Text>
                      <Text
                          fontSize={["xs", "sm", "md"]}
                          color="purple.300"
                          fontWeight="medium"
                      >
                          2024 - 2027
                      </Text>
                  </Box>
              </Stack>
          </Box>
      </Box>
  );
};

export default AcademicJourney;