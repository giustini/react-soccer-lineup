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
import SoccerLineUp, {
  type PitchPattern,
  type PitchSize,
  type PitchOrientation,
  type PlayerPattern,
} from 'react-soccer-lineup';
import { useColorMode } from './hooks/useColorMode';
import { teams } from './data/teams.ts';
import { createTeamWithCallbacks, applyTeamColors, stripNumbers } from './utils/teamUtils';
import Examples from './components/examples';
import Header from './components/header/Header.tsx';

function App() {
  const { resolvedMode, toggleColorMode } = useColorMode();
  const [selectedSize, setSelectedSize] = useState<PitchSize>('responsive');
  const [selectedOrientation, setSelectedOrientation] = useState<PitchOrientation>('horizontal');
  const [selectedPattern, setSelectedPattern] = useState<PitchPattern | undefined>('lines');
  const [selectedHomeFormation, setSelectedHomeFormation] = useState<string>('4-4-2');
  const [selectedAwayFormation, setSelectedAwayFormation] = useState<string>('4-4-2');
  const [pitchColor, setPitchColor] = useState('#588f58');
  const [showHomeTeam, setShowHomeTeam] = useState(true);
  const [showAwayTeam, setShowAwayTeam] = useState(false);
  const [showHomeNumbers, setShowHomeNumbers] = useState(true);
  const [showAwayNumbers, setShowAwayNumbers] = useState(true);

  const [homeTeamColors, setHomeTeamColors] = useState({
    color: '#ffffff',
    borderColor: '#333333',
    numberColor: '#333333',
    numberBackgroundColor: '#ffffff',
    pattern: undefined as PlayerPattern | undefined,
    patternColor: '#333333',
  });

  const [awayTeamColors, setAwayTeamColors] = useState({
    color: '#333333',
    borderColor: '#ffffff',
    numberColor: '#ffffff',
    numberBackgroundColor: '#333333',
    pattern: undefined as PlayerPattern | undefined,
    patternColor: '#ffffff',
  });

  const mainHomeTeam = teams[1][selectedHomeFormation];
  const mainAwayTeam = teams[1][selectedAwayFormation];

  const homeTeamWithColors = applyTeamColors(mainHomeTeam, homeTeamColors);
  const awayTeamWithColors = applyTeamColors(mainAwayTeam, awayTeamColors);

  const homeTeam = showHomeTeam
    ? createTeamWithCallbacks(
        showHomeNumbers ? homeTeamWithColors : stripNumbers(homeTeamWithColors),
        'Home'
      )
    : undefined;
  const awayTeam = showAwayTeam
    ? createTeamWithCallbacks(
        showAwayNumbers ? awayTeamWithColors : stripNumbers(awayTeamWithColors),
        'Away'
      )
    : undefined;

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
                <Box display='flex' justifyContent='center'>
                  <SoccerLineUp
                    size={selectedSize}
                    orientation={selectedOrientation}
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
                <SimpleGrid columns={{ base: 1, md: 4 }} gap={4}>
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
                      Pitch orientation
                    </Text>
                    <NativeSelect.Root>
                      <NativeSelect.Field
                        value={selectedOrientation}
                        onChange={(e) => setSelectedOrientation(e.target.value as PitchOrientation)}
                      >
                        <option value='horizontal'>Horizontal</option>
                        <option value='vertical'>Vertical</option>
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
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                    <Text fontSize='lg' fontWeight='semibold'>
                      Home team
                    </Text>
                    <Text fontSize='lg' fontWeight='semibold'>
                      Away team
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 8 }} gap={4}>
                    <Box>
                      <Text fontSize='sm' fontWeight='semibold' mb={3}>
                        Show team
                      </Text>
                      <Switch.Root
                        checked={showHomeTeam}
                        onCheckedChange={(details) => setShowHomeTeam(details.checked)}
                      >
                        <Switch.HiddenInput />
                        <Switch.Control>
                          <Switch.Thumb />
                        </Switch.Control>
                      </Switch.Root>
                    </Box>

                    <Box>
                      <Text fontSize='sm' fontWeight='semibold' mb={3}>
                        Show numbers
                      </Text>
                      <Switch.Root
                        checked={showHomeNumbers}
                        onCheckedChange={(details) => setShowHomeNumbers(details.checked)}
                      >
                        <Switch.HiddenInput />
                        <Switch.Control>
                          <Switch.Thumb />
                        </Switch.Control>
                      </Switch.Root>
                    </Box>

                    <Box>
                      <Text fontSize='sm' fontWeight='semibold' mb={2}>
                        Formation
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

                    <Box />

                    <Box>
                      <Text fontSize='sm' fontWeight='semibold' mb={3}>
                        Show team
                      </Text>
                      <Switch.Root
                        checked={showAwayTeam}
                        onCheckedChange={(details) => setShowAwayTeam(details.checked)}
                      >
                        <Switch.HiddenInput />
                        <Switch.Control>
                          <Switch.Thumb />
                        </Switch.Control>
                      </Switch.Root>
                    </Box>

                    <Box>
                      <Text fontSize='sm' fontWeight='semibold' mb={3}>
                        Show numbers
                      </Text>
                      <Switch.Root
                        checked={showAwayNumbers}
                        onCheckedChange={(details) => setShowAwayNumbers(details.checked)}
                      >
                        <Switch.HiddenInput />
                        <Switch.Control>
                          <Switch.Thumb />
                        </Switch.Control>
                      </Switch.Root>
                    </Box>

                    <Box>
                      <Text fontSize='sm' fontWeight='semibold' mb={2}>
                        Formation
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

                    <Box />
                  </SimpleGrid>
                </VStack>

                <Separator />

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                  <Box>
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
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
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
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
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
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
                              cursor: 'pointer',
                            }}
                          />
                          <Code fontSize='xs'>{homeTeamColors.numberColor}</Code>
                        </HStack>
                      </Box>
                      <Box>
                        <Text fontSize='xs' mb={1}>
                          Number bg color
                        </Text>
                        <HStack>
                          <input
                            type='color'
                            value={homeTeamColors.numberBackgroundColor}
                            onChange={(e) =>
                              setHomeTeamColors({
                                ...homeTeamColors,
                                numberBackgroundColor: e.target.value,
                              })
                            }
                            style={{
                              width: '60px',
                              height: '32px',
                              borderRadius: '6px',
                              border:
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
                              cursor: 'pointer',
                            }}
                          />
                          <Code fontSize='xs'>{homeTeamColors.numberBackgroundColor}</Code>
                        </HStack>
                      </Box>
                      <Box maxW='50%'>
                        <Text fontSize='xs' mb={1}>
                          Pattern
                        </Text>
                        <NativeSelect.Root>
                          <NativeSelect.Field
                            value={homeTeamColors.pattern || ''}
                            onChange={(e) =>
                              setHomeTeamColors({
                                ...homeTeamColors,
                                pattern: e.target.value
                                  ? (e.target.value as PlayerPattern)
                                  : undefined,
                              })
                            }
                          >
                            <option value=''>None</option>
                            <optgroup label='Stripes'>
                              <option value='stripes'>Stripes</option>
                              <option value='thin-stripes'>Thin stripes</option>
                              <option value='thick-stripes'>Thick stripes</option>
                            </optgroup>
                            <optgroup label='Stripe'>
                              <option value='stripe'>Stripe</option>
                              <option value='thin-stripe'>Thin stripe</option>
                              <option value='thick-stripe'>Thick stripe</option>
                            </optgroup>
                            <optgroup label='Lines'>
                              <option value='lines'>Lines</option>
                              <option value='thin-lines'>Thin lines</option>
                              <option value='thick-lines'>Thick lines</option>
                            </optgroup>
                            <optgroup label='Line'>
                              <option value='line'>Line</option>
                              <option value='thin-line'>Thin line</option>
                              <option value='thick-line'>Thick line</option>
                            </optgroup>
                            <optgroup label='Bar'>
                              <option value='bar'>Bar</option>
                              <option value='thin-bar'>Thin bar</option>
                              <option value='thick-bar'>Thick bar</option>
                            </optgroup>
                            <optgroup label='Bars'>
                              <option value='bars'>Bars</option>
                              <option value='thin-bars'>Thin bars</option>
                              <option value='thick-bars'>Thick bars</option>
                            </optgroup>
                            <optgroup label='Halves'>
                              <option value='left-half'>Left half</option>
                              <option value='right-half'>Right half</option>
                              <option value='top-half'>Top half</option>
                              <option value='bottom-half'>Bottom half</option>
                            </optgroup>
                            <optgroup label='Slashes'>
                              <option value='left-slash'>Left slash</option>
                              <option value='left-thin-slash'>Left thin slash</option>
                              <option value='left-thick-slash'>Left thick slash</option>
                              <option value='right-slash'>Right slash</option>
                              <option value='right-thin-slash'>Right thin slash</option>
                              <option value='right-thick-slash'>Right thick slash</option>
                            </optgroup>
                            <optgroup label='Other'>
                              <option value='cross'>Cross</option>
                              <option value='x'>X</option>
                              <option value='squares'>Squares</option>
                            </optgroup>
                          </NativeSelect.Field>
                        </NativeSelect.Root>
                      </Box>
                      <Box>
                        <Text fontSize='xs' mb={1}>
                          Pattern color
                        </Text>
                        <HStack>
                          <input
                            type='color'
                            value={homeTeamColors.patternColor}
                            onChange={(e) =>
                              setHomeTeamColors({
                                ...homeTeamColors,
                                patternColor: e.target.value,
                              })
                            }
                            style={{
                              width: '60px',
                              height: '32px',
                              borderRadius: '6px',
                              border:
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
                              cursor: 'pointer',
                            }}
                          />
                          <Code fontSize='xs'>{homeTeamColors.patternColor}</Code>
                        </HStack>
                      </Box>
                    </SimpleGrid>
                  </Box>

                  <Box>
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
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
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
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
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
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
                              cursor: 'pointer',
                            }}
                          />
                          <Code fontSize='xs'>{awayTeamColors.numberColor}</Code>
                        </HStack>
                      </Box>
                      <Box>
                        <Text fontSize='xs' mb={1}>
                          Number bg color
                        </Text>
                        <HStack>
                          <input
                            type='color'
                            value={awayTeamColors.numberBackgroundColor}
                            onChange={(e) =>
                              setAwayTeamColors({
                                ...awayTeamColors,
                                numberBackgroundColor: e.target.value,
                              })
                            }
                            style={{
                              width: '60px',
                              height: '32px',
                              borderRadius: '6px',
                              border:
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
                              cursor: 'pointer',
                            }}
                          />
                          <Code fontSize='xs'>{awayTeamColors.numberBackgroundColor}</Code>
                        </HStack>
                      </Box>
                      <Box maxW='50%'>
                        <Text fontSize='xs' mb={1}>
                          Pattern
                        </Text>
                        <NativeSelect.Root>
                          <NativeSelect.Field
                            value={awayTeamColors.pattern || ''}
                            onChange={(e) =>
                              setAwayTeamColors({
                                ...awayTeamColors,
                                pattern: e.target.value
                                  ? (e.target.value as PlayerPattern)
                                  : undefined,
                              })
                            }
                          >
                            <option value=''>None</option>
                            <optgroup label='Stripes'>
                              <option value='stripes'>Stripes</option>
                              <option value='thin-stripes'>Thin stripes</option>
                              <option value='thick-stripes'>Thick stripes</option>
                            </optgroup>
                            <optgroup label='Stripe'>
                              <option value='stripe'>Stripe</option>
                              <option value='thin-stripe'>Thin stripe</option>
                              <option value='thick-stripe'>Thick stripe</option>
                            </optgroup>
                            <optgroup label='Lines'>
                              <option value='lines'>Lines</option>
                              <option value='thin-lines'>Thin lines</option>
                              <option value='thick-lines'>Thick lines</option>
                            </optgroup>
                            <optgroup label='Line'>
                              <option value='line'>Line</option>
                              <option value='thin-line'>Thin line</option>
                              <option value='thick-line'>Thick line</option>
                            </optgroup>
                            <optgroup label='Bar'>
                              <option value='bar'>Bar</option>
                              <option value='thin-bar'>Thin bar</option>
                              <option value='thick-bar'>Thick bar</option>
                            </optgroup>
                            <optgroup label='Bars'>
                              <option value='bars'>Bars</option>
                              <option value='thin-bars'>Thin bars</option>
                              <option value='thick-bars'>Thick bars</option>
                            </optgroup>
                            <optgroup label='Halves'>
                              <option value='left-half'>Left half</option>
                              <option value='right-half'>Right half</option>
                              <option value='top-half'>Top half</option>
                              <option value='bottom-half'>Bottom half</option>
                            </optgroup>
                            <optgroup label='Slashes'>
                              <option value='left-slash'>Left slash</option>
                              <option value='left-thin-slash'>Left thin slash</option>
                              <option value='left-thick-slash'>Left thick slash</option>
                              <option value='right-slash'>Right slash</option>
                              <option value='right-thin-slash'>Right thin slash</option>
                              <option value='right-thick-slash'>Right thick slash</option>
                            </optgroup>
                            <optgroup label='Other'>
                              <option value='cross'>Cross</option>
                              <option value='x'>X</option>
                              <option value='squares'>Squares</option>
                            </optgroup>
                          </NativeSelect.Field>
                        </NativeSelect.Root>
                      </Box>
                      <Box>
                        <Text fontSize='xs' mb={1}>
                          Pattern color
                        </Text>
                        <HStack>
                          <input
                            type='color'
                            value={awayTeamColors.patternColor}
                            onChange={(e) =>
                              setAwayTeamColors({
                                ...awayTeamColors,
                                patternColor: e.target.value,
                              })
                            }
                            style={{
                              width: '60px',
                              height: '32px',
                              borderRadius: '6px',
                              border:
                                resolvedMode === 'dark' ? '1px solid #4a5568' : '1px solid #e2e8f0',
                              cursor: 'pointer',
                            }}
                          />
                          <Code fontSize='xs'>{awayTeamColors.patternColor}</Code>
                        </HStack>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </SimpleGrid>
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
