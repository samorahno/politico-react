import React,{ Component } from 'react';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'daniel'
        };
    }
    
    render(){
        const { children, gender } = this.props;
        const { name } = this.state;
        return (
            <div>
                <p style={{color: 'white', fontSize: '15px'}}>{children}</p>
                <h1> {gender} </h1>
                <i>My name is {name}</i>
            </div>
        );
    }
}
// const Login = ({ gender, children }) => {
//     return (
//         <div>
//             <p style={{color: 'white', fontSize: '15px'}}>{children}</p>
//             <h1> {gender} </h1>
//         </div>
//     );
// }
export default Login;