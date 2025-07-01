// src/pages/Home.jsx
import { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

const MOCK_FIXTURES = [
  {
    id: 1,
    date: 'Sat, 4 Aug 19',
    time: '12:30',
    home: { name: 'Liverpool', logo: '/assets/liverpool.png' },
    away: { name: 'Bournemouth', logo: '/assets/bournemouth.png' },
  },
  {
    id: 2,
    date: 'Sat, 4 Aug 19',
    time: '15:00',
    home: { name: 'Fulham', logo: '/assets/fulham.png' },
    away: { name: 'Brentford', logo: '/assets/brentford.png' },
  },
  {
    id: 3,
    date: 'Sat, 4 Aug 19',
    time: '15:00',
    home: { name: 'Tottenham', logo: '/assets/tottenham.png' },
    away: { name: 'Man United', logo: '/assets/manunited.png' },
  },
  {
    id: 4,
    date: 'Sat, 4 Aug 19',
    time: '20:00',
    home: { name: 'Man City', logo: '/assets/mancity.png' },
    away: { name: 'Newcastle', logo: '/assets/newcastle.png' },
  },
];

export default function Home() {
  // simple local state for your inputs
  const [preds, setPreds] = useState(
    MOCK_FIXTURES.reduce((acc, f) => {
      acc[f.id] = [0, 0];
      return acc;
    }, {})
  );

  const handleChange = (id, idx, val) =>
    setPreds(p => ({
      ...p,
      [id]: p[id].map((x, i) => (i === idx ? Number(val) : x)),
    }));

  const handleSave = () => {
    // TODO: hook up your API call
    console.log('Saving preds', preds);
  };

  return (
    <Layout>
      <div className="px-4 pt-6 pb-24">
        {/* Greeting */}
        <h1 className="text-2xl font-bold text-white mb-2">Welcome back, Alex</h1>
        <p className="text-white/80 mb-4">
          Gameweek <span className="font-bold">2</span> Deadline:&nbsp;
          <span className="font-mono">Aug 20, 11:00</span>
        </p>

        {/* Banker X */}
        <div className="inline-block text-neon font-bold mb-4 text-[#23FF00]">
          BANKER X
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-neon/50 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#23FF00] text-black">
                <th className="px-3 py-2 text-left">MATCH</th>
                <th className="px-3 py-2 text-left">PREDICTION</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_FIXTURES.map(f => (
                <tr
                  key={f.id}
                  className="bg-[#E7FFE7] border-t border-[#E7FFE7]/50 text-black"
                >
                  <td className="flex items-center px-3 py-3 space-x-2">
                    <div className="text-sm text-gray-700">{f.time}</div>
                    <img
                      src={f.home.logo}
                      alt={f.home.name}
                      className="h-6 w-6"
                    />
                    <span className="font-semibold">{f.home.name}</span>
                    <span className="mx-1">vs</span>
                    <img
                      src={f.away.logo}
                      alt={f.away.name}
                      className="h-6 w-6"
                    />
                    <span className="font-semibold">{f.away.name}</span>
                  </td>
                  <td className="flex items-center px-3 py-3 space-x-2">
                    {/* home input */}
                    <input
                      type="number"
                      min={0}
                      className="w-12 p-1 text-center bg-black/10 text-black rounded border border-black/50"
                      value={preds[f.id][0]}
                      onChange={e => handleChange(f.id, 0, e.target.value)}
                    />
                    <span className="font-bold">=</span>
                    {/* away input */}
                    <input
                      type="number"
                      min={0}
                      className="w-12 p-1 text-center bg-black/10 text-black rounded border border-black/50"
                      value={preds[f.id][1]}
                      onChange={e => handleChange(f.id, 1, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <Button onClick={handleSave} className="bg-[#23FF00]">
            SAVE PREDICTIONS
          </Button>
        </div>
      </div>
    </Layout>
  );
}