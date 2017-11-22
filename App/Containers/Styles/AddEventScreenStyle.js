import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  eventCard: {
    height: 70,
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    backgroundColor: Colors.cardBody,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  eventCardImage: {
    flex: 2,
    padding: 10,
    marginLeft: 10,
    fontSize: 18,
    color: Colors.primary
  },
  eventCardText: {
    flex: 6,
    fontSize: 12,
    color: Colors.primary
  },
})
