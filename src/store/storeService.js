export const loadState = () => {
  const serializedState = localStorage.getItem("store");
  if (serializedState) {
    return JSON.parse(serializedState);
  } else {
    return undefined;
  }
};

export const saveState = state => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("store", serializedState);
};
