import React, {Component, Fragment} from 'react'
import ReactDom from 'react-dom'

class Xiaojiejie extends Component{

    render(){
        return (
            <Fragment>
                <div>
                    <input type="text" /><button>增加服务</button>
                </div>
                <ul>
                    <li>头部按摩</li>
                    <li>精油推背</li>
                </ul>
            </Fragment>
        )
    }
}

export default Xiaojiejie