import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.top}>
          <View style={[styles.top1,styles.textCenter]}>
            <Text style={styles.textStyle}>A</Text>
          </View>
          <View style={[styles.top2,styles.textCenter]}>
            <Text style={styles.textStyle}>B</Text>
          </View>
       </View>
       <View style={styles.bottom}>
            <View style={[styles.bottom1,styles.textCenter]}>
                <Text style={styles.textStyle}>C</Text>
            </View>
            <View style={[styles.bottom2,styles.textCenter]}>
                <Text style={styles.textStyle}>D</Text>
            </View>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    flexDirection: 'row'
  },
  top1:{
    flex: 1,
    backgroundColor: 'green',
  },
  top2:{
    flex: 1,
    backgroundColor: 'yellow'
  },
  bottom1:{
    flex: 1,
    backgroundColor: 'red'
  },
  bottom2:{
    flex: 1,
    backgroundColor: 'blue'
  },
  bottom: {
    flex: 1,
    flexDirection: 'row'
  },
  textStyle:{
    color: 'white',
    fontSize: 30
  },
  textCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
