import React from 'react';
import {StyleSheet, View, Alert, ActivityIndicator} from 'react-native';
import FilmeItem from './components/FilmeItem';
import {get_upcoming_movies, moviePosterPath} from './config/moviedb';
import {FlatList} from 'react-native-gesture-handler';
import {primaryColor, accentColor} from './config/styles';
import {getGenresNames} from './config/genres';
import {keyById, renderDivider} from './config/utils';

export default class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      page: 1,
      movies: [],
      minimum: '',
      maximum: '',
      isFetching: false,
    };
  }
  setMovies (response) {
    const oldMovies = this.state.movies;
    const newMovies = response.data.results;
    const movies = oldMovies.concat (newMovies);
    this.setState ({movies: movies, isFetching: false});
  }
  componentDidMount () {
    this.setState ({isFetching: true}, () => {
      get_upcoming_movies (this.state.page)
        .then (response => this.setMovies (response))
        .catch (error => Alert.alert ('Erro'));
    });
  }
  getNewMovies () {
    this.setState ({page: this.state.page + 1, isFetching: true}, () => {
      get_upcoming_movies (this.state.page)
        .then (response => this.setMovies (response))
        .catch (error => Alert.alert ('Erro'));
    });
  }
  renderFooter = () => {
    if (!this.state.isFetching) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          backgroundColor: primaryColor,
        }}
      >
        <ActivityIndicator animating size="large" color={accentColor} />
      </View>
    );
  };
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.movies}
          renderItem={({item}) => (
            <FilmeItem
              title={item.title}
              rating={item.vote_average}
              genre={getGenresNames (item.genre_ids)}
              releaseDate={item.release_date}
              overview={item.overview}
              uri={moviePosterPath (item.poster_path)}
            />
          )}
          keyExtractor={keyById}
          onEndReached={() => this.getNewMovies ()}
          refreshing={this.state.isFetching}
          ListFooterComponent={this.renderFooter}
          onEndReachedThreshold={0.5}
          onRefresh={this.refreshMovies}
          ItemSeparatorComponent={renderDivider}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
});
