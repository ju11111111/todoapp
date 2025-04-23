
import styled from "styled-components"

const Box = styled.div`
    width:100%auto;
    align-items:center;
    display: flex;
    font-size:1.1em;
    border-bottom: 1px solid #eee;
    padding:15px 25px;
`;

const Input = styled.input`
    width:100%;
    border:none;
    outline: 0;
`;

export default function TodoInput() {
    return<Box><Input placeholder="입력해 주세요"/></Box>
}