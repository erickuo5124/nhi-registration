import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

import Info from '../Components/Home/Info'

export default function Home() {
  return (
    <Flex w='100vw' direction='column' p='0 96px' pb='40px'>
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
