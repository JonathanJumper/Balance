import React, { Component } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Change from "./Change"
import { connect } from 'react-redux'

import Icon from "react-native-vector-icons/Ionicons"
import styles from "./Styles/MeasureRowStyle"

export default class MealRow extends Component {

   onPress = () => {
      const { symbol, onPress } = this.props
      onPress(symbol)
   }

   render() {
      const { carbohydrates, date } = this.props
      return <TouchableOpacity style={styles.container} onPress={this.onPress}>
         <View style={styles.row}>
            <Text style={styles.text} numberOfLines={1}>
               {carbohydrates} gr de CH calculados 
          </Text>
            <View style={styles.right}>
               <Icon style={styles.icon} name="ios-nutrition" />
            </View>
         </View>

         <View style={styles.row}>
            <Text style={[styles.text, styles.date]} numberOfLines={1}>
               {date}
            </Text>
         </View>
      </TouchableOpacity>
   }
}