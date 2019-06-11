import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojijieItem extends Component {

    constructor (props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    // 组件第一次存在于DOM中，函数不会被执行
    // 如果已经存在DOM中，函数才会执行
    componentWillReceiveProps (){
        console.log("child-componentWillReceiveProps")
    }

    componentWillUnmount (){
        console.log("destory-componentWillUnmount")
    }
    
    render() { 
        console.log('child-render')
        return (
            <li onClick={this.handleClick}>
            {this.props.avname} 为你服务-{this.props.content}
            </li>
        );
    }

    handleClick (){
        console.log(this.props.index);
        this.props.deleteItem(this.props.index)
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
       
    }
}

XiaojijieItem.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

XiaojijieItem.defaultProps = {
    avname: "初音未来"
}
 
export default XiaojijieItem;