import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#fff"
  },
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
     backgroundColor: '#ffffff',
     marginBottom: 30
  }
})
