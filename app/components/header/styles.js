/*********************************** React ***********************************/
import React from 'react';
import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';

/*********************************** Global **********************************/

/*********************************** Constants *******************************/

const Styles = StyleSheet.create({
  /*********************************** Styles **********************************/
  HeaderContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  HeaderBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  HeaderLeft: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
