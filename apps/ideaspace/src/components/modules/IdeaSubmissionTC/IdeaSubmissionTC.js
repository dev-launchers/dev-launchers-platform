import React from 'react';
import axios from "axios";
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

let scrollElementOffset = 0;

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

  function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    if (element !== null) {
      scrollElementOffset = document.getElementById(elementId).offsetTop;
    }
    element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  function LinkRenderer(props) {
    var children = React.Children.toArray(props.children)
    var text = props.href.substring(1);
    return React.createElement('a', { onClick: () => scrollSmoothTo(text) },  props.children)
  }


  // dropdown quick link
  const [showOptions, setShowOptions] = React.useState([]);
  const defaultOptions = [<option key='-1' value='-1'>Sort By</option>];
  const [selectValue, setSelectValue] = React.useState('-1');

  const dropDownOptions = quickLinkContentLeft.concat(quickLinkContentRight)
    .split('\n').slice(0, -1).map((text, index) => {
      return (
        <option
          key={index}
          value={
            text.substring(text.indexOf('(') + 2, text.indexOf(')'))
          }
        >
          {text.substring(text.indexOf('[') + 1, text.indexOf(']'))}
        </option>
      );
    });

    React.useEffect(() => {
      setShowOptions(defaultOptions.concat(dropDownOptions));
    }, []);

  const handleSelectChange = (e) => {
    if (!e.target.value) {
      return;
    }
    scrollSmoothTo(e.target.value);
    setSelectValue('-1');
  };

  // top quick link show and hide
  const [isShow, setIsShow] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  let lastScrollTop = 0;
  
  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop <= document.getElementById('introduction').offsetTop || scrollTop > lastScrollTop) {
      setIsShow(false)
    } else if (scrollElementOffset !== 0 && Math.abs(scrollElementOffset - scrollTop) <= 1) {
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
        <ReactMarkdown children={quickLinkContentLeft} remarkPlugins={[remarkGfm]} components={{ a: LinkRenderer }}/>
        <ReactMarkdown children={quickLinkContentRight} remarkPlugins={[remarkGfm]} components={{ a: LinkRenderer }}/>
      </QuickLinkLeft>

      <Content>
        {isShow == true ? (
          <QuickLinkTop>
            <MiddleSizeQL>
              <ReactMarkdown children={quickLinkContentLeft} remarkPlugins={[remarkGfm]} components={{ a: LinkRenderer }}/>
              <ReactMarkdown children={quickLinkContentRight} remarkPlugins={[remarkGfm]} components={{ a: LinkRenderer }}/>
            </MiddleSizeQL>

            <SmallSizeQL>
              <BackButton buttonType="terms" />
              <Dropdown
                name="sortBy"
                id="sortBy"
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
            value={selectValue}
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
          <ReactMarkdown children={quickLinkContentLeft} remarkPlugins={[remarkGfm]} components={{ a: LinkRenderer }}/>
          <ReactMarkdown children={quickLinkContentRight} remarkPlugins={[remarkGfm]} components={{ a: LinkRenderer }}/>
        </QuickLinkMiddle>

        <MarkdownWrapper>
          <ReactMarkdown
            children={markdownSource}
            remarkPlugins={[remarkGfm]}
            components={{ h2: HeadingRenderer, h3: HeadingRenderer, a: LinkRenderer }}
          />
        </MarkdownWrapper>
      </Content>
    </atoms.Box>
  );
}

export default IdeaSubmissionTC;
