import React, { Component } from 'react';
import { Animated, FlatList, TouchableOpacity, View } from 'react-native';
import MenuBarListItem from './MenuBarListItem';


export default class MenuBar extends Component {

  state = {
    bottomSheetIn: new Animated.Value(0),
    fadeAnim: new Animated.Value(0),
  }

  componentWillMount() {
    Animated.timing(this.state.fadeAnim,{
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.bottomSheetIn,{
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  close = () => {
    Animated.timing(this.state.fadeAnim,{
      toValue: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.bottomSheetIn,{
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      this.props.close();
    }, 100);
  }

  _keyExtractor = (item, index) => item.icon

  options = () => ([
    { icon: "", name: "Edit" },
    { icon: "", name: "Delete" },
    { icon: "", name: "Unpin" },
    { icon: "", name: "Info" },
    // { icon: "", name: "Mute" }
  ]);

  _renderItem = ({item}) => (
    <MenuBarListItem
      icon={item.icon}
      name={item.name}
    />
  );

  render() {
    return (
      <Animated.View
        style={{
          backgroundColor:'rgba(0,0,0,.4)', flex: 1, position: 'absolute', top: 25,  right: 0,
          opacity: this.state.fadeAnim,
        }}>
        {/* <TouchableOpacity
          onPress={this.close}
          style={{ flex: 1 }} /> */}
        <Animated.View
          style={{
            height: 192,
            transform: [
              {
                translateY: this.state.bottomSheetIn.interpolate({
                  inputRange: [0, 1],
                  outputRange: [500, 1],
                })
              }
            ]
          }}>
          <FlatList
            data={this.options()}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </Animated.View>
      </Animated.View>
    );
  }

}
