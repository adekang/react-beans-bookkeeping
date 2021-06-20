import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  > div {
    width: 50%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: white;
    border: 0.5px solid #E6E6E6;
    transition: all 100ms linear;

    &.selected {
      background-color: #FB9265;
      color: white;
    }

  }
`;


const SelectionPart: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type keys = keyof typeof categoryMap
  const [categoryList] = useState<keys[]>(['-', '+']);
  const [category, setCategory] = useState('-');

  return (
    <Wrapper>
      {categoryList.map((c, index) =>
        <div className={category === c ? 'selected' : ''} onClick={() => {setCategory(c);}} key={index}>
          {categoryMap[c]}
        </div>
      )}
    </Wrapper>
  );
};

export default SelectionPart;