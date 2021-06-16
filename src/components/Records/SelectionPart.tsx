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

    &.selected {
      background-color: #FB9265;
      color: white;
    }

  }
`;

type Props = {
  value: '-' | '+',
  onChange: (value: ('-' | '+')) => void
}

const SelectionParts: React.FC<Props> = (props) => {
  const selectionMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof selectionMap
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const category = props.value;
  return (
    <Wrapper>
      {categoryList.map(c =>
        <div key={c}
             className={category === c ? 'selected' : ''}
             onClick={() => {props.onChange(c);}}>
          {selectionMap[c]}
        </div>
      )}
    </Wrapper>
  );
};

export default SelectionParts;