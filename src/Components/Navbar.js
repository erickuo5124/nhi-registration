import React from 'react'
import { Flex, Image, Text, Link } from '@chakra-ui/react'
import { CustomButton } from '../Styles/Custom'

import icon from '../Images/Website Icon.png'

export default function Navbar() {
  return (
    <Flex align='center' justify='space-between' direction={['column', 'column', 'row']}>
      <Flex align='center'>
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
      <Flex>
        <Link
          href={'./registration'}
          _hover={{ textDecor: 'none' }}
        >
          <CustomButton >註冊</CustomButton>
        </Link>
        <Link
          href={'./login'}
          _hover={{ textDecor: 'none' }}
        >
          <CustomButton ml='20px'>登入</CustomButton>
        </Link>
      </Flex>
    </Flex>
  )
}
