import React from 'react'
import { Flex, Text, OrderedList, ListItem, Stack } from '@chakra-ui/react'
import styled from 'styled-components'
import { CustomButton } from '../../Styles/Custom'
import { useHistory } from 'react-router'

export default function Consent() {
  const history = useHistory()
  return (
    <Stack>
      <Flex
        w='100%'
        direction='column'
        justify='center'
        bgColor='primary.3'
        borderRadius='8px'
        p='40px'
      >
        <Text fontSize='18px' fontWeight='bold' mb='20px'>全民健康保險網路服務註冊管理作業要點</Text>
        <OrderedList styleType='none' m='0'>
          <CustomLi>
            <Text>ㄧ、</Text>為提升行政效率，加強便民服務，全民健康保險保險人（以下稱保險人）提供使用者申辦保險人提供之健保業務及其他網路服務（以下稱本服務），特訂定本要點。
          </CustomLi>
          <CustomLi>
            <Text>二、</Text>
            <Stack>
              <Text>本要點用詞定義如下：</Text>
              <OrderedList styleType='none'>
                <CustomLi>
                  <Text>（ㄧ）</Text>
                  為提升行政效率，加強便民服務，全民健康保險保險人（以下稱保險人）提供使用者申辦保險人提供之健保業務及其他網路服務（以下稱本服務），特訂定本要點。
                </CustomLi>
                <CustomLi>
                  <Text>（二）</Text>
                  基本資料：係指可供保險人比對並得以識別使用者身分之資料。
                </CustomLi>
                <CustomLi>
                  <Text>（三）</Text>
                  註冊：係指使用者申請以帳號、密碼或保險人認可具有身分查證功能之載具，透過網路或於保險人指定之處所申請使用本服務之程序。
                </CustomLi>
              </OrderedList>
            </Stack>
          </CustomLi>
          <CustomLi>
            <Text>三、</Text>保險人於全球資訊網建置網路服務區，供使用者申請以載具、帳號、密碼註冊並同意遵守本要點及填寫基本資料後，以電子資料傳送，即可完成申請作業。
          </CustomLi>
          <CustomLi>
            <Text>四、</Text>
            <Stack>
              <Text>保險人審核使用者申請之基本資料，以電子郵件通知申請結果，經使用者點選確認信，始完成註冊程序。但透過下列管道申請者，得免透過電子郵件確認：</Text>
              <OrderedList styleType='none'>
                <CustomLi>
                  <Text>（ㄧ）</Text>
                  為提升行政效率，加強便民服務，全民健康保險保險人（以下稱保險人）提供使用者申辦保險人提供之健保業務及其他網路服務（以下稱本服務），特訂定本要點。
                </CustomLi>
                <CustomLi>
                  <Text>（二）</Text>
                  基本資料：係指可供保險人比對並得以識別使用者身分之資料。
                </CustomLi>
                <CustomLi>
                  <Text>（三）</Text>
                  註冊：係指使用者申請以帳號、密碼或保險人認可具有身分查證功能之載具，透過網路或於保險人指定之處所申請使用本服務之程序。
                </CustomLi>
              </OrderedList>
            </Stack>
          </CustomLi>

          <CustomLi>
            <Text>五、</Text>保險人得提供行政機關（構）本服務身分查證機制，供完成註冊之使用者申辦其他網路服務。
          </CustomLi>
          <CustomLi>
            <Text>六、</Text>使用者使用本服務應自行安裝所需之電腦軟體、硬體，以及其他與安全相關之設備，應自負注意義務；安裝產生之費用及風險，由使用者自行負擔。
          </CustomLi>
          <CustomLi>
            <Text>七、</Text>本服務提供使用者以電子資料傳輸方式申辦健保業務及其他網路服務，使用者於各項服務及功能頁面點選同意或確認等功能鍵時，即視為正式意思表示，免送書面申請表。
          </CustomLi>
          <CustomLi>
            <Text>八、</Text>使用者註冊時提供不完整、錯誤或不實資料，或註冊後未及時更新基本資料，保險人有權暫停或終止使用者帳號，並拒絕提供全部或部分服務。
          </CustomLi>
          <CustomLi>
            <Text>九、</Text>使用者應妥善保管載具、帳號、密碼並僅限使用者或經使用者授權代辦本保險相關事宜之代理人使用，不得出租、出借、移轉或讓與其他人。如有上開出租、出借、移轉或讓與等情事者，保險人有權暫停或終止使用者帳號，並拒絕提供全部或部分服務。
          </CustomLi>
          <CustomLi>
            <Text>十、</Text>使用者於使用本服務忘記密碼或輸入密碼連續錯誤時，保險人得停止其使用本服務；使用者應依保險人規定之程序辦理，始得恢復使用。
          </CustomLi>
          <CustomLi>
            <Text whiteSpace='nowrap'>十一、</Text>使用者發現有第三人冒用或盜用其載具、帳號、密碼等情事，應立即通知保險人停止使用本服務，使用者未通知保險人造成之損害，由使用者自行負擔。
          </CustomLi>
          <CustomLi>
            <Text whiteSpace='nowrap'>十二、</Text>使用者透過網路申請註冊或使用本服務，應於保險人於全球資訊網站公告之服務時間為之。保險人因相關系統設備進行遷移、維護或其他因素，造成本服務之暫停或中斷，使用者得至保險人之辦公處所申辦或待系統恢復服務後再度使用。
          </CustomLi>
          <CustomLi>
            <Text whiteSpace='nowrap'>十三、</Text>保險人提供之服務項目於使用者註冊完成後如有變動，使用者無需另行註冊，即可申辦該變動後之服務項目。使用者申辦前項之服務項目時，即視為同意依該服務項目之相關規定辦理。
          </CustomLi>
          <CustomLi>
            <Text whiteSpace='nowrap'>十四、</Text>保險人應保存使用者註冊之紀錄，對於使用者登錄資料應負保密之責，並禁止為公務以外之目的使用。
          </CustomLi>
          <CustomLi>
            <Text whiteSpace='nowrap'>十五、</Text>保險人對於認可之載具種類及提供行政機關（構）本服務身分查驗機制，供完成註冊之使用者申辦其他網路服務等資訊，應同步公布於全球資訊網站。
          </CustomLi>
        </OrderedList>
        <Text mt='20px' alignSelf='end' lineHeight='40px'>103 年 8 月 19 日健保承字第 1030080065 號令發布，自 103 年 10 月 1 日生效</Text>
        <Text alignSelf='end' lineHeight='40px'>104 年 9 月 18 日健保承字第 1040080077 號令修正發布，自 104 年 10 月 1 日生效</Text>
        <Text alignSelf='end' lineHeight='40px'>107 年 8 月 6 日健保承字第 1070030482 號令修正發布，自 107 年 8 月 15 日生效</Text>
      </Flex>
      <Flex w='100%' justify='center' pt='30px'>
        <CustomButton onClick={()=>history.goBack()}>上一步</CustomButton>
        <Flex w='40px'/>
        <CustomButton onClick={()=>history.push('/registration/2')}>已閱讀完畢</CustomButton>
      </Flex>
    </Stack>
  )
}

const CustomLi = styled(ListItem)`
  display: flex;
  line-height: 40px;
`