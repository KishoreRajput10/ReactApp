import React from 'react';

class App extends React.Component {
    render() {

        return (
            <div style={{ backgroundColor: "#b3d9ff", width: "100%" }}>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/#/home">ReactJS</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li ><a href="/#/home">Home</a></li>
                            <li ><a href="/#/about">About</a></li>
                            <li ><a href="/#/contact">Contact</a></li>
                            <li ><a href="/#/state">State</a></li>
                            <li><a href="/#/form">Form</a></li>
                        </ul>
                    </div>

                </nav>

                {this.props.children}

            </div >
        )
    }
}
export default App;