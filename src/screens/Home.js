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
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        //const url = `http://10.2.80.156:82/hcmtucv/work.nsf/DataRest.xsp/datadocument?loai=1&viewname=VwCongViecDangThucHien&idcat=vanthu1/CINOTEC/VN&_=1512355615704`;
        const url = `http://java.cinotec.com.vn/HCMTUDEMO/work.nsf/DataRest.xsp/datadocument?loai=1&viewname=VwCongViecDangThucHien&idcat=vanthu1/CINOTEC/VN&_=1512355615704`;
        this.setState({ loading: true });
    
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: page === 1 ? res.data: [...this.state.data, ...res.data],
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
        const {navigate} = this.props.navigation;
        return (
                //<List>
                     <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>{navigate('Details', {id: '12313131'});}}>                           
                            <View>
                                <Text>{item.NoiDung}</Text>
                                <Text>{item.NgayKetThuc} - {item.TrangThai}</Text>
                            </View>           
                            </TouchableOpacity>            
                        )} 
                        keyExtractor={item => item.FldSo} 
                            
                    />    
                //</List>
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
