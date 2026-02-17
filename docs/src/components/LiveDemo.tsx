import SoccerLineUp, {
  type Team,
  type PitchPattern,
  type PitchOrientation,
} from 'react-soccer-lineup';

interface LiveDemoProps {
  color?: string;
  pattern?: PitchPattern;
  orientation?: PitchOrientation;
  homeTeam?: Team;
  awayTeam?: Team;
}

export default function LiveDemo({
  color,
  pattern,
  orientation,
  homeTeam,
  awayTeam,
}: LiveDemoProps) {
  return (
    <div className='soccer-lineup-wrapper'>
      <SoccerLineUp
        size='responsive'
        color={color}
        pattern={pattern}
        orientation={orientation}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
      />
      <style>{`
        .soccer-lineup-wrapper {
          * {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
