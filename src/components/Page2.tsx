import type React from 'react';
import { Box, Heading, Image, Button } from '@chakra-ui/react';

import { PageProps } from '../types';
import logo from '../assets/logo.svg';

const Page2: React.FC<PageProps> = ({ onRouteChange }) => {
    return (
        <Box textAlign="center">
            <Box>
                <Image src={logo} fallbackSrc={logo} alt="logo image" mx="auto" />
                <Heading as="h1" size="2xl" fontFamily="monospace" fontWeight={200} color="green.800" m={5}>Code-Splitting Page 2</Heading>
            </Box>
            <Button colorScheme="orange" size="lg" onClick={() => onRouteChange('page1')}>Page 1</Button>
            <Button colorScheme="orange" size="lg" isDisabled>Page 2</Button>
            <Button colorScheme="orange" size="lg" onClick={() => onRouteChange('page3')}>Page 3</Button>
        </Box>
    );
};

export default Page2;
