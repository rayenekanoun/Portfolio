import React from "react";
import {
  Box,
  Image,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  Flex,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import img from "../assets/4.jpg";

const Footer = () => {
  return (
    <Flex
      as="footer"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      backdropFilter="blur(10px)"
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      width="100%"
      position="relative"
      color="white"
      mt={["71px", "80px", "80px", "100px"]}
    >
      <Container borderBottom={"1px solid white"} maxW="7xl" py={10}>
        <Stack gap={8}>
          {/* Main Footer Content */}
          <Stack
            direction={["column", "column", "row", "row"]}
            gap={[10, 20]}
            justify="space-between"
            align={["center", "center"]}
          >
            {/* Brand Section */}
            <Flex
              flexDirection={"column"}
              align={["center", "center", "start"]}
              gap={4}
            >
              <Text
                bgGradient="linear(to-r, blue.400, purple.400)"
                bgClip="text"
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                mb={2}
                color={"white"}
              >
                Rayene Kanoun
              </Text>
              <Text color="whiteAlpha.700" maxW="300px">
                Building the digital world with code and creativity
              </Text>
            </Flex>

            {/* Navigation Links */}
            <Stack
              direction={["column", "column", "column", "row"]}
              gap={[4, 8]}
              align={"center"}
            >
              {["Home", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  fontSize="sm"
                  color="whiteAlpha.700"
                  _hover={{
                    color: "purple.400",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>

            {/* Contact Section */}
            <Stack align={["center ", "center ", "center ", "end"]}>
              <Text
                color="whiteAlpha.900"
                fontSize="sm"
                fontWeight="semibold"
                mb={2}
              >
                Get in touch
              </Text>
              <Box
                color="whiteAlpha.700"
                fontSize="sm"
                display="flex"
                alignItems="center"
                gap={2}
                _hover={{ color: "purple.400" }}
              >
                <Icon as={HiMail} />
                rayenekanoun3002@gmail.com
              </Box>
            </Stack>
          </Stack>

          {/* Bottom Section */}
          <Flex
            direction={["column", "row"]}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text
              color="whiteAlpha.700"
              fontSize="sm"
              textAlign={["center", "left"]}
            >
              © {new Date().getFullYear()} Rayene Kanoun. All rights reserved.
            </Text>

            {/* Social Links */}
            <Box as={ButtonGroup} gap={4}>
              <Link
                as="a"
                href="https://github.com/rayenekanoun"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  bg: "whiteAlpha.200",
                  color: "purple.400",
                }}
              >
                <FaGithub />
              </Link>
              <Link
                as="a"
                href="https://linkedin.com/in/rayene-kanoun-477542254"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  bg: "whiteAlpha.200",
                  color: "purple.400",
                }}
              >
                <FaLinkedin />
              </Link>
              <Link
                as="a"
                href="https://www.upwork.com/freelancers/~010aaded73a7bf104f"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  bg: "whiteAlpha.200",
                  color: "purple.400",
                }}
              >
                <FaUpwork />
              </Link>
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Flex
        margin={0}
        borderRadius="lg"
        p={5}
        boxShadow="lg"
        justify={"center"}
        align={"center"}
      >
        <Image src={img} width={["100%", "100%", "100%", "70%"]}></Image>
      </Flex>
    </Flex>
  );
};

export default Footer;
