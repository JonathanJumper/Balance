import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.container,
    paddingBottom: 15
  },
  card: {
    height: 50,
    borderRadius: 5,
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    backgroundColor: Colors.primaryTransparent,
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
  },
  cardHeader: {
    flex: 22,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: Colors.cardHeader,
    padding: 5,
    alignItems: 'center',
  },
  cardTitle: {
    flex: 7,
    textAlign: 'center',
    color: Colors.cardTitle,
    fontSize: 12,
    fontWeight: '500'
  },
  cardBody: {
    flex: 78,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Colors.cardBody
  },  
  cardImage: {
    flex: 2,
    padding: 10,
    maxHeight: 25
  },
  cardText: {
    flex: 8,
    fontSize: 9,
    color: Colors.navigationInactive
  },
})
