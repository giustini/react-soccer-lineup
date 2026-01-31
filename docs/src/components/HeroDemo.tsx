import SoccerLineUp from 'react-soccer-lineup';

export default function HeroDemo() {
  return (
    <div className='soccer-lineup-wrapper'>
      <SoccerLineUp
        size='responsive'
        color='#327d61'
        pattern='lines'
        homeTeam={{
          squad: {
            gk: { number: 1 },
            df: [{ number: 2 }, { number: 5 }, { number: 4 }, { number: 3 }],
            cdm: [{ number: 6 }],
            cm: [{ number: 8 }, { number: 10 }],
            fw: [{ number: 11 }, { number: 9 }, { number: 7 }],
          },
          style: { borderColor: '#333333' },
        }}
        awayTeam={{
          squad: {
            gk: { number: 1 },
            df: [{ number: 2 }, { number: 4 }, { number: 5 }, { number: 3 }],
            cdm: [{ number: 8 }, { number: 6 }, { number: 7 }],
            cam: [{ number: 10 }],
            fw: [{ number: 9 }, { number: 11 }],
          },
          style: { borderColor: '#ffffff' },
        }}
      />
    </div>
  );
}
