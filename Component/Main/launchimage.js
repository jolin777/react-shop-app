/**
 * Created by Administrator on 2017/2/15/015.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Main = require('./XMGMain');

var Launch = React.createClass({
    render() {
        return (
            <Image source={{uri:'launchimage'}} style={styles.launchingStyle}/>
        );
    },
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigator.replace({
                component: Main
            });
        },0)
    }

})

const styles = StyleSheet.create({
    launchingStyle:{
        flex:1
    }
});

module.exports = Launch;
