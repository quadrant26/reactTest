import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojijieItem extends Component {

    constructor (props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    
    render() { 
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