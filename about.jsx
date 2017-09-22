import React from 'react';
import {Accordion,Panel} from 'react-bootstrap'


class About extends React.Component {

    render() {
        return (
            <div>
                <h1>About...</h1>
                <Accordion>
                    
    <Panel header="What you should know about React.js" eventKey="1" style= {{fontSize: "25px", color : "#1a75ff"}}>
      <p>To start I want to say to not think about the technology and old paradigms, leave what you know about developing UI's outside. Focus on the ideas implemented in the library. 
Slides from my talk at Chicago HTML5 meetup to complement are at the end of the post.</p>

    </Panel>
    <Panel header="What's React.js" eventKey="2" style= {{fontSize: "25px", color : "#1a75ff"}}>
      <p>React.js is a component-based library created to build modular and fast UIs. React manages the DOM updates applying a concept called Virtual DOM, therefore you don't need to think about DOM manipulations anymore managing all the states in your UI with jQuey. 
The React library includes a lightweight implementation of the DOM and events System with W3C Standards.</p>

    </Panel>
    <Panel header="What's the Virtual DOM and how does it work?" eventKey="3" style= {{fontSize: "25px", color : "#1a75ff"}}>
    <p>The Virtual DOM is just a lightweight Javascript Object as a representation of your component. 
React uses the virtual DOM (component representation) to diff whenever a change occurs to your component which it's going to compare your old/previous representation with your updated/new representation and isolate just the parts that changed compared with your previous Virtual DOM. 
When React needs to actually render the representation in the DOM it's going to iterate through the components, recursively generate a string with the markup, and put in the document. After doing that, it's going to attach the events at the top level as even delegation... so you have event delegation by default.</p>

    </Panel>
    <Panel header="What's JSX? " eventKey="4" style= {{fontSize: "25px", color : "#1a75ff"}}>
    <p>JSX is an xml-like syntax to write html markup in your React component..which is familiar for all front end developers and adventurers. 
JSX doesn't care about your component; the only job JSX has is to compile your markup code into native Javascript and will accept custom attributes when using data-. You also need to write attributes in javascript notation className instead of class, onClick and so on. 
You will need curly braces {} to interpret your javascript inside JSX.</p>

    </Panel>
    <Panel header="React's lifecycle" eventKey="5" style= {{fontSize: "25px", color : "#1a75ff"}}>
    <p>Mounting/Unmounting

The methods below are part of the mounting cycle...

getInitialState() // called before component is mounted, stateful components should implement this with initial state.
getDefaultProps() // called when the component is mounted, set default props to your component before any instance is intialized
componentWillMount() // called before mounting occurs
render()
Those methods occurs every time before you see your App in the browser.

And these are part of Unmounting cycle...

componentDidMount() // at this point React has a representation of your component
componentWillUnmount() // At this point the component has been added to the document
Update

The methods part of the updating lifecycle are:

componentWillReceiveProps(nextProps) // called when a component is receiving new props, you can setState here and render won't be called
shouldComponentUpdate(nextProps, nextState) // return false when you know the component wont receive any update, called before render method
componentWillUpdate(nextProps, nextState) // called before update occurs
render()
and after DOM mutations

componentDidUpdate(); // called after updates occurs
Props vs State
Parent components pass data through props to their children and the children can't change the data received from the parents. 
You can think of props as options, configuration (immutable). States are mutable where when used in your component you need a default state. Try to keep your components states for less complexity over time. 

Check out the slides to have a better understanding.</p>
    </Panel>
  </Accordion>
                


            </div>
        )
    }
}
export default About;