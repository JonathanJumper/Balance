import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import MeasureRow from "./MeasureRow"
import ExerciseRow from "./ExerciseRow"
import MealRow from "./MealRow"

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/EventListStyle'

class EventList extends React.PureComponent {

  renderRow ({item}) {
    if(item.type == 1){
      return (
        <MeasureRow measure={item.sugarLevel} date={item.date} active={false} onPress={() => alert("Selected!")} />
      )
    }
    else if (item.type == 2) {
      return (
        <ExerciseRow intensity={item.intensity} duration={item.duration} date={item.date} onPress={() => alert("Selected!")} />
      )
    }
    else if (item.type == 3) {
      return (
        <MealRow carbohydrates={item.carbohydrates} date={item.date} onPress={() => alert("Selected!")} />
      )
    }
  }

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.props.events}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.values.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)
