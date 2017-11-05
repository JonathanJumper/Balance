import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from "react-native-elements"
import { connect } from 'react-redux'
import List from "./Statistic/List"
import Chart from "./Statistic/Chart"

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import colors from '../Themes/Colors'

class HomeScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return <View style={styles.homeContainer}>
        <Header  
          backgroundColor={colors.primary}
          leftComponent={{ icon: "ios-finger-print", type: "ionicon", color: '#fff' }}
          centerComponent={{ text: 'Estadisticas', style: { color: '#fff' } }}
          rightComponent={{ icon: "calculator", type: "font-awesome", color: '#fff' }}
        />
        <Chart />
        <List />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
