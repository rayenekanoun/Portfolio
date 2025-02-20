import { Flex, Spinner } from "@chakra-ui/react";

const PageSpinner = () => {
  return (
    <Flex
      flexDir={"column"}
      justify={"center"}
      w={"100%"}
      h="100vh"
    >
      <Flex justifyContent={"center"}>
        <Spinner />
      </Flex>
    </Flex>
  );
};
export default PageSpinner;