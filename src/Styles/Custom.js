import { Button, Input } from "@chakra-ui/react";
import styled from "styled-components";

export const CustomButton = styled(Button)`
  width: 100px;
  height: 40px;
  color: white;
  background-color: #1E88E5;
  :hover{
    background-color: #1976D2;
  }
  :active{
    background-color: #B2CFFF;
  }
`

export const DownloadButton = styled(Button)`
  font-size: 14px;
  font-weight: bold; 
  color: white;
  background-color: #1E4E79;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 150px;
  padding: 10px 0;
  :hover{
    background-color: #1E4E79;
  }
`

export const CustomInput = styled(Input)`
  font-size: 14px;
  font-weight: bold;
  background-color: white;
  margin: 0;
  border-color: #c4c4c4;
  :placeholder{
    color: #c4c4c4;
  }
`
