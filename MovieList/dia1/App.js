import React from 'react';
import {StyleSheet, View} from 'react-native';
import FilmeItem from './components/FilmeItem';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <FilmeItem
          title={"Ferris Bueller's Day Off"}
          rating={'8.3'}
          genre={'Comédia'}
          releaseDate={'12 Fevereiro 1987'}
          overview={
            'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality.  Everything the Avengers have fought for has led up to this moment - the fate of Earth andexistence itself has never been more uncertain.'
          }
          uri={
            'https://images-na.ssl-images-amazon.com/images/I/51VSX1b53oL.jpg'
          }
        />
      </View>
    );
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
