import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas : [
        {key: 1, nome: 'Calabresa', valor: '39,99'},
        {key: 2, nome: 'Brigadeiro', valor: '29,99'},
        {key: 3, nome: 'Lombo Paulista', valor: '49,99'},
        {key: 4, nome: 'Quatro queijos', valor: '79,99'},
        {key: 5, nome: 'Portuguesa', valor: '59,99'},
      ]
    }
  };
  
  render() {

    let pizzasItem = this.state.pizzas.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    }  )

    return (
      <View style={cria.container}>
        <Text style={cria.logo}>Menu Pizza</Text>

        <Picker
        selectedValue={this.state.pizza}
        onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue})}
        >
          {pizzasItem}
        </Picker>



        <Text style={cria.pizzas}>Voce escolheu: {this.state.pizzas[this.state.pizza].nome} </Text>
        <Text style={cria.pizzas}>R$ {this.state.pizzas[this.state.pizza].valor}</Text>
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
  logo:{
    textAlign: 'center',
    fontSize: 28,
  },
  pizzas:{
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
});
