import React from 'react'

class AddContact extends React.Component{
    state = {
        name:"",
        email:"",
    }
    add = (e)=>{
        e.preventDefault();
        if(this.state.name == "" || this.state.email == ""){
            alert("all the fields are mandatory");
        }
        this.props.addContactHandler(this.state);
        this.setState({name:" ",email:""});//to clear the field
        console.log(this.state);//to show the state
    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add} >
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder='name'value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="Email" placeholder='Email' value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}></input>
                    </div>
                    <button className="ui button orange">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;