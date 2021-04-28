import AsyncStorage from '@react-native-async-storage/async-storage';

export const timeConvert = (n) => {
  let num = n;
  let hours = (num / 60);
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);

  if (rminutes > 0) {
    return hours + 'h' + rminutes + 'm';
  }
  return hours + 'h';
};

export const getUserInfo = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userInfo');
    return jsonValue != null ? JSON.parse(jsonValue) : undefined;
  } catch (e) {
    console.error(e);
  }
};
