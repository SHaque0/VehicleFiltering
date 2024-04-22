/*********************************** React ***********************************/
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

/*********************************** Librarys ********************************/

/*********************************** Custom Components ***********************/
import Screen from '../../components/screen';
import Header from '../../components/header';

/*********************************** Utility *********************************/

/*********************************** Styles **********************************/
import Styles from './styles';

const VehicleDetails = () => {
  /********************************* Initialization **************************/
  const route: any = useRoute();
  const navigation = useNavigation();

  const vehicleDetails = route.params;

  /********************************* Effects *********************************/

  /********************************* Utility Functions ***********************/

  /********************************* Handler *********************************/
  const onPressBack = () => navigation.goBack();

  /********************************* Animated Styles *************************/

  /********************************* Partial Render **************************/

  /*********************************  Render *********************************/
  return (
    <Screen>
      <Header
        headerText={'Vehicle Details'}
        hasBackButton
        onPressBackButton={onPressBack}
        extra={null}
      />
      <ScrollView>
        <View style={Styles.Container}>
          <View style={Styles.VehicleNameAndModel}>
            <Text style={Styles.VehicleNameText}>{vehicleDetails?.make} </Text>
            <Text style={Styles.VehicleModelText}>{vehicleDetails?.model}</Text>
          </View>
          <Image style={Styles.VehicleImage} source={vehicleDetails?.imgSrc} />
          <View>
            <Text>Bid Started</Text>
            <Text>{vehicleDetails?.auctionDateTime}</Text>
          </View>
          <View style={Styles.StatingBidAndFavouriteContainer}>
            <View>
              <Text>Starting Bid</Text>
              <Text style={Styles.StartingBidText}>
                € {vehicleDetails?.startingBid}
              </Text>
            </View>
            <Image
              style={Styles.FavouriteImage}
              source={
                vehicleDetails?.favourite
                  ? require('../../assets/icons/icons-favourite-fill-red.png')
                  : require('../../assets/icons/icons-favourite-no-fill.png')
              }
            />
          </View>
          <View style={Styles.InfoArea}>
            <View>
              <Text>Year</Text>
              <Text style={Styles.InfoAreaText}>{vehicleDetails?.year}</Text>
            </View>
            <View>
              <Text>Engine Size</Text>
              <Text style={Styles.InfoAreaText}>
                {vehicleDetails?.engineSize}
              </Text>
            </View>
            <View>
              <Text>Fuel</Text>
              <Text style={Styles.InfoAreaText}>{vehicleDetails?.fuel}</Text>
            </View>
          </View>
          <View style={Styles.DetailsContainer}>
            <Text style={Styles.DetailsHeadText}>Details</Text>
            <Text style={Styles.DetailsText}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default VehicleDetails;
