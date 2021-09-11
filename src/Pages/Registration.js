import React from 'react'
import { useParams } from 'react-router-dom'
import { Flex, Stack, Text } from '@chakra-ui/layout'

import Info from '../Components/Registration/Info'

export default function Registration() {
  const { step } = useParams()
  const formComponents = [
    <Info />
  ]
  return (
    <Stack p='40px 96px'>
      <Flex w='100%' justify='center' mb='30px'>
        <Text
          color='primary.4'
          fontSize='28px'
          fontWeight='bold'
        >
          註冊健保卡網路服務系統
        </Text>
      </Flex>
      {formComponents[step]}
    </Stack>
  )
}
