import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import Message from "./Components/Message";

function App() {
  return (
    <Box bg={"purple.300"}>
      <Container h={"100vh"} bg={"whitesmoke"}>
        <VStack height={"full"} p={4}>
          <Button width={"full"} colorScheme="red">
            Sign Out
          </Button>
          <VStack h={"full"} w={"full"}>
            <Message text={"Sample Text"} />
            <Message text={"Sample Text"} user="me" />
          </VStack>
          <form action="" style={{ width: "100%" }}>
            <HStack>
              <Input
                placeholder="Enter a message"
                style={{ border: "2px solid black" }}
              />
              <Button type="submit" colorScheme="purple">
                Send
              </Button>
            </HStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
