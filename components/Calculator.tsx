import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Calculator({ navigation }: any) {
  const [luku1, setLuku1] = useState("");
  const [luku2, setLuku2] = useState("");

  const [result, setResult] = useState<number | undefined>(undefined);

  const laskeYhteen = () => {
    const tulos = parseInt(luku1) + parseInt(luku2)
    setResult(tulos) 
    
    const laskutoimitus = muodostaLaskutoimitus(luku1, luku2, '+', tulos.toString())
    lisaaHistoriaan(laskutoimitus)

    tyhjenna()
  
  }

  const laskeErotus = () => {
    const tulos = parseInt(luku1) - parseInt(luku2)
    setResult(tulos) 
    
    const laskutoimitus = muodostaLaskutoimitus(luku1, luku2, '-', tulos.toString())
    lisaaHistoriaan(laskutoimitus)

    tyhjenna()
  }

  const muodostaLaskutoimitus = (luku1: string, luku2: string, valimerkki: string, result: string) => {
    return `${luku1} ${valimerkki} ${luku2} = ${result}`
  }


  const [data, setData] = useState<Array<string>>([]);

  const lisaaHistoriaan = (teksti: string) => {
    setData([...data, teksti]);
    
  }

  const tyhjenna = () => {
    setLuku1("")
    setLuku2("")
  }


  return (
    <View style={styles.container}>
      <View>
      <Text>Result: {result}</Text>
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setLuku1(text)} value = {luku1} inputMode='numeric'/>
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setLuku2(text)} value = {luku2} inputMode='numeric'/>
      <View style={{width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <Button
          onPress={() => {
            laskeYhteen()
            
          }}
          title="+"
          />
        <Button
          onPress={laskeErotus}
          title="-"
          />

        <Button
          title='History'
          onPress={() => navigation.navigate('history', { history: data })}
          />
          

          
        </View>
      </View>

     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80
  },
});