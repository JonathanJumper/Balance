import React, { Component } from "react"
import { Text,  TouchableOpacity,  View } from "react-native"
import Change from "./Change"
import styles from "./Styles/MeasureStyle"

// Get screen width

export default class Measure extends Component {
  props: {
    symbol: string,
    measure: string,
    date: string,
    change: number,
    active: boolean,
    onPress: Function
  }

  static defaultProps = {
    active: false
  }

  onPress = () => {
    const { symbol, onPress } = this.props
    onPress(symbol)
  }

  render() {
    const { symbol, measure, date, change, active } = this.props
    return <TouchableOpacity style={[styles.container, active ? styles.active : {}]} onPress={this.onPress}>
        <View style={styles.row}>
          <Text style={styles.text} numberOfLines={1}>
            {measure} mg/dl
          </Text>
          <View style={styles.right}>
            <Text style={styles.text} numberOfLines={1}>
              {symbol}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={[styles.text, styles.date]} numberOfLines={1}>
            {date}
          </Text>
          <View style={styles.right}>
            {change !== undefined && <Change value={change} />}
          </View>
        </View>
      </TouchableOpacity>
  }
}