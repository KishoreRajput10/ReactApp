import React from 'react';
import List from './list.jsx'

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            term:'',
            items:[],
        }
        // this.myHandler = this.myHandler.bind(this);
    }
    myHandler() {
        var item = 'MY item'
        var myHandl = this.state.data
        myHandl.push(item)
        this.setState({ data: myHandl })
    };
    onChange(event){
          this.setState({term: event.target.value});
    }
    onSubmit(event){
        event.preventDefault()
        this.setState({
        term:'',
        items:[...this.state.items, this.state.term]
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.myHandler.bind(this)} >Start Handle</button>
                <h4>Handle : {this.state.data}</h4>
                <br/>
                <br/>
                <form className="App" onSubmit= {this.onSubmit.bind(this)}>
                <input value={this.state.term} onChange={this.onChange.bind(this)}/>
                <button>Add </button>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }
}
export default State;