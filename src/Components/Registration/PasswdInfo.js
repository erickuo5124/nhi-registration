import React from 'react'
import { Flex, Stack, Text, FormControl, FormLabel } from '@chakra-ui/react'
import { CustomButton } from '../../Styles/Custom'
import { useHistory } from 'react-router'

import { CustomInput } from '../../Styles/Custom'
import PasswdInput from './PasswdInput'

export default function PasswdInfo() {
  const history = useHistory()
  const ErrMsg = (prop) => (
    <Flex>
      <Flex w='20%' mr='12px' />
      <Text
        color={prop.color}
        fontSize='14px'
        fontWeight='bold'
      >
        {prop.msg}
      </Text>
    </Flex>
  )
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
            設定註冊密碼
          </Text>
          <Flex
            ml='20px'
            fontSize='14px'
            fontWeight='medium'
            align='end'
          >
            <Text color='red' mr='10px'>*</Text>
            必填
          </Flex>
        </Flex>
        <FormControl w='80%' isRequired>
          <Flex align='center'>
            <FormLabel w='20%'>註冊密碼</FormLabel>
            <PasswdInput placeholder='請輸入註冊密碼' />
          </Flex>
          <ErrMsg color='#ff3434' msg='密碼長度必須 6-12 碼，包含英文大寫、小寫、數字及特殊符號' />
        </FormControl>
        <FormControl w='80%' isRequired>
          <Flex align='center'>
            <FormLabel w='20%'>確認密碼</FormLabel>
            <PasswdInput placeholder='請確認註冊密碼' />
          </Flex>
        </FormControl>
        <FormControl w='80%' isRequired>
          <Flex align='center'>
            <FormLabel w='20%'>行動電話</FormLabel>
            <Flex w='160px' align='center'>
              <CustomInput w='30%' p='5px' placeholder="00" />
              <Text fontWeight='bold' m='4px'>-</Text>
              <CustomInput p='5px' placeholder="00000000" />
            </Flex>
          </Flex>
          <ErrMsg color='#000000' msg='將作為未來行動裝置之認證使用' />
        </FormControl>
        <FormControl w='80%'>
          <Flex align='center'>
            <FormLabel w='20%'>聯絡電話</FormLabel>
            <Flex>
              <Flex w='160px' align='center'>
                <CustomInput w='30%' p='5px' bgColor='white' placeholder="00" />
                <Text fontWeight='bold' m='4px'>-</Text>
                <CustomInput p='5px' placeholder="00000000" />
              </Flex>
              <Flex w='80px' align='center'>
                <Text fontWeight='bold' m='4px'>#</Text>
                <CustomInput p='5px' placeholder="" />
              </Flex>
            </Flex>
          </Flex>
        </FormControl>
        <FormControl w='80%' isRequired>
          <Flex align='center'>
            <FormLabel w='20%'>Email</FormLabel>
            <CustomInput w='60%' placeholder='請輸入電子信箱' />
          </Flex>
          <ErrMsg color='#000000' msg='建議不要使用微軟電子信箱如 hotmail, livemail...' />
        </FormControl>
        <FormControl w='80%' isRequired>
          <Flex align='center'>
            <FormLabel w='20%'>備用 Email</FormLabel>
            <CustomInput w='60%' placeholder='請輸入備用信箱' />
          </Flex>
        </FormControl>
      </Stack>
      <Flex w='40%' justify='center' mt='20px'>
        <CustomButton onClick={() => history.goBack()}>上一步</CustomButton>
        <Flex w='40px' />
        <CustomButton onClick={() => history.push('/registration/5')}>下一步</CustomButton>
      </Flex>
    </Flex>
  )
}
