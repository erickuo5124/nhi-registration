import React from 'react'
import { Flex, Text, Image, Stack, Link } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router'

import Card from '../../Images/NHICard.svg'
import FilledCard from '../../Images/FilledNHICard.svg'
import { DownloadButton, CustomButton } from '../../Styles/Custom'

export default function NHICard() {
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
            健保卡讀取確認
          </Text>
        </Flex>
        <Flex w='60%' justify='space-between' align='center'>
          <Image src={Card} />
          <Stack spacing={4}>
            <DownloadButton>檢測元件安裝設定</DownloadButton>
            <DownloadButton>讀取健保卡</DownloadButton>
            <Link
              color='#363636'
              alignSelf='end'
              fontSize='14px'
              fontWeight='medium'
            >
              發生錯誤？
            </Link>
          </Stack>
        </Flex>
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
        <CustomButton onClick={() => history.push('/registration/4')}>下一步</CustomButton>
      </Flex>
    </Flex>
  )
}
