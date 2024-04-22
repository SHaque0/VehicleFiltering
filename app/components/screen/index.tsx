/*********************************** React ***********************************/
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, SafeAreaView, StatusBar} from 'react-native';

/*********************************** Librarys ********************************/

/*********************************** Data ************************************/

/*********************************** Enum ************************************/

/*********************************** Custom Hooks ****************************/

/*********************************** Custom Components ***********************/

/*********************************** Utility *********************************/

/*********************************** Styles **********************************/
import Styles from './styles';

interface Props {
  children: React.ReactNode;
}

const Screen: React.FC<Props> = ({children}) => {
  /********************************* Initialization **************************/

  /********************************* Effects *********************************/

  /********************************* Utility Functions ***********************/

  /********************************* Handler *********************************/

  /********************************* Animated Styles *************************/

  /********************************* Partial Render **************************/

  /*********************************  Render *********************************/
  return (
    <SafeAreaView style={Styles.Container}>
      <StatusBar
        // backgroundColor={themeColors.primaryBackgroundColor}
        hidden={false}
        // barStyle={isDark ? 'light-content' : 'dark-content'}
      />

      {children}
    </SafeAreaView>
  );
};

export default Screen;
