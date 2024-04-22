/*********************************** React ***********************************/
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

/*********************************** Librarys ********************************/

/*********************************** Utility *********************************/

/*********************************** Styles **********************************/
import Styles from './styles';

const Header = ({
  hasBackButton = false,
  onPressBackButton,
  headerText,
  extra,
}) => {
  /********************************* Initialization **************************/

  /********************************* Effects *********************************/

  /*********************************  Render *********************************/
  return (
    <View style={Styles.HeaderContainer}>
      {hasBackButton && (
        <TouchableOpacity onPress={onPressBackButton} style={Styles.BackButton}>
          <View>
            <Image source={require('../../assets/icons/left-arrow.png')} />
          </View>
        </TouchableOpacity>
      )}
      <View style={Styles.HeaderBody}>
        <Text style={Styles.HeaderText}>{headerText}</Text>
      </View>
      <View style={Styles.HeaderLeft}>{extra && extra}</View>
    </View>
  );
};

export default Header;
