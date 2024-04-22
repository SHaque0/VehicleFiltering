/*********************************** React ***********************************/
import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Styles from '../styles';

/*********************************** Librarys ********************************/

/*********************************** Data ************************************/

/*********************************** Enum ************************************/

/*********************************** Custom Hooks ****************************/

/*********************************** Custom Components ***********************/

/*********************************** Utility *********************************/

/*********************************** Styles **********************************/

const CheckBox = ({checkBoxValue, onPressCheckBox}) => {
  /********************************* Initialization **************************/

  /********************************* Effects *********************************/

  /********************************* Utility Functions ***********************/

  /********************************* Handler *********************************/

  /********************************* Animated Styles *************************/

  /********************************* Partial Render **************************/

  /*********************************  Render *********************************/
  return (
    <TouchableOpacity onPress={onPressCheckBox}>
      <Image
        style={Styles.CheckoBoxStyle}
        source={
          checkBoxValue
            ? require('../../../assets/icons/icons-checed.png')
            : require('../../../assets/icons/icons-unchecked.png')
        }
      />
    </TouchableOpacity>
  );
};

export default CheckBox;
