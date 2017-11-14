import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import Graph from "./Graph"
import styles from "./Styles/ChartStyle"

export default class Chart extends Component {

  render() {
    return <View style={styles.container}>
        <Graph />
      </View>
  }
}
