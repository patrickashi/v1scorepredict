
import { useState } from 'react';
import { FaCrown, FaFutbol, FaChartLine, FaFire, FaClock, FaTrophy, FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function Predictions() {
  const [selectedPredictions, setSelectedPredictions] = useState({});

  const upcomingMatches = [
    {
      id: 1,
      homeTeam: 'Manchester City',
      awayTeam: 'Liverpool',
      date: '2024-02-15',
      time: '17:30',
      odds: { home: 2.1, draw: 3.4, away: 3.2 },
      aiPrediction: 'Liverpool Win',
      confidence: 65,
      pointsMultiplier: 2.5
    },
    {
      id: 2,
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      date: '2024-02-16',
      time: '15:00',
      odds: { home: 1.8, draw: 3.6, away: 4.2 },
      aiPrediction: 'Arsenal Win',
      confidence: 78,
      pointsMultiplier: 1.8
    },
    {
      id: 3,
      homeTeam: 'Newcastle',
      awayTeam: 'Brighton',
      date: '2024-02-17',
      time: '14:00',
      odds: { home: 1.6, draw: 3.8, away: 5.5 },
      aiPrediction: 'Newcastle Win',
      confidence: 82,
      pointsMultiplier: 1.6
    }
  ];

  const recentPredictions = [
    {
      id: 1,
      match: 'Tottenham vs Aston Villa',
      prediction: 'Aston Villa Win',
      result: 'Correct',
      pointsEarned: 15,
      confidence: 70
    },
    {
      id: 2,
      match: 'West Ham vs Everton',
      prediction: 'Draw',
      result: 'Incorrect',
      pointsEarned: 0,
      confidence: 45
    },
    {
      id: 3,
      match: 'Wolves vs Crystal Palace',
      prediction: 'Wolves Win',
      result: 'Correct',
      pointsEarned: 12,
      confidence: 85
    }
  ];

  const handlePredictionChange = (matchId, prediction) => {
    setSelectedPredictions(prev => ({
      ...prev,
      [matchId]: prediction
    }));
  };

  const submitPredictions = () => {
    console.log('Submitting predictions:', selectedPredictions);
    alert('Predictions submitted successfully!');
  };

  const MatchPredictionCard = ({ match }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-300">
      {/* Match Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FaClock className="text-emerald-400" size={14} />
          <span className="text-gray-300 text-sm">{match.date} at {match.time}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaFire className="text-orange-400" size={14} />
          <span className="text-orange-400 text-sm font-medium">{match.pointsMultiplier}x Points</span>
        </div>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-center mb-6">
        <div className="text-center flex-1">
          <h3 className="text-white font-bold text-lg">{match.homeTeam}</h3>
          <div className="text-gray-400 text-sm mt-1">Odds: {match.odds.home}</div>
        </div>
        
        <div className="mx-6">
          <FaFutbol className="text-gray-400" size={24} />
        </div>
        
        <div className="text-center flex-1">
          <h3 className="text-white font-bold text-lg">{match.awayTeam}</h3>
          <div className="text-gray-400 text-sm mt-1">Odds: {match.odds.away}</div>
        </div>
      </div>

      {/* AI Prediction */}
      <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaChartLine className="text-blue-400" size={14} />
            <span className="text-blue-400 text-sm font-medium">AI Prediction:</span>
            <span className="text-white">{match.aiPrediction}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 bg-slate-600 rounded-full h-2">
              <div 
                className="bg-blue-400 h-2 rounded-full" 
                style={{ width: `${match.confidence}%` }}
              />
            </div>
            <span className="text-blue-400 text-sm">{match.confidence}%</span>
          </div>
        </div>
      </div>

      {/* Prediction Options */}
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-2">
          {[
            { key: 'home', label: `${match.homeTeam} Win` },
            { key: 'draw', label: 'Draw' },
            { key: 'away', label: `${match.awayTeam} Win` }
          ].map((option) => (
            <button
              key={option.key}
              onClick={() => handlePredictionChange(match.id, option.label)}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                selectedPredictions[match.id] === option.label
                  ? 'bg-emerald-500 border-emerald-400 text-white'
                  : 'bg-slate-700/50 border-white/10 text-gray-300 hover:border-emerald-400/50'
              }`}
            >
              <div className="font-medium text-sm">{option.label}</div>
              <div className="text-xs opacity-75">Odds: {match.odds[option.key]}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const RecentPredictionCard = ({ prediction }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white font-medium">{prediction.match}</h4>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          prediction.result === 'Correct' 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-red-500/20 text-red-400'
        }`}>
          {prediction.result}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-300">Predicted: {prediction.prediction}</span>
        <div className="flex items-center space-x-2">
          <span className={`font-medium ${
            prediction.pointsEarned > 0 ? 'text-emerald-400' : 'text-red-400'
          }`}>
            {prediction.pointsEarned > 0 ? `+${prediction.pointsEarned}` : prediction.pointsEarned} pts
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <FaCrown className="text-yellow-400" />
          Make Predictions
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Use your football knowledge to predict match outcomes and earn points. The more accurate your predictions, the higher you climb on the leaderboard!
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">87%</div>
          <div className="text-gray-300 text-sm">Accuracy Rate</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">1,247</div>
          <div className="text-gray-300 text-sm">Total Points</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">23</div>
          <div className="text-gray-300 text-sm">Win Streak</div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">#12</div>
          <div className="text-gray-300 text-sm">Global Rank</div>
        </div>
      </div>

      {/* Upcoming Matches */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <FaFutbol className="text-emerald-400" />
          Upcoming Matches
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {upcomingMatches.map((match) => (
            <MatchPredictionCard key={match.id} match={match} />
          ))}
        </div>

        {/* Submit Button */}
        {Object.keys(selectedPredictions).length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={submitPredictions}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Submit {Object.keys(selectedPredictions).length} Prediction{Object.keys(selectedPredictions).length > 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>

      {/* Recent Predictions */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <FaTrophy className="text-yellow-400" />
          Recent Predictions
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentPredictions.map((prediction) => (
            <RecentPredictionCard key={prediction.id} prediction={prediction} />
          ))}
        </div>
      </div>
    </div>
  );
}
