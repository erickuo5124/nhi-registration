import React from 'react'
import { Flex, Stack, Text } from '@chakra-ui/layout'
import TimeLine from '../Components/Login/TimeLine'
import { useParams } from 'react-router-dom'

import Install from '../Components/Login/Install'
import NHICard from '../Components/Login/NHICard'
import LoginForm from '../Components/Login/LoginForm'

export default function Login() {
  const { step } = useParams()
  const intStep = parseInt(step)
  const formComponents = [
    <Install />,
    <NHICard />,
    <LoginForm />
  ]
  return (
    <Stack p='40px 176px'>
      <Flex w='100%' justify='center' mb='30px'>
        <Text
          color='primary.4'
          fontSize='28px'
          fontWeight='bold'
        >
          登入健保卡網路服務系統
        </Text>
      </Flex>
      {intStep >= 0 && <TimeLine step={intStep} />}
      {formComponents[intStep]}
    </Stack>
  )
}
