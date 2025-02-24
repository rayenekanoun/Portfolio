import {
  Box,
  Button,
  Image,
  Stack,
  useDisclosure,
  Link,
  Flex,
} from "@chakra-ui/react";
import logo from "../assets/image.png";
import { LuExternalLink } from "react-icons/lu";

const NavBar = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <>
      {/* Main Navigation - Responsive */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.800"
        p={[3, 6, 8]} // Responsive padding
        position="fixed"
        backdropFilter="blur(40px)"
        height={["75px","100px"]} // Responsive height
        top="0"
        left="0"
        right="0"
        zIndex="30"
      >
        <a href="/">
          <Image
            src={logo}
            alt="Logo"
            borderRadius="full"
            boxSize={["30px", "35px"]} // Responsive logo size
          />
        </a>

        {/* Menu & Hamburger */}
        <Stack direction="row" alignItems="center" gap={4}>
          <Button
            display={{ base: "none", sm: "block" }}
            borderRadius={20}
            variant="outline"
            colorScheme="gray"
            _hover={{
              bg: "white",
              color: "black",
              transform: "scale(1.05)",
            }}
          >
            Contact me
          </Button>
          <Button onClick={onToggle} variant="ghost" position="relative">
            <Box width="24px" height="16px" position="relative">
              <Box
                position="absolute"
                height="2px"
                width="24px"
                bg="white"
                transition="all 0.3s ease"
                transform={open ? "rotate(45deg) translate(5px, 5px)" : "none"}
                top="0"
              />
              <Box
                position="absolute"
                height="2px"
                width="24px"
                bg="white"
                transition="all 0.3s ease"
                opacity={open ? 0 : 1}
                top="7px"
              />
              <Box
                position="absolute"
                height="2px"
                width="24px"
                bg="white"
                transition="all 0.3s ease"
                transform={
                  open ? "rotate(-45deg) translate(5px, -5px)" : "none"
                }
                bottom="0"
              />
            </Box>
          </Button>
        </Stack>
      </Box>

      {/* Fullscreen Menu Overlay */}
      <Box
        position="fixed"
        top="0" // ✅ Start from the top
        left="0"
        right="0"
        bottom="0"
        height="100vh"
        bg="rgba(0, 0, 0, 0.7)" // ✅ Semi-transparent black
        backdropFilter="blur(12px)"
        zIndex="20" // ✅ Same as navbar
        opacity={open ? 1 : 0}
        visibility={open ? "visible" : "hidden"}
        transition="all 0.5s ease"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDirection="column" gap={6} textAlign="center" mb={[5, 10]}>
          {["Home", "Projects", "Contact"].map((item) => (
            <Box
              key={item}
              fontSize={["4xl", "4xl", "5xl"]} // Responsive font sizes
              transition="all 0.3s ease"
              _hover={{ color: "gray.400" , 
                letterSpacing: '-0.02em', // Increase letter spacing on hover
                transition: 'letter-spacing 0.3s ease',
               }}
              fontFamily="inter"
            >
              <a href={`/${item === "Home" ? "" : item}`}>{item}</a>
            </Box>
          ))}
        </Flex>

        {/* Social Links */}
        <Flex
          wrap="wrap"
          justifyContent="center"
          p={4}
          maxW={["90vw", "80vw", "60vw"]} // Responsive max width
          mt={6}
          gap={2}
          fontSize={["sm", "2xl"]} // Responsive font sizes
        >
          {[
            { name: "EMAIL" },
            {
              name: "LinkedIn",
              URL: "https://linkedin.com/in/rayene-kanoun-477542254/",
            },
            { name: "GitHub", URL: "https://github.com/rayenekanoun" },
            {
              name: "My Cv",
              URL: "https://docs.google.com/document/d/1kGi2b4XViuiWf9UiCbtwR3O7mrJ4PbcNzLfhgGVAiYE/edit?usp=sharing",
            },
          ].map((item) => (
            <Link
              justifyContent={"center"}
              key={item.name}
              width={["50%", "40%", "40%", "auto"]}
              href={item.URL || "#"}
              _hover={{
                textDecoration: "none"
              }} // Prevents unwanted underline styling
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                width="100%"
                variant="outline"
                colorScheme="white"
                borderRadius="full"
                fontSize={["xs", "md", "lg"]} // Responsive font sizes
                _hover={{
                  textDecoration: "none",
                  bg: "white",
                  color: "black",
                  transform: "scale(1.05)",
                }}
              >
                {item.name} <LuExternalLink />
              </Button>
            </Link>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
