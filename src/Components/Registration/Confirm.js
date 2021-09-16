import React from 'react'
import { Stack, Flex, Text } from '@chakra-ui/layout'
import { useHistory } from 'react-router'
import { CustomButton } from '../../Styles/Custom'

export default function Confirm() {
  const history = useHistory();
  return (
    <Flex direction='column' align='center' w='100%'>
      <Stack
        align='center'
        w='100%'
        p='60px 40px'
        bgColor='primary.3'
        borderRadius='8px'
        spacing={8}
      >
        <Flex w='80%'>
          <Text
            fontSize='24px'
            fontWeight='bold'
          >
            確認註冊資訊
          </Text>
        </Flex>
        <Flex w='80%' fontWeight='bold' fontSize='18px'>
          <Text w='120px'>姓名</Text>
          <Text>陳小美</Text>
        </Flex>
        <Flex w='80%' fontWeight='bold' fontSize='18px'>
          <Text w='120px'>戶號</Text>
          <Text>A123456789</Text>
        </Flex>
        <Flex w='80%' fontWeight='bold' fontSize='18px'>
          <Text w='120px'>戶籍地址</Text>
          <Text>臺北市大安區民輝里6鄰</Text>
        </Flex>
        <Flex w='80%' fontWeight='bold' fontSize='18px'>
          <Text w='120px'>行動電話</Text>
          <Text>09 – 12345678</Text>
        </Flex>
        <Flex w='80%' fontWeight='bold' fontSize='18px'>
          <Text w='120px'>聯絡電話</Text>
          <Text></Text>
        </Flex>
        <Flex w='80%' fontWeight='bold' fontSize='18px'>
          <Text w='120px'>Email</Text>
          <Text>ming0123@xxxx.xxx</Text>
        </Flex>
        <Flex w='80%' fontWeight='bold' fontSize='18px'>
          <Text w='120px'>備用 Email</Text>
          <Text></Text>
        </Flex>
      </Stack>
      <Flex w='40%' justify='center' mt='20px'>
        <CustomButton onClick={() => history.goBack()}>上一步</CustomButton>
        <Flex w='40px' />
        <CustomButton onClick={() => history.push('/registration/7')}>下一步</CustomButton>
      </Flex>
    </Flex>

  )
}
