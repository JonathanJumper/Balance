import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { Header } from "react-native-elements"
import { connect } from 'react-redux'
import RoundedButton from "../Components/RoundedButton"
import HeaderButton from "../Components/HeaderButton"

// Styles
import styles from './Styles/SettingsScreenStyle'
import colors from '../Themes/Colors'

class SettingsScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Header backgroundColor={"#fff"}
            leftComponent={<HeaderButton iconName="ios-more-outline" />}
            centerComponent={{ text: "Preferencias", style: { color: colors.primary } }} 
            rightComponent={<HeaderButton iconName="ios-log-out" onPress={() => navigate("LoginScreen")} />}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
