export const updateState = (state, newData) => {
  return {
    ...state,
    ...newData,
  };
};
