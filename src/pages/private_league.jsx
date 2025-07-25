
import { useState } from 'react';
import { FaLock, FaCrown, FaTrophy, FaUsers, FaPlus, FaCopy, FaChartLine, FaFire, FaMedal } from 'react-icons/fa';

export default function PrivateLeague() {
  const [activeTab, setActiveTab] = useState('overview');
  const [inviteCode] = useState('PRIV2024XYZ');

  const leagueData = {
    name: "Championship Legends",
    description: "Elite private league for serious fantasy football managers",
    members: 24,
    maxMembers: 30,
    prizePool: "£2,500",
    gameweek: 15,
    admin: "Alex R"
  };

  const leaderboard = [
    { rank: 1, name: "Alex R", points: 1847, weeklyChange: "+15", avatar: "🏆" },
    { rank: 2, name: "Sarah M", points: 1821, weeklyChange: "-2", avatar: "⚽" },
    { rank: 3, name: "Mike J", points: 1798, weeklyChange: "+8", avatar: "🥅" },
    { rank: 4, name: "Emma K", points: 1756, weeklyChange: "+12", avatar: "⭐" },
    { rank: 5, name: "David L", points: 1742, weeklyChange: "-5", avatar: "🎯" },
    { rank: 6, name: "Lisa P", points: 1698, weeklyChange: "+3", avatar: "🔥" }
  ];

  const recentActivity = [
    { user: "Mike J", action: "made a prediction", match: "Arsenal vs Chelsea", time: "2 hours ago" },
    { user: "Sarah M", action: "joined the league", time: "1 day ago" },
    { user: "Emma K", action: "won prediction", match: "Man City vs Liverpool", points: "+25", time: "2 days ago" },
    { user: "David L", action: "created a bet", match: "Newcastle vs Brighton", time: "3 days ago" }
  ];

  const upcomingMatches = [
    { home: "Manchester United", away: "Tottenham", date: "Feb 18", predictions: 18 },
    { home: "Arsenal", away: "West Ham", date: "Feb 19", predictions: 22 },
    { home: "Liverpool", away: "Chelsea", date: "Feb 20", predictions: 24 }
  ];

  const copyInviteCode = () => {
    navigator.clipboard.writeText(inviteCode);
    alert('Invite code copied to clipboard!');
  };

  const LeaderboardRow = ({ player }) => (
    <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-200">
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          player.rank === 1 ? 'bg-yellow-500 text-black' :
          player.rank === 2 ? 'bg-gray-400 text-black' :
          player.rank === 3 ? 'bg-amber-600 text-white' :
          'bg-slate-600 text-white'
        }`}>
          {player.rank}
        </div>
        <div className="text-2xl">{player.avatar}</div>
        <div>
          <div className="text-white font-semibold">{player.name}</div>
          <div className="text-gray-400 text-sm">{player.points} points</div>
        </div>
      </div>
      <div className={`flex items-center space-x-2 ${
        player.weeklyChange.startsWith('+') ? 'text-green-400' : 'text-red-400'
      }`}>
        <span className="font-medium">{player.weeklyChange}</span>
        {player.weeklyChange.startsWith('+') ? 
          <FaArrowUp size={12} /> : 
          <FaArrowDown size={12} />
        }
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <FaLock className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{leagueData.name}</h1>
              <p className="text-gray-300">{leagueData.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaCrown className="text-yellow-400" />
            <span className="text-yellow-400 font-medium">Admin: {leagueData.admin}</span>
          </div>
        </div>

        {/* League Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">{leagueData.members}/{leagueData.maxMembers}</div>
            <div className="text-gray-300 text-sm">Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">{leagueData.prizePool}</div>
            <div className="text-gray-300 text-sm">Prize Pool</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">GW{leagueData.gameweek}</div>
            <div className="text-gray-300 text-sm">Current Week</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">87%</div>
            <div className="text-gray-300 text-sm">Activity Rate</div>
          </div>
        </div>
      </div>

      {/* Invite Section */}
      <div className="bg-gradient-to-r from-purple-500/20 to-emerald-500/20 border border-purple-400/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-3">Invite Friends</h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-slate-800/50 rounded-lg p-3">
            <span className="text-gray-300 text-sm">League Code:</span>
            <div className="text-white font-mono text-lg">{inviteCode}</div>
          </div>
          <button
            onClick={copyInviteCode}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
          >
            <FaCopy />
            <span>Copy</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-1">
          {[
            { key: 'overview', label: 'Overview', icon: FaChartLine },
            { key: 'leaderboard', label: 'Leaderboard', icon: FaTrophy },
            { key: 'matches', label: 'Matches', icon: FaFire },
            { key: 'members', label: 'Members', icon: FaUsers }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === tab.key
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'overview' && (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Activity */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="text-white">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                        {activity.match && <span className="text-emerald-400"> {activity.match}</span>}
                        {activity.points && <span className="text-emerald-400 font-bold"> {activity.points}</span>}
                      </div>
                      <div className="text-gray-400 text-sm">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Top Performers</h3>
              <div className="space-y-3">
                {leaderboard.slice(0, 3).map((player) => (
                  <div key={player.rank} className="flex items-center space-x-3">
                    <FaMedal className={`text-lg ${
                      player.rank === 1 ? 'text-yellow-400' :
                      player.rank === 2 ? 'text-gray-400' :
                      'text-amber-600'
                    }`} />
                    <div className="flex-1">
                      <div className="text-white font-medium">{player.name}</div>
                      <div className="text-gray-400 text-sm">{player.points} points</div>
                    </div>
                    <div className={`font-bold ${
                      player.weeklyChange.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {player.weeklyChange}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">League Standings</h3>
            <div className="space-y-3">
              {leaderboard.map((player) => (
                <LeaderboardRow key={player.rank} player={player} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'matches' && (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Upcoming Matches</h3>
            <div className="space-y-4">
              {upcomingMatches.map((match, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-white">
                    <span className="font-semibold">{match.home}</span> vs <span className="font-semibold">{match.away}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-300 text-sm">{match.date}</div>
                    <div className="text-emerald-400 text-sm">{match.predictions} predictions</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">League Members ({leagueData.members})</h3>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <FaPlus size={14} />
                <span>Invite</span>
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {leaderboard.map((member) => (
                <div key={member.rank} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg">
                  <div className="text-2xl">{member.avatar}</div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{member.name}</div>
                    <div className="text-gray-400 text-sm">Rank #{member.rank} • {member.points} points</div>
                  </div>
                  {member.name === leagueData.admin && (
                    <FaCrown className="text-yellow-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Add missing import
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
