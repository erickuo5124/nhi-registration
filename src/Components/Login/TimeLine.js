import { Flex, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import styled from 'styled-components'

export default function TimeLine({ step }) {
  return (
    <Flex w='100%' justify='center' mb='30px!important'>
      <Stack align='center' position='relative' flexGrow={1}>
        <NumIcon bgColor={step >= 0 ? 'primary.2' : '#B8CEFB'}>1</NumIcon>
        <Line bgColor={step >= 1 ? 'primary.2' : '#B5B5B5'}/>
        <Text fontWeight='bold'>安裝讀卡機元件</Text>
      </Stack>
      <Stack align='center' position='relative' flexGrow={1}>
        <NumIcon bgColor={step >= 1 ? 'primary.2' : '#B8CEFB'}>2</NumIcon>
        <Line bgColor={step >= 2 ? 'primary.2' : '#B5B5B5'}/>
        <Text fontWeight='bold'>健保卡讀取確認</Text>
      </Stack>
      <Stack align='center' position='relative' flexGrow={1}>
        <NumIcon bgColor={step >= 2 ? 'primary.2' : '#B8CEFB'}>3</NumIcon>
        <Text fontWeight='bold'>填寫登入資訊</Text>
      </Stack>
    </Flex>
  )
}

const NumIcon = styled(Flex)`
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border-radius: 50%;
`

const Line = styled(Flex)`
  position: absolute;
  top: 6px;
  left: 50%;
  z-index: -100;
  width: 100%;
  height: 2px;
`
