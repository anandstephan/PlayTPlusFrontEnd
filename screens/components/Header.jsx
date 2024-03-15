import { useNavigation } from "@react-navigation/native"
import { HStack, VStack,Heading,Box,Image, Pressable } from "native-base"
import BackArrow from "../images/backArrow"
import HeaderImg from "../images/headerImg"
import OnePlus from "../images/onePlus"
import Upload from "../images/upload"

const Header = () =>{

    const navigation = useNavigation()

return <VStack bgColor={'black'}>
     <HStack bgColor={'#372c8f'} alignItems={'center'} justifyContent={'space-between'} padding={5}>
    <Pressable onPress={()=>navigation.goBack()}>
    <BackArrow/>
    </Pressable>
    <Upload/>
</HStack>
        <Box
        position={'absolute'}
        left={40}
        top={5}
        zIndex={1}
        >
        <HeaderImg/>
        </Box>

    <HStack justifyContent={'space-between'} alignItems={'center'} bgColor={'#000000'} padding={5}>
        <Heading color={'#FFFFFF'} size={'md'}>Sponsored by</Heading>
        <OnePlus/>
    </HStack>
</VStack>
}
export default Header