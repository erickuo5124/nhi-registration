import React from 'react'
import { Flex, Stack, Text, Image } from '@chakra-ui/react';
import styled from 'styled-components';

import editIcon from '../Images/main/edit.svg'
import lockIcon from '../Images/main/lock.svg'
import phoneIcon from '../Images/main/phone.svg'
import managenentIcon from '../Images/main/management.svg'
import personIcon from '../Images/main/person.svg'
import bookIcon from '../Images/main/book.svg'

export default function Main() {
  const ServiceIcon = ({ text, icon }) => (
    <Stack align='center' spacing={6} cursor='pointer'>
      <Flex
        w='140px'
        h='140px'
        borderRadius='50%'
        bgColor='primary.4'
        justify='center'
        align='center'
      >
        <Image src={icon} />
      </Flex>
      <Text
        fontWeight='bold'
        fontSize='18px'
        color='primary.4'
      >
        {text}
      </Text>
    </Stack>
  )
  return (
    <Stack
      m='40px 176px'
      p='40px'
      align='center'
      bgColor='primary.3'
      borderRadius='8px'
      spacing={12}
    >
      <Stack w='100%' align='center' spacing={5}>
        <CustomTitle>健保註冊資訊管理</CustomTitle>
        <Flex
          w='50%'
          justify='space-around'
          direction={['column', 'column', 'column', 'row']}
        >
          <ServiceIcon text={'註冊密碼變更'} icon={lockIcon} />
          <ServiceIcon text={'基本資料異動'} icon={editIcon} />
        </Flex>
      </Stack>
      <Stack w='100%' align='center' spacing={5}>
        <CustomTitle>健保快易通 APP</CustomTitle>
        <Flex
          w='50%'
          justify='space-around'
          direction={['column', 'column', 'column', 'row']}
        >
          <ServiceIcon text={'行動裝置認證'} icon={phoneIcon} />
          <ServiceIcon text={'行動裝置管理作業'} icon={managenentIcon} />
        </Flex>
      </Stack>
      <Stack w='100%' align='center' spacing={5}>
        <CustomTitle>其他健保服務</CustomTitle>
        <Flex
          w='50%'
          justify='space-around'
          direction={['column', 'column', 'column', 'row']}
        >
          <ServiceIcon text={'健康存摺'} icon={bookIcon} />
          <ServiceIcon text={'個人健保資料'} icon={personIcon} />
        </Flex>
      </Stack>
    </Stack>
  )
}

const CustomTitle = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`
