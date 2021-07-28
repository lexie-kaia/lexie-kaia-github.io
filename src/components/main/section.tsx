import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { ChevronUp } from 'react-bootstrap-icons';

type Props = {
  children: ReactNode;
  title: string;
  isAccordion?: boolean;
};

const Container = styled.section`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;

const Body = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
`;

const UpButton = styled.button<{ isOpen: boolean }>`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  transform: ${props => (props.isOpen ? 'rotate(0)' : 'rotate(180deg)')};

  svg {
    fill: ${props => props.theme.color.textMain};
    stroke: ${props => props.theme.color.textMain};
    stroke-width: 1px;
    width: 16px;
    height: 16px;
  }

  &:focus,
  &:hover {
    outline: none;

    svg {
      fill: ${props => props.theme.color.highlight};
      stroke: ${props => props.theme.color.highlight};
    }
  }
`;

function Section({ children, title, isAccordion }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {isAccordion && (
          <UpButton onClick={onClick} isOpen={isOpen}>
            <ChevronUp />
          </UpButton>
        )}
      </Header>
      <Body isOpen={isOpen}>{children}</Body>
    </Container>
  );
}

export default Section;
