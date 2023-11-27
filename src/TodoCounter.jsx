import React from "react";
class TodoCounter extends React.Component {
    render(){
      const{total, completed} = this.props;
      console.log(total, completed)
      return (
        <div>
          <h1>Haz completado {completed} de {total} TODO</h1>
        </div>
      )
    }
  
}

export {TodoCounter}