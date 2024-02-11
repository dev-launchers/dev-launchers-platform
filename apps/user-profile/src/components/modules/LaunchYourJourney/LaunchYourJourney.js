import PageBody from "../../common/PageBody"
import { Typography} from '@devlaunchers/components/components/atoms';
import { PageContainer, HeaderSection, Header, SubHeader, Footer, Icons} from "./StyledLaunchYourJourney";
import { JourneySectionRight, JourneySectionLeft } from "./JourneySection/JourneySection";
import headerBG from "./../../../images/Onboarding/EmailTemplate/headerBG.png";
import rocket from "./../../../images/Onboarding/EmailTemplate/rocket-icon.png"
import insta from "./../../../images/Onboarding/EmailTemplate/insta-icon.png"
import facebook from "./../../../images/Onboarding/EmailTemplate/facebook-icon.png"
import { useRouter } from 'next/router'

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
            <HeaderSection style={{ backgroundImage:`url(${headerBG})` }}>
                <Header>
                    <Typography style={{color: "white", fontSize: "80px"}}>Launch Your Journey!</Typography>
                </Header>
                <SubHeader>
                    <Typography type="pLarge" style={{color: "white"}}>
                        Dev Launchers is here to launch your tech career into the stratosphere. Our community is full of cosmic adventurers, all ready to help you reach new dimensions of success.
                    </Typography>
                </SubHeader>
            </HeaderSection>
            <PageBody>
                <JourneySectionRight
                    iconImg='Journey1'
					title="Powering your Profile"
					subtitle="Shape your stunning professional profile and shine bright like a supernova💫. Showcase your unique talents and interests for the galaxy to see."
                    buttonTitle="Create Your Profile"
                    buttonPath='create'
                />
                <JourneySectionLeft
                    iconImg='Journey2'
					title="Create with Templates"
					subtitle="Fire up your engines and learn to create games and apps using our stellar templates."
                    buttonTitle="Discover Templates"
                    clickFunction={createPage}
                />
                <JourneySectionRight
                    iconImg='Journey3'
					title="Dream with IdeaSpace"
					subtitle="Dive into our project ideation portal, IdeaSpace, and blast us away with your incredible ideas. Dream bigger than the cosmos!"
                    buttonTitle="Explore Ideaspace"
                    clickFunction={ideaSpacePage}
                />
                <JourneySectionLeft
                    iconImg='Journey4'
					title="Learn Code and Design"
					subtitle="Keep growing and thriving with our wealth of resource tools for code and design. Our devotion to continuous learning fuels your journey across the development cosmos."
                    buttonTitle="Start Learning Now"
                    clickFunction={learnPage}
                />
                <JourneySectionRight
                    iconImg='Journey5'
					title="Join Forces"
					subtitle="Collaborate and gain real-world experience to reach Core Member status. Become a part of a platform product team team and defy gravitational limitations!🚀"
                    buttonTitle="Become A Core Member"
                    clickFunction={joinPage}
                />
            </PageBody>
            <Footer>
                <Icons>
                    <img src={insta} style={{padding:"0px 10px"}}/>
                    <img src={rocket} style={{padding:"0px 10px"}}/>
                    <img src={facebook} style={{padding:"0px 10px"}}/>
                </Icons>
                <Typography type="pLarge" style={{color: "white"}}>Join - Create - Learn - Dream - Support</Typography>
                <Typography type="pSmall" style={{color: "white"}}>Dev Launchers</Typography>
                <Typography type="pSmall" style={{color: "white"}}>Austin, TX</Typography>
                <Typography type="pSmall" style={{color: "white"}}>Terms of Service - Privacy Policy</Typography>
            </Footer>
        </PageContainer>
        
        </>
    );
}