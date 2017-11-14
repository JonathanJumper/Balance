import React, { PureComponent } from "react"
import { StyleSheet, Text, View } from "react-native"

import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./Styles/ChangeStyle"

export default class Change extends PureComponent {

  render() {
    const { value: input, isAbove } = this.props
    const value: number = input || 0 // convert to number
    const icon =
      value === 0 || !value ? (
        <Text> </Text>
      ) : (
        <Icon
          name={value < 0 ? "caret-down" : "caret-up"}
          style={styles.icon}
        />
      )
    return (
      <View style={styles.badge}>
        {icon}
        <Text style={styles.value} numberOfLines={1}>
          {Math.abs(value)}
        </Text>
      </View>
    )
  }
}


