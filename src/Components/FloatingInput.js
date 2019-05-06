import React, { Component, useRef, forwardRef, useImperativeHandle } from 'react';
import { View, Animated, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

function FloatingInput ({value, title, style, onChangeText, ...other}, ref) {

    const positionRef = useRef(new Animated.Value(value ? 1 : 0));

    const [isFieldActive , setFieldActive] = useState(false)
    const _handleFocus =() => {
        if (!isFieldActive) {
            setFieldActive(true)

            Animated.timing(positionRef.current, {
              toValue: 1,
              duration: 150,
            }).start();
          }
    }

    const _handleBlur=() => {
        if (isFieldActive && !value) {
            setFieldActive(false)            
            Animated.timing(positionRef.current, {
                toValue: 0,
                duration: 150,
            }).start();
        }
    }

    const inputRef = useRef()
    useImperativeHandle(ref, ()=>({
      focus:()=> {
        inputRef.current.focus()
      }
    }))

  _returnAnimatedTitleStyles = () => {
    return {
      top: positionRef.current.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? 11.5 : 15,
      color: isFieldActive ? '#888888' : '#aaaaaa',
    }
  }

    return(
        <View style = {[Styles.container, style]}>
        <Animated.Text
            style = {[Styles.titleStyles, _returnAnimatedTitleStyles()]}
        >
            {title}
      </Animated.Text>

        <TextInput
            value = {value}
            ref={inputRef}
            style = {Styles.textInput}
            underlineColorAndroid = 'black'
            onFocus = {_handleFocus}
            onBlur = {_handleBlur}
            onChangeText = {onChangeText}
            {...other}
      /></View>

    )
}

FloatingInput =  forwardRef(FloatingInput)
export default FloatingInput



const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    marginVertical: 4,
  },
  textInput: {
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Avenir-Medium',
    color: 'black',
  },

  titleStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 3,
    left: 4,
  }
})