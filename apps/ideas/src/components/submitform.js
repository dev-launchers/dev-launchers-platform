import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';

import { env } from '../utils/EnvironmentVariables';

function SubmitForm() {

  const [ideaName, setIdeaName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [hourCommitmentMin, setHourCommitmentMin] = useState(0);
  const [hourCommitmentMax, setHourCommitmentMax] = useState(0);
  const [skills, setSkills] = useState([
    { skill: 'Web Developer' },
    { skill: 'AI / ML' },
  ]);
  const [openPositions, setOpenPositions] = useState([
    {
      title: 'Developer, UX/UX',
      description: 'Lots of programing',
      isHidden: false
    }
  ]);
  const [author, setAuthor] = useState('1');
  const [difficultyLevel, setDifficultyLevel] = useState('Beginner');
  //const [timeStamp, setTimeStamp] = useState(new Date());


  const submitHandler = e => {
    e.preventDefault();
    // i don't think we need the date stuff?
    // get request of test posts still have a date
    // let currentTime =  new Date().toLocaleDateString('en-US');
    // this.setState({timeStamp: currentTime});
    var state = {
      ideaName: ideaName,
      tagline: tagline,
      description: description,
      targetAudience: targetAudience,
      hourCommitmentMin: hourCommitmentMin,
      hourCommitmentMax: hourCommitmentMax,
      skills: skills,
      openPositions: openPositions,
      author: author,
      difficultyLevel: difficultyLevel,
    }

    axios.post(`https://api.devlaunchers.org/idea-cards`, state)
      .then(response => {

      });


    setIdeaName('');
    setTargetAudience('');
    setDescription('');
    setTagline('');

  };



  return (
    <Container fluid className='container' id='formWrapper'>
      <Header as='h1'>Submit your idea!!!</Header>
      <Form id='survey-form' className='form' method='post' onSubmit={submitHandler}>
        <Form.Field>
          <label>What project idea?</label>
          <input required type='text' name='ideaName' value={ideaName} onChange={(e) => setIdeaName(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Who's is the target audience for your idea?</label>
          <input required type='text' name='targetAudience' value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Notes</label>
          <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <input type='text' name='tagline' value={tagline} onChange={(e) => setTagline(e.target.value)}></input>
        </Form.Field>
        <Button color='blue' type='submit'>Submit</Button>
      </Form>
    </Container>
  );
}

export default SubmitForm;