import { useEffect, useState } from 'react';
import Link from 'next/link';
import './nav.css';

import AppIdeaGeneratorButton from '../IdeaGeneratorButton/AppIdeaGeneratorButton';

const Nav = function (props) {
  return (
    <div className="nav">
      <a style={{ paddingLeft: '2rem', cursor: 'pointer' }}>
        <Link href="/ideaspace">
          <h4>💡IdeaSpace (Beta)</h4>
        </Link>
      </a>
      <a style={{ paddingLeft: '2rem', cursor: 'pointer' }}>
        <Link href="/ideaspace/submit">
          <h4>Submit an Idea</h4>
        </Link>
      </a>
      <a style={{ paddingLeft: '2rem', cursor: 'pointer' }}>
        <Link href="/ideaspace/browse">
          <h4>Browse Ideas</h4>
        </Link>
      </a>
      <a style={{paddingLeft:"2rem", cursor:"pointer"}}>
        <Link href="/ideaspace/dashboard">
          <h4>Dashboard</h4>
        </Link>
      </a>
      <AppIdeaGeneratorButton style={{marginLeft:"auto", marginRight:"2rem", fontSize:"1.3rem", fontWeight:"bold", width:"auto"}} />
    </div>
  );
};

export default Nav;
