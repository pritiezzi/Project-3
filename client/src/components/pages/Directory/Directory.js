import React from 'react';
import PanelPage from "./panelpage"
import Tablepage from "./Tablepage"
import Background from "./Background"
import "./Directory.css";
import Navtab2 from "./Navtab2"


class Directory extends React.Component {
    constructor(props) {
        super(props);
       
          }
    render() {
        return (
        
            <div className="bg">
                <Navtab2/>
                <Tablepage/>
                <PanelPage/>
            
                

            </div>
        );
    }
};

export default Directory;
