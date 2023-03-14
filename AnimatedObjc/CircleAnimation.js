import React, { Component } from "react";
import { View, Animated } from "react-native";

class CircleAnimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.position, {
          toValue: 200,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.position, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Animated.View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "red",
            transform: [
              { translateX: this.state.position },
              { translateY: this.state.position },
            ],
          }}
        />
      </View>
    );
  }
}

export default CircleAnimation;
