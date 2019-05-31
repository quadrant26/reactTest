import React,{Component} from 'react'

/**
 * import React from 'react'
 * const Component = React.Component
 */

class App extends Component{
    render(){
        return (
            <ul className="My-list">
                <li>react.com</li>
                <li>I love React</li>
                <li>{true?"King":"Queen"}</li>
            </ul>
        )

        var child1 = React.createElement("li", null, "React.com");
        var child2 = React.createElement("li", null, "I love React");
        var root = React.createElement("ul", null, {className: "my-list"}, child1, child2 );
    }
}

export default App