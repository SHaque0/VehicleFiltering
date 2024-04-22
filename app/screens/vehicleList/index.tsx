/*********************************** React ***********************************/
import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

/*********************************** Librarys ********************************/
import {useFocusEffect} from '@react-navigation/native';

/*********************************** Data ************************************/

/*********************************** Enum ************************************/

/*********************************** Custom Hooks ****************************/

/*********************************** Custom Components ***********************/
import Screen from '../../components/screen';
import Header from '../../components/header';

/*********************************** Utility *********************************/

/*********************************** Styles **********************************/
import Styles from './styles';

import Data from '../../data/vehicles.json';
import {VehicleListReducer} from '../../reducers/VehicleListReducer';
import {
  initData,
  filterByKey,
  toggleFavouriteAction,
  resetData,
} from '../../actions/VehicleListAction';
import VehicleCard from '../../components/vehicleCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigatorParams} from '../../components/rootNavigator';
import {getAllUnickValueByKey} from '../../utility/dataManager';

const VehicleList = () => {
  /********************************* Initialization **************************/
  const [vehicleList, dispatch] = useReducer(VehicleListReducer, Data);
  const navigation = useNavigation<StackNavigationProp<RootNavigatorParams>>();
  const route = useRoute();
  const filterBy = route.params;

  const dummyData = [
    {
      make: 'Toyota',
      model: 'C-HR',
      engineSize: '1.8L',
      fuel: 'diesel',
      year: 2022,
      mileage: 743,
      auctionDateTime: '2024/04/21 15:15:00',
      startingBid: 17000,
      favourite: true,
    },
  ];

  const [makeList, setMakeList] = useState([{}]);
  const [modelList, setModelList] = useState([{}]);
  const [startingBidList, setStartingBidList] = useState({});

  /********************************* Effects *********************************/
  useEffect(() => {
    if (filterBy) {
      console.log('im here: ', filterBy);
      dispatch(filterByKey(filterBy));
    } else {
      dispatch(initData());
    }
    preparationForFilter();
  }, [filterBy]);

  /********************************* Utility Functions ***********************/
  const preparationForFilter = () => {
    const getAllMake = getAllUnickValueByKey(Data, 'make');
    const getAllModel = getAllUnickValueByKey(Data, 'model');
    const getAllStartingBid = getAllUnickValueByKey(Data, 'startingBid');

    const allMakeObj = getAllMake.map(make => {
      return {label: make, value: make};
    });
    const allModelObj = getAllModel.map(make => {
      return {label: make, value: make};
    });
    const allStartingBidObj = getAllStartingBid.map(startingBid => {
      return {label: startingBid, value: startingBid};
    });

    setMakeList(allMakeObj);
    setModelList(allModelObj);
    setStartingBidList(allStartingBidObj);
  };

  /********************************* Handler *********************************/
  const toggleFavourite = id => {
    dispatch(toggleFavouriteAction(id));
  };

  const onPressFilter = () => {
    dispatch(resetData(Data));
    dispatch(initData());
    navigation.navigate('Modal', {modelList, makeList});
  };

  const onPressVehicleCard = vehicleInfo => {
    console.log('working..');
    navigation.navigate('VehicleDetails', vehicleInfo);
  };

  /********************************* Animated Styles *************************/

  /********************************* Partial Render **************************/
  const renderHeaderFilter = () => {
    return (
      <TouchableOpacity onPress={onPressFilter}>
        <Image
          style={Styles.FilterIcon}
          source={require('../../assets/icons/icons-filter.png')}
        />
      </TouchableOpacity>
    );
  };

  /*********************************  Render *********************************/
  return (
    <Screen>
      <Header
        headerText={'Vehicle List'}
        hasBackButton={false}
        onPressBackButton={() => {}}
        extra={renderHeaderFilter()}
      />
      {vehicleList.length > 0 ? (
        <View style={Styles.Container}>
          <FlatList
            data={vehicleList || []}
            // getItemLayout={getItemLayout}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            windowSize={10}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                onPress={() => onPressVehicleCard(item)}>
                <View style={{marginVertical: 8}}>
                  <VehicleCard
                    vehicleInfo={item}
                    toggleFavourite={toggleFavourite}
                  />
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      ) : (
        <View style={Styles.PlaceholderContainer}>
          <Text>No vehicle found!</Text>
        </View>
      )}
    </Screen>
  );
};

export default VehicleList;
