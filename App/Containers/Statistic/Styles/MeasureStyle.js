import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 15,
    width: (width - 20) // take half of the screen width minus margin
  },
  active: {
    backgroundColor: "rgba(255,255,255,0.05)" // highlight selected coin
  },
  row: {
    flexDirection: "row"
  },
  right: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "flex-end"
  },
  text: {
    color: "#fff",
    fontFamily: "Avenir",
    fontSize: 16,
    fontWeight: "500"
  },
  date: {
    color: "#ccc",
    fontSize: 12,
    fontWeight: "300"
  }
})
