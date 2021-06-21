import React from 'react';
import Icon from 'components/Icon';
import styled from 'styled-components';
import TagsPart from './TagsPart';
import {Link} from 'react-router-dom';
import {useTags} from '../../hooks/useTag';


const Wrapper = styled.div`
  overflow: auto;
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, #FC976B 0%, #FC6264 100%);

  &::-webkit-scrollbar {
    width: 0;
  }
`;


type Props = {
  value: number[],
  onChange: (selected: number[]) => void
}

const HeaderSection: React.FC<Props> = (props) => {
  const {tags} = useTags();
  const selectedTagIds = props.value;

  const toggleTag = (tag: number) => {
    const index = selectedTagIds.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTagIds, tag]);
    }
  };

  const getClass = (tagId: number) => {
    return selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  };
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
          {tags.map(tag =>
            <li className={getClass(tag.id)}
                onClick={() => toggleTag(tag.id)} key={tag.id}>
              <span><Icon name={tag.tagId}/></span>
              <p>{tag.tagName}</p></li>
          )}
        </ul>
      </TagsPart>
    </Wrapper>
  );
};

export default HeaderSection;