import React, { Component } from "react";
import { View, Animated, SafeAreaView } from "react-native";

class CircleAnimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions1: new Animated.ValueXY({ x: 0, y: 0 }),
      positions2: new Animated.ValueXY({ x: 0, y: 1 }),
      positions3: new Animated.ValueXY({ x: 0, y: 2 }),
      positions4: new Animated.ValueXY({ x: 0, y: 3 }),
      positions5: new Animated.ValueXY({ x: 0, y: 4 }),
      positions6: new Animated.ValueXY({ x: 0, y: 5 }),
      positions7: new Animated.ValueXY({ x: 0, y: 6 }),
      positions8: new Animated.ValueXY({ x: 0, y: 7 }),
      positions9: new Animated.ValueXY({ x: 0, y: 8 }),
      positions10: new Animated.ValueXY({ x: 0, y: 9 }),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.positions1, {
          toValue: { x: 320, y: 0 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions2, {
          toValue: { x: 320, y: 1 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions3, {
          toValue: { x: 320, y: 2 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions4, {
          toValue: { x: 320, y: 3 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions5, {
          toValue: { x: 320, y: 4 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions6, {
          toValue: { x: 320, y: 5 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions7, {
          toValue: { x: 320, y: 6 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions8, {
          toValue: { x: 320, y: 7 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions9, {
          toValue: { x: 320, y: 8 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions10, {
          toValue: { x: 320, y: 9 },
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#333" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#F00",
              transform: [
                { translateX: this.state.positions1.x },
                { translateY: this.state.positions1.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#FE8502",
              transform: [
                { translateX: this.state.positions2.x },
                { translateY: this.state.positions2.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#FDFD00",
              transform: [
                { translateX: this.state.positions3.x },
                { translateY: this.state.positions3.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#5EB2B9",
              transform: [
                { translateX: this.state.positions4.x },
                { translateY: this.state.positions4.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#008929",
              transform: [
                { translateX: this.state.positions5.x },
                { translateY: this.state.positions5.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#0497BD",
              transform: [
                { translateX: this.state.positions6.x },
                { translateY: this.state.positions6.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#0052A7",
              transform: [
                { translateX: this.state.positions7.x },
                { translateY: this.state.positions7.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#012B95",
              transform: [
                { translateX: this.state.positions8.x },
                { translateY: this.state.positions8.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#98118C",
              transform: [
                { translateX: this.state.positions9.x },
                { translateY: this.state.positions9.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#DE066A",
              transform: [
                { translateX: this.state.positions10.x },
                { translateY: this.state.positions10.y },
              ],
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default CircleAnimation;
