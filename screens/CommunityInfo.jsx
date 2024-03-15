import { View, VStack } from "native-base"
import TopBar from "../navigation/topbar"
import Header from "./components/Header"
import InfoCard from "./components/InfoCard"

const CommunityInfo = () =>{
return <VStack>
        <Header/>
        <InfoCard/>
        <View height={'100%'} marginTop={5} >
        <TopBar/>
        </View>
       
</VStack>
}

export default CommunityInfo