import { createStackNavigator } from '@react-navigation/stack';
import CommunityInfo from '../screens/CommunityInfo';
import MyTabs from './bottomTab';

const Stack = createStackNavigator();

const MyStack = ()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Main" component={CommunityInfo}/>
    </Stack.Navigator>
  );
}

export default MyStack

