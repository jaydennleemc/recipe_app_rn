import React, {Component, PureComponent} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';
import {Rating} from 'react-native-ratings';
import {IndicatorViewPager, PagerDotIndicator} from '@shankarmorwal/rn-viewpager';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import uuid from 'react-native-uuid';
import SimilarRecipes from '../components/SimilarRecipes';
import {recipeCollections} from '../firebase/Firestore';

const MaterialComp = (material) => (
  <View key={uuid.v4()}>
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
      <Image source={require('../assets/icons/ic_favorite_selected.png')} style={{width: 30, height: 30}}/>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#685f58', marginLeft: 16}}>{material}</Text>
    </View>
    <View style={{height: 1, backgroundColor: 'lightgrey', marginTop: 8}}/>
  </View>
);

const StepComp = (index, text) => (
  <View key={uuid.v4()} style={{flexDirection: 'row', marginVertical: 8}}>
    <Text style={{fontSize: 20, fontWeight: '500', color: '#685f58', marginTop: 16, marginRight: 16}}>{index + 1}.</Text>
    <Text style={{fontSize: 20, fontWeight: '500', color: '#685f58', marginTop: 16}}>{text}.</Text>
  </View>
);

const FirstRoute = (data) => (
  <View>
    <View style={{flexDirection: 'row'}}>
      <View style={{marginTop: 24, height: 80}}>
        <Image
          source={{uri: data.authorImage}}
          style={{width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: '#e09178'}}/>
        <Text style={{fontWeight: '600', fontSize: 10, marginTop: 4, alignSelf: 'center'}}>{data.name}</Text>
      </View>
      <View style={[styles.shadow, {marginTop: 16, marginLeft: 16, width: '80%', borderWidth: 1, borderColor: '#fff', backgroundColor: 'white', borderRadius: 10}]}>
        <Text style={{padding: 16, color: 'grey'}}>{data.shortDesc}</Text>
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

    <View style={{marginTop: 16}}>
      {data.materials.map(material => MaterialComp(material))}
    </View>
  </View>
);

const SecondRoute = (data) => (
  <View style={{flex: 1}}>
    <Text style={{fontSize: 30, fontWeight: '500', color: '#685f58', marginTop: 16}}>Directions</Text>
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 32}}>
      <Image source={require('../assets/icons/ic_timer.png')} style={{width: 30, height: 30}}/>
      <View style={{flexDirection: 'row', flex: 1, marginHorizontal: 32, justifyContent: 'space-between'}}>
        <View>
          <Text style={{color: 'grey'}}>Prep </Text>
          <Text style={{color: '#e09178', marginTop: 8, fontWeight: '600'}}>{data.prepareTime} min</Text>
        </View>
        <View>
          <Text style={{color: 'grey'}}>Cook </Text>
          <Text style={{color: '#e09178', marginTop: 8, fontWeight: '600'}}>{data.cookingTime} min</Text>
        </View>
        <View>
          <Text style={{color: 'grey'}}>Ready In </Text>
          <Text style={{color: '#e09178', marginTop: 8, fontWeight: '600'}}>{data.readyInTime} min</Text>
        </View>
      </View>
    </View>
    <View style={{height: 1, backgroundColor: 'lightgrey', width: '100%', marginTop: 16}}/>
    {data.steps.map((step, index) => StepComp(index, step))}
    <TouchableOpacity
      style={[
        styles.shadow,
        {width: '90%', height: 44, backgroundColor: '#e09178', borderRadius: 5, marginTop: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Watch Video</Text>
    </TouchableOpacity>
  </View>
);

const ThreeRoute = (data) => (
  <SimilarRecipes data={data}/>
);


export default class RecipesDetails extends PureComponent {

  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Need to buy'},
      {key: 'second', title: 'Doing'},
      {key: 'three', title: 'Similar recipes'},
    ],
    similarRecipes: [],
  };

  componentDidMount() {
    recipeCollections.where('type', '==', this.props.data.type).limit(4).get().then(resp => {
      this.setState({similarRecipes: resp.docs});
    }).catch(err => {
      console.error((err));
    });
  }

  renderPageItem = (index, image) => {
    return (
      <View key={uuid.v4()} style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.cardContainer}>
          <Image
            source={{uri: image}}
            style={{width: '100%', height: '100%', alignSelf: 'center', padding: 8, borderRadius: 10}}/>
          {index == 0 ?
            <TouchableOpacity style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <View style={[styles.shadow, {backgroundColor: '#62564e', borderRadius: 5}]}>
                <Text style={{padding: 8, color: 'white', fontWeight: 'bold'}}>Watch Video</Text>
              </View>
            </TouchableOpacity> : undefined}
        </View>
      </View>
    );
  };

  renderDotIndicator() {
    return (
      <PagerDotIndicator
        pageCount={this.props.data.images.length}
        style={{bottom: 36}}
        dotStyle={{backgroundColor: '#ffdcd1', width: 10, height: 10, borderRadius: 50}}
        selectedDotStyle={{backgroundColor: '#e09178', width: 10, height: 10, borderRadius: 50}}
      />
    );
  }

  renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return FirstRoute(this.props.data);
      case 'second':
        return SecondRoute(this.props.data);
      case 'three':
        return ThreeRoute(this.state.similarRecipes);
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
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#685f58'}}>{this.props.data.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Rating
                type="custom"
                ratingBackgroundColor={'transparent'}
                ratingCount={5}
                startingValue={this.props.data.startingValue}
                ratingColor={'#e09178'}
                imageSize={18}
                readonly
                showReadOnlyText/>
              <Text style={{marginLeft: 16, fontWeight: 'bold', color: 'grey'}}>+{this.props.data.reviews}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 16, justifyContent: 'space-around', marginRight: 60}}>
              <TouchableOpacity style={[styles.shadow, {backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center'}]}>
                <Image source={require('../assets/icons/ic_search.png')} style={{width: 20, height: 20, marginLeft: 4}}/>
                <Text style={{padding: 8, fontWeight: '600', color: 'grey'}}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.shadow, {backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center'}]}>
                <Image source={require('../assets/icons/ic_search.png')} style={{width: 20, height: 20, marginLeft: 4}}/>
                <Text style={{padding: 8, fontWeight: '600', color: 'grey'}}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.shadow, {backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center'}]}>
                <Image source={require('../assets/icons/ic_search.png')} style={{width: 20, height: 20, marginLeft: 4}}/>
                <Text style={{padding: 8, fontWeight: '600', color: 'grey'}}>Feedback</Text>
              </TouchableOpacity>
            </View>

            <IndicatorViewPager
              style={{height: 300}}
              indicator={this.renderDotIndicator()}>
              {this.props.data.images.map((image, index) => this.renderPageItem(index, image))}
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
