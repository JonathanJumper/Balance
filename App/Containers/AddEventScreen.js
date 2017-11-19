import React, { Component } from 'react'
import { ScrollView, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Header } from "react-native-elements"
import HeaderButton from "../Components/HeaderButton"
import RoundedButton from "../Components/RoundedButton"
import ValuesActions, { addSugarLevel } from "../Redux/ValuesRedux"
import DatePicker from 'react-native-datepicker'
import AddMeasure from './AddEvent/AddMeasure'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddEventScreenStyle'
import colors from "../Themes/Colors"

class AddEventScreen extends Component {

  constructor(props) {
    super(props);

    if (props.calculatedInsuline){
      // event of type 1 : new measure
      typeOfEvent = 1;
    }
    else {
      // unknown type of event
      typeOfEvent = 0
    }

    this.state = { 
      typeOfEvent: typeOfEvent
    }
  }

  render () {
    const { navigate } = this.props.navigation
    if (typeOfEvent == 1 || typeOfEvent == 2){
      body = <AddMeasure navigation={navigate} />
    }
    else {
      body = <KeyboardAvoidingView></KeyboardAvoidingView>
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
