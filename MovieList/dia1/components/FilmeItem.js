import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  primaryColor,
  textIcons,
  titleStyle,
  normalText,
  subTitles,
  fonts,
} from '../config/styles';
import ImagemFilme from './ImagemFilme';

export default class FilmeItem extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <ImagemFilme uri={this.props.uri} />
          <Text style={styles.avaliacaoText}>
            {this.props.rating}
          </Text>
        </View>
        <View style={{flex: 1, paddingLeft: 5}}>
          <Text style={titleStyle}>
            {this.props.title}
          </Text>
          <Text style={subTitles}>
            {this.props.genre}
          </Text>
          <Text style={subTitles}>
            {this.props.releaseDate}
          </Text>
          <Text style={normalText}>
            {this.props.overview}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    backgroundColor: primaryColor,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avaliacaoText: {
    color: textIcons,
    fontFamily: fonts.notoSansBold,
    textAlign: 'center',
    fontSize: 20,
  },
});
