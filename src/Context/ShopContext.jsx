import React from "react";
import { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const shopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const contextValue = { all_product};

    return(
        <ShopContextProvider value = {contextValue}>
            {props.children}
        </ShopContextProvider>
    )

}

export default ShopContextProvider