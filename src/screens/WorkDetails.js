import React, { Component } from 'react';
import {StyleSheet, Text, View, Button,Image, TouchableOpacity, Platform} from 'react-native';

const MenuButton = (props) =>(
  <TouchableOpacity onPress={()=>{props.navigation.navigate('DrawerOpen');}}>
      <Image source={require('../images/menu.png')} />
  </TouchableOpacity>
);

 

export default class WorkDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Details`,
    headerLeft: <MenuButton navigation={navigation} />        
  });
  
  handlePress(id){
    //Android
    console.warn("scan file success" + id);
  }
  
  viewFileName(id, fileName){
    const files = fileName.split('~');
    return (
      <View>
           {
             files.map((item, key)=> 
               <TouchableOpacity key={key} onPress={()=>this.handlePress(id)}>
                  <Text>{item}</Text>
               </TouchableOpacity>
              
           )}
      </View>     
    )
  }

  

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>{params.item.FldSo}</Text>
        <Text>{params.item.TrangThai}</Text>
        <Text>{params.item.NoiDung}</Text>
        <Text>{params.item.NgayBatDau}</Text>
        <Text>{params.item.NgayKetThuc}</Text>
        {this.viewFileName(params.item.ID, params.item.Taptin)}
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