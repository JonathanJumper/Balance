import React, { Component } from 'react'
import { ScrollView, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Header, Card } from "react-native-elements"
import HeaderButton from "../Components/HeaderButton"
import RoundedButton from "../Components/RoundedButton"
import ValuesActions, { addSugarLevel } from "../Redux/ValuesRedux"
import DatePicker from 'react-native-datepicker'
import AddMeasure from './AddEvent/AddMeasure'
import AddInsuline from './AddEvent/AddInsuline'
import CardEvent from './Card/CardEvent'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddEventScreenStyle'
import colors from "../Themes/Colors"

class AddEventScreen extends Component {

  constructor(props) {
    super(props);

    if (props.calculatedInsuline){
      typeOfEvent = 5
    }
    else {
      typeOfEvent = 0
    }

    this.state = { 
      typeOfEvent: typeOfEvent
    }
  }

  render () {
    const { navigate } = this.props.navigation
    if (this.state.typeOfEvent == 1) {
      body = <AddMeasure calculatedInsuline={this.props.calculatedInsuline} navigation={this.props.navigation} />
    }
    else if ( this.state.typeOfEvent == 4 || this.state.typeOfEvent == 5 ){
      body = <AddInsuline typeOfEvent={this.state.typeOfEvent} navigation={this.props.navigation} />
    }
    else {
      body = <KeyboardAvoidingView>
        <TouchableOpacity onPress={() => this.setState({ typeOfEvent: 1 }) }>
          <CardEvent title="Agregar Medición" name="ios-water" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ typeOfEvent: 4 })}>
          <CardEvent title="Agregar Aplicación" name="ios-thermometer-outline"/>
        </TouchableOpacity>
        <TouchableOpacity>
          <CardEvent title="Agregar Alimentación" name="ios-nutrition" />
        </TouchableOpacity>
        <TouchableOpacity>
          <CardEvent title="Agregar Ejercicio" name="md-walk" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    }
    return (
      <ScrollView style={styles.container}>
    
        <Header backgroundColor={"#fff"}
          leftComponent={<HeaderButton iconName="ios-arrow-back" onPress={() => navigate('HomeScreen')} />}
          centerComponent={{ text: "Registrar Evento", style: { color: colors.primary } }}
        />

        {body}

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    calculatedInsuline: state.values.calculatedInsuline
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTheSugarLevel: (sugarLevel) => { dispatch(ValuesActions.addSugarLevel(sugarLevel)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEventScreen)
