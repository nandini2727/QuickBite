import React from "react"
import UserContext from "../utils/UserContext"
class UserClass extends React.Component{
    constructor (props){
        super(props);
        this.state={
            count:0,
            count2:2,
        }
    }
    render(){
        const {name}=this.props;
        const {count}=this.state;
        return(
            <div className="user-card">
                <h2>Count:{count}</h2>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1,})
                }}>Increase</button>
                <h2>Name:{name}</h2>
                <h3>Location: Ajmer</h3>
                <h4>Contact:abc@gmail.com</h4>
                <p>Loggedin Info</p>
                <UserContext.Consumer>
                    {({loggedInUser})=><p className="text-lg">{loggedInUser}</p>}
                </UserContext.Consumer>
            </div>
        );
    }
}
export default UserClass;