import React from 'react';
import {View} from 'react-native';
import {Font, AppLoading} from 'expo';

import AppDia1 from './dia1/App';
import AppDia2 from './dia2/App';
export default class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      fontLoaded: false,
    };
  }
  async loadFonts () {
    await Font.loadAsync ({
      patuaOne: require ('./assets/fonts/PatuaOne-Regular.ttf'),
      notoSans: require ('./assets/fonts/NotoSans-Regular.ttf'),
      notoSansBold: require ('./assets/fonts/NotoSans-Bold.ttf'),
      notoSansItalic: require ('./assets/fonts/NotoSans-Italic.ttf'),
      notoSansBoldItalic: require ('./assets/fonts/NotoSans-BoldItalic.ttf'),
    });
    return Promise.resolve ();
  }
  render () {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this.loadFonts}
          onFinish={() => this.setState ({fontLoaded: true})}
          onError={console.warn}
        />
      );
    }
    return (
      <View style={{flex: 1, paddingTop: Expo.Constants.statusBarHeight}}>
        <AppDia2 />
      </View>
    );
  }
}
