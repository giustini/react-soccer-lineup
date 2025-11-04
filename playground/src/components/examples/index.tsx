import React from 'react';
import {Badge, Box, Card, Heading, SimpleGrid, VStack} from "@chakra-ui/react";
import SoccerLineUp from "react-soccer-lineup";

import {teams} from "../../data/teams.ts";
import type {ResolvedColorMode} from "../../hooks/useColorMode.ts";

const Examples: React.FC<{ resolvedMode: ResolvedColorMode }> = ({ resolvedMode }) => {
  return (
    <>
      <Heading size="lg" textAlign="center">
        Configuration Examples
      </Heading>

      <SimpleGrid columns={{base: 1, lg: 2}} gap={6}>
      <Card.Root>
        <Card.Body>
          <VStack gap={4} align="stretch">
            <Box display='flex' gap={4}>
              <Badge mb={2}>
                responsive size
              </Badge>
              <Badge mb={2}>
                circles pattern
              </Badge>
              <Badge mb={2}>
                color #03A6A1
              </Badge>
              <Badge mb={2}>
                4-4-2
              </Badge>
              <Badge mb={2}>
                4-2-3-1
              </Badge>
            </Box>
            <Heading size="sm">Different formations</Heading>

            <Box
              p={4}
              bg={resolvedMode === 'dark' ? 'gray.800' : 'white'}
              borderRadius="lg"
              border="1px solid"
              borderColor={resolvedMode === 'dark' ? 'gray.700' : 'gray.200'}
              overflow="auto"
              display="flex"
              justifyContent="center"
            >
              <SoccerLineUp
                size="responsive"
                pattern="circles"
                color="#03A6A1"
                homeTeam={teams[2].home}
                awayTeam={teams[2].away}/>
            </Box>
          </VStack>
        </Card.Body>
      </Card.Root>

      <Card.Root>
        <Card.Body>
          <VStack gap={4} align="stretch">
            <Box display='flex' gap={4}>
              <Badge mb={2}>
                responsive size
              </Badge>
              <Badge mb={2}>
                color #C1785A
              </Badge>
              <Badge mb={2}>
                5 players
              </Badge>
            </Box>
            <Heading size="sm">Few players</Heading>
            <Box
              p={4}
              bg={resolvedMode === 'dark' ? 'gray.800' : 'white'}
              borderRadius="lg"
              border="1px solid"
              borderColor={resolvedMode === 'dark' ? 'gray.700' : 'gray.200'}
              overflow="auto"
            >
              <SoccerLineUp
                size="responsive"
                color="#C1785A"
                homeTeam={teams[3].home}
                awayTeam={teams[3].away}/>
            </Box>
          </VStack>
        </Card.Body>
      </Card.Root>
    </SimpleGrid>

      <SimpleGrid columns={{base: 1, lg: 1}} gap={6}>
      <Card.Root>
        <Card.Body>
          <VStack gap={4} align="stretch">
            <Box display='flex' gap={4}>
              <Badge mb={2}>
                responsive size
              </Badge>
              <Badge mb={2}>
                squares pattern
              </Badge>
              <Badge mb={2}>
                color #327d61
              </Badge>
              <Badge mb={2}>
                with names
              </Badge>
            </Box>
            <Heading size="sm">Players with names</Heading>
            <Box
              p={4}
              bg={resolvedMode === 'dark' ? 'gray.800' : 'white'}
              borderRadius="lg"
              border="1px solid"
              borderColor={resolvedMode === 'dark' ? 'gray.700' : 'gray.200'}
              overflow="auto"
              display="flex"
              justifyContent="center"
            >
              <SoccerLineUp
                size="responsive"
                pattern="squares"
                color="#327d61"
                homeTeam={teams[4].home}
                awayTeam={teams[4].away}/>
            </Box>
          </VStack>
        </Card.Body>
      </Card.Root>
    </SimpleGrid></>
  );
};

export default Examples;