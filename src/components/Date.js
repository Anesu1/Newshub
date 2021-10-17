import React from "react";
import styled from "styled-components";

const DateWrapper = styled.div`
  width: max-content;
  background: #fff;
  font-size: 15px;
  display: flex;
  height: max-content;
  width: 100%;
  max-width: 260px;
  margin-bottom: 10px;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin-bottom: 0;
    height: 40px;
    align-items: center;
  }
  p {
    margin: 10px 5px;
    &:first-child {
      font-family: ${(props) => props.theme.fam.monda};
    }
    &:last-child {
      font-family: ${(props) => props.theme.fam.semibold};
    }
  }
`;

function Date() {
  // const [date, setDate] = useState("");

  // useEffect(() => {
  //     let dateChange = { currentTime: new Date().toLocaleString() };

  //     setDate(dateChange === date)

  // }, [date])

  return (
    <DateWrapper>
      <p>Friday 21 May 2021</p>
      <p>Harare : 27c</p>
    </DateWrapper>
  );
}

export default Date;
