import React from "react";

export default function Environment() {
    return <div style={{
        width:"100%",
        height:"50vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <u>{process.env.NEXT_PUBLIC_NAME}</u>
    </div>;
}