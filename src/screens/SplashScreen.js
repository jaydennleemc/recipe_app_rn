import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Dimensions, StyleSheet, Image, Button} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from '@shankarmorwal/rn-viewpager';
import {Actions} from 'react-native-router-flux';

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


const Page = ({key, title, detail, image, buttonTitle, hasButton}) => (
  <View style={styles.page1} key={key}>
    <View style={styles.cardContainer}>
      <View style={styles.cardViewTop}>
      </View>
      <View style={styles.cardViewBottom}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDetail}>{detail}</Text>
        {image ? <Image source={image} style={styles.cardImage}/> : null}
        {hasButton ?
          <TouchableOpacity style={styles.loginButton} onPress={() => {
            Actions.replace('login');
          }}>
            <Text style={styles.loginButtonText}>{buttonTitle}</Text>
          </TouchableOpacity>
          : null}
      </View>
    </View>
  </View>
);

export default class SplashScreen extends Component {

  state = {
    pageIndex: 0,
  };

  renderDotIndicator() {
    return (
      <PagerDotIndicator
        pageCount={PagingData.length}
        style={{bottom: 100}}
        dotStyle={{backgroundColor: 'white', width: 10, height: 10, borderRadius: 50}}
        selectedDotStyle={{backgroundColor: 'grey', width: 10, height: 10, borderRadius: 50}}
      />
    );
  }

  onPageSelected = ({position}) => {
    this.setState({pageIndex: position});
    console.log('Selected page position:', position);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <IndicatorViewPager
          initialPage={4}
          style={{flex: 1}}
          onPageSelected={this.onPageSelected}
          indicator={this.renderDotIndicator()}>
          {PagingData.map(page => Page(page))}
        </IndicatorViewPager>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page1: {
    // backgroundColor:'',
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page2: {},
  page3: {},
  page4: {},
  cardContainer: {
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardViewTop: {
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'grey',
  },
  cardViewBottom: {
    height: 220,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  cardDetail: {
    marginTop: 8,
    textAlign: 'center',
    marginHorizontal: 16,
    fontSize: 14,
    color: 'grey',
  },
  cardImage: {
    width: 50,
    height: 50,
    marginTop: 16,
  },
  loginButton: {
    width: '40%',
    height: 40,
    marginTop: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e09178',
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
