import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Header } from "react-native-elements"
import HeaderButton from "../Components/HeaderButton"

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MeasureScreenStyle'
import colors from "../Themes/Colors"

class MeasureScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return <ScrollView style={styles.container}>
        <Header backgroundColor={"#fff"}
          leftComponent={<HeaderButton iconName="ios-arrow-back" onPress={() => navigate('HomeScreen')} />}
          centerComponent={{ text: "Nueva Toma", style: { color: colors.primary } }}
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

export default connect(mapStateToProps, mapDispatchToProps)(MeasureScreen)
