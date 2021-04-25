import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import DottedLine from '../../components/DottedLine';

export default class FavoriteTab extends Component {

  data = [
    {
      key: 1,
    },
    {
      key: 2,
    },
    {
      key: 3,
    },
  ];


  renderItem = (item) => {
    return (
      <View style={styles.cardContainer} key={item.key}>
        <View style={{width: 110, backgroundColor: 'lightgrey', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
        </View>
        <View style={{paddingVertical: 8, marginLeft: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#685f58', marginTop: 8, alignSelf: 'center'}}>Slow Cooker Carinatas</Text>
          <View style={{flexDirection: 'row', marginTop: 16, marginLeft: 8}}>
            <Rating
              type="custom"
              ratingCount={5}
              jumpValue={6}
              startingValue={0}
              ratingColor={'#e09178'}
              imageSize={15}
              readonly
              showReadOnlyText/>
            <Text style={{marginLeft: 16, fontWeight: 'bold', color: 'grey'}}>0</Text>
          </View>
          <DottedLine margin={30} style={{alignSelf: 'center'}}/>
          <View style={{flexDirection: 'row', marginLeft: 16}}>
            <Text style={{color: 'grey', fontWeight: '700', fontSize: 16}}>recipe by</Text>
            <Text style={{marginLeft: 8, color: '#685f58', fontWeight: 'bold', fontSize: 16}}>Luca chef</Text>
          </View>
          <View style={{marginTop: 16, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/icons/ic_timer.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>1h40</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../../assets/icons/ic_kitchen.png')} style={{width: 20, height: 20}}/>
              <Text style={{alignSelf: 'center', marginLeft: 8, color: '#685f58', fontWeight: '500'}}>4 servings</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <FlatList
          style={{marginHorizontal: 8, marginTop: 16}}
          data={this.data}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: '95%',
    height: 'auto',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 1,
  },
});