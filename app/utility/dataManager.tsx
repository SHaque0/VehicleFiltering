export const getAllUnickValueByKey = (data, key) => {
  let unickValues = Array.from(new Set(data.map(v => v[key])));

  return unickValues;
};
