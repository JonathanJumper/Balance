import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      flexGrow: 3,
      backgroundColor: Colors.transparent
    },
    container: {
      flex: 1,
      flexGrow: 1,
      backgroundColor: Colors.silver
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.smallMargin,
      color: Colors.darkText,
      marginTop: Metrics.baseMargin,
      marginHorizontal: Metrics.section,
      textAlign: 'left'
    },
    textInput: {
      height: 48,
      marginHorizontal: Metrics.section,
      marginTop: Metrics.baseMargin,
      borderRadius: 5,
      paddingHorizontal: Metrics.marginHorizontal,
      backgroundColor: "#5a5aff22"
    },
    datePickerContainer: {
      height: 48,
      width: 270,
      marginHorizontal: Metrics.section,
      marginTop: Metrics.baseMargin,
      borderRadius: 5,
      paddingHorizontal: Metrics.marginHorizontal,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#5a5aff22"
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
