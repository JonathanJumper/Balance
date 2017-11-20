import React, { Component } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import styles from "../Styles/SettingsScreenStyle"

export default class CardAbout extends Component {

   render() {
      return (
         <View style={styles.aboutCard}>
            <Text style={styles.aboutCardInfo} > Desarrollado para la materia Taller proyectos Interdisciplinares</Text>
            <Text style={styles.aboutCardInfo} > Universidad Nacional de Colombia | 2017 - II </Text>
            <Text style={styles.aboutCardInfo} > Hecho con <Icon style={styles.aboutCardInfoIcon} name="ios-heart-outline" /> por www.chingate.co </Text>
            <Text style={styles.aboutCardInfo} > <Icon style={styles.aboutCardInfoIcon} name="ios-information-circle-outline" /> MIT License </Text>
         </View>
      )
   }
}