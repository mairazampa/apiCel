import AsyncStorage from "@react-native-async-storage/async-storage";

const getTextResponsesCount = async () => {
  const count = await AsyncStorage.getItem("text-responses-count");
  return count === null ? 0 : parseInt(count);
};

const incrementTextResponsesCount = async () => {
  const currentCount = await getTextResponsesCount();
  const newValue = (currentCount + 1).toString();
  return AsyncStorage.setItem("text-responses-count", newValue);
};

const getImageResponsesCount = async () => {
  const count = await AsyncStorage.getItem("image-responses-count");
  return count === null ? 0 : parseInt(count);
};

const incrementImageResponsesCount = async () => {
  console.log("Incrementando el contador de respuestas de imagen");
  const currentCount = await getImageResponsesCount();
  const newValue = (currentCount + 1).toString();
  return AsyncStorage.setItem("image-responses-count", newValue);
};

export {
  getImageResponsesCount, getTextResponsesCount, incrementImageResponsesCount, incrementTextResponsesCount
};
