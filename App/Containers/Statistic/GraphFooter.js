import React, { Component } from "react"
import { Dimensions, LayoutAnimation, StyleSheet, View } from "react-native"
import { Group, Path, Surface, Shape } from "react-native/Libraries/ART/ReactNativeART"
import { connect } from 'react-redux'

import colors from "../../Themes/Colors"
import Icon from "react-native-vector-icons/Ionicons"

class GraphFooter extends Component {

   constructor(props) {
      super(props);
      this.state = {
         width: Dimensions.get("window").width,
         height: 0,
         stepX: 0
      };
   }

   // Handle container view's onLayout event to get its width and height after rendered and
   // update the state so the component can render the chart using actual width and height
   onLayout = (event: Object) => {
      // pull out width and height out of event.nativeEvent.layout
      const { nativeEvent: { layout: { width, height } } } = event
      // step between each value point on horizontal (x) axis
      stepX = width / (this.props.events.length - 1 || 1)
         // update the state
         this.setState({
            width,
            height,
            stepX
         })
   }

   render() {
      const { events } = this.props
      const { stepX } = this.state
      return (
         <View style={{ maxHeight: 20, flex: 1, backgroundColor: colors.primary }} onLayout={this.onLayout}>
            {events.map((event, index) => {
               const leftOffset = index * stepX - 4
               if (event.type == 2) {
                  return <Icon name={"md-walk"} size={16} style={{ position: 'absolute', top: 4, left: leftOffset, backgroundColor: colors.primary, color: "#fff" }} />
               }
               else if (event.type == 3) {
                  return <Icon name={"ios-nutrition"} size={16} style={{ position: 'absolute', top: 4, left: leftOffset, backgroundColor: colors.primary, color: "#fff" }} />
               }
            }
            )}
            
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // align at the bottom of the container so when animated it rises to the top
      justifyContent: "flex-end"
   }
})

const mapStateToProps = (state) => {
   return {
      events: state.values.events
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphFooter)