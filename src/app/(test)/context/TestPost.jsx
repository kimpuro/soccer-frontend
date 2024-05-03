"use client";
import {useContext} from "react";
import {TabContext} from "@/app/(test)/context/TabProvider";

export default function TestPost() {
    const value = useContext(TabContext);
    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}