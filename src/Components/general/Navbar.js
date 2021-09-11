import React from 'react'
import { Flex, Image, Text, Link } from '@chakra-ui/react'
import { CustomButton } from '../../Styles/Custom'
import { useLocation, useHistory } from 'react-router-dom'

import icon from '../../Images/Website Icon.png'

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
        <Link
          href={'./login'}
          _hover={{ textDecor: 'none' }}
        >
          <CustomButton ml='20px' onClick={() => history.push('./login')}>登入</CustomButton>
        </Link>
      </Flex>
      }
    </Flex>
  )
}
