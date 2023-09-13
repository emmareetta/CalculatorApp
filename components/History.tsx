import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

export default function History({route, navigation}: any) {
const data = route.params.history;

    return (
        <View style={styles.container}>
            <Text>History</Text>
            <FlatList style={{flexGrow: 0, }} data={data} renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}/>
      </View>
    )
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