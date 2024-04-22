/*********************************** React ***********************************/
import React, {useState, useEffect} from 'react';

/*********************************** Librarys ********************************/
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/*********************************** Data ************************************/

/*********************************** Enum ************************************/

/*********************************** Custom Hooks ****************************/

/*********************************** Custom Components ***********************/
import VehicleListScreen from '../../screens/vehicleList';
import ModalScreen from '../../components/modal';
import VehicleDetails from '../../screens/vehicleDetails';

/*********************************** Utility *********************************/

/*********************************** Styles **********************************/

/*********************************** Types ***********************************/
export type RootNavigatorParams = {
  VehicleList;
  Modal;
  VehicleDetails;
};

const RootNavigator = () => {
  /********************************* Initialization **************************/
  const RootStack = createStackNavigator<RootNavigatorParams>();

  /********************************* Effects *********************************/

  /********************************* Utility Functions ***********************/

  /********************************* Handler *********************************/

  /********************************* Animated Styles *************************/

  /********************************* Partial Render **************************/

  /*********************************  Render *********************************/
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="VehicleList"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Group>
          <RootStack.Screen name="VehicleList" component={VehicleListScreen} />
          <RootStack.Screen name="VehicleDetails" component={VehicleDetails} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name="Modal" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
