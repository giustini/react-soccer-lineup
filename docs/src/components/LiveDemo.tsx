import SoccerLineUp, { type Team, type PitchPattern } from 'react-soccer-lineup';

interface LiveDemoProps {
  color?: string;
  pattern?: PitchPattern;
  homeTeam?: Team;
  awayTeam?: Team;
}

export default function LiveDemo({
  color,
  pattern,
  homeTeam,
  awayTeam,
}: LiveDemoProps) {
  return (
    <div className="soccer-lineup-wrapper">
      <SoccerLineUp
        size="responsive"
        color={color}
        pattern={pattern}
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
