import React, { Component } from "react";
import { View, Animated, SafeAreaView } from "react-native";

class CircleAnimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positions1: new Animated.ValueXY({ x: 0, y: 0 }),
      positions2: new Animated.ValueXY({ x: 0, y: 10 }),
      positions3: new Animated.ValueXY({ x: 0, y: 20 }),
      positions4: new Animated.ValueXY({ x: 0, y: 0 }),
      positions5: new Animated.ValueXY({ x: 0, y: 10 }),
      positions6: new Animated.ValueXY({ x: 0, y: 20 }),
      positions7: new Animated.ValueXY({ x: 0, y: 60 }),
      positions8: new Animated.ValueXY({ x: 0, y: 70 }),
      positions9: new Animated.ValueXY({ x: 0, y: 80 }),
      positions10: new Animated.ValueXY({ x: 0, y: 60 }),
      positions11: new Animated.ValueXY({ x: 0, y: 70 }),
      positions12: new Animated.ValueXY({ x: 0, y: 80 }),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.positions1, {
          toValue: { x: 315, y: 0 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions1, {
          toValue: { x: 0, y: 0 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions2, {
          toValue: { x: 315, y: 10 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions2, {
          toValue: { x: 0, y: 10 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions3, {
          toValue: { x: 315, y: 20 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions3, {
          toValue: { x: 0, y: 20 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions4, {
          toValue: { x: -315, y: 0 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions4, {
          toValue: { x: 0, y: 0 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions5, {
          toValue: { x: -315, y: 10 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions5, {
          toValue: { x: 0, y: 10 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions6, {
          toValue: { x: -315, y: 20 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions6, {
          toValue: { x: 0, y: 20 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions7, {
          toValue: { x: 315, y: 60 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions7, {
          toValue: { x: 0, y: 60 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions8, {
          toValue: { x: 315, y: 70 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions8, {
          toValue: { x: 0, y: 70 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions9, {
          toValue: { x: 315, y: 80 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions9, {
          toValue: { x: 0, y: 80 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions10, {
          toValue: { x: -315, y: 60 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions10, {
          toValue: { x: 0, y: 60 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions11, {
          toValue: { x: -315, y: 70 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions11, {
          toValue: { x: 0, y: 70 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions12, {
          toValue: { x: -315, y: 80 },
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.positions12, {
          toValue: { x: 0, y: 80 },
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 50,
            left: 0,
          }}
        >
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#F00",
              transform: [
                { translateX: this.state.positions1.x },
                { translateY: this.state.positions1.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#FE8502",
              transform: [
                { translateX: this.state.positions2.x },
                { translateY: this.state.positions2.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#FDFD00",
              transform: [
                { translateX: this.state.positions3.x },
                { translateY: this.state.positions3.y },
              ],
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 50,
            right: 0,
          }}
        >
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#5EB2B9",
              transform: [
                { translateX: this.state.positions4.x },
                { translateY: this.state.positions4.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#008929",
              transform: [
                { translateX: this.state.positions5.x },
                { translateY: this.state.positions5.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#0497BD",
              transform: [
                { translateX: this.state.positions6.x },
                { translateY: this.state.positions6.y },
              ],
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 330,
            left: 0,
          }}
        >
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#0052A7",
              transform: [
                { translateX: this.state.positions7.x },
                { translateY: this.state.positions7.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#012B95",
              transform: [
                { translateX: this.state.positions8.x },
                { translateY: this.state.positions8.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#98118C",
              transform: [
                { translateX: this.state.positions9.x },
                { translateY: this.state.positions9.y },
              ],
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 330,
            right: 0,
          }}
        >
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#DE066A",
              transform: [
                { translateX: this.state.positions10.x },
                { translateY: this.state.positions10.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#000",
              transform: [
                { translateX: this.state.positions11.x },
                { translateY: this.state.positions11.y },
              ],
            }}
          />
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#667ABA",
              transform: [
                { translateX: this.state.positions12.x },
                { translateY: this.state.positions12.y },
              ],
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default CircleAnimation;
