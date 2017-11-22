import React, { Component } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import styles from "../Styles/AddEventScreenStyle"

export default class Card extends Component {

   render() {
      return (
         <View style={styles.eventCard}>
            <Icon style={styles.eventCardImage} name={this.props.name} />
            <Text style={styles.eventCardText}> {this.props.title} </Text>
         </View>
      )
   }
}