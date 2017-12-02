import React, { Component } from 'react';
import {StyleSheet, Text, View, Button,Image, TouchableOpacity} from 'react-native';

export default class WorkIsLate extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Công việc trễ</Text>
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});