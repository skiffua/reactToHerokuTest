import React from 'react'

class Car extends React.Component {
    // constructor(props){
    //     super()
    //     this.props=props
    // }
    state={
        names: ['mers','bmw', 'volvo']

    }

    render() {
    return (
        <div>
                <h1>this is car component with </h1>
                <h2>my car is {this.state.names[1]}</h2>  
                
        </div>    
    )
    }
}

export default Car