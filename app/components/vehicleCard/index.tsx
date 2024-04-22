/*********************************** React ***********************************/
import React, {useState, useEffect, useReducer} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

/*********************************** Librarys ********************************/

/*********************************** Data ************************************/

/*********************************** Enum ************************************/

/*********************************** Custom Hooks ****************************/

/*********************************** Custom Components ***********************/
import Screen from '../screen';
import CountDown from '../countdown';

/*********************************** Utility *********************************/
import {
  stringToDateTimeObj,
  formateDateTime,
  isFutureDateTime,
  countDown,
} from '../../utility/dateTime';

/*********************************** Styles **********************************/
import Styles from './styles';

const VehicleCard = ({vehicleInfo, toggleFavourite}) => {
  /********************************* Initialization **************************/
  const bidStartDateTime = stringToDateTimeObj(vehicleInfo.auctionDateTime);
  const isFutureBidStartDate = isFutureDateTime(bidStartDateTime);

  const [hasCountdownFinished, setHasCountdownFinished] = useState(false);

  /********************************* Effects *********************************/

  /********************************* Utility Functions ***********************/

  /********************************* Handler *********************************/

  /********************************* Animated Styles *************************/

  /********************************* Partial Render **************************/

  /*********************************  Render *********************************/
  return (
    <View key={vehicleInfo.id} style={Styles.CardContainer}>
      <View style={Styles.ImageContainer}>
        <View style={Styles.NumberOfImage}>
          <Text style={Styles.NumberOfImageText}>1</Text>
          <Image
            source={require('../../assets/icons/icons-picture.png')}
            style={{width: 20, height: 20, marginLeft: 4}}
          />
        </View>
        <Image source={vehicleInfo.imgSrc} style={Styles.VehicleImage} />
        <View style={Styles.AuctionDateTimeContainer(isFutureBidStartDate)}>
          <Text style={Styles.AuctionDateTimeText}>
            {isFutureBidStartDate ? 'bid starts in' : 'bid started'}
          </Text>
          <Text style={Styles.AuctionDateTimeText}>
            {isFutureBidStartDate && !hasCountdownFinished ? (
              <CountDown
                dateTimeObj={bidStartDateTime}
                onFilished={() => setHasCountdownFinished(true)}
              />
            ) : (
              formateDateTime(bidStartDateTime)
            )}
          </Text>
        </View>
      </View>
      <View style={Styles.VehicleInfoContainer}>
        <View style={Styles.Section}>
          <View>
            <Text>Starting Bid</Text>
            <Text style={Styles.StartingBidText}>
              € {vehicleInfo.startingBid}
            </Text>
          </View>
          <TouchableOpacity onPress={() => toggleFavourite(vehicleInfo.id)}>
            <Image
              source={
                vehicleInfo.favourite
                  ? require('../../assets/icons/icons-favourite-fill-red.png')
                  : require('../../assets/icons/icons-favourite-no-fill.png')
              }
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.Section}>
          <Text style={Styles.NameAndModelText}>
            {vehicleInfo.make + ' ' + vehicleInfo.model}
          </Text>
          <Text>{vehicleInfo.year}</Text>
        </View>
        <View style={Styles.Section}>
          <View style={Styles.VehicleCoreInfoContainer}>
            <Image
              source={require('../../assets/icons/icons-engine.png')}
              style={{width: 20, height: 20, marginRight: 4}}
            />
            <Text style={Styles.EngineSizeText}>{vehicleInfo.engineSize}</Text>
          </View>
          <View style={Styles.VehicleCoreInfoContainer}>
            <Image
              source={require('../../assets/icons/icons-mileage.png')}
              style={{width: 20, height: 20, marginRight: 4}}
            />
            <Text style={Styles.EngineSizeText}>{vehicleInfo.mileage}km</Text>
          </View>
          <View style={Styles.VehicleCoreInfoContainer}>
            <Image
              source={require('../../assets/icons/icons-gas.png')}
              style={{width: 20, height: 20, marginRight: 4}}
            />
            <Text style={Styles.EngineSizeText}>{vehicleInfo.fuel}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VehicleCard;
