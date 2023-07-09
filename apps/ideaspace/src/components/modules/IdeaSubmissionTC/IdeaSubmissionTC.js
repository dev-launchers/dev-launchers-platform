import React from 'react';
import axios from "axios";
import { router } from 'next/router';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import { atoms } from '@devlaunchers/components/src/components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { markdownSource, quickLinkContentLeft, quickLinkContentRight } from './MarkdownIdeaspaceTC';
import BackButton from '../../common/BackButton/BackButton';

import {
  QuickLinkLeft,
  Content,
  QuickLinkTop,
  MiddleSizeQL,
  SmallSizeQL,
  BackButtonArea,
  Dropdown,
  HeadWapper,
  Headline,
  StyledRanbow,
  QuickLinkMiddle,
  MarkdownWrapper,
} from './StyledIdeaSubmissionTC';

function IdeaSubmissionTC() {
  // ReactMarkdown
  function flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text)
  }

  function HeadingRenderer(props) {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(flatten, '')
    var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, { id: slug }, props.children)
  }


  // dropdown quick link
  const [showOptions, setShowOptions] = React.useState([]);
  const defaultOptions = [<option key='-1'>Sort By</option>];
  React.useEffect(() => {
    setShowOptions(defaultOptions);
  }, []);

  const dropDownOptions = quickLinkContentLeft.concat(quickLinkContentRight)
    .split('\n').slice(0, -1).map((text, index) => {
      return (
        <option
          key={index}
          value={
            'terms-and-conditions' + text.substring(text.indexOf('(') + 1, text.indexOf(')'))
          }
        >
          {text.substring(text.indexOf('[') + 1, text.indexOf(']'))}
        </option>
      );
    });

  const handleSelectChange = (e) => {
    if (!e.target.value) {
      return;
    }
    router.push(e.target.value);
  };

  const handleClick = (e) => {
    if (defaultOptions[0].key === "-1") {
      setShowOptions(dropDownOptions);
      return;
    }
  };


  // top quick link show and hide
  const [isShow, setIsShow] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  let lastScrollTop = 0;
  let scrollElement = null;
  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    scrollElement = document.getElementById(window.history.state.as.substr(window.history.state.as.lastIndexOf('#') + 1));

    if (scrollTop <= document.getElementById('introduction').offsetTop || scrollTop > lastScrollTop) {
      setIsShow(false)
    } else if (scrollElement !== null && Math.abs(scrollElement.offsetTop - scrollTop) <= 1) {
      setIsShow(false)
    } else {
      setIsShow(true)
    }
    lastScrollTop = document.documentElement.scrollTop;
  }


  return (
    <atoms.Box>

      <QuickLinkLeft>
        <atoms.Box>
          Idea Submission <br />
          Terms & Conditions
        </atoms.Box><br />
        <ReactMarkdown children={quickLinkContentLeft} />
        <ReactMarkdown children={quickLinkContentRight} />
      </QuickLinkLeft>

      <Content>
        {isShow == true ? (
          <QuickLinkTop>
            <MiddleSizeQL>
              <ReactMarkdown children={quickLinkContentLeft} />
              <ReactMarkdown children={quickLinkContentRight} />
            </MiddleSizeQL>

            <SmallSizeQL>
              <BackButton buttonType="terms" />
              <Dropdown
                name="sortBy"
                id="sortBy"
                onClick={handleClick}
                onChange={handleSelectChange}
              >
                {showOptions}
              </Dropdown>
            </SmallSizeQL>
          </QuickLinkTop>
        ) :
          null
        }

        <BackButtonArea>
          <BackButton buttonType="terms" />
          <Dropdown
            name="sortBy"
            id="sortBy"
            onClick={handleClick}
            onChange={handleSelectChange}
          >
            {showOptions}
          </Dropdown>
        </BackButtonArea>

        <HeadWapper>
          <Headline>IdeaSpace</Headline>
          <atoms.Typography type='h4' >
            Idea Submission Terms & Conditions
          </atoms.Typography>
          <StyledRanbow>
            <atoms.Layer hasRainbowBottom />
          </StyledRanbow>
          <h5>Last updated: April 26, 2023</h5>
        </HeadWapper>

        <QuickLinkMiddle>
          <ReactMarkdown children={quickLinkContentLeft} />
          <ReactMarkdown children={quickLinkContentRight} />
        </QuickLinkMiddle>

        <MarkdownWrapper>
          <ReactMarkdown
            children={markdownSource}
            remarkPlugins={[remarkGfm]}
            components={{ h2: HeadingRenderer, h3: HeadingRenderer, }}
          />
        </MarkdownWrapper>
      </Content>
    </atoms.Box>
  );
}

export default IdeaSubmissionTC;
