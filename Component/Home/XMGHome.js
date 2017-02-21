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
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
var HomeDetail = require("./HomeDetail");
var TopView = require("./HomeTopView");
var HomeMiddleView = require('./HomeMiddleView');
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <TopView />
                </ScrollView>
                <HomeMiddleView/>
            </View>
        );
    },

    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                <TouchableOpacity onPress={()=>{this.pushToDetail()}} >
                    <Text style={styles.leftTitleStyle}>长沙</Text>
                </TouchableOpacity>
                <TextInput placeholder="输入商家,品类,商圈" underlineColorAndroid='transparent' style={styles.topInputStyle} />
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}} >
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}} >
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    pushToDetail(){
        this.props.navigator.push({
            component: HomeDetail,
            title:'首页详情页'
        });
    }
})

const styles = StyleSheet.create({
    navBarStyle:{
        height: 44,
        backgroundColor:'rgba(255,96,0,1)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
    },
    leftTitleStyle:{
        color:'white',
    },
    // 导航栏输入框
    topInputStyle:{
        width:width * 0.71,
        height:  30,
        backgroundColor:'white',
        // 圆角
        borderRadius:14,
        padding:0,
        paddingLeft:10,
    },
    // 导航条右侧视图
    rightNavViewStyle:{
        flexDirection:'row',
        height:64,
        // 侧轴对齐方式
        alignItems:'center',
        // backgroundColor:'blue',
    },
    // 导航栏右侧图片
    navRightImgStyle:{
        width:  24,
        height:  24,
    },
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

module.exports = Home;