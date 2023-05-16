import React from "react";
import PageOne from "./PageOne";
import { useUserDataContext } from "../../../../context/UserDataContext";





export default function PlatformOnboarding() {
    const { userData } = useUserDataContext();
    return(<>
        <PageOne name ={"Ethan"} />
    
    </>);
}