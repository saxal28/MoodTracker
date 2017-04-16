import React from 'react';
import { Tab } from 'native-base';

const StyledTab = ({heading, children}) => {
    return (
        <Tab 
            heading={heading}
            tabStyle={{backgroundColor:"#333"}} 
            textStyle={{color:"white"}} 
            activeTabStyle={{backgroundColor:"#333"}}
        >
            {children}
        </Tab>
    )
}

export { StyledTab };