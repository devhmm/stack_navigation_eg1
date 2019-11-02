import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image } from 'react-native'

class LogoTitle extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image source={require('./assets/images/facebook.png')} />
                <Text> Facebook </Text>
            </View>
        )
    }
}


export class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: () => <LogoTitle />,
        headerLeft: () => (
            <Image source={require('./assets/images/menu.png')} />
          ),
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#00f',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      };
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    goToDetail(){
        this.props.navigation.navigate('Detail');
    }
    render() {
        return (
            <View>
                <Text> Home </Text>
                <View style={{paddingHorizontal: '20%'}}>
                    <TouchableOpacity style={{backgroundColor: 'blue',alignItems: 'center',paddingVertical: 10}}
                    onPress={()=>this.goToDetail()}
                    >
                        <Text>
                            GO TO DETAIL
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default HomeScreen
