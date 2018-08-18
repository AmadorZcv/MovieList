import React from 'react';
import {StyleSheet} from 'react-native';
import {Font, AppLoading} from 'expo';

import AppDia1 from './dia1/App';
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
    return <AppDia1 />;
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
