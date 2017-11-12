import React, { Component } from 'react'
import { ScrollView, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Header } from "react-native-elements"
import HeaderButton from "../Components/HeaderButton"
import RoundedButton from "../Components/RoundedButton"
import ValuesActions, { addSugarLevel } from "../Redux/ValuesRedux"

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MeasureScreenStyle'
import colors from "../Themes/Colors"

class MeasureScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      sugarLevel: -1, 
      datetime: "200-02" 
    };
  }

  static defaultProps = {
    calculatedInsuline: -1
  }

  addSugarLevel = () => {
    this.props.addTheSugarLevel({sugarLevel: this.state.sugarLevel, datetime: this.state.datetime })
  }

  render () {
    const { navigate } = this.props.navigation
    return <ScrollView style={styles.container}>
    
        <Header backgroundColor={"#fff"}
          leftComponent={<HeaderButton iconName="ios-arrow-back" onPress={() => navigate('HomeScreen')} />}
          centerComponent={{ text: "Registrar Evento", style: { color: colors.primary } }}
        />

        <Text style={{ padding: 10, fontSize: 14 }}>
          Tu nivel recomendado de insulina a aplicar es de {this.props.calculatedInsuline}. Registrar un valor de: 
        </Text>

        <TextInput style={{ height: 40 }}
        placeholder={ String(this.props.calculatedInsuline) }
          onChangeText={ (sugarLevel) => this.setState({ sugarLevel }) }
        />
       
      <RoundedButton 
        onPress={this.addSugarLevel} style={{ backgroundColor: '#10f1f0' }}>
        Registrar Medicion
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
    addTheSugarLevel: (sugarLevel) => { dispatch(ValuesActions.addSugarLevel(sugarLevel)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasureScreen)
