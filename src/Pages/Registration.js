import React from 'react'
import { useParams } from 'react-router-dom'
import { Flex, Stack, Text } from '@chakra-ui/layout'

import Info from '../Components/Registration/Info'
import Consent from '../Components/Registration/Consent'
import TimeLine from '../Components/Registration/TimeLine'
import Install from '../Components/Registration/Install'
import NHICard from '../Components/Registration/NHICard'
import BasicInfo from '../Components/Registration/BasicInfo'
import PasswdInfo from '../Components/Registration/PasswdInfo'
import Confirm from '../Components/Registration/Confirm'
import Finish from '../Components/Registration/Finish'

export default function Registration() {
  const { step } = useParams()
  const intStep = parseInt(step)
  const formComponents = [
    <Info />,
    <Consent />,
    <Install />,
    <NHICard />,
    <BasicInfo />,
    <PasswdInfo />,
    <Confirm />,
    <Finish />
  ]
  return (
    <Stack p='40px 176px'>
      <Flex w='100%' justify='center' mb='30px'>
        <Text
          color='primary.4'
          fontSize='28px'
          fontWeight='bold'
        >
          註冊健保卡網路服務系統
        </Text>
      </Flex>
      {intStep - 1 > 0 && <TimeLine step={intStep - 1} />}
      {formComponents[intStep]}
    </Stack>
  )
}
