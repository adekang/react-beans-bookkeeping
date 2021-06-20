import React, {useState} from 'react';
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
type TagsProps = {
  id: number, tagId: string, tagName: string
};

const Tags = [
  {id: 1, tagId: '1', tagName: '住宿'},
  {id: 2, tagId: '2', tagName: '早餐'},
  {id: 3, tagId: '3', tagName: '午餐'},
  {id: 4, tagId: '4', tagName: '晚餐'},
  {id: 5, tagId: '5', tagName: '停车'},
  {id: 6, tagId: '6', tagName: '亲子'},
  {id: 7, tagId: '7', tagName: '景点'},
  {id: 8, tagId: '8', tagName: '出行'},
  {id: 9, tagId: '9', tagName: '购物'},
  {id: 10, tagId: '10', tagName: '消费'},
  {id: 11, tagId: '11', tagName: '餐饮'},
];

type Props = {
  value: number[],
  onChange: (selected: number[]) => void
}

const HeaderSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<TagsProps[]>(Tags);
  const selectedTags = props.value;

  const onToggleTag = (tag: number) => {
    console.log(tag);
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