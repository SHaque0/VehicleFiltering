/*********************************** React ***********************************/
import React from 'react';
import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';

/*********************************** Global **********************************/

/*********************************** Constants *******************************/

const Styles = StyleSheet.create({
  /*********************************** Styles **********************************/
  Container: {
    padding: 12,
  },
  VehicleNameAndModel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  VehicleNameText: {
    fontSize: 20,
    fontWeight: '600',
  },
  VehicleModelText: {
    fontSize: 15,
    fontWeight: '300',
    marginTop: 3,
  },
  VehicleImage: {
    width: '100%',
    borderRadius: 8,
    marginVertical: 8,
  },
  InfoArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: '#c2c5c8',
  },
  InfoAreaText: {
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginTop: 3,
  },
  DetailsContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  DetailsHeadText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  DetailsText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
  },
  StatingBidAndFavouriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 8,
  },
  StartingBidText: {
    fontSize: 20,
    fontWeight: '600',
  },
  FavouriteImage: {
    width: 40,
    height: 40,
  },
  BidDateTimeContainer: {
    padding: 8,
  },
  BidDateTimeText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default Styles;
