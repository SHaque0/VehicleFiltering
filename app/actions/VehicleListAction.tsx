export const VehicleListActionTypes = {
  INIT_DATA: 'INIT_DATA',
  RESET_DATA: 'RESET_DATA',
  FILTER_DATA: 'FILTER_DATA',
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
};

export const initData = () => {
  return {
    type: VehicleListActionTypes.INIT_DATA,
  };
};

export const filterByKey = filter => {
  return {
    type: VehicleListActionTypes.FILTER_DATA,
    payload: filter,
  };
};

export const resetData = data => {
  return {
    type: VehicleListActionTypes.RESET_DATA,
    payload: data,
  };
};

export const toggleFavouriteAction = id => {
  return {
    type: VehicleListActionTypes.TOGGLE_FAVOURITE,
    payload: id,
  };
};
