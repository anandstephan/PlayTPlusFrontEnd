import { Heading, ScrollView, View ,Text} from "native-base"
import PostCard from "./components/PostCard"
import LinearGradient from 'react-native-linear-gradient';


const HomeTop = () =>{

return <View flex={1}>

<ScrollView
>
        <Heading mx={2}>Posts</Heading>
        <View flex={1}>
        <PostCard/>
        </View>
        <View flex={1}>
        <PostCard/>
        </View>
        <View flex={1}>
        <PostCard/>
        </View>
        <LinearGradient
      colors={['#FFA500', '#FF3300', '#FF003F']}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center',height:20,borderRadius:50 }}
    >
      <Text style={{ fontSize: 24, color: 'white' }}>Add Post</Text>
    </LinearGradient>
</ScrollView>
</View>

}

export default HomeTop