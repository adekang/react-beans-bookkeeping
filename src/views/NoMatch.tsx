import React from 'react';
import {Link} from 'react-router-dom';

function NoMatch() {
  return (
    <div>
      <h2>找不到当前页面</h2>
      <Link to="/index">回到首页</Link>
    </div>
  );
}

export default NoMatch;