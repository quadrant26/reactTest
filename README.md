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

    