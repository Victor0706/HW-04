import * as React from "react";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Now from "./Now";

function App () {
    return (
        <>
            <Header />
            <br></br><br></br><br></br>
            <Main />
            <br></br><br></br><br></br>
            <hr></hr>
            <br></br><br></br><br></br>
            <Now />
            <br></br><br></br><br></br>
            <Footer />
        </>
    );
}


export default App;