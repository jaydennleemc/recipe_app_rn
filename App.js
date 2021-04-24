import {Lightbox, Modal, Overlay, Router, Scene, Stack} from 'react-native-router-flux';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';


export default class App extends Component {

  render() {
    return (
      <Router>
        <Overlay key={'overlay'}>
          <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox">
              <Stack key="root" titleStyle={{alignSelf: 'center'}} hideNavBar>
                <Scene key="splash" component={SplashScreen} title=""/>
                <Scene key="login" component={LoginScreen} title=""/>
                <Scene key="register" component={RegisterScreen} title=""/>
                <Scene key="forgetPassword" component={ForgetPasswordScreen} title="" />
              </Stack>
            </Lightbox>
          </Modal>
        </Overlay>
      </Router>
    );
  }
}
