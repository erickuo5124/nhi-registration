import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/layout'
import { WarningIcon } from '@chakra-ui/icons'
import React from 'react'
import { CustomButton } from '../../Styles/Custom'
import { useHistory } from 'react-router'

export default function Info() {
  const history = useHistory();
  return (
    <Flex direction='column' align='center'>
      <Flex
        w='100%'
        direction='column'
        justify='center'
        align='center'
        bgColor='primary.3'
        borderRadius='8px'
        p='60px 0'
      >
        <Text
          fontSize='24px'
          fontWeight='bold'
        >
          請先備齊註冊所需設備及文件
        </Text>
        <UnorderedList
          mt='45px'
          spacing={6}
          styleType='none'
          fontSize='18px'
          fontWeight='bold'
        >
          <ListItem display='flex'>
            <Text color='red' mr='10px'>*</Text>
            健保卡
          </ListItem>
          <ListItem display='flex'>
            <Text color='red' mr='10px'>*</Text>
            讀卡機
          </ListItem>
          <ListItem display='flex'>
            <Text color='red' mr='10px'>*</Text>
            戶口名簿
          </ListItem>
        </UnorderedList>
      </Flex>
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
        <CustomButton onClick={() => history.push('/')}>回首頁</CustomButton>
        <Flex w='40px' />
        <CustomButton onClick={() => history.push('./1')}>確定</CustomButton>
      </Flex>
    </Flex>
  )
}
