import React, { Component } from "react"
import { Text,  TouchableOpacity,  View } from "react-native"
import Change from "./Change"
import { connect } from 'react-redux'

import Icon from "react-native-vector-icons/Ionicons"
import styles from "./Styles/MeasureRowStyle"

class MeasureRow extends Component {

  static defaultProps = {
    active: false
  }

  onPress = () => {
    const { symbol, onPress } = this.props
    onPress(symbol)
  }

  render() {
    const { measure, date, highSugarLevel, lowSugarLevel, active } = this.props
    let change;
    if (measure > highSugarLevel ){
      change = measure - highSugarLevel;
    }
    else if (measure < lowSugarLevel){
      change = measure - lowSugarLevel;
    }
    return <TouchableOpacity style={[styles.container, active ? styles.active : {}]} onPress={this.onPress}>
        <View style={styles.row}>
          <Text style={styles.text} numberOfLines={1}>
            {measure} mg/dl
          </Text>
          <View style={styles.right}>
          <Icon style={styles.icon} name="md-finger-print" />
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

const mapStateToProps = (state) => {
  return {
    highSugarLevel: state.values.static.highSugarLevel,
    lowSugarLevel: state.values.static.lowSugarLevel
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasureRow)