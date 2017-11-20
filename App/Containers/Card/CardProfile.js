import React, { Component } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import styles from "../Styles/SettingsScreenStyle"

export default class CardProfile extends Component {

   render() {
      return (
         <View style={styles.profileCard}>
            <View style={styles.configCardHeader}>
               <Text style={styles.configCardTitle}> Perfil de usuario </Text>
               <Icon style={styles.configCardTitleIcon} name="ios-contact" />
            </View>
            <View style={styles.configCardBody}>
               <Text style={styles.configCardText} > Nombre: Luisa Silva Prieto </Text>
               <Text style={styles.configCardTextMargin} > Numero: 319 250 6178 </Text>
               <View style={styles.configCardBodyRow} >
                  <Text style={styles.configCardText} > Edad: 22 </Text>
                  <Text style={styles.configCardText} > Estatura: 162 cm </Text>
               </View>
               <View style={styles.configCardBodyRow} >
                  <Text style={styles.configCardText} > Peso: 65 kg </Text>
                  <Text style={styles.configCardText} > Genero: Femenino </Text>
               </View>
               <View style={styles.configCardBodyRow} >
                  <Text style={styles.configCardText} > EPS: Sanitas </Text>
                  <Text style={styles.configCardText} > RH: A+ </Text>
               </View>
               <Text style={styles.configCardTextMargin} > Medico: Mario Carvajal Hoyos </Text>
            </View>
         </View>
      )
   }
}