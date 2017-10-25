import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  header: {
     flex: 0.25,
     backgroundColor: Colors.primary,
     justifyContent: 'flex-end',
     alignItems: 'center',
     paddingBottom: 20
  },
  body: {
     flex: 0.75,
     justifyContent: 'flex-end',
     backgroundColor: '#ffffff'
  },
  scrollContainer: {
    flex: 1
  },
  textInput: {
    height: 50,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    borderRadius: 5,
    paddingHorizontal: Metrics.marginHorizontal,
    backgroundColor: "#5a5aff22"
  }
})
