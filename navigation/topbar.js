import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hash from '../screens/images/hash';
import Post from '../screens/images/post';
import Channel from '../topBarScreen/Channel';
import Home from '../topBarScreen/HomeTop';
import Comment from '../screens/images/comment';
import Note from '../screens/images/Note';
import Chat from '../screens/images/Chat';

const Tab = createMaterialTopTabNavigator();

const TopBar = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon:({color}) =>(
            <Post/>
        ),
        tabBarShowLabel: false, 
      }}
       />
      <Tab.Screen name="Channel" component={Channel}
       options={{
        tabBarIcon:({color}) =>(
            <Hash/>
        ),
        tabBarShowLabel: false, 
      }}
      
      />
      <Tab.Screen name="Comment" component={Home}
        options={{
            tabBarIcon:({color}) =>(
                <Chat/>
            ),
            tabBarShowLabel: false, 
          }}
      />
      <Tab.Screen name="Settings2" component={Home}
       options={{
        tabBarIcon:({color}) =>(
            <Note/>
        ),
        tabBarShowLabel: false, 
      }}
      />
    </Tab.Navigator>
  );
}

export default TopBar