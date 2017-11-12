
import React, { Component } from "react"
import { Dimensions, LayoutAnimation, StyleSheet, View } from "react-native"
import { Group, Path, Surface, Shape } from "react-native/Libraries/ART/ReactNativeART"
import colors from "../../Themes/Colors"
import Icon from "react-native-vector-icons/Ionicons"


export default class Line extends Component {
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
      minValue: 30, 
      // max sugar level - min value
      maxValue: Math.max(...props.values.sugarValues) - 30,
      stepX: 0,
      stepY: 0,
      execiseIconsXAxis: []
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
    stepX = width / (this.props.values.sugarValues.length - 1 || 1)
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
    const { strokeWidth } = this.props
    const { width, height, minValue, maxValue, stepX, stepY } = this.state

    let firstPoint: boolean = true
    // holds x and y coordinates of the previous point when iterating
    let previous: { x: number, y: number }
    // adjust values so that min value becomes 0 and goes to the bottom edge
    const adjustedValues = values.map(value => value - minValue)
    // start from the left bottom corner so we could fill the area with color
    let path = Path().moveTo(-strokeWidth, strokeWidth)
    
    let execiseIconsXAxis = []
    adjustedValues.forEach((number, index) => {
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
    })

    return (
      path
        // line to the right bottom corner so we could fill the area with color
        .lineTo(width + strokeWidth, strokeWidth)
        .close()
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
    const { height, stepX } = this.state

    let exerciseIconsXAxis = []
    let path = Path()
    values.forEach((flag, index) => {
      if (flag) {
        // straight line to the first point
        let xAxis = index * stepX
        path.moveTo(xAxis, -height).lineTo(xAxis, 0)
        exerciseIconsXAxis.push(xAxis)
      }
    })
    //this.setState(exerciseIconsXAxis)
    return (
      path.close()
    )
  }

  render() {
    const { values, fillColor, strokeColor, strokeWidth, axisColor } = this.props
    const { width, height, execiseIconsXAxis } = this.state
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Surface width={width} height={height}>
          <Group x={0} y={height}>
            <Shape
              d={this.buildGraphPath(values.sugarValues)}
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
              d={this.buildExerciseAxisPath(values.excerciseValues)}
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
