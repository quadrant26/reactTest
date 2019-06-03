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
