import { Typography } from "@devlaunchers/components/components/atoms";
import LogoMonogram from '../../../../../images/logo-monogram.png'
import {m} from "framer-motion";
import { PageOneContainer } from "./StyledPageOne";

const bounceTransition = {
    y: {
        yoyo: Infinity,
    }
};

export default function PageOne({name}){
    return (<>
    <PageOneContainer>
        <Typography type="h2">
            Welcome {name}
        </Typography>
        <Typography type="p">
            We’re so glad you’re here. Let’s get started on your journey.
        </Typography>
        <m.img src={LogoMonogram} transition={bounceTransition} animate={{y: ["5%", "-5%"]}}/>
        <m.div animate={{ scale: 1.5 }} transition={{ damping: 5, repeat: Infinity, delay: 0.5, duration:1.4, repeatDelay: 0.2 }}/>
        </PageOneContainer>
    </>);
}