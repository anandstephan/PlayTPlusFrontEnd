import { Heading, HStack, VStack } from "native-base"
import GroupImg from "../../screens/images/groupImg"
import RightArrow from "../../screens/images/rightArrow"
import Trophy from "../../screens/images/trophy"

const ChannelCard = ({icon,text,shown}) =>{
    
return <HStack mx={5} justifyContent={'space-between'} alignItems={'center'} padding={5} borderRadius={20} my={2} borderColor={'gray.400'} backgroundColor={'#FFFFFF'}>
    <HStack justifyContent={'space-between'} alignItems={'center'}>
    {icon()}
    <VStack ml={5}>
        <Heading size={'sm'}>{text}</Heading>
        {shown?<Heading size={'xs'} fontStyle={'normal'} color="gray.300">4 Active</Heading>:null}
    </VStack>
    </HStack>
    <HStack>
        {shown?    <GroupImg/>:null}

    <RightArrow/>
    </HStack>

</HStack>
}

export default ChannelCard