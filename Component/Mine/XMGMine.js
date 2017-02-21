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
    ScrollView
} from 'react-native';

var MyCell = require('./CommonMyCell');
var MiddleView = require('./MineMiddleView');
var HeardView = require('./MineHeaderView');

var Mine = React.createClass({
    render() {
        return (
            <ScrollView>
                <HeardView/>
                <View>
                    <MyCell
                        leftIconName="collect"
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"
                    />
                    <MiddleView></MiddleView>
                    <MyCell
                        leftIconName="draft"
                        leftTitle="钱包"
                        rightTitle="账户余额:￥100.88"
                    />
                    <MyCell
                        leftIconName="like"
                        leftTitle="抵用券"
                        rightTitle="10张"
                    />
                    <MyCell
                        leftIconName="card"
                        leftTitle="积分商城"
                    />
                    <MyCell
                        leftIconName="new_friend"
                        leftTitle="今日推荐"
                    />
                </View>
            </ScrollView>
        );
    }
})

const styles = StyleSheet.create({

});

module.exports = Mine;

