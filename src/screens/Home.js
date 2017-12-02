import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';


const MenuButton = (props) =>(
    <TouchableOpacity onPress={()=>{props.navigation.navigate('DrawerOpen');}}>
        <Image source={require('../images/menu.png')} />
    </TouchableOpacity>
);

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Home`,
        headerBackTitle: null,
        tabBarLabel: 'Home',
        headerLeft: <MenuButton navigation={navigation} />        
    });

    render() {
        return (
        <View style={styles.container}>
            <Text>Home</Text>
            
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
  },
  icon: {
    width: 24,
    height: 24,
  },
});
