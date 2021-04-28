import {Lightbox, Modal, Overlay, Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import FeedTab from './src/screens/tabs/FeedTab';
import FavoriteTab from './src/screens/tabs/FavoriteTab';
import ShoppingListTab from './src/screens/tabs/ShoppingListTab';
import MoreTab from './src/screens/tabs/MoreTab';
import SearchScreen from './src/screens/SearchScreen';
import FilterScreen from './src/screens/FilterScreen';
import RecipesDetails from './src/screens/RecipesDetails';
import ProfileScreen from './src/screens/ProfileScreen';
import SeeAllRecipes from './src/screens/SeeAllRecipes';
import EditProfileScreen from './src/screens/EditProfileScreen';

const tabIcon = ({title, focused}) => {
  let image = require('./src/assets/icons/ic_feed.png');
  switch (title) {
    case 'My Feed':
      if (focused) {
        image = require('./src/assets/icons/ic_feed_selected.png');
      } else {
        image = require('./src/assets/icons/ic_feed.png');
      }
      break;
    case 'Favorites':
      if (focused) {
        image = require('./src/assets/icons/ic_favorite_selected.png');
      } else {
        image = require('./src/assets/icons/ic_favorite.png');
      }
      break;
    case 'Shopping':
      if (focused) {
        image = require('./src/assets/icons/ic_shopping_selected.png');
      } else {
        image = require('./src/assets/icons/ic_shopping.png');
      }
      break;
    case 'More':
      if (focused) {
        image = require('./src/assets/icons/ic_more_selected.png');
      } else {
        image = require('./src/assets/icons/ic_more.png');
      }
      break;
  }
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={image} style={{width: 30, height: 30, marginTop: 8}}/>
      <Text style={{marginTop: 4, color: focused ? '#e09178' : 'grey'}}>{title}</Text>
      <View style={{height: focused ? 1 : 0, width: 60, marginTop: 4, backgroundColor: 'red'}}/>
    </View>
  );
};

export default class App extends Component {
  render() {
    return (
      <Router duration={50}>
        <Overlay key={'overlay'}>
          <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox">
              <Stack key="root" titleStyle={{alignSelf: 'center'}} hideNavBar>
                <Scene key="splash" component={SplashScreen} title=""/>
                <Scene key="login" component={LoginScreen} title=""/>
                <Scene key="register" component={RegisterScreen} title=""/>
                <Scene key="forgetPassword" component={ForgetPasswordScreen} title=""/>
                <Tabs type={'replace'} key={'home'} showLabel={false}>
                  <Scene key={'feedTab'}
                         title={'My Feed'}
                         icon={tabIcon}
                         component={FeedTab}
                         hideNavBar/>
                  <Scene key={'favoriteTab'}
                         title={'Favorites'}
                         icon={tabIcon}
                         component={FavoriteTab}/>
                  <Scene key={'shoppingListTab'}
                         title={'Challenge'}
                         icon={tabIcon}
                         component={ShoppingListTab}/>
                  <Scene key={'moreTab'}
                         title={'More'}
                         icon={tabIcon}
                         component={MoreTab}/>
                </Tabs>
                <Scene key={'allRecipes'} component={SeeAllRecipes}/>
                <Scene key={'profile'} component={ProfileScreen}/>
                <Scene key={'editProfile'} component={EditProfileScreen}/>
                <Scene key={'filter'} component={FilterScreen}/>
                <Scene key={'search'} component={SearchScreen}/>
                <Scene key={'recipeDetails'} component={RecipesDetails}/>
              </Stack>
            </Lightbox>

          </Modal>
        </Overlay>
      </Router>
    );
  }
}
