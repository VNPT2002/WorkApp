import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList} from 'react-native';


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

    constructor(props){
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        };
    }

    componentDidMount() {
        console.warn("run ...");
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        console.warn("makeRemoteRequest");
        const { page, seed } = this.state;
        const url = `http://10.2.80.156:82/hcmtucv/work.nsf/DataRest.xsp/datadocument?loai=1&viewname=VwCongViecDangThucHien&idcat=vanthu1/CINOTEC/VN&_=1512355615704`;
        this.setState({ loading: true });
    
        fetch(url)
          .then(res => res.json())
          .then(res => {
            console.warn(this.state.data);  
            this.setState({
              data: page === 1 ? res.results : [...this.state.data, ...res.results],
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
    };

    render() {
        return (
                     <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <Text>item.NguoiXuLy</Text>
                        )}         
                    />    

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
