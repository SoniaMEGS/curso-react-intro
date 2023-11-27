import React from "react";
class TodoItem extends React.Component {
    render(){
        const {text, completed} = this.props;
        return (
            <React.Fragment>
            <li>
                <span>v</span>
                <p>{text}</p>
                <span>x</span>
            </li>
            </React.Fragment>
        )
    }
}
export {TodoItem}