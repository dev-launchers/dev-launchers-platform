import { Typography } from "@devlaunchers/components/components/atoms";
import "/Users/rinabo/developments/dev-launchers-platform/apps/user-profile/src/images/logo-monogram.png" 
import LogoMonogram from '../../../../../images/logo-monogram.png'
import { motion } from "framer-motion";
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
        <motion.img src={LogoMonogram} transition={bounceTransition} animate={{y: ["5%", "-5%"]}}/>
        <motion.div animate={{ scale: 1.2 }} transition={{ damping: 1, repeat: Infinity, delay: 0.7, duration:1.2, repeatDelay: 0.3 }}/>
        </PageOneContainer>
    </>);
}