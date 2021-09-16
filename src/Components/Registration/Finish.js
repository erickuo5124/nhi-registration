import React from 'react'
import { Stack, Flex, Text } from '@chakra-ui/layout'
import { useHistory } from 'react-router'
import { CustomButton } from '../../Styles/Custom'

export default function Finish() {
  const history = useHistory();
  return (
    <Flex direction='column' align='center' w='100%'>
      <Stack
        align='center'
        w='100%'
        p='150px 240px'
        bgColor='primary.3'
        borderRadius='8px'
        spacing={8}
      >
        <Text
          fontSize='24px'
          fontWeight='bold'
        >
          完成註冊
        </Text>
        <Text
          fontSize='18px'
          fontWeight='bold'
          m='40px'
        >
          請至 Email 收取認證信完成註冊
        </Text>

        <Flex w='40%' justify='center' mt='20px'>
          <CustomButton>重寄認證信</CustomButton>
          <Flex w='40px' />
          <CustomButton onClick={() => history.push('/')}>回首頁</CustomButton>
        </Flex>
      </Stack>
    </Flex>

  )
}
