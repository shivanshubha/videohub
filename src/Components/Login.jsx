import {
  Button,
  Text,
  Container,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Heading textAlign={'center'}>Welcome Back</Heading>
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

          <Button variant={'Link'} alignSelf={'flex-end'}>
            <Link to="/forgetpassword">Forget Password?</Link>
          </Button>

          <Button colorScheme={'purple'} type="submit">
            Login
          </Button>

          <Text textAlign={'right'}>
            New User?
            <Button variant={'Link'} color={'purple'} marginBottom={'10px'}>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
