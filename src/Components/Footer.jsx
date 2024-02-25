import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get new update
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder={'Enter Your Here....'}
              outline={'none'}
              border={'none'}
              borderRadius={'none'}
              focusBorderColor="none"
            />
            <Button p={'0'} colorScheme="purple" variant={'ghost'}>
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} alignItems={'center'}>
            Video Hub
          </Heading>
          <Text>All Right Reserved @2024</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading textTransform={'uppercase'} size={'md'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a
              target={'blank'}
              href="https://www.youtube.com/channel/UClIVGrwUM6_Rxt-h7lXIDmA"
            >
              <AiFillYoutube color="white" />{' '}
            </a>
          </Button>

          <Button variant={'link'} colorScheme="whiteAlpha">
            <a
              target={'blank'}
              href="https://www.instagram.com/shivanshu_bharti_1/"
            >
              <AiFillInstagram color="white" />
            </a>
          </Button>

          <Button variant={'link'} colorScheme="whiteAlpha">
            <a target={'blank'} href="https://github.com/shivanshubha">
              <AiFillGithub color="white" />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
