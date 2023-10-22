import { Typography } from "@devlaunchers/components/components/atoms";
import { PageFiveContainer, Header } from './StyledPageFive';
import UserInterestBubble from '../../InterestBubble';


export default function PageFive() {
    const  dataFromBackend= [
        {id:1, name:"Blockchain"}, {id:2, name:"Javascript"}, {id:3, name:"Web Design"}, 
       {id:4, name:"UI/UX"}, {id:5, name:"React"}, {id:6, name:"QA"}, {id:7, name:"Web Development"}, 
       {id:8, name:"C/C++/C#"}, {id:9, name:"Discord"}, {id:10, name:"Node.js"}, {id:11, name:"Strapi"}, 
       {id:12, name:"Agile Development"}, {id:13, name:"HTML"}, {id:14, name:"Git"}, {id:15, name:"Frontend Development"}, 
       {id:16, name:"Python"}, {id:17, name:"Data Structures"}, {id:18, name:"Prototyping"}, {id:19, name:"Project Management"}
      ]    

    return (
        <PageFiveContainer>
            <Header>
                <Typography className="eyebrow-text" >ABOUT YOU</Typography>
                <Typography type="h3" >Select Your Interests Below</Typography>
                <Typography>We’ll use this to help you find projects that match your needs</Typography>
            </Header>

            <UserInterestBubble interests={dataFromBackend}/>

            

        </PageFiveContainer>
    );
}