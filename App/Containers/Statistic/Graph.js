import React, { Component } from "react"
import { Dimensions, LayoutAnimation, StyleSheet, View } from "react-native"
import { Group, Path, Surface, Shape } from "react-native/Libraries/ART/ReactNativeART"
import { connect } from 'react-redux'

import colors from "../../Themes/Colors"
import Icon from "react-native-vector-icons/Ionicons"

class Graph extends Component {
  props: {
    values: Array<number>,
    fillColor: string,
    strokeColor: string,
    axisColor: string,
    strokeWidth: number
  }

  static defaultProps = {
    fillColor: "#fff", // solid violet color
    strokeColor: "#ccc", // semi-transparent violet
    axisColor: colors.chartAxis, // semi-transparent violet
    fillColor: colors.chartFill,
    strokeColor: colors.chartStroke,
    strokeWidth: 1,
    bottomAxis: 70,
    topAxis: 150
  }

  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get("window").width, 
      height: 0,
      minValue: 40,
      maxValue: Math.max(...props.sugarValues),
      stepX: 0,
      stepY: 0
    };
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext({
      duration: 700,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    })
  }

  // Handle container view's onLayout event to get its width and height after rendered and
  // update the state so the component can render the chart using actual width and height
  onLayout = (event: Object) => {
    // pull out width and height out of event.nativeEvent.layout
    const { nativeEvent: { layout: { width, height } } } = event
    // step between each value point on horizontal (x) axis
    stepX = width / (this.props.events.length - 1 || 1)
    // step between each value point on vertical (y) axis
    stepY = this.state.maxValue ? (height - this.props.strokeWidth * 2) / this.state.maxValue : 0,
    // update the state
    this.setState({
      width,
      height,
      stepX,
      stepY
    })
  }

  buildGraphPath = (values: Array<number>): Path => {
    const { events, sugarValues, strokeWidth } = this.props
    const { width, height, minValue, maxValue, stepX, stepY } = this.state
    
    let firstPoint: boolean = true
    // holds x and y coordinates of the previous point when iterating
    let previous: { x: number, y: number }
    // adjust values so that min value becomes 0 and goes to the bottom edge
    const adjustedValues = sugarValues.map(value => value - minValue)

    // start from the left bottom corner so we could fill the area with color
    let path = Path().moveTo(-strokeWidth, strokeWidth)
    
    let sugarIndex = 0
    excerciseStepOffset = 1

    events.forEach((event, index) => {
      // check type and build graph
      // 1 == insulin application
      // 2 == excercise value
      if (event.type == 1){

        let number = adjustedValues[sugarIndex]
        sugarIndex += 1;

        let x = index * stepX,
          y = -number * stepY - strokeWidth
        if (firstPoint) {
          // straight line to the first point
          path.lineTo(-strokeWidth, y)
        } else {
          // make curved line
          path.curveTo(previous.x + stepX / 3, previous.y, x - stepX / 3, y, x, y)
        }
        // save current x and y coordinates for the next point
        previous = { x, y }
        firstPoint = false
      }
      // TODO make excercise value to more accurate graph
    })
    return (
      path
        // line to the right bottom corner so we could fill the area with color
        .lineTo(width + strokeWidth, strokeWidth).close()
    )
  }

  buildAxisPath = (): Path => {
    const { topAxis, bottomAxis, strokeWidth } = this.props
    const { width, minValue, stepY } = this.state
    return (
      Path().moveTo(0, -(topAxis - minValue) * stepY - strokeWidth).lineTo(width, -(topAxis - minValue) * stepY - strokeWidth)
        .moveTo(0, -(bottomAxis - minValue) * stepY - strokeWidth).lineTo(width, -(bottomAxis - minValue) * stepY - strokeWidth).close()
    )
  }


  buildExerciseAxisPath = (values: Array<boolean>): Path => {
    const { events, strokeWidth } = this.props
    const { height, stepX } = this.state

    let path = Path()
    events.forEach((event, index) => {
      if (event.type == 2) {
        let xAxis = index * stepX
        path.moveTo(xAxis, -height).lineTo(xAxis, 0)
      }
    })
    return (
      path.close()
    )
  }

  render() {
    const { sugarValues, fillColor, strokeColor, strokeWidth, axisColor } = this.props
    const { width, height } = this.state
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Surface width={width} height={height}>
          <Group x={0} y={height}>
            <Shape
              d={this.buildGraphPath(sugarValues)}
              fill={colors.chartFill}
              stroke={colors.chartStroke}
              strokeWidth={0}
            /> 
            <Shape
              d={this.buildAxisPath()}
              stroke={colors.chartSugarAxis}
              strokeWidth={1}
              strokeDash= {[5, 10]}
            />
            <Shape
              d={this.buildExerciseAxisPath()}
              stroke={colors.chartExcerciseAxis}
              strokeWidth={1}
              strokeDash={[5, 10]}
            />
          </Group>
        </Surface>
        
        <Icon name={"ios-walk"} size={16} style={{ backgroundColor: colors.primary, color: "#fff" }} />
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
    events: state.values.events,
    sugarValues: state.values.events.filter(event => event.type == 1).map(x => x.sugarLevel),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph)