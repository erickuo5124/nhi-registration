import React from 'react'
import { Flex, Stack, Text, Input, FormControl, FormLabel, Select } from '@chakra-ui/react'
import { CustomButton } from '../../Styles/Custom'
import { useHistory } from 'react-router'
import { TriangleDownIcon } from '@chakra-ui/icons'

export default function BasicInfo() {
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
        <Flex w='80%'>
          <Text
            fontSize='24px'
            fontWeight='bold'
          >
            填寫基本資料
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
            <FormLabel w='20%'>姓名</FormLabel>
            <Input w='160px' bgColor='white' placeholder="請輸入姓名" />
          </Flex>
        </FormControl>
        <FormControl w='80%' isRequired>
          <Flex align='center'>
            <FormLabel w='20%'>戶號</FormLabel>
            <Input w='160px' bgColor='white' placeholder="請輸入戶號" />
            <Text ml='20px' borderBottom='1px solid black'>圖示</Text>
          </Flex>
        </FormControl>
        <FormControl w='80%' isRequired>
          <Flex align='center'>
            <FormLabel w='20%'>戶籍地址</FormLabel>
            <Select mr='20px' w='16%' bgColor='white' placeholder='請選擇縣市' icon={<TriangleDownIcon fontSize='sm' />} >
              <option>台北市</option>
            </Select>
            <Select mr='20px' w='22%' bgColor='white' placeholder='請選擇鄉鎮市區' icon={<TriangleDownIcon fontSize='sm' />} >
              <option>大安區</option>
            </Select>
            <Select mr='20px' w='16%' bgColor='white' placeholder='請選擇村里' icon={<TriangleDownIcon fontSize='sm' />} >
              <option>民輝里</option>
            </Select>
            <Input w='15%' bgColor='white' placeholder="請輸入鄰" />
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
