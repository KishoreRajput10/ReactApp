import React from 'react';
//import Request from 'superagent';
import axios from 'axios'
import data12 from './rawdata.json';
import _ from 'underscore'
import {Pagination, Table} from 'react-bootstrap';

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


    //     var mydata = axios({
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
    //     })
        
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
                        <td>{index+ 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.comment}</td>
                    </tr> 
 
        }                                                      
        const regEx = new RegExp(this.state.searchTerm, 'ig')  
        return (regEx.exec(item.name) || regEx.exec(item.phone)) && <tr key={index}>
                        <td>{index+ 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.comment}</td>
                    </tr> 
        })
        return <div>
            <div className="col-md-8 col-md-offset-2">
            <h1 >Search Contacts </h1>
             <input type="text" className="search-query form-control" onChange={this.onChange} placeholder="Search" />
            </div>
            <div className="col-md-10 col-md-offset-3" >
                <div style={{ margin: "20px"}}>
            < table className="user-table " >
                <thead>
                    <tr> 
                        <td>Sl No.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Comment</td>
                    </tr>
                </thead>
                <tbody style={{backgroundColor : '#ffccff'}}>
                    {items}
                    
                  </tbody>
            </table>
            </div>
            </div>
            
        </div>;
    }
}

export default Contact;