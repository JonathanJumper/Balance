import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Header } from "react-native-elements"
import Icon from "react-native-vector-icons/Ionicons"

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CalculateScreenStyle'
import colors from "../Themes/Colors"

class CalculateScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return <ScrollView style={styles.container}>
        <Header backgroundColor={"#fff"}
          leftComponent={<Icon name="ios-arrow-back" type="ionicon" size={26} onPress={() => navigate("HomeScreen")} style={{ color: colors.primary }} />}
          centerComponent={{ text: "Calcular Toma", style: { color: colors.primary } }}
        />
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(CalculateScreen)
