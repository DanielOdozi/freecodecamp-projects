import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Quote from './Random-Quote-Machine/Quote';
import Markdown from './Markdown-Previewer/Markdown';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import 'animate.css/animate.min.css';
import Nopage from './Nopage';
import Drummachine from './Drum-Machine/Drummachine';
import Calculator from './JavaScript-Calculator/Calculator';
import Clock from './25+5_Clock/Clock';


function Pagetitle() {
    useEffect(() => {
      document.title = 'Projects';
    }, []);
}

function MainPage(){
    return(
        <div className="mainpage">
            <h1>Welcome to my Freecodecamp projects</h1>
            <p>Click on the link to view projects</p>
        </div>
    )
}
function PageLink(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={
                        <div>
                            <MainPage />
                            <Layout />
                        </div>
                        } />
                    <Route path="Quote" element={<Quote />} />
                    <Route path="Markdown" element={<Markdown />}/>
                    <Route path="Drummachine" element={<Drummachine />}/>
                    <Route path="Calculator" element={<Calculator />}/>
                    <Route path="Clock" element={<Clock />}/>
                    <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    )
}
ReactDOM.render(<Pagetitle />, document.getElementById("root"));
ReactDOM.render(
    <div>
        <PageLink />
    </div>, 
    document.getElementById("root")
);