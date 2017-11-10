import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoundedButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import colors from '../Themes/Colors'
import Icon from "react-native-vector-icons/Ionicons"

export default class HeaderButton extends Component {
   static propTypes = {
      onPress: PropTypes.func,
      children: PropTypes.string,
      iconName: PropTypes.string,
      iconType: PropTypes.string,
      navigator: PropTypes.object
   }

   getText() {
      const buttonText = this.props.text || this.props.children || ''
      return buttonText.toUpperCase()
   }

   render() {
      return (
         <TouchableOpacity onPress={this.props.onPress} style={{paddingTop: 5, paddingHorizontal: 10}}>
            <Icon name={this.props.iconName} size={26} style={{ color: colors.primary }} />
         </TouchableOpacity>
      )
   }
}
