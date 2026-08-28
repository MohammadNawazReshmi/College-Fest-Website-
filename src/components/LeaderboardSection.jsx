import { Trophy, Shield, Flame } from 'lucide-react';

const LEADERBOARD_TEAMS = [
  { rank: 1, college: 'St. Xavier Institute of Tech', points: 1450, gold: 4, silver: 2, badge: '🏆 Defending Champions' },
  { rank: 2, college: 'IIT Bombay (Tech Squad)', points: 1320, gold: 3, silver: 4, badge: '⚡ Tech Winners' },
  { rank: 3, college: 'BITS Pilani', points: 1180, gold: 3, silver: 1, badge: '🔥 Battle Champions' },
  { rank: 4, college: 'National Institute of Design', points: 950, gold: 2, silver: 2, badge: '🎨 Arts Leaders' },
  { rank: 5, college: 'Delhi University (DU Fusion)', points: 870, gold: 1, silver: 3, badge: '🎵 Cultural Stars' },
];

export default function LeaderboardSection() {
  return (
    <section className="py-20 relative z-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-white/10 relative overflow-hidden bg-slate-900 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Trophy className="w-3.5 h-3.5" /> Inter-College Championship Trophy
              </div>
              <h3 className="text-3xl font-extrabold text-white">OVERALL LEADERBOARD</h3>
              <p className="text-xs text-gray-300">Live points tally based on event victories across 3 days.</p>
            </div>

            <div className="flex items-center gap-4 bg-white/5 px-4 py-3 rounded-2xl border border-white/10">
              <Flame className="w-6 h-6 text-pink-500 animate-bounce" />
              <div>
                <div className="text-xs text-gray-400">Total Points Awarded</div>
                <div className="text-lg font-extrabold text-white">5,770 PTS</div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="space-y-3">
            {LEADERBOARD_TEAMS.map((team) => (
              <div
                key={team.rank}
                className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  team.rank === 1
                    ? 'bg-gradient-to-r from-orange-950/45 via-pink-950/45 to-orange-950/45 border-orange-500/40 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm ${
                      team.rank === 1
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                        : team.rank === 2
                        ? 'bg-slate-300 text-black'
                        : team.rank === 3
                        ? 'bg-amber-700 text-white'
                        : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    #{team.rank}
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-base flex items-center gap-2">
                      {team.college}
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-pink-300 font-semibold border border-white/10">
                        {team.badge}
                      </span>
                    </h4>
                    <div className="text-xs text-gray-400 flex items-center gap-3 mt-0.5">
                      <span>🥇 {team.gold} Gold</span>
                      <span>🥈 {team.silver} Silver</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <Shield className="w-4 h-4 text-pink-400" />
                  <span className="font-mono font-extrabold text-xl text-orange-400">
                    {team.points} <span className="text-xs text-gray-400 font-sans">PTS</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
