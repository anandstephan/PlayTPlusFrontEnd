import { useState } from "react"
import { Box,VStack,Center,Image,Text,Stack,Input,Pressable,Button,HStack, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const LoginScreen = ({setAuthNavigator}) => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation()

    const loginHandler = async () =>{

      if(email.length==0 || password.length==0){
        Alert.alert("Message","Please Fill All the Fields")
      }else{
        try {     
          const response = await fetch('https://playtplusbackend.vercel.app/login',{
         method:"POST",
         headers: {
           "Content-Type": "application/json",
         },
         body:JSON.stringify({
           email,
           password
         })
       })
       const data = await response.json()
       if(data.message == "Successfully signed in"){
         setAuthNavigator(prev => !prev)
       }
         
       } catch (error) {
           console.log("error")
       }
      }

   

 
    }
    return (
        <Box bg="#fff" flex={1}>
            <ScrollView>
          <VStack
            space={2}
            justifyContent="center"
            alignItems="center"
            safeAreaTop
            my={9}
            mb={9}
          >
              {/* Image */}
            <Center>
              <Image
                size={160}
                borderRadius={30}
                source={{
                  uri: "https://yt3.googleusercontent.com/ytc/AOPolaQ-l1_Uh6aLEIM-8YX-gQx4ORcUEp7eUllXAzl1=s900-c-k-c0x00ffffff-no-rj",
                }}
                alt="Alternate Text"
              />
            </Center>
          </VStack>
          <VStack space={5} my={2} alignItems={"center"}>
            <Text
              color={"#01295f"}
              bold
              fontSize={"xl"}
              maxW="300"
              w="80%"
              textAlign={"center"}
            >
              Sign In
            </Text>
          </VStack>
          <VStack space={2} alignItems={"center"}>
            <Text
              bold
              color={"#e3b26f"}
              fontSize={"lg"}
              maxW="300"
              w="80%"
              textAlign={"center"}
            >
              Login in to your account!
            </Text>
          </VStack>
          <Stack space={4} my={8} w="75%" maxW="300px" mx="auto">
            <Input
              size={"lg"}
              value={email}
              onChangeText={(email) => setEmail(email)}
              w={{
                base: "100%",
                md: "55%",
              }}
              alignSelf={"center"}
              placeholder="Username or Email"
            />
          </Stack>
          <Stack space={4} w="75%" maxW="300px" mx="auto">
            <Input
              size={"lg"}
              value={password}
              onChangeText={(password) => setPassword(password)}
              w={{
                base: "100%",
                md: "55%",
              }}
              type={show ? "text" : "password"}
           
              placeholder="Password"
            />
          </Stack>
          <Stack space={4} my={10} w="75%" maxW="300px" mx="auto">
        
              <Button
              bgColor={"#ee5820"}
                size="lg"
                borderRadius={10}
                variant="outline"
              onPress={loginHandler}
              >
                <Text color="#FFF">
                Login
                </Text>
            
              </Button>
             
              <HStack justifyContent="center">
              <Text color={"grey"}>Don't have an Account?</Text>
              <Pressable onPress={() => navigation.navigate("Signup")}>
                <Text bold color={"#01295f"} ml={2}>
                  Register Now
                </Text>
              </Pressable>
            </HStack>
          </Stack>
        
          </ScrollView>
        </Box>
    );
  };
  
  export default LoginScreen;