import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';
import {Rating} from 'react-native-ratings';
import {IndicatorViewPager, PagerDotIndicator} from '@shankarmorwal/rn-viewpager';


const PagingData = [
  {
    key: 1,
    title: 'Welcome to CookWithMe!',
    detail: 'The best guides to make a masterchef!',
    image: require('../assets/icons/icons8-mushbooh-food-50.png'),
  },
  {
    key: 2,
    title: 'A thousands of recipes',
    detail: 'No matter how much the \n ingredients your have. You can find a thousand of recipes and become a great chef.',
    // image: require('../assets/icons/icons8-mushbooh-food-50.png'),
  },
  {
    key: 3,
    title: 'Make your own recipe',
    detail: 'Why not? it\'s fun! \n We can help you share your recipes \n to the world.',
    // image: require('../assets/icons/icons8-mushbooh-food-50.png'),
  },
  {
    key: 4,
    title: 'Get Cooking!',
    detail: 'Use what you know! \n Apply what your\'ve learned with fun \n and flavorful variations and recipes.',
    // image: require('../assets/icons/icons8-mushbooh-food-50.png'),
  },
  {
    key: 5,
    title: 'Videos',
    detail: 'Short demonstration videos show you the \n techniques and teach you the skills you want',
    // image: require('../assets/icons/icons8-mushbooh-food-50.png'),
    buttonTitle: 'Log in',
    hasButton: true,
  },
];


export default class RecipesDetails extends Component {

  state = {};

  renderPageItem = (item) => {
    return (
      <View key={item.key} style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../assets/icons/icons8-mushbooh-food-50.png')}
            style={{width: '95%', height: '95%', alignSelf: 'center', padding: 8}}/>
          <TouchableOpacity style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <View style={[styles.shadow, {backgroundColor: '#62564e', borderRadius: 5}]}>
              <Text style={{padding: 8, color: 'white', fontWeight: 'bold'}}>Watch Video</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderDotIndicator() {
    return (
      <PagerDotIndicator
        pageCount={PagingData.length}
        style={{bottom: 36}}
        dotStyle={{backgroundColor: '#ffdcd1', width: 10, height: 10, borderRadius: 50}}
        selectedDotStyle={{backgroundColor: '#e09178', width: 10, height: 10, borderRadius: 50}}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <NavigationBar
          leftOnPress={() => {
            Actions.pop();
          }}
          rightImage={require('../assets/icons/ic_favorite.png')}
        />

        <ScrollView>
          <View style={{flex: 1, marginHorizontal: 16}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#685f58'}}>Barbecue</Text>
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Rating
                type="custom"
                ratingBackgroundColor={'transparent'}
                ratingCount={5}
                jumpValue={6}
                startingValue={4}
                ratingColor={'#e09178'}
                imageSize={18}
                readonly
                showReadOnlyText/>
              <Text style={{marginLeft: 16, fontWeight: 'bold', color: 'grey'}}>0</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 16, justifyContent: 'space-around', marginRight: 60}}>
              <TouchableOpacity style={[styles.shadow, {backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center'}]}>
                <Image source={require('../assets/icons/ic_search.png')} style={{width: 20, height: 20, marginLeft: 4}}/>
                <Text style={{padding: 8, fontWeight: '600', color: 'grey'}}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.shadow, {backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center'}]}>
                <Image source={require('../assets/icons/ic_search.png')} style={{width: 20, height: 20, marginLeft: 4}}/>
                <Text style={{padding: 8, fontWeight: '600', color: 'grey'}}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.shadow, {backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center'}]}>
                <Image source={require('../assets/icons/ic_search.png')} style={{width: 20, height: 20, marginLeft: 4}}/>
                <Text style={{padding: 8, fontWeight: '600', color: 'grey'}}>Share</Text>
              </TouchableOpacity>
            </View>

            <IndicatorViewPager
              initialPage={4}
              style={{height: 300}}
              onPageSelected={this.onPageSelected}
              indicator={this.renderDotIndicator()}>
              {PagingData.map(page => this.renderPageItem(page))}
            </IndicatorViewPager>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  cardContainer: {
    width: '90%',
    height: 250,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
