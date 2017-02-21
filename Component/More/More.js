/**
 * Created by Administrator on 2017/2/17/017.
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var CommonCell = require('./CommonCell');
var More = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop: 10}}>
                        <CommonCell title="扫一扫"/>
                    </View>
                </ScrollView>
                <View>
                    <CommonCell
                        title="省流量模式"
                        isSwitch={true}
                    />
                    <CommonCell
                        title="扫一扫"
                    />
                    <CommonCell
                        title="扫一扫"
                    />
                    <CommonCell
                        title="扫一扫"
                    />
                    <CommonCell
                        title="清空缓存"
                        rightTitle="1.99M"
                    />
                </View>
                <View style={{marginTop:10}}>
                    <CommonCell
                        title="省流量模式"
                        isSwitch={true}
                    />
                    <CommonCell
                        title="扫一扫"
                    />
                    <CommonCell
                        title="扫一扫"
                    />
                    <CommonCell
                        title="扫一扫"
                    />
                    <CommonCell
                        title="扫一扫"
                    />
                </View>
            </View>
        )
    },
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={{ color:'white', fontSize:16, fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity onPress={()=>{ alert('点击了')}} style={styles.rightViewStyle}>
                    <Image source={{ uri:'icon_mine_setting'}} style={styles.navImgStyle}></Image>
                </TouchableOpacity>
            </View>
        )
    },
});

const styles = StyleSheet.create({
    navOutViewStyle:{
        height:44,
        backgroundColor:'rgba(255,96,0,1)',
        // 主轴方向
        flexDirection:'row',
        // 侧轴对齐方式 垂直居中
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center',
    },
    // 导航栏右侧
    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        top:10
    },
    // 导航条上图片
    navImgStyle:{
        width: 24,
        height:24,
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

module.exports = More;