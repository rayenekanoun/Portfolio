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
    flexDirection={["column", "column", "column","row"]}
    justifyContent={["space-between", "center", "space-between"]}
    fontWeight="medium"
    width={["100%", "100%", "100%"]}
    height={["140vh", "140vh", "140vh","100vh"]}
    mt={["0","0px","160px", "0"]}

  >
    <Box
      width={["100%", "100%", "100%","50%"]}
      height={["60%", "60%", "60%","100%"]}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={["5", "5", '20',"10"]}
      mt={["20", "10", "10",0]}
      mb={["20", "10", "10","0"]}
    >
      <Text
        fontWeight=""
        fontSize={["xs", "sm", "sm","lg"]}
        fontFamily={"monospace"}
      >
        <ColorSwatch
          borderRadius="full"
          boxSize="0.70em"
          value="Green"
          mr={2}
        />
        AVAILABLE FOR WORK
      </Text>
      <Text fontSize={["4xl", "4xl", "3xl", "5xl", "7xl"]}>
        I BUILD THE <br /> DIGITAL WORLD WITH
      </Text>
      <Text fontSize={["4xl", "4xl", "3xl", "5xl", "7xl"]}>
        <CodeInIDE /> & PASSION
      </Text>

      <Text color={"gray.400"} fontSize={["lg", "xl", "2xl"]}>
        MY NAME IS RAYENE KANOUN 🙋
        <br />
        I AM A COMPUTER ENGINEERING STUDENT
        <br />
        BASED IN TUNIS, TUNISIA
      </Text>
    </Box>

    <Box
      width={["100%", "100%", "100%","50%"]}
      height={["100%", "50%", "100%"]}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={["center", "center", "flex-end"]}
      p={["5", "5", "20"]}
      pt={["0", "0", "0"]}

    >
      <Image
        src={landingImg}
        alt="Landing"
        width={["350px", "590px", "590px","350px"]} // Responsive width
        height="auto"
      />
    </Box>
  </Box>
  );
};
export default Landing;