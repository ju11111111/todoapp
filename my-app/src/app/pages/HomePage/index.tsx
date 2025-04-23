import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import TodoInput from 'app/components/TodoInput';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content :center ;
  align-items: center;
  background: #f0f6f8;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: #fff;
  box-shadow: 0 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div`
  
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>오늘 할 일</Title>
          <TodoInput />
          <TodoList>
            <TodoItem>
              <TodoCheck type="checkbox" />난 투두</TodoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
