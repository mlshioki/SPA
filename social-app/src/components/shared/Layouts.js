import React from "react";
import NavBar from "./Navbar";
import SEO from "../SEO";

export default function Layout({children, title}){
    return (
        <>
        <SEO title={title}/>
        <header>
            <NavBar />
        </header>
        <main className="text-center" style={{'marginTop' : '90px'}}>
            {children}
        </main>
        </>
    );
}