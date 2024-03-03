import PageBody from "../../common/PageBody"
import { Typography} from '@devlaunchers/components/components/atoms';
import { PageContainer, HeaderSection, Header, SubHeader, Footer, Icons} from "./StyledLaunchYourJourney";
import { JourneySection} from "./JourneySection/JourneySection";
import rocket from "./../../../images/Onboarding/EmailTemplate/rocket-icon.png"
import insta from "./../../../images/Onboarding/EmailTemplate/insta-icon.png"
import facebook from "./../../../images/Onboarding/EmailTemplate/facebook-icon.png"
import { useRouter } from 'next/router'


/**
 * @description  This component renders the LaunchYourJourney Component.
 * Details on the props are in the JourneySection.js
 * @returns 
 */


export default function LaunchYourJourney() {


    const router = useRouter();

    const createPage = (e) => {
        router.push('/create')
    };

    const ideaSpacePage = (e) => {
    router.push('/ideaspace')
    };

    const learnPage = (e) => {
    router.push('/learn')
    };

    const joinPage = (e) => {
    router.push('/join')
    };

    return(
        <>

        <PageContainer>
            <HeaderSection>
                <Header>
                    <Typography className="header-text">Launch Your Journey!</Typography>
                </Header>
                <SubHeader>
                    <Typography type="pLarge">
                        Dev Launchers is here to launch your tech career into the stratosphere. Our community is full of cosmic adventurers, all ready to help you reach new dimensions of success.
                    </Typography>
                </SubHeader>
            </HeaderSection>
            <PageBody>
                <JourneySection
                    iconImg='Journey1'
					title="Powering your Profile"
					subtitle="Shape your stunning professional profile and shine bright like a supernova💫. Showcase your unique talents and interests for the galaxy to see."
                    buttonTitle="Create Your Profile"
                    buttonLink='https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=164131315429-hcllbtrq77jsc7b3fqviak7148hj8oa9.apps.googleusercontent.com&response_type=code&redirect_uri=https%3A%2F%2Fapiv4.devlaunchers.org%2Fapi%2Fconnect%2Fgoogle%2Fcallback&scope=email%20profile&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow'
                    side='right'
                />
                <JourneySection
                    iconImg='Journey2'
					title="Create with Templates"
					subtitle="Fire up your engines and learn to create games and apps using our stellar templates."
                    buttonTitle="Discover Templates"
                    clickFunction={createPage}
                    side='left'
                />
                <JourneySection
                    iconImg='Journey3'
					title="Dream with IdeaSpace"
					subtitle="Dive into our project ideation portal, IdeaSpace, and blast us away with your incredible ideas. Dream bigger than the cosmos!"
                    buttonTitle="Explore Ideaspace"
                    clickFunction={ideaSpacePage}
                    side='right'
                />
                <JourneySection
                    iconImg='Journey4'
					title="Learn Code and Design"
					subtitle="Keep growing and thriving with our wealth of resource tools for code and design. Our devotion to continuous learning fuels your journey across the development cosmos."
                    buttonTitle="Start Learning Now"
                    clickFunction={learnPage}
                    side='left'
                />
                <JourneySection
                    iconImg='Journey5'
					title="Join Forces"
					subtitle="Collaborate and gain real-world experience to reach Core Member status. Become a part of a platform product team team and defy gravitational limitations!🚀"
                    buttonTitle="Become A Core Member"
                    clickFunction={joinPage}
                    side='right'
                />
            </PageBody>
            <Footer>
                <Icons>
                    <img src={insta} className="footer-icon"/>
                    <img src={rocket} className="footer-icon"/>
                    <img src={facebook} className="footer-icon"/>
                </Icons>
                <Typography type="pLarge" className="footer-text">Join - Create - Learn - Dream - Support</Typography>
                <Typography type="pSmall" className="footer-text">Dev Launchers</Typography>
                <Typography type="pSmall" className="footer-text">Austin, TX</Typography>
                <Typography type="pSmall" className="footer-text">Unsubscribe - Terms of Service - Privacy Policy</Typography>
            </Footer>
        </PageContainer>
        
        </>
    );
}