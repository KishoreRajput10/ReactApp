import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div className="col-md-8">
                        <img src="./images.png" alt="image not found" width="100%" />
                    </div>

                    <div className="col-md-4">
                        <p style={{border:"5px solid black", fontSize: "28px",margin : "0",padding:"10px" }} >React is front end library developed by Facebook. It's used for handling view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and it has strong foundation and large community behind it.</p>
                       
                        <p style={{ border:"5px solid black"}}>
                        <p style={{ fontSize: "30px", color: "#1a75ff" }}> Kishore Singh Rajput</p>
                        <p style={{ fontSize: "25px", color: "#1a75ff" }}> Software Developer
                    <p>Mobile Programming LLC</p>
                        </p>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;