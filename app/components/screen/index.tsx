/*********************************** React ***********************************/
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, SafeAreaView, StatusBar} from 'react-native';

/*********************************** Librarys ********************************/

/*********************************** Styles **********************************/
import Styles from './styles';

interface Props {
  children: React.ReactNode;
}

const Screen: React.FC<Props> = ({children}) => {
  /********************************* Initialization **************************/

  /*********************************  Render *********************************/
  return (
    <SafeAreaView style={Styles.Container}>
      <StatusBar hidden={false} />
      {children}
    </SafeAreaView>
  );
};

export default Screen;
