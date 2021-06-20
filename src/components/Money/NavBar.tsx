import Icon from 'components/Icon';
import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 234px;
  background: linear-gradient(90deg, #FC976B 0%, #FC6264 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 14px;
  position: relative;

  > p {
    line-height: 100px;
    font-size: 24px;
  }
`;
const CardSection = styled.div`
  position: absolute;
  top: 110px;
  min-width: 345px;
  min-height: 180px;
  background: #FFFFFF;
  color: #000000;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
`;
const CaptionPart = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4D4D4D;

  > div {
    font-size: 24px;

    &:nth-child(2) {
      font-size: 14px;
      display: flex;
      flex-direction: column;

      > span {
        font-size: 24px;

      }
    }
  }
`;
const OveragePart = styled.div`
  padding-top: 15px;

  > p {
    font-size: 14px;
    color: #B3B3B3;
  }

  > div {
    color: #FF5657;
    font-size: 50px;

    > span {
      font-size: 21px;
    }

    > .icon {
      font-size: 17px;
      position: relative;
      top: -9px;
      left: 9px;
    }
  }
`;


const NavBar: React.FC = () => {

  const [toggleSvg, setToggleSvg] = useState<boolean>(true);
  const changeSvg = () => {
    setToggleSvg(toggle => !toggle);
  };


  return (
    <Wrapper>
      <p>豆子记账</p>
      <CardSection>
        <CaptionPart>
          <div>余额预算</div>
          <div>2019年 <span>7月</span></div>
        </CaptionPart>

        <OveragePart>
          <div>
            <span>￥</span>
            <em className="amount">{toggleSvg ? '2366' : '*****'}</em>
            <Icon onClick={() => changeSvg()} name={toggleSvg ? 'open_eye' : 'close_eye'}/>
          </div>
        </OveragePart>
      </CardSection>
    </Wrapper>
  );
};
export default NavBar;