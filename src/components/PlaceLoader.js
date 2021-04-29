import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Fade, Placeholder, PlaceholderLine, PlaceholderMedia} from 'rn-placeholder';

export default class PlaceLoader extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 16, marginTop: 16}}>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}>
          <PlaceholderLine width={80}/>
          <PlaceholderLine/>
          <PlaceholderLine/>
        </Placeholder>
      </View>
    );
  }
}
