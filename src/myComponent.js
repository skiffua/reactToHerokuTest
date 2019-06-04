import React, {Component} from 'react'


class Mycomp extends Component {
    // constructor (props){
    //     super()
    //     this.x=props.x
    // }

    state={
        test: 'somesing'
    }


onChange=(e)=>{
    this.setState ({
        test: e.target.value       
    })
    console.log(this.state.test)
}    
render(){
    console.log(this.props)
    return (
        // <p>{this.props.x} woooow!</p>
    <input type="text" defaultValue={this.state.test} onChange={this.onChange}>{this.x}</input>
    )
}
}
export default Mycomp
