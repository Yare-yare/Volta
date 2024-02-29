import React from 'react'
import { View, Text } from '@/components/Themed'
import { StyleSheet } from 'react-native';


const anotherTab = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>YARE YARE DAZE</Text>
            <Text style={styles.word}>Another Text</Text>
        </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  word:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
}); 

export default anotherTab;
