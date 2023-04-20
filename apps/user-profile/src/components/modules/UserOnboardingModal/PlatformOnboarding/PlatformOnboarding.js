import { useEffect } from "react";
import Stepper from "../../../../components/common/Stepper";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";


export default function PlatformOnboarding() {

    const stepperConfig = [
        {
            component: <Page1 />, 
                config: {
                    buttons: {
                        next: {
                            label: "Next",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ") },
                        },
                        back: {
                            label: "Back",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ")},
                        }
                    }
                },
        },
        {
            component: <Page2 />, 
                config: {
                    buttons: {
                        next: {
                            label: "Next",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ") },
                        },
                        back: {
                            label: "Back",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ")},
                        }
                    }
                },
        },
        {
            component: <Page3 />, 
                config: {
                    buttons: {
                        next: {
                            label: "Next",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ") },
                        },
                        back: {
                            label: "Back",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ")},
                        }
                    }
                },
        },
        {
            component: <Page4 />, 
                config: {
                    buttons: {
                        next: {
                            label: "Next",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ") },
                        },
                        back: {
                            label: "Back",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ")},
                        }
                    }
                },
        },
        {
            component: <Page5 />, 
                config: {
                    buttons: {
                        next: {
                            label: "Next",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ") },
                        },
                        back: {
                            label: "Back",
                            useDefaultOnClick: true,
                            onClick: () => { console.log("..some function ")},
                        }
                    }
                },
        }
    ]

    // useEffect(()=>{console.log(stepperConfig, "PLATFORM")});
    return(<> <Stepper steps={stepperConfig} /> </>);
}