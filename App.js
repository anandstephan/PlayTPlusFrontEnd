import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from "./navigation/bottomTab";
import { NativeBaseProvider } from "native-base";
import MyStack from './navigation/stackNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import { useState } from 'react';

const App = () =>{
  const [authNavigator,setAuthNavigator] = useState(true)
return <NavigationContainer>
  <NativeBaseProvider>
    {
      authNavigator ?   <AuthNavigator setAuthNavigator={setAuthNavigator}/>:  <MyStack/> 
    }


  </NativeBaseProvider>
</NavigationContainer>
}

export default App