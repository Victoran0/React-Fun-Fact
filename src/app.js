import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/main";

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <MainContent />
        </div>
    )
}