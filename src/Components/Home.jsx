import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container
        maxW={'container.x1'}
        minH={'100vh'}
        p={'16'}
        w={'77%'}
        // bgColor={'red'}
      >
        <Heading
          textTransform={'uppercase'}
          textAlign={'center'}
          // textDecoration={'underline'}
          w={'fit-content'}
          m={'auto'}
          borderBottom={'2px solid'}
        >
          Service
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '400']}
            filter={'hue-rotate(-130deg)'}
            m={'23px'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['40', '4']}
            textAlign={'center'}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            magni illo dolore, consequatur minus consequuntur unde odit eius
            velit totam distinctio molestiae officia nam, dolorum possimus enim
            cumque saepe aliquam voluptas at reprehenderit vero! Velit aliquam
            quisquam quis vero repudiandae harum illo? Est, veritatis dolor unde
            ad debitis ratione aperiam laborum ab, voluptatibus delectus
            explicabo, qui dignissimos libero voluptatem. Atque sint asperiores
            esse voluptatibus, qui porro fuga animi! Provident incidunt, maiores
            culpa necessitatibus voluptatibus error beatae optio numquam amet
            facilis nesciunt et totam distinctio cupiditate laboriosam eius
            maxime, eum possimus labore minus ad ab modi animi! Ex ipsam
            veritatis tenetur assumenda, voluptatem necessitatibus quis incidunt
            at, voluptate possimus, eius praesentium pariatur. Nulla obcaecati
            quis blanditiis! Ab officia labore ducimus architecto, repellendus,
            doloribus aspernatur optio aliquam minima laboriosam dignissimos
            obcaecati, modi laborum? Aliquid quisquam ad at quasi rerum hic quia
            exercitationem, accusamus repellat ipsa. Veritatis ipsa labore
            delectus velit harum, placeat voluptatum vitae rerum atque corporis
            temporibus nemo alias doloremque earum architecto autem distinctio
            hic illum repellat unde fugiat fugit. Rem recusandae corporis quos,
            fugiat quasi quo libero quibusdam voluptas necessitatibus eveniet.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  size: '4xl',
  p: '4',
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Gaming is Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Night light Gaming
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
