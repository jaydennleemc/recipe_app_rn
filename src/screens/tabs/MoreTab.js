import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Actions} from 'react-native-router-flux';
import uuid from 'react-native-uuid';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class MoreTab extends Component {

  data = [
    {
      image: '',
      title: 'Home',
    },
    {
      image: '',
      title: 'Create your own recipe!',
    },
    {
      image: '',
      title: 'Saved',
    },
    {
      image: '',
      title: 'Challenge',
    },
    {
      image: '',
      title: 'Logout',
    },
    {
      image: '',
      title: 'Love this app?',
    },
    {
      image: '',
      title: 'FAQ',
    },
    {
      image: '',
      title: 'Settings',
    },
  ];

  state = {
    showLogoutDialog: false,
  };

  logoutUser = async () => {
    this.setState({showLogoutDialog: false}, () => {
      AsyncStorage.removeItem('userInfo', () => {
        Actions.replace('splash');
      });
    });
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity key={uuid.v4()} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 8}} onPress={() => this.itemOnPress(item)}>
        <Image source={require('../../assets/icons/ic_feed.png')} style={{height: 40, width: 40}}/>
        <Text style={{flex: 1, marginLeft: 16, fontSize: 20, color: '#685f58', fontWeight: 'bold'}}>{item.title}</Text>
        <Image source={require('../../assets/icons/ic_arrow_right.png')} style={{width: 20, height: 30}}/>
      </TouchableOpacity>
    );
  };

  itemOnPress = (item) => {
    if (item.title == 'Logout') {
      this.setState({showLogoutDialog: true});
      return;
    }
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
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <View style={{width: '100%', height: 2, backgroundColor: 'white'}}/>}/>

        <AwesomeAlert
          show={this.state.showLogoutDialog}
          title=""
          message="Logout?"
          contentContainerStyle={{width: '60%', height: 'auto'}}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No"
          confirmText="Yes"
          confirmButtonColor="#e09178"
          onCancelPressed={() => {
            this.setState({showLogoutDialog: true});
          }}
          onConfirmPressed={async () => {
            await this.logoutUser();
          }}
        />
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
