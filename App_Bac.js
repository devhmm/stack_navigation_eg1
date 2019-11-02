import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.top,styles.textCenter]}>
        <Image source={require('./assets/images/fblogo.png')} />
      </View>
      <View style={styles.center}>
          <View style={{paddingHorizontal: 15}}>
              <View style={{backgroundColor: 'white'}}>
                  <TextInput
                      style={{height: 40}}
                      placeholder="Email or Phone"
                    />
              </View>
          </View>
          <View style={{paddingHorizontal: 15,marginTop: 10}}>
              <View style={{backgroundColor: 'white'}}>
                  <TextInput
                      style={{height: 40}}
                      placeholder="Password"
                      secureTextEntry={true}
                    />
              </View>
          </View>
          <View style={{paddingHorizontal: 15,marginTop: 10}}>
               <TouchableOpacity style={{backgroundColor: 'blue',paddingVertical: 10,alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>Login</Text>
               </TouchableOpacity>
          </View>
      </View>
      <View style={styles.bottom}>
          <Text style={{textDecorationLine: 'underline',color: 'white'}}>Sign Up for Facebook ?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B569D'
  },
  top: {
    flex: 1,
  },
  center:{
    flex: 1,
  },
  bottom:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20
  },
  textCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
