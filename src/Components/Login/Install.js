import { Tabs, TabList, Tab, TabPanel, TabPanels, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { WarningIcon } from '@chakra-ui/icons'
import { CustomButton } from '../../Styles/Custom'
import { useHistory } from 'react-router'
import { DownloadButton } from '../../Styles/Custom'

export default function Install() {
  const history = useHistory()
  return (
    <Flex direction='column' align='center' w='100%'>
      <Tabs variant="enclosed" w='100%'>
        <TabList display='flex' justifyContent='space-between'>
          <CustomTab _selected={{ backgroundColor: '#1E88E5', marginBottom: '0px' }}>Windows</CustomTab>
          <CustomTab _selected={{ backgroundColor: '#1E88E5', marginBottom: '0px' }}>Mac</CustomTab>
          <CustomTab _selected={{ backgroundColor: '#1E88E5', marginBottom: '0px' }}>Linux(Ubuntu)</CustomTab>
          <CustomTab _selected={{ backgroundColor: '#1E88E5', marginBottom: '0px' }}>Linux(Fedora)</CustomTab>
        </TabList>

        <TabPanels bgColor='primary.3'>
          <TabPanel p='60px 40px' align='center'>
            <Text
              fontSize='24px'
              fontWeight='bold'
            >
              請安裝讀卡機元件以利讀取健保卡
            </Text>
            <Text
              m='40px 0'
              w='30%'
              fontSize='16px'
              fontWeight='medium'
            >
              下載元件安裝檔之前，請先暫停或關閉您的防毒軟體，避免下載受到阻擋或是造成安裝失敗
            </Text>
            <Flex w='100%' justify='center'>
              <DownloadButton>
                <Text>Windows</Text>
                <Text>元件下載</Text>
              </DownloadButton>
              <Flex w='40px' />
              <DownloadButton>
                <Text>Windows</Text>
                <Text>元件安裝手冊</Text>
              </DownloadButton>
            </Flex>
          </TabPanel>
          <TabPanel p='60px 40px' align='center'>
          <Text
              fontSize='24px'
              fontWeight='bold'
            >
              請安裝讀卡機元件以利讀取健保卡
            </Text>
            <Text
              m='40px 0'
              w='30%'
              fontSize='16px'
              fontWeight='medium'
            >
              下載元件安裝檔之前，請先暫停或關閉您的防毒軟體，避免下載受到阻擋或是造成安裝失敗
            </Text>
            <Flex w='100%' justify='center'>
              <DownloadButton>
                <Text>Mac</Text>
                <Text>元件下載</Text>
              </DownloadButton>
              <Flex w='40px' />
              <DownloadButton>
                <Text>Mac</Text>
                <Text>元件安裝手冊</Text>
              </DownloadButton>
            </Flex>
          </TabPanel>
          <TabPanel p='60px 40px' align='center'>
          <Text
              fontSize='24px'
              fontWeight='bold'
            >
              請安裝讀卡機元件以利讀取健保卡
            </Text>
            <Text
              m='40px 0'
              w='30%'
              fontSize='16px'
              fontWeight='medium'
            >
              下載元件安裝檔之前，請先暫停或關閉您的防毒軟體，避免下載受到阻擋或是造成安裝失敗
            </Text>
            <Flex w='100%' justify='center'>
              <DownloadButton>
                <Text>Linux(Ubuntu)</Text>
                <Text>元件下載</Text>
              </DownloadButton>
              <Flex w='40px' />
              <DownloadButton>
                <Text>Linux(Ubuntu)</Text>
                <Text>元件安裝手冊</Text>
              </DownloadButton>
            </Flex>
          </TabPanel>
          <TabPanel p='60px 40px' align='center'>
          <Text
              fontSize='24px'
              fontWeight='bold'
            >
              請安裝讀卡機元件以利讀取健保卡
            </Text>
            <Text
              m='40px 0'
              w='30%'
              fontSize='16px'
              fontWeight='medium'
            >
              下載元件安裝檔之前，請先暫停或關閉您的防毒軟體，避免下載受到阻擋或是造成安裝失敗
            </Text>
            <Flex w='100%' justify='center'>
              <DownloadButton>
                <Text>Linux(Fedora)</Text>
                <Text>元件下載</Text>
              </DownloadButton>
              <Flex w='40px' />
              <DownloadButton>
                <Text>Linux(Fedora)</Text>
                <Text>元件安裝手冊</Text>
              </DownloadButton>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
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
        <CustomButton onClick={() => history.push('/login/1')}>下一步</CustomButton>
      </Flex>
    </Flex>
  )
}

const CustomTab = styled(Tab)`
  color: white;
  width: 24%;
  margin-bottom: 10px;
  background-color: #B2CFFF;
  padding: 10px 0;
  border-radius: 15px 15px 0 0;
  font-weight: bold;
`
