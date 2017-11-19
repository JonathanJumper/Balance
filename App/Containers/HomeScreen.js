import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from "react-native-elements"
import { connect } from 'react-redux'
import Chart from "./Statistic/Chart"
import EventList from "./Statistic/EventList"
import HeaderButton from "../Components/HeaderButton"


import ValuesActions from "../Redux/ValuesRedux"

// Styles
import styles from './Styles/HomeScreenStyle'
import colors from '../Themes/Colors'

class HomeScreen extends Component {

  goToAddEventScreen = () => {
    const { navigate } = this.props.navigation;
    this.props.addTheCalculatedInsuline(0)
    navigate('AddEventScreen')
  }

  render () {
    const { navigate } = this.props.navigation;
    return <View style={styles.container}>
        <Header backgroundColor={"#fff"}
          leftComponent={<HeaderButton iconName="ios-calculator-outline" onPress={() => navigate('CalculateScreen')} /> }
          centerComponent={{ text: "Estadisticas", style: { color: colors.primary } }}
          rightComponent={<HeaderButton iconName="ios-create-outline" onPress={() => this.goToAddEventScreen()} />}
        />
        <Chart/>
        <EventList />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
