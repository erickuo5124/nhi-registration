import React from 'react'
import { Grid, GridItem, Text} from '@chakra-ui/react'

import Card from './Card'

export default function Info() {
  return (
    <Grid
      bg='primary.3'
      borderRadius="24px"
      templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
      p='40px 50px'
      gap={10}
    >
      <GridItem colSpan={[1, 1, 1, 2]}>
        <Text
          color="primary.4"
          fontSize="18px"
          fontWeight="medium"
        >
          此網站能協助您：
        </Text>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          color="primary.6"
          fontSize="18px"
          fontWeight="medium"
        >
          ◉ 認證行動裝置，連接健保快易通 app
        </Text>
        <Card
          img={'app.png'}
          title={'連接健保快易通 app'}
          content={'健保署全新打造「全民健保行動快易通｜健康存‪摺」App 介面設計及使用服務流程，優化使用者體驗，提升健保網路服務的易用性，讓您隨時隨地掌握健保署的各項資訊！'}
          linkText={'前往了解健保快易通 →'}
          href={'https://www.nhi.gov.tw/Content_List.aspx?n=98F22C99E092DC9A&topn=CA428784F9ED78C9'}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          color="primary.6"
          fontSize="18px"
          fontWeight="medium"
        >
          ◉ 建立帳號並連接健康存摺，查看個人醫療資訊
        </Text>
        <Card
          img={'healthInfo.png'}
          title={'健康存摺簡介'}
          content={'以儲存自身健康資料之概念為基礎，所開發的線上健康資料查詢系統。民眾可以透過網路，使用自然人憑證或健保卡通過身分驗證後，即可申請下載自己的「健康存摺」。'}
          linkText={'前往了解健康存摺 →'}
          href={'https://myhealthbank.nhi.gov.tw/IHKE0002/IHKE0002S01.aspx'}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          color="primary.6"
          fontSize="18px"
          fontWeight="medium"
        >
          ◉ 更新您的健保卡服務個人資料
        </Text>
        <Card
          img={'personalInfo.png'}
          title={'健保卡網路服務註冊'}
          content={'建立帳號並即刻開始使用網路健保資訊系統'}
          linkText={'開始建立帳號 →'}
          href={'/registration'}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          color="primary.6"
          fontSize="18px"
          fontWeight="medium"
        >
          ◉ 建立帳號並連接個人健保資料，查看個人投保資訊
        </Text>
        <Card
          img={'insurance.png'}
          title={'健保個人資料簡介'}
          content={'此網站能夠查詢個人未繳保險費與簡易分期申請、個人減免補助資料及補充保險費免扣繳狀態、重大傷病審查進度、自墊醫療費用核退進度、事前審查進度等個人健保資料。'}
          linkText={'前往了解健保卡服務 →'}
          href={'https://eservice.nhi.gov.tw/Personal1/System/mLogin.aspx'}
        />
      </GridItem>
    </Grid>
  )
}
