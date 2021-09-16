import React from 'react'
import { Flex, Text, Stack, Link } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router'

import { CustomInput, CustomButton } from '../../Styles/Custom'

export default function LoginForm() {
  const history = useHistory()
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
        <Flex w='60%' >
          <Text
            fontSize='24px'
            fontWeight='bold'
          >
            填寫登入資訊
          </Text>
        </Flex>
        <Stack
          w='60%'
          spacing={8}
        >
          <Flex align='center'>
            <Text w='120px'>帳號</Text>
            <CustomInput w='180px' value='陳小美' />

            <WarningIcon m='0 10px' />
            <Text
              color='#363636'
              fontSize='16px'
            >
              帳號即是您的健保卡姓名
            </Text>
          </Flex>
          <Stack w='300px' spacing={2}>
            <Flex align='center'>
              <Text w='120px'>密碼</Text>
              <CustomInput w='180px' type='password' placeholder='請輸入密碼' />
            </Flex>
            <Link
              alignSelf='end'
              color='#363636'
              fontSize='14px'
              fontWeight='medium'
            >
              忘記密碼
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Text
        color='primary.2'
        fontSize='16px'
        mt='10px'
        mb='20px'
      >
        <WarningIcon mr='5px' />
        為確保個人資訊安全權益，註冊時需要您利用讀卡機讀取健保卡，並填寫戶號等基本資料，造成不便還請見諒。
      </Text>
      <Flex w='40%' justify='center'>
        <CustomButton onClick={() => history.goBack()}>上一步</CustomButton>
        <Flex w='40px' />
        <CustomButton onClick={() => history.push('/main')}>登入</CustomButton>
      </Flex>
    </Flex>
  )
}
