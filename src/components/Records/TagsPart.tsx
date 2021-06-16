import styled from 'styled-components';

const TagsPart = styled.div`
  overflow: auto;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 16px;
  margin: 10px;

  &::-webkit-scrollbar {
    width: 0;
  }

  > div {
    display: flex;
    justify-content: space-between;
    color: #999;
  }

  > ul {
    padding-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;


    > li {
      width: 25%;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > span {
        width: 50px;
        height: 50px;
        background: #F8F8F8;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
      }

      > p {
        padding-top: 8px;
        font-size: 14px;
        color: #B3B3B3;
      }

      &.selected {
        span {
          border: 2px solid #FB9265;
          background-color: white;
        }

        .icon {
          fill: #FB9265;
        }

        > p {
          color: #FB9265;
        }
      }
    }
  }
`;

export default TagsPart;