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
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

/*********************************** Data ************************************/
import Data from '../../data/vehicles.json';

/*********************************** Reducers ************************************/
import {VehicleListReducer} from '../../reducers/VehicleListReducer';

/*********************************** Actions ****************************/
import {
  initData,
  filterByKey,
  toggleFavouriteAction,
  resetData,
} from '../../actions/VehicleListAction';

/*********************************** Custom Components ***********************/
import Screen from '../../components/screen';
import Header from '../../components/header';
import VehicleCard from '../../components/vehicleCard';
import {RootNavigatorParams} from '../../components/rootNavigator';

/*********************************** Utility *********************************/
import {getAllUnickValueByKey} from '../../utility/dataManager';

/*********************************** Styles **********************************/
import Styles from './styles';

const VehicleList = () => {
  /********************************* Initialization **************************/
  const [vehicleList, dispatch] = useReducer(VehicleListReducer, Data);
  const navigation = useNavigation<StackNavigationProp<RootNavigatorParams>>();
  const route = useRoute();
  const filterBy = route.params;

  const [makeList, setMakeList] = useState([{}]);
  const [modelList, setModelList] = useState([{}]);

  /********************************* Effects *********************************/
  useEffect(() => {
    if (filterBy) {
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

    const allMakeObj = getAllMake.map(make => {
      return {label: make, value: make};
    });
    const allModelObj = getAllModel.map(make => {
      return {label: make, value: make};
    });

    setMakeList(allMakeObj);
    setModelList(allModelObj);
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
