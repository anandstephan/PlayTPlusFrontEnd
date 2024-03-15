import { useNavigation } from "@react-navigation/native"
import { Heading, HStack, Image, VStack,Pressable, View } from "native-base"
import CircleIcon from "../images/circleIcon"
const Card = ({imgUrl,heading,subHeading,shown}) =>{

    const navigation = useNavigation()
    const onPressHandler = () =>{
        navigation.navigate('Main')
    }

return <Pressable onPress={onPressHandler}> 
<HStack borderWidth={2} padding={5} borderColor={'gray.200'} backgroundColor={'#FFFFFF'} borderRadius={20} marginX={1} marginY={2} alignItems={'center'}>
   <Image
   source={{uri:imgUrl}}
    alt="TEST"
    width={100}
    height={100}
    borderRadius={20}
  /> 
  <VStack style={{marginLeft:10}}>
    <Heading size={'md'}>{heading}</Heading>
    <Heading size={'xs'} fontStyle={'normal'} color={'#557094'} >{subHeading}</Heading>
  </VStack>
  {
    shown?  <View ml={12}>
    <CircleIcon/>
    </View> :null
  }

</HStack>
</Pressable>
}

export default Card