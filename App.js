import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.areaBox1}></View>
          <View style={styles.areaBox2}></View>
          <View style={styles.areaBox3}></View>
          <View style={styles.areaBox4}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaBox1:{
    height: 250,
    backgroundColor: 'red',
  },
  areaBox2:{
    height: 250,
    backgroundColor: 'blue',
  },
  areaBox3:{
    height: 250,
    backgroundColor: 'green',
  },
  areaBox4:{
    height: 250,
    backgroundColor: 'yellow',
  },
  centralizar:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;