import React, {Component, PureComponent} from 'react';
import {Dimensions, Text, View} from 'react-native';
import uuid from 'react-native-uuid';

export default class DottedLine extends PureComponent {

  state = {
    margin: this.props.margin ? this.props.margin : 0,
  };

  render() {
    const width = Dimensions.get('window').width / 2;
    const dottes = [];
    for (let i = 0; i < width; i++) {
      dottes.push(i);
    }
    return (
      <View style={[{flexDirection: 'row', width: width + this.state.margin, justifyContent: 'center', overflow: 'hidden'}, this.props.style]}>
        {dottes.map(() => {
          return <Text key={uuid.v4()} style={{color: '#999693', fontSize: 20}}>-</Text>;
        })}
      </View>
    );
  }
}
