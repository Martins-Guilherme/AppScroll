import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      valor: 0,
    }
  };
  
  render() {

    return (
      <View style={cria.container}>
        <Slider
        minimumTrackImage={0}
        maximumTrackImage={100}
        onValueChange={(valorSelected) => this.setState({valor: valorSelected}) }
        value={this.state.valor}
        />

        <Text style={{textAlign: 'center', fontSize: 30}}> {this.state.valor} </Text>
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
