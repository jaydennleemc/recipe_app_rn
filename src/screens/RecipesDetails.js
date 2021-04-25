import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';
import {Rating} from 'react-native-ratings';
import {IndicatorViewPager, PagerDotIndicator} from '@shankarmorwal/rn-viewpager';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import uuid from 'react-native-uuid';


const StepComp = (step) => (
  <View key={uuid.v4()}>
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
      <Image source={require('../assets/icons/ic_favorite_selected.png')} style={{width: 30, height: 30}}/>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#685f58', marginLeft: 8}}>{step}</Text>
    </View>
    <View style={{height: 1, backgroundColor: 'lightgrey', marginTop: 8}}/>
  </View>
);

const TextComp = (index, text) => (
  <View key={uuid.v4()} style={{flexDirection: 'row', marginVertical: 8}}>
    <Text style={{fontSize: 20, fontWeight: '500', color: '#685f58', marginTop: 16, marginRight: 16}}>1.</Text>
    <Text style={{fontSize: 20, fontWeight: '500', color: '#685f58', marginTop: 16}}>1dadkahdjhjdhfjskajfaljflksjfklsjfklajflksjflksjflksjflkajfkljfkljsklfjklsfjklsjfklsjflkjslkfj.</Text>
  </View>
);

const FirstRoute = () => (
  <View>
    <View style={{flexDirection: 'row'}}>
      <View style={{marginTop: 24, height: 80}}>
        <Image
          source={require('../assets/icons/icons8-mushbooh-food-50.png')}
          style={{width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: '#e09178'}}/>
        <Text style={{fontWeight: '600', fontSize: 10, marginTop: 4}}>Luca chef</Text>
      </View>
      <View style={[styles.shadow, {marginTop: 16, marginLeft: 16, width: '80%', borderWidth: 1, borderColor: '#fff', backgroundColor: 'white'}]}>
        <Text style={{padding: 16, color: 'grey'}}>{'fsfjksfjklsfjklsfjklsdjfklsdjfkljskljfklj發生發生發生發生發生法發生發生發生法sklf'}</Text>
      </View>
    </View>
    <View style={{height: 1, backgroundColor: 'lightgrey', marginTop: 16}}/>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 16, alignItems: 'center'}}>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: '#685f58'}}>Ingredients</Text>
      <TouchableOpacity style={[styles.shadow, {backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center'}]}>
        <Image source={require('../assets/icons/ic_search.png')} style={{width: 20, height: 20, marginLeft: 4}}/>
        <Text style={{padding: 8, fontWeight: '600', color: 'grey'}}>Share</Text>
        <Image source={require('../assets/icons/ic_arrow_right.png')} style={{width: 20, height: 20, marginRight: 4}}/>
      </TouchableOpacity>
    </View>

    {StepComp('fsfsfsf')}
    {StepComp('fsfsfsf')}
    {StepComp('fsfsfsf')}
    {StepComp('fsfsfsf')}
    {StepComp('fsfsfsf')}
    {StepComp('fsfsfsf')}
    {StepComp('fsfsfsf')}
    {StepComp('fsfsfsf')}
    {StepComp('fsfsfsf')}
    {StepComp('fsfsfsf')}

  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1}}>
    <Text style={{fontSize: 30, fontWeight: '500', color: '#685f58', marginTop: 16}}>Directions</Text>
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 32}}>
      <Image source={require('../assets/icons/ic_timer.png')} style={{width: 30, height: 30}}/>
      <View style={{flexDirection: 'row', flex: 1, marginHorizontal: 32, justifyContent: 'space-between'}}>
        <View>
          <Text style={{color: 'grey'}}>Prep </Text>
          <Text style={{color: '#e09178', marginTop: 8, fontWeight: '600'}}>20 min</Text>
        </View>
        <View>
          <Text style={{color: 'grey'}}>Cook </Text>
          <Text style={{color: '#e09178', marginTop: 8, fontWeight: '600'}}>15 min</Text>
        </View>
        <View>
          <Text style={{color: 'grey'}}>Ready In </Text>
          <Text style={{color: '#e09178', marginTop: 8, fontWeight: '600'}}>65 min</Text>
        </View>
      </View>
    </View>
    <View style={{height: 1, backgroundColor: 'lightgrey', width: '100%', marginTop: 16}}/>
    {TextComp(1, 'fsf')}
    {TextComp(1, 'fsf')}
    <TouchableOpacity
      style={[
        styles.shadow,
        {width: '90%', height: 44, backgroundColor: '#e09178', borderRadius: 5, marginTop: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Watch Video</Text>
    </TouchableOpacity>
  </View>
);

const ThreeRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}/>
);


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

  state = {
    index: 1,
    routes: [
      {key: 'first', title: 'Need to buy'},
      {key: 'second', title: 'Doing'},
      {key: 'three', title: 'Similar recipes'},
    ],
  };

  renderPageItem = (item) => {
    return (
      <View key={uuid.v4()} style={{flex: 1, justifyContent: 'center'}}>
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

  renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute/>;
      case 'second':
        return <SecondRoute/>;
      case 'three':
        return <ThreeRoute/>;
      default:
        return null;
    }
  };

  renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <Text style={{color: focused ? '#e09178' : 'lightgrey', margin: 8}}>{route.title}</Text>
      )}
      indicatorStyle={{backgroundColor: '#e09178'}}
      style={{backgroundColor: 'transparent'}}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <NavigationBar
          leftOnPress={() => {
            Actions.pop();
          }}
          rightImage={require('../assets/icons/ic_favorite.png')}/>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
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
            <View style={{flex: 1, minHeight: 800, maxHeight: 1000}}>
              <TabView
                navigationState={this.state}
                renderScene={this.renderScene}
                renderTabBar={this.renderTabBar}
                initialLayout={{width: 500}}
                onIndexChange={(index) => {
                  this.setState({index});
                }}/>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  cardContainer: {
    width: '95%',
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
