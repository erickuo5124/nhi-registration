import { Button } from "@chakra-ui/button";
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