import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Pessoas from './src/pessoas';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: 1, nome: 'Guilherme', idade: 28, email: 'GuilhermeMartins@gmail.com'},
        {id: 2, nome: 'Gustavo', idade: 22, email: 'GustavoMartins@gmail.com'},
        {id: 3, nome: 'Henrrique', idade: 32, email: 'HenrriqueM@gmail.com'},
        {id: 4, nome: 'Paulo', idade: 52, email: 'Paulomaria@gmail.com'},
        {id: 5, nome: 'Gilberto', idade: 15, email: 'GilbertoJr@gmail.com'},
      ]
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <FlatList
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({ item }) => <Pessoas data = { item } /> }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;