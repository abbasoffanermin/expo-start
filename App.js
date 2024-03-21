import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/img.png')}/>
      <Text style={styles.font} >Family health</Text> 
      <Text style={styles.margin}>Get a madical card for yourself and for your family and take care of the health of your loved ones</Text>
      <View style={{ height: 100, marginTop: 10,width:200,marginTop:100 }}>
                <Button title="Next" color="#007AFF" onPress={() =>alert('Pressed!')} />
            </View>
      <StatusBar style="auto" />
    </View>
 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
font:{
  fontSize:30,
  fontWeight:'bold'
},
margin:{
  marginTop:20,
  marginBottom:20,
  marginLeft:20
},

});