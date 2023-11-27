import React from "react";
class TodoList extends React.Component {
    render(){
        const{children} = this.props
        return (
            <div>
                <ul>
                    {children}
                </ul>
            </div>
        )
    }
  
}

export {TodoList}