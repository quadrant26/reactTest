import React, {Component, Fragment} from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'

class Xiaojiejie extends Component{
    // 构造函数初始化
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }
    
    componentDidMount (){
        axios.get('https://www.easy-mock.com/mock/5cff5255ae06cd5f4fc7e053/reactdemo01/xiaojiejie')
        .then((res)=>{
            console.log('axios 获取数据成功:'+JSON.stringify(res))
            this.setState({
                list: res.data.data
            })
        })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    
    render(){
        // console.log("3-render")
        return (
            <Fragment>
                {/* jsx 注释 多行
                    为元素添加class 类名变为 => className

                    dangerouslySetInnerHTML = {{__: item}} // 插入html 代码
                    for =>
                 */}
                <div>
                    <label htmlFor="jspang">增加服务</label>
                    <input 
                        id='jspang' 
                        className="input" 
                        type="text" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref = {(input) => {this.input = input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul) => {this.ul=ul}}>
                    {
                        this.state.list.map((item, index)=>{
                            return (
                                <XiaojiejieItem 
                                    key={index+item} 
                                    content={item} 
                                    index={index} 
                                    deleteItem={this.deleteItem.bind(this)} />
                            )
                        })
                    }
                </ul>
                <Boss></Boss>
            </Fragment>
        )
    }

    /**
     * Each child in a list should have a unique "key" prop.
     ** return <li key={index}>{item}</li>
     */

    inputChange (e){
        // console.log(e.target.value)
        /**
         * Error
         * 1. this 指向错误 需要给事件绑定 this
         ** onChange={this.inputChange.bind(this)}
         * 2. React中改变值需要使用this.setState方法
         ** this.setState({ inputValue: e.target.value })
         */
        // this.state.inputValue = e.target.value

        // this.setState({
        //     inputValue: e.target.value
        // })

        // ref
        this.setState({
            inputValue: this.input.value
        })
    }

    // 增加列表
    addList (){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, ()=>{
            // ref 数量
            // console.log( this.ul.querySelectorAll("li").length );
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