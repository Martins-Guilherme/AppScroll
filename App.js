import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: 1, nome: 'Guilherme', idade: 28, email: 'GuilhermeMartins@gmail.com'},
        {id: 2, nome: 'Gustavo', idade: 22, email: 'GustavoMartins@gmail.com'},
        {id: 3, nome: 'Henrrique', idade: 32, email: 'HenrriqueM@gmail.com'},
        {id: 4, nome: 'Paulo', idade: 52, email: 'Paulomaria@gmail.com'},
      ]
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <FlatList
        data={this.state.feed}
        renderItem={ ({item}) => <Pessoa data={item} /> }
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

class Pessoa extends Component{
  render(){
    return(
      <View>
        <Text> {this.props.data.nome}</Text>
      </View>
    );
  }
}