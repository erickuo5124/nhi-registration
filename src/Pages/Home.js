import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

import Navbar from '../Components/Navbar'
import Info from '../Components/Info'

export default function Home() {
  return (
    <Flex w='100vw' direction='column' p='40px 96px'>
      <Navbar />
      <Text
        m='30px 0'
        color="primary.4"
        fontSize="28px"
        fontWeight="bold"
      >
        歡迎來到健保卡網路服務註冊系統！
      </Text>
      <Info />
    </Flex>
  )
}
