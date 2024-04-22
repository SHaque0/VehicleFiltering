/*********************************** React ***********************************/
import React from 'react';
import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';

/*********************************** Global **********************************/

/*********************************** Constants *******************************/

const Styles = StyleSheet.create({
  /*********************************** Styles **********************************/
  CloseIcon: {
    width: 15,
    height: 15,
  },
  ModalContainer: {
    padding: 12,
  },
  Section: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  SectionButton: {
    padding: 12,
    backgroundColor: '#CECECE',
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  SectionButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
  },
  FavouriteFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 8,
  },
  FavouriteFilterText: {
    fontSize: 15,
    fontWeight: '600',
  },
  BidRangeContainer: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  BidRangeText: {
    fontSize: 15,
    fontWeight: '600',
  },
  BidRange: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 4,
  },
  MultiSliderContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 12,
    marginLeft: 10,
  },
  MarkerStyle: {
    ...Platform.select({
      ios: {
        height: 30,
        width: 30,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 1,
        shadowOpacity: 0.1,
      },
      android: {
        height: 30,
        width: 30,
        borderRadius: 50,
        backgroundColor: '#1792E8',
      },
    }),
  },
  PressedMarkerStyle: {
    ...Platform.select({
      android: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: '#148ADC',
      },
    }),
  },
  SelectedStyle: {
    backgroundColor: '#1792E8',
  },
  TrackStyle: {
    backgroundColor: '#CECECE',
  },
  TouchDimensions: {
    height: 40,
    width: 40,
    borderRadius: 20,
    slipDisplacement: 40,
  },
  CheckoBoxStyle: {
    width: 35,
    height: 35,
  },
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 90,
  },
  ClearFilterButton: {
    marginTop: 20,
  },
  ClearFilterButtonText: {
    color: '#999999',
  },
  Button: {
    padding: 12,
    borderRadius: 8,
    paddingHorizontal: 25,
    backgroundColor: '#316bad',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Styles;
