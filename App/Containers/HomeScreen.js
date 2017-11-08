import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from "react-native-elements"
import { connect } from 'react-redux'
import List from "./Statistic/List"
import Chart from "./Statistic/Chart"
import Icon from "react-native-vector-icons/Ionicons"

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import colors from '../Themes/Colors'

class HomeScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return <View style={styles.homeContainer}>
        <Header backgroundColor={"#fff"}
          leftComponent={<Icon name="ios-calculator-outline" type="ionicon" size={26} onPress={() => navigate('CalculateScreen')} style={{ color: colors.primary }} />}
          centerComponent={{ text: "Estadisticas", style: { color: colors.primary } }}
          rightComponent={<Icon name="ios-thermometer-outline" type="ionicon" size={26} onPress={() => navigate('MeasureScreen')} style={{ color: colors.primary }} />}
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
