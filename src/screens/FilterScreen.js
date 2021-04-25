import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Slider} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import {Actions} from 'react-native-router-flux';
import CheckBox from '@react-native-community/checkbox';


const CheckBoxComp = (title, value, onToggle) => {
  return (
    <View style={{flexDirection: 'row', paddingHorizontal: 24}}>
      <CheckBox
        boxType={'square'}
        disabled={false}
        style={{width: 30, height: 30}}
        onCheckColor={'white'}
        onFillColor={'#e09178'}
        onTintColor={'#e09178'}
        value={value}
        onValueChange={onToggle}
      />
      <Text style={{alignSelf: 'center', fontWeight: '600', marginLeft: 8, color: '#685f58', width: 100}}>{title}</Text>
    </View>
  );
};

export default class FilterScreen extends Component {

  state = {};

  sliderOnChange = (value) => {

  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <NavigationBar
          title={'Filter'}
          leftOnPress={() => {
            Actions.pop();
          }}/>
        <Text style={{marginLeft: 16, marginTop: 16, fontWeight: 'bold', color: 'grey'}}>By Dietary Needs</Text>
        <View style={{marginTop: 16}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 8}}>
            {CheckBoxComp('Vegetarian', false, () => {

            })}
            {CheckBoxComp('Low-Fat', false, () => {

            })}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 8}}>
            {CheckBoxComp('Vegan', false, () => {

            })}
            {CheckBoxComp('Low-Sodium', false, () => {

            })}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 8}}>
            {CheckBoxComp('High-Fiber', false, () => {

            })}
            {CheckBoxComp('Dairy-Free', false, () => {

            })}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 8}}>
            {CheckBoxComp('Low-Carb', false, () => {

            })}
            {CheckBoxComp('Wheat/Gluten-Free', false, () => {

            })}
          </View>
        </View>
        <View style={{marginHorizontal: 24, marginTop: 16, height: 1, backgroundColor: 'lightgrey'}}/>
        <Text style={{marginLeft: 24, marginTop: 16, fontWeight: 'bold', color: 'grey'}}>Ready In</Text>
        <Slider
          minimumValue={0}
          maximumValue={5}
          style={{marginHorizontal: 24}}
          thumbTintColor={'#e09178'}
          minimumTrackTintColor={'#e09178'}
          maximumTrackTintColor={'#ffdacf'}
          thumbImage={require('../assets/icons/ic_slider.png')}/>
        <View style={{flexDirection: 'row', marginHorizontal: 24, justifyContent: 'space-between'}}>
          <TouchableOpacity style={{borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', height: 30, minWidth: 80, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'grey'}}>Any time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', height: 30, paddingHorizontal: 8, minWidths: 80, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'grey'}}>3 hours or less</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 16}}>
          <TouchableOpacity style={{backgroundColor: '#e09178', padding: 16, width: 130, borderRadius: 10}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#ffdacf', padding: 16, width: 130, borderRadius: 10}}>
            <Text style={{color: '#e09178', fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>Reset</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
