import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {RecordItem, useRecords} from 'hooks/useRecords';
import {useTags} from 'hooks/useTag';
import day from 'dayjs';


const DateWrapper = styled.div`
  display: flex;
  padding: 24.5px 20px 0 20px;
  justify-content: space-between;
  color: #999999;
  font-size: 14px;

  > div {
    display: flex;

    > p {
      :nth-child(odd) {
        padding-right: 10px;
      }
    }
  }

`;
const SingleWrapper = styled.div`
  > ul {
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #EBEBEB;

      > p:nth-child(1) {
        font-size: 14px;
        color: #7D7D7D;
        display: flex;
        justify-content: center;
        align-items: center;

        > span {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: #F5F5F5;
          border-radius: 50%;
          margin-right: 10px;
        }

        .icon {
          font-size: 24px;
          fill: #E9861C;
        }

      }

      > p:nth-child(2) {
        font-size: 18px;
        color: #FD5453;
        font-weight: 700;
      }
    }
  }
`;

type Category = '-' | '+'
type Props = {
  category: Category
}
const SinglePart: React.FC<Props> = (props) => {
  const {records} = useRecords();
  const {getIcon, getName} = useTags();
  const category = props.category;

  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.map(r => {
    const key = day(r.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
    return hash;
  });

  // 把对象变为数组
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <div>
      {array.map(([date, records], index) => {
        return (
          <div key={index}>
            <DateWrapper>
              <div>
                {date}
              </div>
            </DateWrapper>
            <SingleWrapper>
              <ul>
                {records.map((t, index) =>
                  <li key={index}>
                    {t.tagIds.map((tagId, index) =>
                      <p key={index}><span><Icon name={getIcon(tagId)}/></span><i>{getName(tagId)}</i></p>
                    )}
                    <p>{t.amount}</p>
                  </li>
                )}
              </ul>
            </SingleWrapper>
          </div>
        );
      })}
    </div>
  );
};
export default SinglePart;


