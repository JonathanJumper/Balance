import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Header } from "react-native-elements"
import { connect } from 'react-redux'
import HeaderButton from "../Components/HeaderButton"
import Card from "./Card/Card"
import { Images } from "../Themes"

// Styles
import styles from './Styles/GuideScreenStyle'
import colors from '../Themes/Colors'

class GuideScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Header backgroundColor={"#fff"}
          leftComponent={<HeaderButton iconName="ios-open-outline" />}
          centerComponent={{ text: "Recomendaciones", style: { color: colors.primary } }}
          rightComponent={<HeaderButton iconName="ios-filing-outline" />}
        />
        <Card title="Tutorial de la aplicación" image={Images.guideTutorial} text="¿Dudas con la Navegación? ¿No sabes como registrar datos? Sigue este tutorial y aprende todo lo necesario" />
        <Card title="¿Que es la insulina?" text="Descubre que es esta hormona, cual es su función en el organismo, y como realizar un buen calculo de esta." image={Images.guideInsulin} />
        <Card title="Alimentos recomendados" text="Los alimentos de esta lista tienen un bajo índice glucémico y brindan nutrientes clave que carece la alimentación occidental" image={Images.guideFood} />
        <Card title="Tengo algunos sintomas" text="¿Sientes mareos, somnolencia, debilidad o temblores? Trata la hipoglucemia" image={Images.guideDizzy} />
        <Card title="Contacte un profesional" text="¿Tienes una emergencia? ¿Necesitas asistencia personalizada? Contacta un profesional especializado" image={Images.guideContact} />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(GuideScreen)
