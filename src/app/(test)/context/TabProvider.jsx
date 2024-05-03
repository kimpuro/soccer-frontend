"use client";
import {createContext} from "react";

export const TabContext = createContext(2);

export default function TabProvider({ children }) {

    return(
    <TabContext.Provider value={7}>
        {children}
    </TabContext.Provider>
    )
}