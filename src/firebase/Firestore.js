import firestore from '@react-native-firebase/firestore';
import {getUserInfo} from '../components/Utils';

export const usersCollection = firestore().collection('users');
export const recipeCollections = firestore().collection('recipes');

export const authUser = async (email, password) => {
  let user = (await usersCollection.where('email', '==', email).where('password', '==', password).get());
  if (user.docs.length > 0) {
    return user.docs[0].data();
  }
  return undefined;
};


export const getWeeklyRecipes = async () => {
  let recipes = await recipeCollections.where('isWeekly', '==', true).get();

  let ids = [];

  recipes.docs.forEach(e => {
    ids.push(e.id);
  });

  // let data = recipes.docs[0].data();
  // data.isWeekly = false
  // data.type = 'appetizer'
  // addRecipes(data)
  // addRecipes(data)
  // addRecipes(data)
  // addRecipes(data)
  // addRecipes(data)
  // console.log(data, 'data');

  return recipes.docs;
};

export const getRecipesByType = async (type) => {
  let recipes = await recipeCollections.where('type', '==', type).get();
  return recipes;
};

export const getFavoriteRecipes = async () => {
  let user = await getUserInfo();
  let recipes = await recipeCollections.where(firestore.FieldPath.documentId(), 'in', user.favorites).get();
  return recipes;
};

export const addRecipes = async (recipe) => {
  recipeCollections.add(recipe).then(() => {
    console.log('add data successful');
  });
};


