import React, { Component } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import styles from "../Styles/StockScreenStyle"

export default class Card extends Component {

   render() {
      return (
         <View style={styles.stockCard}>
            <Image style={styles.stockCardImage} source={this.props.image} resizeMode="contain"></Image>
            <Text style={styles.stockCardText}> x {this.props.stock} {this.props.name} </Text>
            <Icon style={styles.stockCardButton} name="ios-add" />
            <Icon style={styles.stockCardButton} name="ios-remove" />
         </View>
      )
   }
}