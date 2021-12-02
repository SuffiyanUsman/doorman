import styled from "styled-components";

export const Label = styled.label`
  padding:20px;
  font-size:20px;
  font-weight:bolder;
`;


export const BoxContainer = styled.div`

  display: flex;
  padding:20px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;

`;

export const FormContainer = styled.form`
  
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);

`;

export const MutedLink = styled.a`
  font-size: 15px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  margin:auto;
`;
export const Span = styled.span`
  font-size: 20px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  margin:auto;
`;

export const BoldLink = styled.a`
  font-size: 11px;  
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 400, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(240, 232, 202);
  }
`;

export const SubmitButton = styled.button`
width:340px;
margin-left:;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(128, 98, 89);
  &:hover {
    filter: brightness(1.03);
  }
`;

export const Select = styled.select`
  width: 300px;
  height: 46px;
  outline: none;
  border-radius:10px;
  
  background-color:#342529;
  margin-Right:40px;
  border: 1.5px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  margin-bottom:10px;
  margin-top:10px;
  cursor:pointer;
  margin-left:40px;
  color: rgba(200, 200, 200, 1);
  appearance:none;
  -webkit-appearance:none;
  -moz-appearance:none;
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(240, 232, 202);
  }
  &:hover {
    outline: none;
    border-bottom: 1px solid rgb(240, 232, 202);
    background-color:#342529;
  }

  `;
export const Option = styled.option`
  font-size:15px;
  color: rgba(200, 200, 200, 1);
  background-color:#342529;
  `;
  
  export const Head = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: rgb(128, 98, 89);
  margin: 30px auto;
  height:auto;
  width:auto;
  font-family:New;
  text-Align:center;
  
  
  `;