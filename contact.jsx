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
       
        
         this.state.items = getData, //declare the items to be listed
      this.statesearchTerm = null //initial search term will be null
      this.onChange = this.onChange.bind(this)
    }

    componentWillMount() {
        console.log("123")
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

    // search(query) {
    //     //console.log(query)
       
    //     var mythis = this
    //      mythis.setState({ name: query })


    //     /*var mydata = axios({
    //         method: 'POST',
    //         url: 'http://172.20.20.139:3000/api/lms/get_usrs',
    //         headers: { 'X-Requested-With': 'XMLHttpRequest' },
    //         responseType: 'application/json'
    //     })

    //     mydata.then(function (response) {
    //         console.log(response.data);
    //         mythis.setState({ myData: response.data })
    //     })

    //     mydata.catch(function (error) {
    //         console.log(error)
    //     })*/
        
    // }

    onChange(e){
    this.setState({
      searchTerm: e.target.value           //set the new serah term to the state
    })
  }
    render() {
        const items = this.state.items.map((item, index)=>{
        if(!this.state.searchTerm){ 

            return  <tr key={index}>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{index+ 1}</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{item.name}</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{item.email}</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{item.phone}</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{item.comment}</td>
                    </tr> 

        }                                                      
        const regEx = new RegExp(this.state.searchTerm, 'ig')  
        return (regEx.exec(item.name) || regEx.exec(item.phone)) && <tr key={index}>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{index+ 1}</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{item.name}</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{item.email}</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{item.phone}</td>
                        <td style={{borderRight : '1px solid black',padding:'5px'}}>{item.comment}</td>
                    </tr> 
        })
        return <div>
            <h1>Search Contacts </h1>
             <input type="text" onChange={this.onChange} placeholder='search'/>
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
                    {items}
                    
                  </tbody>
            </table>
        </div>;
    }
}

export default Contact;