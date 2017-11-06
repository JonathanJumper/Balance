import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import styles from "./Styles/ListStyles"
import Measure from "./Measure"


export default class List extends Component {
  render() {
    return <View style={styles.container}>
        <Measure symbol="BTC" measure="126" date="Domingo 5 Nov, 2017  9:21 pm" change={5} active={false} onPress={() => alert("Selected!")} />
        <Measure symbol="BTC" measure="152" date="Domingo 5 Nov, 2017  12:43 pm" change={5} active={false} onPress={() => alert("Selected!")} />
        <Measure symbol="BTC" measure="94"  date="Domingo 5 Nov, 2017  10:05 am" change={5} active={false} onPress={() => alert("Selected!")} />
        <Measure symbol="BTC" measure="131" date="Sabado 4 Nov, 2017  07:42 pm" change={5} active={false} onPress={() => alert("Selected!")} />
        <Measure symbol="BTC" measure="145" date="Sabado 4 Nov, 2017  4:20 pm" change={5} active={false} onPress={() => alert("Selected!")} />
        <Measure symbol="BTC" measure="180" date="Sabado 4 Nov, 2017  01:19 pm" change={5} active={false} onPress={() => alert("Selected!")} />
       </View>
  }
}