import { View,ScrollView, Heading } from "native-base"
import { useState } from "react"
import Admin from "../screens/images/admin"
import Advertisment from "../screens/images/Advertisment"
import Help from "../screens/images/Help"
import Market from "../screens/images/market"
import Rocket from "../screens/images/rocket"
import Sponsorship from "../screens/images/sponsorship"
import Subscription from "../screens/images/Subscription"
import Trophy from "../screens/images/trophy"
import Wallet from "../screens/images/wallet"
import ChannelCard from "./components/ChannelCard"

const Channel = () =>{

    const [data,setData] = useState([
        {
            icon:Trophy,
            text:"Active Tournaments",
            shown:true
            
        },
        {
            icon:Rocket,
            text:"Scrims",
            shown:false
        },
        {
            icon:Admin,
            text:"Admin Team",
            shown:false
        },{
            icon:Market,
            text:"Market Place",
            shown:false
        },{
            icon:Wallet,
            text:"Wallet",
            shown:false
        },
        {
            icon:Sponsorship,
            text:"Sponsorships",
            shown:false
        },
        {
            icon:Advertisment,
            text:"Advertisement",
            shown:false
        },
        {
            icon:Subscription,
            text:"Subscription Plan",
            shown:false
        },
        {
            icon:Help,
            text:"Help & Support",
            shown:false
        }
    ])

return <>
    <Heading mx={5} mt={5}>Channels</Heading>
<ScrollView 
height={'100%'}
>
    {
        data.map((item,idx) => <View height={120} ><ChannelCard key={idx} {...item}/></View>)
    }

    
    
</ScrollView>
</>

}

export default Channel