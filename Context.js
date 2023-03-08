// Environment
import React, {createContext, useState} from "react";

// CSS


// Components

// Creating ShopContext empty Object to inject into the return(), this is the Empty Context
export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {









    // this is how we export and import functions to other components with ContextAPI
    const contextValue = {  };






    return(
        // You pass down contextValue object that has other functions injected into it
        // You pass it down as a value attribute so you can deconstruct it in other components
        // this is how we package and transfer functions from components
        <ShopContext.Provider value={contextValue} >
        {props.children}
        </ShopContext.Provider>
    )
};
export default ShopContextProvider