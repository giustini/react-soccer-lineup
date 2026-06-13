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
  naturalFonts?: boolean;
}

export default function LiveDemo({
  color,
  pattern,
  orientation,
  homeTeam,
  awayTeam,
  naturalFonts,
}: LiveDemoProps) {
  return (
    <div className={`soccer-lineup-wrapper${naturalFonts ? ' soccer-lineup-natural' : ''}`}>
      <SoccerLineUp
        size='responsive'
        color={color}
        pattern={pattern}
        orientation={orientation}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
      />
      {!naturalFonts && (
        <style>{`
          .soccer-lineup-wrapper:not(.soccer-lineup-natural) {
            * {
              font-size: 14px;
            }
          }
        `}</style>
      )}
    </div>
  );
}
