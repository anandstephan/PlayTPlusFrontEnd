import React, {useState} from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
  Center,
  Stack,
  Input,
  Button,
  ScrollView
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const SignupScreen = () => {
  const [show, setShow] = useState(false);
  const [ name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigation = useNavigation()

  const signupHandler = async () =>{
    if(name.length==0 || email.length==0 || password.length==0){
      Alert.alert("Message","Please Fill all the Fields")
    }else{
      try {     
        const response = await fetch('https://playtplusbackend.vercel.app/signup',{
       method:"POST",
       headers: {
         "Content-Type": "application/json",
       },
       body:JSON.stringify({
         name,
         email,
         password
       })
     })
     const data = await response.json()
     console.log(data)
     if(data.msg == "User Added successfully"){
       Alert.alert("Message",data.msg,[{text:'Ok',onPress:()=>navigation.navigate("Login")}]);
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
        my={6}
        mb={6}
      >
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
        <Text color={'#01295f'} bold fontSize={"xl"} maxW="300" w="80%" textAlign={"center"}>
          Register 
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
          Register to get Started!
        </Text>
      </VStack>
      <Stack space={2} my={4} w="75%" maxW="300px" mx="auto">
        <Input
          size={"lg"}
          value={name}
          onChangeText={(name) => setName(name)}
          w={{
            base: "100%",
            md: "55%",
          }}
          alignSelf={"center"}
          placeholder="Enter your name"
        />
      </Stack>
      <Stack space={2} my={1} w="75%" maxW="300px" mx="auto">
        <Input
          size={"lg"}
          value={email}
          onChangeText={(email) => setEmail(email)}
          w={{
            base: "100%",
            md: "55%",
          }}
          alignSelf={"center"}
          placeholder="Enter your Email"
        />
      </Stack>
      <Stack space={2} my={4} w="75%" maxW="300px" mx="auto">
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
    
      <Stack space={4} my={8} w="75%" maxW="300px" mx="auto">
       
          <Button
          bgColor={'#ee5820'}
            size="lg"
            borderRadius={10}
            variant="outline"
          onPress={signupHandler}
          >
            <Text color="#FFFFFF">
            Register
            </Text>

          </Button>
    

        <HStack justifyContent="center">
          <Text color={"grey"}>Already have an Account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text bold color={'#01295f'} ml={2}>Login Now</Text>
          </Pressable>
        </HStack>
      </Stack>

    
      </ScrollView>
    </Box>
    
  )
}

export default SignupScreen