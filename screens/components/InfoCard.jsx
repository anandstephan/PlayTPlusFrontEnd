import { VStack,  Heading, HStack,Text } from "native-base"
import InfoButton from "./InfoButton"

const InfoCard = () =>{
return <VStack justifyContent={'space-between'} alignItems={'center'} >
        <Heading>Nox Gaming</Heading>
        <HStack justifyContent={'space-between'} alignItems={'center'}  w={'60%'}>
            <Heading size={'sm'}>3.2k <Text color={'gray.700'} fontStyle={'normal'}>Followers</Text></Heading>
            <Text color={'gray.700'}>|</Text>
            <Heading size={'sm'}>152 <Text color={'gray.700'} fontStyle={'normal'}>Following</Text></Heading>
        </HStack>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
            <InfoButton>Following</InfoButton>
            <InfoButton>Message</InfoButton>
        </HStack>
</VStack>
}

export default InfoCard