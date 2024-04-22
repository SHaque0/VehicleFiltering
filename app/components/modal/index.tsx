/*********************************** React ***********************************/
import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';

/*********************************** Librarys ********************************/
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

/*********************************** Data ************************************/

/*********************************** Enum ************************************/
import {RootNavigatorParams} from '../rootNavigator';

/*********************************** Custom Hooks ****************************/

/*********************************** Custom Components ***********************/
import Header from '../header';
import CheckBox from './partials/CheckBox';

/*********************************** Utility *********************************/

/*********************************** Styles **********************************/
import Styles from './styles';

const Modal = () => {
  /********************************* Initialization **************************/
  const BID_MIN_RANGE = 10000;
  const BID_MAX_RANGE = 30000;
  const MIN_BID = 1000;

  const route: any = useRoute();
  const navigation = useNavigation<StackNavigationProp<RootNavigatorParams>>();
  const {makeList, modelList} = route.params || null;
  const sliderWidth = Dimensions.get('screen').width * 0.83;

  const [fromBid, setFromBid] = useState(BID_MIN_RANGE);
  const [toBid, setToBid] = useState(BID_MAX_RANGE);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMakerPress, setIsMakerPress] = useState(false);
  const [isModelPress, setIsModelPress] = useState(false);
  const [selectedMake, setSelectedMake] = useState([]);
  const [selectedModel, setSelectedModel] = useState([]);

  /********************************* Effects *********************************/

  /********************************* Utility Functions ***********************/

  /********************************* Handler *********************************/
  const onPressClose = () => {
    navigation.goBack();
  };

  const onPressShowResult = () => {
    navigation.navigate('VehicleList', {
      make: selectedMake.length > 0 ? selectedMake : null,
      model: selectedModel.length > 0 ? selectedModel : null,
      favourite: isFavorite ? [isFavorite] : null,
      startingBid: {
        from: fromBid,
        to: toBid,
      },
    });
  };

  const onChangeSlider = rangeValues => {
    if (rangeValues && rangeValues?.length > 0) {
      setFromBid(rangeValues[0]);
      setToBid(rangeValues[1]);
    }
  };

  const onPressCheckBox = () => setIsFavorite(prev => !prev);

  /********************************* Animated Styles *************************/

  /********************************* Partial Render **************************/
  const renderCloseModal = () => {
    return (
      <TouchableOpacity onPress={onPressClose}>
        <Image
          style={Styles.CloseIcon}
          source={require('../../assets/icons/icons-close.png')}
        />
      </TouchableOpacity>
    );
  };

  const renderFilter = () => {
    return (
      <View style={Styles.ModalContainer}>
        <View style={Styles.Section}>
          <DropDownPicker
            open={isMakerPress}
            value={selectedMake}
            items={makeList}
            setOpen={setIsMakerPress}
            setValue={setSelectedMake}
            multiple={true}
            min={0}
            max={makeList.length}
            containerProps={{
              style: {
                height: isMakerPress ? 250 : null,
                backgroundColor: '#fff',
              },
            }}
            placeholder="Select Maker"
          />
        </View>
        <View style={Styles.Section}>
          <DropDownPicker
            open={isModelPress}
            value={selectedModel}
            items={modelList}
            setOpen={setIsModelPress}
            setValue={setSelectedModel}
            multiple={true}
            min={0}
            max={modelList.length}
            containerProps={{
              style: {
                height: isModelPress ? 250 : null,
                backgroundColor: '#fff',
              },
            }}
            placeholder="Select Model"
          />
        </View>
        <View style={Styles.Section}>
          <View style={Styles.FavouriteFilterContainer}>
            <Text style={Styles.FavouriteFilterText}>Favorite</Text>
            <CheckBox
              onPressCheckBox={onPressCheckBox}
              checkBoxValue={isFavorite}
            />
          </View>
        </View>
        <View style={Styles.BidRangeContainer}>
          <Text style={Styles.BidRangeText}>Bid Range</Text>
          <Text style={Styles.BidRange}>
            {'From: ' + fromBid + ' - To ' + toBid}
          </Text>
          <View style={Styles.MultiSliderContainer}>
            <MultiSlider
              values={[fromBid, toBid]}
              sliderLength={sliderWidth}
              onValuesChange={c => onChangeSlider(c)}
              min={BID_MIN_RANGE}
              max={BID_MAX_RANGE}
              step={MIN_BID}
              allowOverlap={true}
              snapped
              markerStyle={Styles.MarkerStyle}
              pressedMarkerStyle={Styles.PressedMarkerStyle}
              selectedStyle={Styles.SelectedStyle}
              trackStyle={Styles.TrackStyle}
              touchDimensions={Styles.TouchDimensions}
            />
          </View>
        </View>
      </View>
    );
  };

  /*********************************  Render *********************************/
  return (
    <View>
      <Header
        headerText={'Filter'}
        hasBackButton={false}
        onPressBackButton={() => {}}
        extra={renderCloseModal()}
      />
      {renderFilter()}
      <View style={Styles.ButtonContainer}>
        <TouchableOpacity onPress={onPressShowResult} style={Styles.Button}>
          <Text style={Styles.ButtonText}>Show Result</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Modal;
