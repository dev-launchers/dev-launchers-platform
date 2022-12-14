import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRouter } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import SignInButton from '../../common/SignInButton/SignInButton';
import Vector from '../../../images/Vector.svg';
import RainbowBar from '../../../../../website/src/components/common/RainbowBar';

import {
  HeadWapper,
  Headline,
  Headline1,
  Description,
  Wrapper,
  FormWrapper,
  SectionName,
  Line,
  Form,
  Notice,
  SubmitArea,
  Checkbox,
  Submit,
  GoBack,
} from './StyledSubmissionForm';

function SubmissionForm() {
  //const { userData, isAuthenticated } = useUserDataContext();
  let { userData, setUserData, isAuthenticated } = useUserDataContext();
  if (process.env.NEXT_PUBLIC_NAME == "DEVELOPMENT") isAuthenticated = true;
  const router = useRouter();

  const [selected, setSelected] = useState('form');
  const [sending, setSending] = useState(false);

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
      isHidden: false,
    },
  ]);

  const [difficultyLevel, setDifficultyLevel] = useState('Beginner');

  const [ideaName, setIdeaName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [features, setFeatures] = useState('');
  const [experience, setExperience] = useState('');
  const [anythingElse, setAnythingElse] = useState('');

  const goBack = () => {
    window.history.back(-1);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
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
      difficultyLevel: difficultyLevel,
      features: features,
      experience: experience,
      anythingElse: anythingElse,
    };

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/idea-cards/`,
      state
    );

    if (res.status === 200) {
      router.push(`workshop/${res.data.id}`);
    } else {
      alert('Unable to register your idea.');
      setSending(false);
    }
  };

  // const handleClick = (e, n) => {
  // setHourCommitmentMax(e);
  //   setSelected(n)
  // }

  return (
    <div>


      {!isAuthenticated ? (
        <div>
          <Headline1>Dev Ideas</Headline1>
          <p>
            Have an idea for a development project?<br />
            Share your idea with us!<br />
          </p>
          <Wrapper>
            <div
              style={{
                color: 'white',
              }}
            >
              <div>Please sign in to submit your idea!</div>
              <br />
              <div>
                <SignInButton redirectUrl="https://devlaunchers.org/ideaspace/submit" />
              </div>
            </div>
          </Wrapper>
        </div>
      ) : (
        <div>
          <HeadWapper>
            <Headline>IdeaSpace</Headline>
            <GoBack onClick={goBack}>
              <img alt="submit_image" src={Vector} />
              Back
            </GoBack>
            <div style={{ marginLeft: "calc(50% - 7rem)" }}>
              <RainbowBar height=".3rem" width="14rem" />
            </div>
            <Description>
              Have an idea for a development project?<br />
              Share your idea with us!<br />
            </Description>
          </HeadWapper>

          <FormWrapper>
            <SectionName>Idea Info</SectionName>
            <Line />

            <Form onSubmit={submitHandler}>
              <div>
                <p>Idea Name<span>&nbsp;*</span></p>
                <input
                  required
                  type="text"
                  name="ideaName"
                  value={ideaName}
                  placeholder="Your Product Name"
                  onChange={(e) => setIdeaName(e.target.value)}
                />
              </div>

              <div>
                <p>What is your idea?<span>&nbsp;*</span></p>
                <textarea
                  required
                  onKeyUp={(e) => {
                    e.target.style.height = 'inherit';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  name="description"
                  value={description}
                  placeholder="What is your product idea? Would it be helpful or fun? Who would use it and why?"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <p>Do you have any relevant experience in Development or design?<span>&nbsp;*</span></p>
                <textarea
                  required
                  onKeyUp={(e) => {
                    e.target.style.height = 'inherit';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  name="experience"
                  value={experience}
                  placeholder="If you have any relevant experience in development or design, please explain here. This information will be shared with Devlaunchers and won't be publicly shown in the workshopping page."
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>

              <div>
                <p>who do you think your idea is helpful to?</p>
                <textarea
                  onKeyUp={(e) => {
                    e.target.style.height = 'inherit';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  name="targetAudience"
                  value={targetAudience}
                  placeholder="Describe your audience, including their demographic information, technology experience, why they would be interested in your idea, etc."
                  onChange={(e) => setTargetAudience(e.target.value)}
                />
              </div>

              <div>
                <p>What Features would your Product have?<span>&nbsp;*</span></p>
                <textarea
                  required
                  onKeyUp={(e) => {
                    e.target.style.height = 'inherit';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  name="features"
                  value={features}
                  placeholder="A list of possible features your product could have."
                  onChange={(e) => setFeatures(e.target.value)}
                />
              </div>

              <div>
                <p>Anything else you would like to share with us?</p>
                <textarea
                  onKeyUp={(e) => {
                    e.target.style.height = 'inherit';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  name="anythingElse"
                  value={anythingElse}
                  placeholder="Want to share something else not listed above?"
                  onChange={(e) => setAnythingElse(e.target.value)}
                />
              </div>

              <div>
                <p>Do you have a catchy tagline for this idea submission?</p>
                <input
                  type="text"
                  name="tagline"
                  value={tagline}
                  placeholder="Your Tagline"
                  onChange={(e) => setTagline(e.target.value)}
                />
              </div>

              <Notice>
                After submitting your idea will be reviewed and enter the workshopping stage!
              </Notice>

              <SubmitArea>
                {/*<Checkbox>
                <input
                  required
                  type="checkbox"
                  name="checkbox"
                  value="checkbox" />
                <span>I have read and agree to the <a href="browse">Terms and Conditions</a>.</span>
              </Checkbox>*/}
                <Submit type="submit">
                  {' '}
                  {sending === true ? 'Wait' : 'Submit Idea'}{' '}
                </Submit>
              </SubmitArea>

            </Form>
          </FormWrapper>
        </div>
      )}
      <br />
    </div>
  );

}

export default SubmissionForm;
