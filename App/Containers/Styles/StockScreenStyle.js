import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  stockCard: {
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
  stockCardImage: {
    flex: 2,
    padding: 10,
    maxHeight: 35
  },
  stockCardText: {
    flex: 6,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.navigationInactive
  },
  stockCardButton: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary
  },
})
