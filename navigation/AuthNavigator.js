import { createStackNavigator } from '@react-navigation/stack';
import CommunityInfo from '../screens/CommunityInfo';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MyTabs from './bottomTab';

const Stack = createStackNavigator();

const AuthNavigator = ({setAuthNavigator})=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name="Signup" component={()=><SignupScreen/>} />
      <Stack.Screen name="Login" component={()=><LoginScreen setAuthNavigator={setAuthNavigator}/>} />
    </Stack.Navigator>
  );
}

export default AuthNavigator

