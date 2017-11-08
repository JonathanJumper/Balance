import React, { Component } from 'react'
import { ScrollView, View, Image, Text, KeyboardAvoidingView, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from "../Components/RoundedButton"
import { Images } from "../Themes"
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return <KeyboardAvoidingView style={styles.mainContainer}>
        <View style={styles.header}>
          <Image source={Images.balance} resizeMode="stretch" />
        </View>
        <View style={styles.body}>
          <TextInput placeholder="Email" keyboardType="email-address" autoCapitalize="none" underlineColorAndroid="transparent" autoCorrect={false} style={styles.textInput} />
          <TextInput placeholder="Password" secureTextEntry underlineColorAndroid="transparent" style={styles.textInput} />
          <RoundedButton onPress={() => navigate("HomeScreen")}>Iniciar Sesión</RoundedButton>
          <RoundedButton>Crear Usario</RoundedButton>
        </View>
      </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
