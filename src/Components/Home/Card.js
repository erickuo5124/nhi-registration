import React, { useState } from 'react'
import { Flex, Image, Text, Link } from '@chakra-ui/react'
import styled from 'styled-components'

export default function Card({ img, title, content, linkText, href }) {
  const [hover, setHover] = useState(false)
  const handleOver = () => setHover(true)
  const handleLeave = () => setHover(false)
  return (
    <Flex mt='20px' w='100%' position="relative" onMouseOver={handleOver} onMouseLeave={handleLeave}>
      <Image w='100%' src={`images/${img}`} objectFit='cover' />
      {hover && <Overlay direction="column" p='38px 36px' justify='space-around'>
        <Text
          alignSelf='center'
          fontSize='18px'
          fontWeight='bold'
          color='primary.5'
        >
          {title}
        </Text>
        <Text
          fontSize='16px'
          fontWeight='medium'
          color='primary.5'
        >
          {content}
        </Text>
        <Link
          fontSize='18px'
          fontWeight='bold'
          color='primary.3'
          alignSelf='end'
          href={href}
        >
          {linkText}
        </Link>
      </Overlay>}
    </Flex>
  )
}

const Overlay = styled(Flex)`
  position: absolute;
  top:0px;
  background-color: rgba(54, 54, 54, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 12px;
`