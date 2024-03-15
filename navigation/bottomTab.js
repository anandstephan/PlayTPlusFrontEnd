import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ArrowBackIcon,SearchIcon, View } from 'native-base';
import Community from '../screens/Community';
import Home from '../screens/Home';
import ChatIcon from '../screens/images/chatIcon';
import HomeIcon from '../screens/images/homeIcon';
import ProfileIcon from '../screens/images/ProfileIcon';
import SearchIcon1 from '../screens/images/searchIcon';
import TrophyIcon from '../screens/images/TrophyIcon';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Communities" component={Community}
      
      options={{
        tabBarIcon:({color}) =>(
            <HomeIcon/>
        ),
        tabBarShowLabel: false, 
        headerRight:()=><View mr={3}><SearchIcon/></View>,
        headerLeft:()=><ArrowBackIcon/>
      }}
      />
      <Tab.Screen name="Search" component={Home}
      options={{
        tabBarIcon:({color}) =>(
            <SearchIcon1/>
        ),
        tabBarShowLabel: false, 
      }}
      />
      <Tab.Screen name="Chat" component={Home}
      options={{
        tabBarIcon:({color}) =>(
            <ChatIcon/>
        ),
        tabBarShowLabel: false, 
      }}
      />
      <Tab.Screen name="Profile" component={Home}
      options={{
        tabBarIcon:({color}) =>(
            <ProfileIcon/>
        ),
        tabBarShowLabel: false, 
      }}
      />
    <Tab.Screen name="Trophy" component={Home}
      options={{
        tabBarIcon:({color}) =>(
            <TrophyIcon/>
        ),
        tabBarShowLabel: false, 
      }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs