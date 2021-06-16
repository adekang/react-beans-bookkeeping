import React from 'react';
import Icon from 'components/Icon';
import styled from 'styled-components';
import TagsPart from './TagsPart';
import {Link} from 'react-router-dom';


const Wrapper = styled.div`
  overflow: auto;
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, #FC976B 0%, #FC6264 100%);

  &::-webkit-scrollbar {
    width: 0;
  }
`;


const HeaderSection: React.FC = (props) => {
  return (
    <Wrapper>
      <TagsPart>
        <div>
          <Link to="/index">
            <Icon name="return"/>
          </Link>
          <span>标签选择</span>
        </div>
        <ul>
          <li className="selected"><span><Icon name="fruits"/></span><p>饮食</p></li>
          <li><span><Icon name="fruits"/></span><p>出行</p></li>
          <li><span><Icon name="fruits"/></span><p>住宿</p></li>
          <li><span><Icon name="fruits"/></span><p>服装</p></li>
          <li><span><Icon name="fruits"/></span><p>出行</p></li>
          <li><span><Icon name="fruits"/></span><p>住宿</p></li>
          <li><span><Icon name="fruits"/></span><p>出行</p></li>
          <li><span><Icon name="fruits"/></span><p>住宿</p></li>
          <li><span><Icon name="fruits"/></span><p>服装</p></li>
          <li><span><Icon name="fruits"/></span><p>出行</p></li>
          <li><span><Icon name="fruits"/></span><p>住宿</p></li>
          <li><span><Icon name="fruits"/></span><p>出行</p></li>
          <li><span><Icon name="fruits"/></span><p>住宿</p></li>
          <li><span><Icon name="fruits"/></span><p>服装</p></li>
          <li><span><Icon name="fruits"/></span><p>出行</p></li>
          <li><span><Icon name="fruits"/></span><p>住宿</p></li>
          <li><span><Icon name="fruits"/></span><p>出行</p></li>
          <li><span><Icon name="fruits"/></span><p>住宿</p></li>
          <li><span><Icon name="fruits"/></span><p>服装</p></li>
          <li><span><Icon name="fruits"/></span><p>出行</p></li>
          <li><span><Icon name="fruits"/></span><p>住宿</p></li>
          <li><span><Icon name="records"/></span><p>新增标签</p></li>
        </ul>
      </TagsPart>
    </Wrapper>
  );
};

export default HeaderSection;