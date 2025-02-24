import {
    Box,
    ColorSwatch,
    Text,
    Image,
  } from "@chakra-ui/react";
  import landingImg from "../../assets/3.jpg";


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
  
  const Landing = () => {
    return (
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        minHeight={["auto", "auto", "100vh"]}
        py={[8, 12, 0]}
        px={[4, 6, 8]}
        position="relative"
      >
        <Box
          width={["100%", "100%", "70%"]}
          fontSize={["3xl", "4xl", "5xl", "6xl","8xl"]}
          mb={[8, 12, 0]}
          ml={[0, 0, 10]}
          mt={[0, 0, -20]}
        >
          <Text
            fontSize={["xs", "sm", "lg"]}
            fontFamily="monospace"
            display="flex"
            alignItems="center"
            mb={4}
          >
            <ColorSwatch
              borderRadius="full"
              boxSize="0.70em"
              value="Green"
              mr={2}
            />
            AVAILABLE FOR WORK
          </Text>
          
          <Text 
            lineHeight="1.2"
            mb={2}
          >
            I BUILD THE   
          </Text>
          <Text 
            lineHeight="1.2"
            mb={2}
          >
            DIGITAL WORLD WITH
          </Text>
          
          <Text 
            mb={6}
          >
            <CodeInIDE /> & PASSION
          </Text>
  
          <Text 
            color="gray.400" 
            fontSize={["md", "lg", "xl"]}
            lineHeight="1.6"
          >
            MY NAME IS RAYENE KANOUN 🙋
            <br />
            I AM A COMPUTER ENGINEERING STUDENT
            <br />
            BASED IN TUNIS, TUNISIA
          </Text>
        </Box>
  
        <Box
          width={["100%", "100%", "50%"]}
          display="flex"
          justifyContent={["center", "center", "end"  ]}
          alignItems="center"
          position={["static", "static", "absolute"]}
          top={["auto", "auto", "20"]}
          right={["auto", "auto", "20"]}
        >
          <Image
            src={landingImg}
            alt="Landing"
            maxWidth={["360px", "360px", "360px", "360px"]}
            width="100%"
            height="auto"
            objectFit="contain"
          />
        </Box>
      </Box>
    );
  };
  
  export default Landing;
  