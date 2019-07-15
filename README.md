# reactTest
react study

1. 父子组件传值

    父组件

        this.state.list.map((item, index)=>{
            return (
                <XiaojiejieItem 
                    key={index+item} 
                    content={item} 
                    index={index} 
                    deleteItem={this.deleteItem.bind(this)} />
            )
        })

    子组件

        constructor (props){
            super(props)
            this.handleClick=this.handleClick.bind(this)
        }
        
        render() { 
            return (
                <li onClick={this.handleClick}>{this.props.content}</li>
            );
        }

        handleClick (){
            console.log(this.props.index);
            this.props.deleteItem(this.props.index)
        }

2. 单项数据流

    子组件无法直接修改传递的值，只能父组件传递方法，然后调用父组件传递的方法进行改变

3. PropTypes 

    校验传递值

        import PropTypes from 'prop-types';

        XiaojijieItem.propTypes = {
            avname: PropTypes.string.isRequired, // 必须传递
            content: PropTypes.string,
            index: PropTypes.number,
            deleteItem: PropTypes.func
        }

    设置默认值

        XiaojijieItem.defaultProps = {
            avname: "xxx"
        }

4. ref

    ref = {(input) => {this.input = input}}

    this.setState({
        inputValue: this.input.value
    })

    setState 代码执行是有一个时间的
    setState 回调函数
    this.setState({
        inputValue: this.input.value
    }, ()=>{
        callback();
    })

5. 生命周期

    a. initialization 初始化阶段

        constructor不算生命周期函数。
        虽然它和生命周期函数的性质一样，但不能认为是生命周期函数。
        定义属性（props）和状态(state)

    b. Mounting 挂载阶段

        componentWillMount : 在组件即将被挂载到页面的时刻执行。
        render : 页面state或props发生变化时执行。
        componentDidMount : 组件挂载完成时被执行。

        componentWillMount(){
            console.log('componentWillMount----组件将要挂载到页面的时刻')
        }
        componentDidMount(){
            console.log('componentDidMount----组件挂载完成的时刻执行')
        }
        render(){
            console.log('render---组件挂载中.......')
        }

        componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化就会执行，这个初学者一定要注意。

    c. Updation 更新阶段

        shouldComponentUpdate函数

            shouldComponentUpdate函数会在组件更新之前，自动被执行
            shouldComponentUpdate(){
                console.log('shouldComponentUpdate---组件发生改变前执行')
            }
            就是返回true，就同意组件更新;返回false,就反对组件更新

        componentWillUpdate函数

            componentWillUpdate在组件更新之前，但shouldComponenUpdate之后被执行。但是如果shouldComponentUpdate返回false，这个函数就不会被执行了。

            //shouldComponentUpdate返回true才会被执行。
            componentWillUpdate(){
                console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
            }

        componentDidUpdate

            componentDidUpdate在组件更新之后执行，它是组件更新的最后一个环节
            componentDidUpdate(){
                console.log('componentDidUpdate----组件更新之后执行')
            }

        步骤：
        
            1-shouldComponentUpdate---组件发生改变前执行
            2-componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行
            3-render----开始挂载渲染
            4-componentDidUpdate----组件更新之后执行

        componentWillReceiveProps 函数

            componentWillReceiveProps(){
                console.log('componentWillReceiveProps')
            }
            凡是组件都有生命周期函数，所以子组件也是有的，并且子组件接收了props，这时候函数就可以被执行了。
            子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行。
            也就是说这个组件第一次存在于Dom中，函数是不会被执行的;
            如果已经存在于Dom中，函数才会被执行。

    d. Unmounting 销毁阶段

        componentWillUnmount函数

        //当组件从页面中删除的时候执行
        componentWillUnmount(){
            console.log('child - componentWillUnmount')
        }

react-transition-group

    1. use

        npm install react-transition-group --save

        import { CSSTransition } from 'react-transition-group'

        <CSSTransition 
            in={this.state.isShow}   //用于判断是否出现的状态
            timeout={2000}           //动画持续时间
            classNames="boss-text"   //className值，防止重复
        >

    css

        xxx-enter: 进入（入场）前的CSS样式；
        xxx-enter-active:进入动画直到完成时之前的CSS样式;
        xxx-enter-done:进入完成时的CSS样式;
        xxx-exit:退出（出场）前的CSS样式;
        xxx-exit-active:退出动画知道完成时之前的的CSS样式。
        xxx-exit-done:退出完成时的CSS样式。

    3. unmountOnExit 属性

        比如我们给<CSSTransition>加上unmountOnExit,加上这个的意思是在元素退场时，自动把DOM也删除

多DOM动画制作和编写

    import {CSSTransition , TransitionGroup} from 'react-transition-group'

    <TransitionGroup>
    {
        this.state.list.map((item,index)=>{
            return (
                <CSSTransition
                    timeout={1000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index+item}  
                >
                    <XiaojiejieItem 
                    content={item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                    />
                </CSSTransition>
            )
        })
    }
    </TransitionGroup>