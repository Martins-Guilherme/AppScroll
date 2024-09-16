import React, {Component} from "react";
import { Text, View, StyleSheet } from "react-native";

class Pessoas extends Component{
    render(){
    return(
    <View style = {styles.areaPessoa}>
        <Text style={styles.textoPesssoa}> Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPesssoa}> Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPesssoa}> Email: {this.props.data.email} </Text>
    </View>
    );
}
}

const styles = StyleSheet.create({
    areaPessoa:{
        backgroundColor: '#222',
        height: 200,
        marginBottom: 15,
    },
    textoPesssoa:{
        color: '#fff',
        fontSize: 20,
    },
});

export default Pessoas;