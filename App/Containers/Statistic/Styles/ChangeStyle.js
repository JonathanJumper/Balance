import { StyleSheet } from "react-native"
import { Colors } from "../../../Themes"

export default StyleSheet.create({
   badge: {
      borderRadius: 20,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 5,
      paddingRight: 5,
      minHeight: 16,
      backgroundColor: Colors.chartSugarAxis
   },
   value: {
      color: "#FFFFFF",
      fontFamily: "Avenir",
      fontSize: 11,
      marginTop: 0,
      paddingHorizontal: 3
   },
   icon: {
      fontSize: 18,
      lineHeight: 16,
      marginRight: 2,
      color: "#FFFFFF",
      backgroundColor: "transparent",
      textAlign: "center"
   }
})
