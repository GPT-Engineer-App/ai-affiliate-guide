import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaBook, FaTools, FaUserFriends } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <VStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZmZpbGlhdGUlMjBtYXJrZXRpbmd8ZW58MHx8fHwxNzEzOTA5ODI0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
          <Heading as="h1" size="2xl" textAlign="center">
            Revolutionize Your Income with AI and No-Code Affiliate Marketing
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Discover tools, gain knowledge, and start your journey towards automated passive income.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Explore Tools
          </Button>
        </VStack>
      </Flex>

      <Box py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Why Choose Us?
        </Heading>
        <Flex justify="space-around">
          <VStack>
            <FaBook size="3em" />
            <Text fontSize="lg">Comprehensive Learning Resources</Text>
          </VStack>
          <VStack>
            <FaTools size="3em" />
            <Text fontSize="lg">Curated AI Tools and No-Code Platforms</Text>
          </VStack>
          <VStack>
            <FaUserFriends size="3em" />
            <Text fontSize="lg">Community-Driven Insights</Text>
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
