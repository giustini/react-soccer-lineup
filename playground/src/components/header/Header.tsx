import React from 'react';
import { Box, Code, Heading, Text } from '@chakra-ui/react';

import type { ResolvedColorMode } from '../../hooks/useColorMode.ts';
import { MoonIcon, SunIcon } from '../Icons.tsx';

const Header: React.FC<{ resolvedMode: ResolvedColorMode; toggleColorMode(): void }> = ({
  resolvedMode,
  toggleColorMode,
}) => {
  return (
    <Box textAlign='center' position='relative'>
      <Box
        as='button'
        onClick={toggleColorMode}
        position={{ base: 'static', md: 'absolute' }}
        right={{ md: 0 }}
        top={{ md: 0 }}
        mb={{ base: 4, md: 0 }}
        p={2}
        borderRadius='md'
        bg={resolvedMode === 'dark' ? 'gray.700' : 'gray.200'}
        _hover={{ bg: resolvedMode === 'dark' ? 'gray.600' : 'gray.200' }}
        transition='background 0.2s'
        title={`Switch to ${resolvedMode === 'dark' ? 'light' : 'dark'} mode`}
        cursor='pointer'
        display='inline-flex'
        alignItems='center'
        justifyContent='center'
        width='40px'
        height='40px'
        color={resolvedMode === 'dark' ? 'gray.400' : 'gray.500'}
      >
        {resolvedMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Box>
      <Heading
        size={{ base: '2xl', md: '4xl' }}
        color={resolvedMode === 'dark' ? 'green.300' : 'green.600'}
        mb={2}
      >
        React Soccer Lineup
      </Heading>
      <Text
        color={resolvedMode === 'dark' ? 'gray.300' : 'gray.600'}
        fontSize={{ base: 'sm', md: 'md' }}
      >
        Playground with version: <Code>1.0.0-beta.10</Code>
      </Text>
    </Box>
  );
};

export default Header;
