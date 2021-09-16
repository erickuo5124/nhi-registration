import React, { useState } from 'react'
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { CustomInput } from '../../Styles/Custom';

export default function PasswdInput(prop) {
  const [showPasswd, setShowPasswd] = useState(false);
  const handleClick = () => {
    setShowPasswd(!showPasswd)
  }
  return (
    <InputGroup
      w='160px'
    >
      <CustomInput
        bgColor='white'
        placeholder={prop.placeholder}
        type={showPasswd ? "text" : "password"}
      />
      <InputRightElement
        color='#c4c4c4'
        onClick={handleClick}
        cursor='pointer'
      >
        {showPasswd ? <ViewOffIcon /> : <ViewIcon />}
      </InputRightElement>
    </InputGroup>
  )
}
