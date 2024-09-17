import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      valor: 50,
    }
  };
  
  render() {

    return (
      <View style={cria.container}>
        <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorSelected) => this.setState({valor: valorSelected}) }
        value={this.state.valor}
        />

        <Text style={{textAlign: 'center', fontSize: 30}}> {this.state.valor.toFixed(0)} </Text>
      </View>
    );
  }
}

const cria = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    marginTop: 20,
  },
});
