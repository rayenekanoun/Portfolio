import {
  Box,
} from "@chakra-ui/react";
import TechStack from "./TechStack";
import ProjectSlider from "./ProjectsSlider";
import AcademicJourney from "./AcademicJourney";
import Landing from "./Landing";
import Description from "./Description";


const Home = () => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-t, blue.400, blue.300)"
      color="white"
      mt={["80px", "100px"]}
      overflowX="hidden"
    >
      <Landing />
      <AcademicJourney />
      <ProjectSlider />
      <TechStack />
      <Description />
      <Box height={"100vh"}></Box>
    </Box>
  );
};
export default Home;
