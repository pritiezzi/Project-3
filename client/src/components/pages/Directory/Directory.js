import React from 'react';
import PanelPage from "./panelpage"
// import Tablepage from "./Tablepage"
import Tablepage from "./Tablepage";



class Directory extends React.Component {
    constructor(props) {
        super(props);
        // state = {
    
        // }
    }

    render() {
        return (
            <div>
                <Tablepage/>

                <PanelPage/>
            </div>
        );
    }
};

export default Directory;
