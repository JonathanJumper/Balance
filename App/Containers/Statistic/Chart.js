import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import Line from "../../Components/Statistic/Line"
import { Colors } from "../../Themes/"
import styles from "./Styles/ChartStyle"

export default class Chart extends Component {
  render() {
    return <View style={styles.container}>
        <Line values={[40, 30, 70, 60, 100, 70, 40, 70, 50]} fillColor={Colors.chartFill} strokeColor={Colors.chartStroke}  />
      </View>
  }
}
