import React, {Component, Fragment} from 'react'
import ReactDom from 'react-dom'
import './style.css'

class Xiaojiejie extends Component{
    // 构造函数初始化
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }

    render(){
        return (
            <Fragment>
                {/* jsx 注释 多行
                    为元素添加class 类名变为 => className

                    dangerouslySetInnerHTML = {{__: item}} // 插入html 代码
                    for =>
                 */}
                <div>
                    <label htmlFor="jspang">增加服务</label>
                    <input id='jspang' className="input" type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index)=>{
                            return (
                                <li 
                                    key={index}
                                    onClick={this.deleteItem.bind(this, index)}
                                    dangerouslySetInnerHTML={{__html: item}}>
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    /**
     * Each child in a list should have a unique "key" prop.
     ** return <li key={index}>{item}</li>
     */

    inputChange (e){
        console.log(e.target.value)
        /**
         * Error
         * 1. this 指向错误 需要给事件绑定 this
         ** onChange={this.inputChange.bind(this)}
         * 2. React中改变值需要使用this.setState方法
         ** this.setState({ inputValue: e.target.value })
         */
        // this.state.inputValue = e.target.value

        this.setState({
            inputValue: e.target.value
        })
    }

    // 增加列表
    addList (){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    // 删除列表
    deleteItem(index){
        // 1.
        let list = this.state.list;
        list.splice(index, 1)
        // 2. react 不推荐使用
        // this.state.list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie