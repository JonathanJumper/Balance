import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import Line from "./Line"
import styles from "./Styles/ChartStyle"

export default class Chart extends Component {
  render() {
    return <View style={styles.container}>
        <Line values={[60, 200, 150, 140, 100, 90, 92, 112]}  />
      </View>
  }
}
