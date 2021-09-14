import React from 'react'
import '../css/Signin.css'
import bodyphoto from '../images/signupphoto.jpeg'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      phonenumber:'',
      email: '',
      password: ''
    }
  };

  render() {
    return (
      <>
       <div><h2 style={{ textAlign: "center", marginTop:"-30px"}}>Signup</h2></div>
            <div className="Signup card border-dark mb-3 col-md-12 col-sm-4 col-sx-12">
                <form className="col-md-8 col-sm-4 col-sx-12">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="name" placeholder="Enter name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Phone number</label>
                        <input type="tel" placeholder="Enter Phone Number" value={this.state.phonenumber} onChange={(e) => this.setState({phonenumber: e.target.value})} className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" placeholder="Enter Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">New Password</label>
                        <input type="password" placeholder="Enter Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}  className="form-control" id="exampleInputPassword1" required />
                    </div>
                    
                    <button type="submit" onClick={() => this.props.signup(this.state.name, this.state.phonenumber, this.state.email, this.state.password)} className="btn btn-primary">Signup</button>
                </form>
            </div>

      </>
    )
  }
}

export default LoginForm
