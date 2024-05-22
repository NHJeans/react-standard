import styled from "styled-components";
import Box from "./Box";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

function BoxContainer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      {/* TODO: active prop 을 어떻게 해야 클릭한 박스임을 알수있을 지 active prop에 할당할 값을 수정해보세요. */}
      {[0, 1, 2, 3, 4].map((index) => (
        <Box
          key={index}
          $active={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </Container>
  );
}

export default BoxContainer;
