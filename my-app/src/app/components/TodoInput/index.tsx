import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%auto;
  align-items: center;
  display: flex;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
  padding: 15px 25px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput({
  setTodoList,
}: {
  setTodoList: (todo: ITodoItem) => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <Box>
      <Input
        placeholder="입력해 주세요"
        value={content}
        onChange={e => setContent(e.target.value)}
        onKeyPress={e => {
          {
            /*입력된 값이 없을 경우 그냥 return 처리를 해서 아래 코드가 실행 안되게 함*/
          }
          if (content === '') return;
          {
            /*엔터키를 친게 아닐경우 그냥 return 처리를 해서 아래 코드가 실행 안되게 함*/
          }
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          setTodoList({
            id: '0',
            content: content,
            completed: false,
            editing: false,
          });
          setContent('');
        }}
      />
    </Box>
  );
}
