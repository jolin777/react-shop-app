/**
 * Created by wangmin on 2017/2/17/017.
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
    Image,
    TouchableOpacity,
    Switch
} from 'react-native';

var CommonCell = React.createClass({
    getDefaultProps(){
      return{
          title:"",
          isSwitch:false,
          rightTitle:'',
      }
    },

    getInitialState(){
        return{
           isOn:false,
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{ alert('点击了')}}>
                <View style={styles.container}>
                    <Text>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },
    renderRightView(){
        if(this.props.isSwitch){
            return(<Switch value={this.state.isOn == true} onValueChange={()=>this.setState({isOn:!this.state.isOn})}/>)
        }else {
            return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {this.renderRightTitle()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8, height: 13}}/>
                </View>
            )
        }
    },
    renderRightTitle(){
        if(this.props.rightTitle.length>0){
            return(
                <Text style={{ color:'gray', marginRight: 10}}>{ this.props.rightTitle }</Text>
            )
        }
    }
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 41,
        borderBottomColor:'#ddd',
        borderBottomWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        // 垂直居中
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
    },
});

module.exports = CommonCell;
