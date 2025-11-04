import { useState } from 'react';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  SimpleGrid,
  Code,
  Separator,
  Link,
} from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import { NativeSelect } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react';
import SoccerLineUp, { type PitchPattern, type PitchSize } from 'react-soccer-lineup';
import { useColorMode } from './hooks/useColorMode';
import { teams } from './data/teams.ts';
import { createTeamWithCallbacks, applyTeamColors } from './utils/teamUtils';
import Examples from './components/examples';
import Header from './components/header/Header.tsx';

function App() {
  const { resolvedMode, toggleColorMode } = useColorMode();
  const [selectedSize, setSelectedSize] = useState<PitchSize>('responsive');
  const [selectedPattern, setSelectedPattern] = useState<PitchPattern | undefined>('lines');
  const [selectedHomeFormation, setSelectedHomeFormation] = useState<string>('4-4-2');
  const [selectedAwayFormation, setSelectedAwayFormation] = useState<string>('4-4-2');
  const [pitchColor, setPitchColor] = useState('#588f58');
  const [showHomeTeam, setShowHomeTeam] = useState(true);
  const [showAwayTeam, setShowAwayTeam] = useState(false);

  const [homeTeamColors, setHomeTeamColors] = useState({
    color: '#ffffff',
    borderColor: '#333333',
    numberColor: '#333333',
    goalkeeperColor: '#ffffff',
  });

  const [awayTeamColors, setAwayTeamColors] = useState({
    color: '#333333',
    borderColor: '#ffffff',
    numberColor: '#ffffff',
    goalkeeperColor: '#333333',
  });

  const mainHomeTeam = teams[1][selectedHomeFormation];
  const mainAwayTeam = teams[1][selectedAwayFormation];

  const homeTeamWithColors = applyTeamColors(mainHomeTeam, homeTeamColors);
  const awayTeamWithColors = applyTeamColors(mainAwayTeam, awayTeamColors);

  const homeTeam = showHomeTeam ? createTeamWithCallbacks(homeTeamWithColors, 'Home') : undefined;
  const awayTeam = showAwayTeam ? createTeamWithCallbacks(awayTeamWithColors, 'Away') : undefined;

  return (
    <Box minH='100vh' bg={resolvedMode === 'dark' ? 'gray.900' : 'gray.50'} py={8}>
      <Container maxW='1200px'>
        <VStack gap={8} align='stretch'>
          <Header resolvedMode={resolvedMode} toggleColorMode={toggleColorMode} />

          <Card.Root>
            <Card.Body>
              <Box
                p={4}
                bg={resolvedMode === 'dark' ? 'gray.800' : 'white'}
                borderRadius='lg'
                border='1px solid'
                borderColor={resolvedMode === 'dark' ? 'gray.700' : 'gray.200'}
                overflow='auto'
              >
                <Box>
                  <SoccerLineUp
                    size={selectedSize}
                    pattern={selectedPattern}
                    color={pitchColor}
                    homeTeam={homeTeam}
                    awayTeam={awayTeam}
                  />
                </Box>
              </Box>
            </Card.Body>
          </Card.Root>

          <Card.Root>
            <Card.Body>
              <VStack gap={6} align='stretch'>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} gap={4}>
                  <Box>
                    <Text fontSize='sm' fontWeight='semibold' mb={2}>
                      Pitch size
                    </Text>
                    <NativeSelect.Root>
                      <NativeSelect.Field
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value as PitchSize)}
                      >
                        <option value='small'>Small</option>
                        <option value='normal'>Normal</option>
                        <option value='big'>Big</option>
                        <option value='responsive'>Responsive</option>
                      </NativeSelect.Field>
                    </NativeSelect.Root>
                  </Box>

                  <Box>
                    <Text fontSize='sm' fontWeight='semibold' mb={2}>
                      Pitch pattern
                    </Text>
                    <NativeSelect.Root>
                      <NativeSelect.Field
                        value={selectedPattern || ''}
                        onChange={(e) =>
                          setSelectedPattern(
                            e.target.value ? (e.target.value as PitchPattern) : undefined
                          )
                        }
                      >
                        <option value=''>No pattern</option>
                        <option value='lines'>Lines</option>
                        <option value='squares'>Squares</option>
                        <option value='circles'>Circles</option>
                      </NativeSelect.Field>
                    </NativeSelect.Root>
                  </Box>

                  <Box>
                    <Text fontSize='sm' fontWeight='semibold' mb={2}>
                      Home formation
                    </Text>
                    <NativeSelect.Root>
                      <NativeSelect.Field
                        value={selectedHomeFormation}
                        onChange={(e) => setSelectedHomeFormation(e.target.value)}
                      >
                        <option value='4-4-2'>4-4-2</option>
                        <option value='4-3-3'>4-3-3</option>
                        <option value='3-5-2'>3-5-2</option>
                        <option value='4-2-3-1'>4-2-3-1</option>
                      </NativeSelect.Field>
                    </NativeSelect.Root>
                  </Box>

                  <Box>
                    <Text fontSize='sm' fontWeight='semibold' mb={2}>
                      Away formation
                    </Text>
                    <NativeSelect.Root>
                      <NativeSelect.Field
                        value={selectedAwayFormation}
                        onChange={(e) => setSelectedAwayFormation(e.target.value)}
                      >
                        <option value='4-4-2'>4-4-2</option>
                        <option value='4-3-3'>4-3-3</option>
                        <option value='3-5-2'>3-5-2</option>
                        <option value='4-2-3-1'>4-2-3-1</option>
                      </NativeSelect.Field>
                    </NativeSelect.Root>
                  </Box>

                  <Box>
                    <Text fontSize='sm' fontWeight='semibold' mb={2}>
                      Pitch color
                    </Text>
                    <HStack>
                      <input
                        type='color'
                        value={pitchColor}
                        onChange={(e) => setPitchColor(e.target.value)}
                        style={{
                          width: '100%',
                          height: '32px',
                          borderRadius: '6px',
                          border:
                            resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
                          cursor: 'pointer',
                        }}
                      />
                      <Code fontSize='xs'>{pitchColor}</Code>
                    </HStack>
                  </Box>
                </SimpleGrid>

                <Separator />

                <VStack gap={4} align='stretch'>
                  <Text fontSize='md' fontWeight='bold'>
                    Show/Hide Teams
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    <Switch.Root
                      checked={showHomeTeam}
                      onCheckedChange={(details) => setShowHomeTeam(details.checked)}
                    >
                      <Switch.HiddenInput />
                      <Switch.Control>
                        <Switch.Thumb />
                      </Switch.Control>
                      <Switch.Label>Show home team</Switch.Label>
                    </Switch.Root>

                    <Switch.Root
                      checked={showAwayTeam}
                      onCheckedChange={(details) => setShowAwayTeam(details.checked)}
                    >
                      <Switch.HiddenInput />
                      <Switch.Control>
                        <Switch.Thumb />
                      </Switch.Control>
                      <Switch.Label>Show away team</Switch.Label>
                    </Switch.Root>
                  </SimpleGrid>
                </VStack>

                <Separator />
                <VStack gap={4} align='stretch'>
                  <Text fontSize='md' fontWeight='bold'>
                    Team Colors
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                    <Box>
                      <Text fontSize='sm' fontWeight='semibold' mb={3}>
                        Home Team
                      </Text>
                      <SimpleGrid columns={2} gap={3}>
                        <Box>
                          <Text fontSize='xs' mb={1}>
                            Main color
                          </Text>
                          <HStack>
                            <input
                              type='color'
                              value={homeTeamColors.color}
                              onChange={(e) =>
                                setHomeTeamColors({
                                  ...homeTeamColors,
                                  color: e.target.value,
                                })
                              }
                              style={{
                                width: '60px',
                                height: '32px',
                                borderRadius: '6px',
                                border:
                                  resolvedMode === 'dark'
                                    ? '1px solid #4a5568'
                                    : '1px solid #e2e8f0',
                                cursor: 'pointer',
                              }}
                            />
                            <Code fontSize='xs'>{homeTeamColors.color}</Code>
                          </HStack>
                        </Box>
                        <Box>
                          <Text fontSize='xs' mb={1}>
                            Border color
                          </Text>
                          <HStack>
                            <input
                              type='color'
                              value={homeTeamColors.borderColor}
                              onChange={(e) =>
                                setHomeTeamColors({
                                  ...homeTeamColors,
                                  borderColor: e.target.value,
                                })
                              }
                              style={{
                                width: '60px',
                                height: '32px',
                                borderRadius: '6px',
                                border:
                                  resolvedMode === 'dark'
                                    ? '1px solid #4a5568'
                                    : '1px solid #e2e8f0',
                                cursor: 'pointer',
                              }}
                            />
                            <Code fontSize='xs'>{homeTeamColors.borderColor}</Code>
                          </HStack>
                        </Box>
                        <Box>
                          <Text fontSize='xs' mb={1}>
                            Number color
                          </Text>
                          <HStack>
                            <input
                              type='color'
                              value={homeTeamColors.numberColor}
                              onChange={(e) =>
                                setHomeTeamColors({
                                  ...homeTeamColors,
                                  numberColor: e.target.value,
                                })
                              }
                              style={{
                                width: '60px',
                                height: '32px',
                                borderRadius: '6px',
                                border:
                                  resolvedMode === 'dark'
                                    ? '1px solid #4a5568'
                                    : '1px solid #e2e8f0',
                                cursor: 'pointer',
                              }}
                            />
                            <Code fontSize='xs'>{homeTeamColors.numberColor}</Code>
                          </HStack>
                        </Box>
                        <Box>
                          <Text fontSize='xs' mb={1}>
                            Goalkeeper color
                          </Text>
                          <HStack>
                            <input
                              type='color'
                              value={homeTeamColors.goalkeeperColor}
                              onChange={(e) =>
                                setHomeTeamColors({
                                  ...homeTeamColors,
                                  goalkeeperColor: e.target.value,
                                })
                              }
                              style={{
                                width: '60px',
                                height: '32px',
                                borderRadius: '6px',
                                border:
                                  resolvedMode === 'dark'
                                    ? '1px solid #4a5568'
                                    : '1px solid #e2e8f0',
                                cursor: 'pointer',
                              }}
                            />
                            <Code fontSize='xs'>{homeTeamColors.goalkeeperColor}</Code>
                          </HStack>
                        </Box>
                      </SimpleGrid>
                    </Box>

                    <Box>
                      <Text fontSize='sm' fontWeight='semibold' mb={3}>
                        Away Team
                      </Text>
                      <SimpleGrid columns={2} gap={3}>
                        <Box>
                          <Text fontSize='xs' mb={1}>
                            Main color
                          </Text>
                          <HStack>
                            <input
                              type='color'
                              value={awayTeamColors.color}
                              onChange={(e) =>
                                setAwayTeamColors({
                                  ...awayTeamColors,
                                  color: e.target.value,
                                })
                              }
                              style={{
                                width: '60px',
                                height: '32px',
                                borderRadius: '6px',
                                border:
                                  resolvedMode === 'dark'
                                    ? '1px solid #4a5568'
                                    : '1px solid #e2e8f0',
                                cursor: 'pointer',
                              }}
                            />
                            <Code fontSize='xs'>{awayTeamColors.color}</Code>
                          </HStack>
                        </Box>
                        <Box>
                          <Text fontSize='xs' mb={1}>
                            Border color
                          </Text>
                          <HStack>
                            <input
                              type='color'
                              value={awayTeamColors.borderColor}
                              onChange={(e) =>
                                setAwayTeamColors({
                                  ...awayTeamColors,
                                  borderColor: e.target.value,
                                })
                              }
                              style={{
                                width: '60px',
                                height: '32px',
                                borderRadius: '6px',
                                border:
                                  resolvedMode === 'dark'
                                    ? '1px solid #4a5568'
                                    : '1px solid #e2e8f0',
                                cursor: 'pointer',
                              }}
                            />
                            <Code fontSize='xs'>{awayTeamColors.borderColor}</Code>
                          </HStack>
                        </Box>
                        <Box>
                          <Text fontSize='xs' mb={1}>
                            Number color
                          </Text>
                          <HStack>
                            <input
                              type='color'
                              value={awayTeamColors.numberColor}
                              onChange={(e) =>
                                setAwayTeamColors({
                                  ...awayTeamColors,
                                  numberColor: e.target.value,
                                })
                              }
                              style={{
                                width: '60px',
                                height: '32px',
                                borderRadius: '6px',
                                border:
                                  resolvedMode === 'dark'
                                    ? '1px solid #4a5568'
                                    : '1px solid #e2e8f0',
                                cursor: 'pointer',
                              }}
                            />
                            <Code fontSize='xs'>{awayTeamColors.numberColor}</Code>
                          </HStack>
                        </Box>
                        <Box>
                          <Text fontSize='xs' mb={1}>
                            Goalkeeper color
                          </Text>
                          <HStack>
                            <input
                              type='color'
                              value={awayTeamColors.goalkeeperColor}
                              onChange={(e) =>
                                setAwayTeamColors({
                                  ...awayTeamColors,
                                  goalkeeperColor: e.target.value,
                                })
                              }
                              style={{
                                width: '60px',
                                height: '32px',
                                borderRadius: '6px',
                                border:
                                  resolvedMode === 'dark'
                                    ? '1px solid #4a5568'
                                    : '1px solid #e2e8f0',
                                cursor: 'pointer',
                              }}
                            />
                            <Code fontSize='xs'>{awayTeamColors.goalkeeperColor}</Code>
                          </HStack>
                        </Box>
                      </SimpleGrid>
                    </Box>
                  </SimpleGrid>
                </VStack>
              </VStack>
            </Card.Body>
          </Card.Root>

          <Separator />

          <Examples resolvedMode={resolvedMode} />

          <Box textAlign='center' pt={4}>
            <Text color={resolvedMode === 'dark' ? 'gray.400' : 'gray.500'} fontSize='sm'>
              Built with ♡️ by <Link href='https://github.com/giustini'>Giustini</Link>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
