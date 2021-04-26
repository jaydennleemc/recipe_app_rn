import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('users');

export const authUser = async (email, password) => {
  let user = (await usersCollection.where('email', '==', email).where('password', '==', password).get());
  if (user.docs.length > 0) {
    return user.docs[0].data();
  }
  return undefined;
};


export const getWeeklyRecipes = () => {

};

export const getRecipesByType = (type) => {

};

export const getRecipeDetail = () => {

};


