import React from 'react';
//import Request from 'superagent';
import axios from 'axios'
import data12 from './rawdata.json';
import _ from 'underscore'

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.myData = '',
        this.name = '';
        var getData = JSON.parse(localStorage.getItem(('myData')))

        console.log("data")
        console.log(data12)
        this.state.data1 = getData;

    }

    componentWillMount() {
        console.log("123")
        //call the first time the component is loaded right before the component is added to the page
        //this.search();
        // for(var i=0; i<data12.length;i++){
        //     console.log('kishore')
        // }
        // console.log(data12.lenght)
    }
    componentDidMount() {
        console.log("321")
        
        // called after the component has been rendered into the page
    }

    componentWillReceiveProps(nextProps) {
        // called when the pros provided to the component are changed
    }
    componentWillUpdate(nextProps, nextState) {
        //called when the props and/or state changed
    }
    componentWillUnmount() {
        // called when the component is removed
    }

    updateSearch() {
        var myQuery = this.refs.query.value;

        
        var getData = JSON.parse(localStorage.getItem(('myData')));

        // var regex = new RegExp("^(.*)"+(myQuery)+"(.*$)","ig");
        

         var regex = new RegExp("^(.*)" + (myQuery) + "(.*$)","ig");

        var query = {name : myQuery};


       console.log(query)

        var result = _.findWhere(getData, query);

        console.log(result)

        var arr = [];
        arr.push(result)

        this.setState({ data1 : arr})
       

        //this.search(this.refs.query.value);

    }

    search(query) {
        //console.log(query)
       
        var mythis = this
         mythis.setState({ name: query })


        /*var mydata = axios({
            method: 'POST',
            url: 'http://172.20.20.139:3000/api/lms/get_usrs',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            responseType: 'application/json'
        })

        mydata.then(function (response) {
            console.log(response.data);
            mythis.setState({ myData: response.data })
        })

        mydata.catch(function (error) {
            console.log(error)
        })*/
        
    }
    clearBox(){
        this.refs.query.value = '';
        this.setState({ name: this.refs.query.value })
    }
    render() {
        return <div>
            <h1>Search Contacts </h1>
            <input ref="query" onChange={(e) => { this.updateSearch();}} type="text" />
            {/*<button onClick={this.clearBox.bind(this)}>Clear</button>*/}
            <br/>
            <br/>
            <table style={{border:'1px solid black'}}>
                <thead style={{backgroundColor : '#3399ff'}}>
                    <tr style={{padding:'5px'}}> 
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>Sl No.</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>Name</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>Email</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>Phone</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>Comment</td>
                    </tr>
                </thead>
                <tbody style={{backgroundColor : '#ffccff'}}>

                     {this.state.data1.map((data, index) =>
                       
                              <tr key={index}>
                                    <td style={{borderRight : '1px solid black',padding:'5px'}}>{index+ 1}</td>
                                    <td style={{borderRight : '1px solid black',padding:'5px'}}>{data.name}</td>
                                    <td style={{borderRight : '1px solid black',padding:'5px'}}>{data.email}</td>
                                    <td style={{borderRight : '1px solid black',padding:'5px'}}>{data.phone}</td>
                                    <td style={{borderRight : '1px solid black',padding:'5px'}}>{data.comment}</td>
                                </tr>
                    )}
                  
                </tbody>
            </table>
           
            {<ChildName name= {this.state.name} clearBox2 = {this.clearBox.bind(this)}/>}
            
        </div>;
    }
}


class ChildName extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       return(
            <div>
                 <button onClick={this.props.clearBox2}>Clear</button>
                {this.props.name}
            </div>
       )
    }
}
export default Contact;