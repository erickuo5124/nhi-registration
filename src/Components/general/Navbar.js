import React from 'react'
import { Flex, Image, Text, Button } from '@chakra-ui/react'
import { CustomButton } from '../../Styles/Custom'
import { useLocation, useHistory } from 'react-router-dom'

import icon from '../../Images/Website Icon.png'
import styled from 'styled-components'

export default function Navbar() {
  const location = useLocation();
  const history = useHistory();
  return (
    <Flex
      p='0 96px'
      pt='40px'
      align='center'
      justify='space-between'
      direction={['column', 'column', 'row']}
    >
      <Flex
        align='center'
        cursor='pointer'
        onClick={() => history.push('/')}
      >
        <Image src={icon} />
        <Text
          pl='10px'
          fontSize='36px'
          fontWeight="bold"
          color="primary.6"
        >
          健保卡網路服務註冊
        </Text>
      </Flex>
      {location.pathname === '/' && <Flex>
        <CustomButton onClick={() => history.push('./registration')}>註冊</CustomButton>
        <CustomButton ml='20px' onClick={() => history.push('./login')}>登入</CustomButton>
      </Flex>
      }
      {location.pathname === '/main' && <Flex>
        <LogoutButton
          mr='80px'
          onClick={() => history.push('/')}
        >
          登出
        </LogoutButton>
      </Flex>
      }
    </Flex>
  )
}

const LogoutButton = styled(Button)`
  width: 100px;
  height: 40px;
  color: #005BAC;
  background-color: #B2CFFF;
`
