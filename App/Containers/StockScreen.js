import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { Header } from "react-native-elements"
import { connect } from 'react-redux'
import HeaderButton from "../Components/HeaderButton"
import CardStock from "./Card/CardStock"
import { Images } from "../Themes"

import styles from './Styles/StockScreenStyle'
import colors from '../Themes/Colors'

class StockScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Header backgroundColor={"#fff"}
            centerComponent={{ text: "Inventario", style: { color: colors.primary } }}
            rightComponent={<HeaderButton iconName="ios-cart-outline" />}
          />
          <CardStock image={Images.guideInsulin} name="insulina" stock={42} />
          <CardStock image={Images.stockTirilla} name="tirillas" stock={18} />
          <CardStock image={Images.stockLanceta} name="lancetas" stock={21} />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockScreen)
