import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, BarChart, Zap, ShieldCheck, Rocket, Star, Target, TrendingUp, Check, Crown } from "lucide-react";
import './App.css';
import './index.css';
import logo from './234-logo.png';

const tiers = [
  {
    name: "Tier 1",
    // price: "$29",
    icon: <Zap className="w-8 h-8" />,
    games: { "2-odds": 1, "3-odds": 1, "4-odds": 1 },
    features: [
      "3 Total Games per Month",
      "70% AI Win Rate",
      "Basic Support",
      "Mobile Access"
    ],
    popular: false
  },
  {
    name: "Tier 2",
    // price: "$59",
    icon: <Target className="w-8 h-8" />,
    games: { "2-odds": 2, "3-odds": 2, "4-odds": 2 },
    features: [
      "6 Total Games per Month",
      "70% AI Win Rate",
      "Priority Support",
      // "Advanced Analytics",
      "Mobile Access"
    ],
    popular: true
  },
  {
    name: "Tier 3",
    // price: "$99",
    icon: <Crown className="w-8 h-8" />,
    games: { "2-odds": 3, "3-odds": 3, "4-odds": 3 },
    features: [
      "9 Total Games per Month",
      "70% AI Win Rate",
      "Priority Support",
      // "Advanced Analytics",
      // "Early Access Features",
      "Mobile Access"
    ],
    popular: false
  }
];

export default function App() {
  return (
    <div className="dark-bg min-h-screen flex flex-col">
      {/* Header & Logo */}
      <header className="flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="234-ODDS Logo" className="h-12 w-auto" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="section flex flex-col items-center text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          AI-Powered Betting Platform
        </h1>
        <p className="text-xl md:text-2xl text-green-500 font-semibold mb-6">
          70% AI Win Rate
        </p>
        <div className="flex items-center gap-2 mb-8">
          <Zap className="text-green-500 animate-pulse" size={32} />
          <span className="text-gray-300 text-lg">Powered by advanced AI analysis</span>
        </div>
        <button className="bg-gradient-to-r from-green-500/40 to-green-600/40 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform ease-linear shadow-lg hover:shadow-green-500/25">
          Start Winning Today
        </button>
      </section>

      {/* About Section */}
      <section className="section grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="card flex flex-col items-center bg-gray-800 rounded-2xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
          <BarChart className="text-green-500 mb-3" size={36} />
          <h3 className="text-xl font-bold mb-2 text-white">AI Analysis</h3>
          <p className="text-gray-400">Our AI crunches thousands of stats to deliver the best odds.</p>
        </div>
        <div className="card flex flex-col items-center bg-gray-800 rounded-2xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
          <ShieldCheck className="text-green-500 mb-3" size={36} />
          <h3 className="text-xl font-bold mb-2 text-white">Proven Results</h3>
          <p className="text-gray-400">Consistent 70% win rate, verified by real users and data.</p>
        </div>
        <div className="card flex flex-col items-center bg-gray-800 rounded-2xl p-8 hover:bg-gray-700/50 transition-colors duration-300">
          <Rocket className="text-green-500 mb-3" size={36} />
          <h3 className="text-xl font-bold mb-2 text-white">Simple System</h3>
          <p className="text-gray-400">Easy to use, no betting experience required. Just follow our picks!</p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Package</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect tier for your betting strategy and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative bg-gray-800 rounded-2xl p-8 ${tier.popular ? 'ring-2 ring-green-500 transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-green-500 mb-2">{tier.price}</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Monthly Games:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-gray-700/50 rounded-lg p-3">
                      <span className="text-green-400 font-semibold">2-Odds Games</span>
                      <span className="font-bold">{tier.games["2-odds"]}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-700/50 rounded-lg p-3">
                      <span className="text-green-400 font-semibold">3-Odds Games</span>
                      <span className="font-bold">{tier.games["3-odds"]}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-700/50 rounded-lg p-3">
                      <span className="text-green-400 font-semibold">4-Odds Games</span>
                      <span className="font-bold">{tier.games["4-odds"]}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Features:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/25' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="234-ODDS Logo" className="h-8 w-auto" />
              </div>
              <p className="text-gray-400 mt-2">AI-Powered Betting Platform</p>
            </div>
            <div className="flex space-x-8">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 234-ODDS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}