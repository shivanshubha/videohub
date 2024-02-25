import {
  Button,
  Text,
  Container,
  Heading,
  Input,
  VStack,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} height={'100vh'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16px'}
        >
          <Heading textAlign={'center'}>Video Hub</Heading>
          <Avatar alignSelf={'center'} />

          <Input
            placeholder={'Name'}
            type="text"
            required
            focusBorderColor={'purple.500'}
            // border={'none'}
          />
          <Input
            placeholder={'Email'}
            type="email"
            required
            focusBorderColor={'purple.500'}
            // border={'none'}
          />

          <Input
            placeholder={'Password'}
            type="password"
            required
            focusBorderColor={'purple.500'}
            // border={'none'}
          />

          <Button colorScheme={'purple'} type="submit">
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Signed Up?
            <Button variant={'Link'} color={'purple'} marginBottom={'10px'}>
              <Link to="/login">Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
