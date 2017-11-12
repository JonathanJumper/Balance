import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import Line from "./Line"
import styles from "./Styles/ChartStyle"

export default class Chart extends Component {
  render() {
    return <View style={styles.container}>
        <Line values={{sugarValues: [60, 200, 150, 140, 100, 90, 92, 150, 70], excerciseValues: [false, false, true, false, true, false] }} styles={{marginTop: 25}} />
      </View>
  }
}
