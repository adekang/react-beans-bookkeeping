import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
  list-style: none;
  color: #B3B3B3;
  padding-left: 20px;
  padding-top: 70px;

  > li {
    width: 50px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    margin-right: 15px;

    &.selected {
      color: #333333;
      font-size: 24px;
      position: relative;
      transition: all 250ms;

      ::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 50%;
        transform: translateX(-50%);
        width: 21px;
        height: 3px;
        background: #FF5657;
        border-radius: 3px;
      }
    }
  }
`;


const SelectPart: React.FC = () => {
  // 声明hash表
  const currentMap = {'-': '支出', '+': '收入'};
  // 将hash的key 当作类型 缩小类型范围
  type Keys = keyof typeof currentMap
  const [currentList] = useState<Keys[]>(['-', '+']);
  const [current, setCurrent] = useState('-');
  return (
    <Wrapper>
      {currentList.map(c =>
        <li className={current === c ? 'selected' : ''}
            onClick={() => {setCurrent(c);}} key={c}>
          {currentMap[c]}
        </li>
      )}
    </Wrapper>
  );
};
export default SelectPart;