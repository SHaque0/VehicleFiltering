import {useState} from 'react';
import {VehicleListActionTypes} from '../actions/VehicleListAction';

export const VehicleListReducer = (state, action: any) => {
  switch (action.type) {
    case VehicleListActionTypes.INIT_DATA:
      return state?.map((vehicle, index) => ({
        ...vehicle,
        id: index + 1,
        imgSrc: require('../assets/carImage/images.jpeg'),
      }));
    case VehicleListActionTypes.FILTER_DATA:
      // const [temp, setTemp] = useState(state);
      const filterValue = action.payload;
      const keys = Object.keys(action.payload);
      // console.log(filterValue[keys[1]], keys[1]);
      let newState = state;

      const finter11 = key => {
        return newState.filter(v => filterValue[key].includes(v[key]));
      };

      for (let i = 0; i < keys.length; i++) {
        if (filterValue[keys[i]]) {
          if (keys[i] === 'startingBid') {
            const from = parseInt(filterValue[keys[i]].from) || 0;
            const to = parseInt(filterValue[keys[i]]?.to) || 9999999900000000;
            const startingBid = parseInt(filterValue['startingBid']);

            console.log(to, from, newState.length);

            newState = newState.filter(
              v =>
                parseInt(v.startingBid) > from && parseInt(v.startingBid) <= to,
            );
          } else {
            newState = finter11(keys[i]);
          }
        }
        console.log('i: ', i, keys[i], filterValue[keys[i]], newState.length);
      }
      console.log(newState.length);
      // newState = newState.filter(v =>
      //   filterValue[keys[0]]?.includes(v[keys[0]]),
      // );
      // console.log('s1: ', newState.length);

      // newState = newState.filter(v =>
      //   filterValue[keys[1]]?.includes(v[keys[1]]),
      // );
      // console.log('s1: ', newState.length);

      // newState = newState.filter(v =>
      //   filterValue[keys[2]]?.includes(v[keys[2]]),
      // );
      // console.log('s1: ', newState.length);

      // let s1 = state.filter(v => filterValue[keys[0]]?.includes(v[keys[0]]));
      // let s2 = s1.filter(v => filterValue[keys[1]]?.includes(v[keys[1]]));
      // let s3 = s2.filter(v => filterValue[keys[2]]?.includes(v[keys[2]]));

      // console.log('s1: ', s1.length);
      // console.log('s2 ', s2.length);
      // console.log('s3 ', s3.length);

      return newState;

    case VehicleListActionTypes.TOGGLE_FAVOURITE:
      const vehicleId = action.payload;
      const getVehileById = vehicles =>
        vehicles.map(item => {
          if (vehicleId === item.id) {
            // update whatever you want
            return {...item, favourite: !item.favourite};
          } else {
            return item;
          }
        });

      return getVehileById(state);

    case VehicleListActionTypes.RESET_DATA:
      const resetData = action.payload;

      return resetData;

    default:
      return state;
  }
};
