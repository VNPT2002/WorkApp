import React, { Component } from 'react';
import {StyleSheet, Text, View, Button,Image, TouchableOpacity} from 'react-native';

const MenuButton = (props) =>(
  <TouchableOpacity onPress={()=>{props.navigation.navigate('DrawerOpen');}}>
      <Image source={require('../images/menu.png')} />
  </TouchableOpacity>
);

export default class WorkIsLate extends Component {
 
  static navigationOptions = ({ navigation }) => ({
    title: `Late`,
    headerLeft: <MenuButton navigation={navigation} />        
  });

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