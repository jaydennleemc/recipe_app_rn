import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class MoreTab extends Component {

  data = [
    {
      key: 1,
      image: '',
      title: 'Home',
    },
    {
      key: 2,
      image: '',
      title: 'Create your own recipe!',
    },
    {
      key: 3,
      image: '',
      title: 'Saved',
    },
    {
      key: 4,
      image: '',
      title: 'Challenge',
    },
    {
      key: 5,
      image: '',
      title: 'Logout',
    },
    {
      key: 6,
      image: '',
      title: 'Love this app?',
    },
    {
      key: 7,
      image: '',
      title: 'FAQ',
    },
    {
      key: 8,
      image: '',
      title: 'Settings',
    },
  ];

  renderItem = ({item}) => {
    return (
      <TouchableOpacity key={item.key} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 8}} onPress={() => this.itemOnPress(item)}>
        <Image source={require('../../assets/icons/ic_feed.png')} style={{height: 40, width: 40}}/>
        <Text style={{flex: 1, marginLeft: 16, fontSize: 20, color: '#685f58', fontWeight: 'bold'}}>{item.title}</Text>
        <Image source={require('../../assets/icons/ic_arrow_right.png')} style={{width: 20, height: 30}}/>
      </TouchableOpacity>
    );
  };

  itemOnPress = (item) => {
    console.log(item);
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView/>
        <TouchableOpacity
          onPress={() => {
            Actions.push('profile');
          }}
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 32}}>
          <Image
            source={require('../../assets/icons/icons8-mushbooh-food-50.png')}
            style={{width: 80, height: 80, borderWidth: 2, borderColor: '#e09178', borderRadius: 50}}/>
          <View style={{flex: 1, marginLeft: 16}}>
            <Text style={{color: '#e09178', fontSize: 20, fontWeight: 'bold'}}>Olivaa Watson</Text>
            <Text style={{marginTop: 8}}>Tap to view and edit info</Text>
          </View>
          <Image source={require('../../assets/icons/ic_arrow_right.png')} style={{width: 20, height: 30}}/>
        </TouchableOpacity>

        <FlatList
          bounces={false}
          style={{marginTop: 32}}
          data={this.data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <View style={{width: '100%', height: 2, backgroundColor: 'white'}}/>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
