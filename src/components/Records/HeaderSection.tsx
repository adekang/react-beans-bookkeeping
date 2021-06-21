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
  const {tags, setTags} = useTags();
  const selectedTags = props.value;

  const onToggleTag = (tag: number) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };

  const getClass = (tag: number) => {
    return selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
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
                onClick={() => onToggleTag(tag.id)} key={tag.id}>
              <span><Icon name={tag.tagId}/></span>
              <p>{tag.tagName}</p></li>
          )}
        </ul>
      </TagsPart>
    </Wrapper>
  );
};

export default HeaderSection;