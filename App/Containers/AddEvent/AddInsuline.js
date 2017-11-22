import React, { Component } from 'react'
import { ScrollView, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Header } from "react-native-elements"
import HeaderButton from "../../Components/HeaderButton"
import RoundedButton from "../../Components/RoundedButton"
import ValuesActions, { addSugarLevel } from "../../Redux/ValuesRedux"
import DatePicker from 'react-native-datepicker'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './../Styles/AddEventScreenStyle'
import colors from "../../Themes/Colors"

class AddMeasure extends Component {

   constructor(props) {
      super(props);
      this.state = {
         sugarLevel: 0,
         date: this.getDatetime()
      };
   }

   getDatetime() {
      let moment = require('moment');
      moment.locale('de');
      let date = Date.now();
      let formattedDate = moment(date).format('LLL');
      return formattedDate
   }

   render() {
      const { navigate } = this.props.navigation
      let message = (this.props.typeOfEvent == 5) ? "Tu nivel recomendado de insulina a aplicar es de " + this.props.calculatedInsuline + ". Desea registrar un valor aplicado de: " : "No se realizo el calculo de carbohidratos. Desea registrar un valor de insulina aplicada de: "
      return (
         <KeyboardAvoidingView style={styles.container}>

            <Text style={styles.sectionText}>
               {message}
            </Text>

            <TextInput style={styles.textInput}
               placeholder={String(this.props.calculatedInsuline)}
               onChangeText={(sugarLevel) => this.setState({ sugarLevel })}
               keyboardType='numeric'
            />

            <DatePicker
               style={styles.datePickerContainer}
               customStyles={{ dateInput: { borderWidth: 0 } }}
               date={this.state.date}
               mode="datetime"
               format="MMMM Do YYYY, h:mm:ss a"
               confirmBtnText="Confirmar"
               cancelBtnText="Cancelar"
               showIcon={false}
               onDateChange={(date) => { this.setState({ date: date }) }}
            />

            <RoundedButton
               onPress={() => navigate('HomeScreen')}>
               Registrar Aplicación
            </RoundedButton>

         </KeyboardAvoidingView>
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
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeasure)
