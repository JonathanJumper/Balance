import React, { Component } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"

import styles from "../Styles/GuideScreenStyle"

export default class Card extends Component {

   render() {
      return (
         <TouchableOpacity style={styles.card}>
            <View style={styles.cardHeader}>
               <Text style={styles.cardTitle}> {this.props.title} </Text>
            </View>
            <View style={styles.cardBody}>
               <Image style={styles.cardImage} source={this.props.image} resizeMode="contain"></Image>
               <Text style={styles.cardText}> {this.props.text} </Text>
            </View>
         </TouchableOpacity>
      )
   }
}