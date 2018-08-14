import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList} from 'react-native';
import {Buffer} from 'buffer';

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
            start: 4,
            error: null,
            refreshing: false
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { start } = this.state;      
        const url = `http://java.cinotec.com.vn/HCMTUDEMO/work.nsf/DataRest.xsp/datadocument?loai=5&start=${start}&rows=5&viewname=VwCongViecDangThucHien&idcat=vanthu1/CINOTEC/VN`;
        
        this.setState({ loading: true });
        const hash = new Buffer(`pc1admin:PC1ADMIN09`).toString('base64');
          fetch(url,{
            method: "GET",
            headers:{
              'Authorization': `Basic ${hash}`
            }
          })
          .then(res => res.json())
          .then(res => {            
            this.setState({
              data: start === 1 ? res.data: [...this.state.data, ...res.data],
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
    };

    handleRefresh = () => {
        this.setState(
          {
            start: 1
          },
          () => {
            this.makeRemoteRequest();
          }
        );
    };
    
    handleLoadMore = () => {        
        this.setState(
          {
            start: this.state.start + 1
          },
          () => {
            this.makeRemoteRequest();
          }
        );
    };

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "86%",
              backgroundColor: "#CED0CE",
              marginLeft: "14%"
            }}
          />
        );
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
                <View>
                   
                    <View>
                     <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (//{id: `${item}`}
                            <TouchableOpacity onPress={()=>{navigate('Details', {item});}}>                           
                            <View style={{height: 150}}>
                                <Text>{item.NoiDung}</Text>
                                <Text>Ngày bắt đầu: {item.NgayBatDau} - Hạn xử lý :{item.NgayKetThuc}</Text>
                            </View>           
                            </TouchableOpacity>            
                        )} 
                        keyExtractor={item => item.ID} 
                        ItemSeparatorComponent={this.renderSeparator}
                        onRefresh={this.handleRefresh}
                        refreshing={this.state.refreshing}      
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={0.1}
                    />    
                 </View>    
                </View>    
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
