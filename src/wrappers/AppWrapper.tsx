import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const AppWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box
      paddingTop={"80px"}
      lg={{ paddingTop: "80px" }}
    >
      {children}
    </Box>
  );
};

export default AppWrapper;