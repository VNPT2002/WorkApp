import React, { Component } from 'react';
import {StyleSheet, Text, View, Button,Image, TouchableOpacity} from 'react-native';


const MenuButton = (props) =>(
  <TouchableOpacity onPress={()=>{props.navigation.navigate('DrawerOpen');}}>
      <Image source={require('../images/menu.png')} />
  </TouchableOpacity>
);

handlePress=()=>{
  //Android
    OpenFile.openDoc([{
     url:"http://java.cinotec.com.vn/HCMTUDEMO/work.nsf/99327CFEAFB6F91E472581EC002BB09F/$File/a.pdf", // Local "file://" + filepath
     fileName:"a",
     cache:false,
     fileType:"pdf"
   }], (error, url) => {
      if (error) {
        console.error(error);
      } else {
        console.log(url)
      }
   })
};

export default class WorkDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Details`,
    headerLeft: <MenuButton navigation={navigation} />        
  });
  
  
  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>{params.id}</Text>
        <TouchableOpacity onPress={handlePress.bind(this)}>
          <Text>See a Document</Text>
        </TouchableOpacity>
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