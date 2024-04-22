/*********************************** React ***********************************/
import React from 'react';
import {StyleSheet, Dimensions, Platform, ViewStyle} from 'react-native';

/*********************************** Global **********************************/

/*********************************** Constants *******************************/

const Styles = StyleSheet.create({
  /*********************************** Styles **********************************/
  CardContainer: {
    backgroundColor: '#fff',
    // padding: 12,
    borderRadius: 8,
    elevation: 3,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  ImageContainer: {},
  NumberOfImage: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    right: 10,
    zIndex: 99,
  },
  NumberOfImageText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  VehicleImage: {
    width: '100%',
  },
  AuctionDateTimeContainer: isFutureDate => {
    return {
      position: 'absolute',
      bottom: 10,
      left: 0,
      backgroundColor: isFutureDate ? 'red' : 'green',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    };
  },
  AuctionDateTimeText: {
    color: '#fff',
    fontWeight: '700',
  },
  VehicleInfoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 4,
  },
  Section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  StartingBidText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  NameAndModelText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  EngineSizeText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  FuelTypeText: {
    textTransform: 'capitalize',
  },
  VehicleCoreInfoContainer: {
    flexDirection: 'row',
  },
});

export default Styles;
