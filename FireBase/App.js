import React from "react";

import { StatusBar } from "react-native"; 
import { Provider } from "react-redux";
import Store from "./components/store";
import DrawerNavigator from "./components/routes";
import Options from "./screens/Options";
const App = () => {
  return (
    <Provider store={Store}>
      
      <StatusBar barStyle="white-content" backgroundColor="black" />
      <DrawerNavigator />
    </Provider>
  );
};

export default App;
