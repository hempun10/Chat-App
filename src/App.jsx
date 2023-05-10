import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";

import Message from "./Components/Message";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";
import { app } from "./Firebase";
import { useEffect, useState } from "react";

const auth = getAuth(app);

const loginHandle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const logOutHandler = () => signOut(auth);
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      setUser(data);
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <Box bg={"purple.300"}>
      {user ? (
        <Container h={"100vh"} bg={"whitesmoke"}>
          <VStack height={"full"} p={4}>
            <Button width={"full"} colorScheme="red" onClick={logOutHandler}>
              Sign Out
            </Button>
            <VStack h={"full"} w={"full"} overflowY={"auto"}>
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
      ) : (
        <VStack bg={"white"} justifyContent={"center"} height={"100vh"}>
          <Button colorScheme={"purple"} onClick={loginHandle}>
            Sign In with google
          </Button>
        </VStack>
      )}
    </Box>
  );
}

export default App;
