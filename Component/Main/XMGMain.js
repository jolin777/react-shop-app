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
    Image,
    Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine');
var More = require('../More/More');

var Main = React.createClass({
    getInitialState(){
        return{
            selectedTab:'home' // 默认选中的tabBar
        }
    },
    render() {
        return (
            <TabNavigator>
                {/*--首页--*/}
                {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine,3)}
                {/*--更多--*/}
                {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
            </TabNavigator>
        );
    },
    renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component,badgeText){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.iconStyle} />}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab })}
                selectedTitleStyle={styles.selectedTitleStyle} //tabBarItem选中的文字样式
                badgeText={badgeText}
            >
                <Navigator
                    initialRoute={{name: componentName, component:component}}
                    configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                    renderScene={(route, navigator) =>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />
                        }}
                />
            </TabNavigator.Item>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle: {
        width: 25,
        height:25
}
});

module.exports = Main;
