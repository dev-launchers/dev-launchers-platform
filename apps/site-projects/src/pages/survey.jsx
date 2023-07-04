import Head from 'next/head';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from 'styled-components';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
];

const SubmitBtn = styled.button`
  background: rgb(33, 70, 93);
  color: white;
  padding: 0.5em 1.4em;
  border-radius: 0.5em;
  margin: 2rem auto;
  border: none;
`;

function ProjectsList() {
  const [pet, setPet] = useState('');

  return (
    <>
      <Head>
        <title>Survey</title>
        <meta name="title" content="Survey"></meta>
        <meta
          name="description"
          content="a small survey to know all our members and visitors"
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://devlaunchers.org/projects/survey"
        ></meta>
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        ></meta>
        <meta property="og:title" content="Survey"></meta>
        <meta
          property="og:description"
          content="a small survey to know all our members and visitors"
        ></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://devlaunchers.org/projects/survey"
        ></meta>
        <meta property="twitter:title" content="Survey"></meta>
        <meta
          property="twitter:description"
          content="a small survey to know all our members and visitors"
        ></meta>
        <meta
          property="twitter:image"
          content="/images/DevlaunchersGitHubThumb.png"
        ></meta>
        <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
      </Head>

      <div
        style={{
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '3rem',
          maxWidth: '60rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1>Survey on Contemporary Social Issues and Perspectives</h1>

          <p>
            We invite you to participate in our survey on contemporary social
            issues and perspectives. This comprehensive study aims to gather
            valuable insights and opinions regarding various societal matters
            that shape our world today. By engaging in this survey, you will
            have the opportunity to contribute your voice to the ongoing
            discourse surrounding crucial topics such as politics, economics,
            culture, and social justice
          </p>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <h2>
              On a scale of 1 to 10, how likely are you to break out into dance
              in public when your favorite song comes on?
            </h2>
            <Slider
              defaultValue={2}
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              min={0}
              max={10}
              sx={{
                maxWidth: '40rem',
                mx: 'auto',
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <h2>
              Would you rather have a pet dinosaur or a pet dragon? And why?
            </h2>
            <FormControl sx={{ maxWidth: '30rem', margin: '0 auto' }}>
              <InputLabel id="demo-simple-select-label">Pet</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pet}
                label="Pet"
                onChange={(e) => {
                  setPet(e.target.value);
                }}
              >
                <MenuItem value={'dragon'}>Dragon</MenuItem>
                <MenuItem value={'dinosaur'}>Dinosaur</MenuItem>
              </Select>
              <TextField id="filled-basic" label="why ?" variant="filled" />
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <h2>
              How many cups of coffee does it take for you to feel like a
              functioning human being in the morning?
            </h2>
            <Slider
              sx={{ maxWidth: '40rem', mx: 'auto' }}
              defaultValue={2}
              step={1}
              valueLabelDisplay="auto"
              marks={[
                { label: "don't drink", value: 0 },
                { label: 'help.', value: 10 },
              ]}
              getAriaValueText={(value) =>
                value > 0 ? 'coffe' + 'e'.repeat(value) : 'no coffee'
              }
              valueLabelFormat={(value) =>
                value > 0 ? 'coffe' + 'e'.repeat(value) : 'no coffee'
              }
              min={0}
              max={10}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <h2>
              Have you ever pretended to talk on the phone to avoid talking to
              someone in person?
            </h2>
            <FormControl sx={{ maxWidth: '40rem', mx: 'auto' }}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                row
                defaultValue={'yes'}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <h2>
              Would you rather have a rewind button or a pause button on your
              life?
            </h2>
            <FormControl sx={{ maxWidth: '40rem', mx: 'auto' }}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                row
                defaultValue={'pause'}
              >
                <FormControlLabel
                  value="rewind"
                  control={<Radio />}
                  label="Rewind"
                />
                <FormControlLabel
                  value="pause"
                  control={<Radio />}
                  label="Pause"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <SubmitBtn>Submit</SubmitBtn>
        </div>
      </div>
    </>
  );
}

export default ProjectsList;
