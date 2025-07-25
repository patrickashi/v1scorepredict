
import { useState } from 'react';
import { FaFutbol, FaClock, FaChartLine, FaTrophy, FaFire, FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function FixturesAndPredictions() {
  const [activeTab, setActiveTab] = useState('fixtures');

  const fixtures = [
    {
      id: 1,
      homeTeam: 'Manchester City',
      awayTeam: 'Liverpool',
      homeScore: null,
      awayScore: null,
      date: '2024-02-15',
      time: '17:30',
      status: 'upcoming',
      prediction: { home: 45, draw: 25, away: 30 }
    },
    {
      id: 2,
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      homeScore: 2,
      awayScore: 1,
      date: '2024-02-14',
      time: '20:00',
      status: 'finished',
      prediction: { home: 55, draw: 20, away: 25 }
    },
    {
      id: 3,
      homeTeam: 'Newcastle',
      awayTeam: 'Brighton',
      homeScore: null,
      awayScore: null,
      date: '2024-02-16',
      time: '15:00',
      status: 'upcoming',
      prediction: { home: 60, draw: 25, away: 15 }
    }
  ];

  const predictions = [
    {
      id: 1,
      match: 'Man City vs Liverpool',
      userPrediction: 'Liverpool Win',
      confidence: 85,
      potentialPoints: 15,
      status: 'pending'
    },
    {
      id: 2,
      match: 'Arsenal vs Chelsea',
      userPrediction: 'Arsenal Win',
      confidence: 70,
      potentialPoints: 12,
      status: 'correct',
      pointsEarned: 12
    },
    {
      id: 3,
      match: 'Newcastle vs Brighton',
      userPrediction: 'Newcastle Win',
      confidence: 90,
      potentialPoints: 18,
      status: 'pending'
    }
  ];

  const FixtureCard = ({ fixture }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FaClock className="text-emerald-400" size={14} />
          <span className="text-gray-300 text-sm">{fixture.date} at {fixture.time}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          fixture.status === 'finished' 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {fixture.status === 'finished' ? 'Finished' : 'Upcoming'}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-center flex-1">
          <h3 className="text-white font-semibold">{fixture.homeTeam}</h3>
          {fixture.status === 'finished' && (
            <div className="text-3xl font-bold text-emerald-400 mt-2">{fixture.homeScore}</div>
          )}
        </div>
        
        <div className="mx-4">
          <FaFutbol className="text-gray-400" size={20} />
        </div>
        
        <div className="text-center flex-1">
          <h3 className="text-white font-semibold">{fixture.awayTeam}</h3>
          {fixture.status === 'finished' && (
            <div className="text-3xl font-bold text-emerald-400 mt-2">{fixture.awayScore}</div>
          )}
        </div>
      </div>

      {fixture.status === 'upcoming' && (
        <div className="bg-slate-700/50 rounded-lg p-4">
          <h4 className="text-gray-300 text-sm mb-2">AI Prediction</h4>
          <div className="flex justify-between text-xs">
            <span className="text-blue-400">{fixture.homeTeam}: {fixture.prediction.home}%</span>
            <span className="text-gray-400">Draw: {fixture.prediction.draw}%</span>
            <span className="text-red-400">{fixture.awayTeam}: {fixture.prediction.away}%</span>
          </div>
        </div>
      )}
    </div>
  );

  const PredictionCard = ({ prediction }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">{prediction.match}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          prediction.status === 'correct' 
            ? 'bg-green-500/20 text-green-400' 
            : prediction.status === 'incorrect'
            ? 'bg-red-500/20 text-red-400'
            : 'bg-blue-500/20 text-blue-400'
        }`}>
          {prediction.status === 'correct' ? 'Correct' : 
           prediction.status === 'incorrect' ? 'Incorrect' : 'Pending'}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Prediction:</span>
          <span className="text-emerald-400 font-medium">{prediction.userPrediction}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Confidence:</span>
          <div className="flex items-center space-x-2">
            <div className="w-20 bg-slate-700 rounded-full h-2">
              <div 
                className="bg-emerald-400 h-2 rounded-full" 
                style={{ width: `${prediction.confidence}%` }}
              />
            </div>
            <span className="text-white text-sm">{prediction.confidence}%</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-300">Points:</span>
          <span className="text-emerald-400 font-bold">
            {prediction.status === 'correct' ? `+${prediction.pointsEarned}` : prediction.potentialPoints}
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
          <FaChartLine className="text-emerald-400" />
          Fixtures & Predictions
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Stay updated with upcoming matches and track your predictions to earn points in your leagues.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('fixtures')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'fixtures'
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <FaFutbol className="inline mr-2" />
            Fixtures
          </button>
          <button
            onClick={() => setActiveTab('predictions')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'predictions'
                ? 'bg-emerald-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <FaTrophy className="inline mr-2" />
            My Predictions
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'fixtures' ? (
          <div className="grid gap-6">
            {fixtures.map((fixture) => (
              <FixtureCard key={fixture.id} fixture={fixture} />
            ))}
          </div>
        ) : (
          <div className="grid gap-6">
            {predictions.map((prediction) => (
              <PredictionCard key={prediction.id} prediction={prediction} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
