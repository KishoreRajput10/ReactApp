import React, { Component } from 'react';


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            number: '',
            comment: '',
            nameError: false,
            emailError: false,
            numberError: false,
            nameErrorMsg: '',
            emailErrorMsg: '',
            numberErrorMsg: '',
            formErr: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {


        // console.log(event.target)
        const name = event.target.name;
        const value = event.target.value;

        if (name == 'name') {
            this.state.nameErrorMsg = value ? (value.length < 5 ? 'Name is too short.' : null) : 'Name is required.'
            this.setState({ nameError: this.state.nameErrorMsg ? true : false })
            this.setState({ nameErrorMsg: this.state.nameErrorMsg })
        } else if (name == 'email') {
            let emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
            var emailValid = value.match(emailRegex);
            this.state.emailErrorMsg = value ? (!emailValid ? 'Invalid email address.' : null) : 'Email is required.'
            this.setState({ emailError: this.state.emailErrorMsg ? true : false })
            this.setState({ emailErrorMsg: this.state.emailErrorMsg })
        } else if (name == 'number') {
            let numberRegex = "^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$";
            var numberValid = value.match(numberRegex);
            var numberRequired = 'Moblie Number is required.';
            var numberTooLong = 'Moblie Number is too long.';
            var numberTooShort = 'Moblie Number is too Short.';
            var numberInvalid = 'Mobile Number is Invalid.';

            this.state.numberErrorMsg = value ? (numberValid ? (value.length < 10 ? numberTooShort : (value.length > 10 ? numberTooLong : null)) : numberInvalid) : numberRequired;
            this.setState({ numberError: this.state.numberErrorMsg ? true : false })
            this.setState({ numberErrorMsg: this.state.numberErrorMsg })
        }

        this.setState({ [name]: value })

    }
    handleSubmit(event) {
        // localStorage.clear();

        var getData = JSON.parse(localStorage.getItem(('myData')))

        if (!getData) {
            getData = [];
        }
        console.log(getData)


        getData.push({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.number,
            comment: this.state.comment

        })

        localStorage.setItem('myData', JSON.stringify(getData))

        console.log('The Value Was Submitted' + ' ' + this.state.name + ' ' + this.state.email + ' ' + this.state.comment + ' ' + this.state.number);
        event.preventDefault();
    }
    render() {

        const {name,email,number,comment} = this.state;
        const isEnabled = (!name == '' && this.state.nameError == false) && (!email == '' && this.state.emailError == false) && (!number == '' && this.state.numberError == false) && (!comment == '') ;
        return (
            <div className="">
                <h2>My React form</h2>
                <div className="col-md-8 col-md-offset-2" style={{
                    backgroundColor:'wheat',
                    paddingTop:'10px', borderRadius:'5px', border:'1px solid #d1dfdf'}}>
                   <center><h2><b>User Reviews</b></h2></center>
                    <div className="form-group col-md-12" >
                        <label ><span className="glyphicon glyphicon-user"></span> Name:</label><br />
                        <input type="text" className="form-control" name="name" ref="kk" value={this.state.value} placeholder="Enter Name" onChange={this.handleChange} />
                        {this.state.nameError ? <span ref="nameError" style={{
                            color: "red", fontSize: "13px",
                            fontStyle: "italic"
                        }}>{this.state.nameErrorMsg}</span> : ''}
                    </div>
                    <div className="form-group col-md-12" >
                        <label ><span className="glyphicon glyphicon-envelope"></span> Email:</label><br />
                        <input type="email" className="form-control" name="email" ref="ll" value={this.state.value} placeholder="Enter email" onChange={this.handleChange} />
                        {this.state.emailError ? <span ref="emailError"
                            style={{ color: "red", fontSize: "13px", fontStyle: "italic" }}>{this.state.emailErrorMsg}</span> : ''}
                    </div>
                    <div className="form-group col-md-12" >
                        <label ><span className="glyphicon glyphicon-phone"></span> Number:</label><br />
                        <input type="text" className="form-control" name="number" ref="mm" value={this.state.value} placeholder="Mobile Number" onChange={this.handleChange} />
                        {this.state.numberError ? <span ref="numberError"
                            style={{ color: "red", fontSize: "13px", fontStyle: "italic" }}>{this.state.numberErrorMsg}</span> : ''}
                    </div>
                    <div className="form-group col-md-12" >
                        <label ><span className="glyphicon glyphicon-comment"></span> Comment:</label><br />
                        <textarea className="form-control" ref="nn" name="comment" value={this.state.value} placeholder="Enter Comment" onChange={this.handleChange} style={{ maxWidth: '100%' }} ></textarea>
                    </div>

                    <div className="form-group col-md-12" >
                        <input type="submit" className="btn btn-success pull-right" disabled={!isEnabled} onClick={this.handleSubmit} />
                    </div>
                </div>
            </div>

        )
    }

}

export default Form;