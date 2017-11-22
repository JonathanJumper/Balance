import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Header } from "react-native-elements"
import HeaderButton from "../Components/HeaderButton"
import RoundedButton from "../Components/RoundedButton"
import ValuesActions from "../Redux/ValuesRedux"

// Styles
import styles from './Styles/CalculateScreenStyle'
import colors from "../Themes/Colors"

class CalculateScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calculatedInsuline: 7,
    }
  }

  addCalculatedInsuline = () => {
    const { navigate } = this.props.navigation
    if (!this.state.calculatedInsuline) {
      alert("Ingrese alimentos para calcular la cantidad de insulina")
    }
    else {
      this.props.addTheCalculatedInsuline(this.state.calculatedInsuline)
      navigate('AddEventScreen')
    }
  }

  render () {
    const { navigate } = this.props.navigation
    return <ScrollView style={styles.container}>

        <Header backgroundColor={"#fff"}
          leftComponent={<HeaderButton iconName="ios-arrow-back" onPress={() => navigate('HomeScreen')} />}
          centerComponent={{ text: "Calcular Toma", style: { color: colors.primary } }}
          rightComponent={<HeaderButton iconName="ios-swap" onPress={() => navigate('HomeScreen')} />}
        />

        <RoundedButton
          onPress={() => { this.addCalculatedInsuline() }}
        >
          Registrar Insulina calculada
        </RoundedButton>

      </ScrollView>
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTheCalculatedInsuline: (calculatedInsuline) => { 
      dispatch(ValuesActions.addCalculatedInsuline(calculatedInsuline))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculateScreen)
