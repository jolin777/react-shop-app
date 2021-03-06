/**
 * Created by wangmin on 2017/2/17/017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

var HeaderView = React.createClass({
    render(){
        return (<View style={styles.container}>
            {this.renderTopView()}
            {this.renderBottomView()}
        </View>);
    },

    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{ uri:'see' }} style={styles.leftIconStyle}></Image>
                <View style={styles.conterViewStyle}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight:'bold' }}>众望电商</Text>
                    <Image source={{uri:'avatar_vip'}} style={{width:17, height:17}}/>
                </View>
                <Image source={{uri:'icon_cell_rightArrow'}} style={{ width: 8, height: 13, marginRight: 8}}></Image>
            </View>
        )
    },
    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    },

    renderBottomItem(){
        var items = [];
        var dataArr = [{ 'number':'100','title':'购物券'},{'number':'12','title':'评价'},{'number':50,'title':'收藏'}];
       for(let i=0; i< dataArr.length; i++){
           var data = dataArr[i];
           items.push(
               <TouchableOpacity key={i} onPress={()=>{alert(i)}}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{ color:'#fff'}}>{data.number}</Text>
                        <Text style={{ color:'#fff'}}>{data.title}</Text>
                    </View>
               </TouchableOpacity>
           )
       }
       return items;
    },
})

const styles = StyleSheet.create({
    container: {
        height:200,
        backgroundColor:'rgb(255,96,0)'
    },
    topViewStyle:{
        flexDirection:'row',
        marginTop:80,
        alignItems:'center',
        justifyContent:'space-around'
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
    },
    conterViewStyle:{
        flexDirection:'row',
        width:screenW * 0.6,
    },
    bottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
    },
    bottomInnerViewStyle:{
        width:(screenW/3)+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        borderRightWidth:1,
        borderRightColor:'white'
    }
});

// 输出
module.exports = HeaderView;