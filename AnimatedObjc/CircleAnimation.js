import React, { Component } from "react";
import { View, Animated, Text } from "react-native";

class CircleAnimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions: [
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
        new Animated.ValueXY({ x: 0, y: 0 }),
      ],
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.positions[0], {
          toValue: { x: 200, y: 10 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[1], {
          toValue: { x: 200, y: 20 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[2], {
          toValue: { x: 200, y: 30 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[3], {
          toValue: { x: 200, y: 40 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[4], {
          toValue: { x: 200, y: 50 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[5], {
          toValue: { x: 200, y: 60 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[6], {
          toValue: { x: 200, y: 70 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[7], {
          toValue: { x: 200, y: 80 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[8], {
          toValue: { x: 200, y: 90 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[9], {
          toValue: { x: 200, y: 100 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[10], {
          toValue: { x: 200, y: 110 },
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions[11], {
          toValue: { x: 200, y: 120 },
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }

  render() {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "red",
            transform: [
              { translateX: this.state.positions[0].x },
              { translateY: this.state.positions[0].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "green",
            transform: [
              { translateX: this.state.positions[1].x },
              { translateY: this.state.positions[1].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "blue",
            transform: [
              { translateX: this.state.positions[2].x },
              { translateY: this.state.positions[2].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "red",
            transform: [
              { translateX: this.state.positions[3].x },
              { translateY: this.state.positions[3].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "green",
            transform: [
              { translateX: this.state.positions[4].x },
              { translateY: this.state.positions[4].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "blue",
            transform: [
              { translateX: this.state.positions[5].x },
              { translateY: this.state.positions[5].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "red",
            transform: [
              { translateX: this.state.positions[6].x },
              { translateY: this.state.positions[6].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "green",
            transform: [
              { translateX: this.state.positions[7].x },
              { translateY: this.state.positions[7].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "blue",
            transform: [
              { translateX: this.state.positions[8].x },
              { translateY: this.state.positions[8].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "red",
            transform: [
              { translateX: this.state.positions[9].x },
              { translateY: this.state.positions[9].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "green",
            transform: [
              { translateX: this.state.positions[10].x },
              { translateY: this.state.positions[10].y },
            ],
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "blue",
            transform: [
              { translateX: this.state.positions[11].x },
              { translateY: this.state.positions[11].y },
            ],
          }}
        />
      </View>
    );
  }
}

export default CircleAnimation;
