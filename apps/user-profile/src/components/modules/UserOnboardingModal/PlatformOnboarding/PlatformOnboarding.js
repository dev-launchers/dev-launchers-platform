import { useEffect } from "react";
import Stepper from "../../../../components/common/Stepper";


export default function PlatformOnboarding() {

    const stepperConfig = [
        {
            component: <p>Step 1</p>, 
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
    // return(<> <Stepper steps={stepperConfig} /> </>);
    return(<> <Stepper /> </>);
}