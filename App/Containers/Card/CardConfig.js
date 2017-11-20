import React, { Component } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import styles from "../Styles/SettingsScreenStyle"

export default class CardConfig extends Component {

   render() {
      return (
         <View style={styles.configCard}>
            <View style={styles.configCardHeader}>
               <Text style={styles.configCardTitle}> Aplicación </Text>
               <Icon style={styles.configCardTitleIcon} name="ios-options" />
            </View>
            <View style={styles.configCardBody} >
               <Text style={styles.configCardText} > Productos de pais: Colombia </Text>
               <View style={styles.configCardBodyRow} >
                  <Text style={styles.configCardText} > Guardar como: PDF </Text>
                  <Text style={styles.configCardText} > Guardar en: /Descargas </Text>
               </View>
               <View style={styles.configCardBodyRow} >
                  <Text style={styles.configCardText} > Idioma: Español </Text>
                  <Text style={styles.configCardText} > Tema: Claro </Text>
               </View>
            </View>
         </View>
      )
   }
}