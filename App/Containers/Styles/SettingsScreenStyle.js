import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.container,
    paddingBottom: 15
  },
  profileCard: {
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    backgroundColor: Colors.cardBody,
    borderRadius: 5,
    flex: 5,
    flexDirection: 'column',
  },
  configCard: {
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    backgroundColor: Colors.cardBody,
    borderRadius: 5,
    flex: 3,
    flexDirection: 'column'
  },
  configCardHeader: {
    flex: 12,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: Colors.cardHeader,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  configCardTitle: {
    flex: 9,
    textAlign: 'center',
    color: Colors.cardTitle,
    fontSize: 12,
    fontWeight: '500'
  },
  configCardTitleIcon: {
    flex: 1,
    fontSize: 12,
    color: '#fff'
  },
  configCardBody: {
    flex: 88,
    flexDirection: 'column',
    padding: 8
  },
  configCardBodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3
  },
  configCardText: {
    color: '#668',
    fontSize: 12
  },
  configCardTextMargin: {
    color: '#668',
    fontSize: 12,
    marginTop: 3
  },
  aboutCard: {
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    backgroundColor: Colors.cardBody,
    borderRadius: 5,
    padding: 6,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  aboutCardInfo: {
    fontSize: 10,
    color: Colors.primary,
    textAlign: 'center'
  },
  aboutCardInfoIcon: {
    fontSize: 12,
    color: Colors.primary
  }
})
