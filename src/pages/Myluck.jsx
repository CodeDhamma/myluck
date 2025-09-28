

import { useState } from "react";
import { StarBackground } from "../components/StrarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

const BettingGame = () => {
  const [betNumber, setBetNumber] = useState("");
  const [betAmount, setBetAmount] = useState("");
  const [frozenBet, setFrozenBet] = useState(null);
  const [frozenCoins, setFrozenCoins] = useState(null);
  const [randomNum, setRandomNum] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  // const [canGenerate, setCanGenerate] = useState(true);

  // Freeze the bet
  const freezeBet = () => {
    if (!betNumber || betNumber < 1 || betNumber > 100) {
      setResult("⚠️ Please enter a valid betting number (1–100).");
      return;
    }
    if (!betAmount || betAmount <= 0) {
      setResult("⚠️ Please enter a valid betting Coins.");
      return;
    }
    setFrozenBet(parseInt(betNumber));
    setFrozenCoins(parseInt(betAmount));
    setResult(`✅ Bet locked on number: ${betNumber} with Coins: ${betAmount}`);
    setRandomNum(null);
  };

  // Generate random number with slot-machine animation
  const generateAndCompare = () => {
    if (!frozenBet || !frozenCoins) {
      setResult("⚠️ Please place your bet first!");
      return;
    }

    setLoading(true);
    setResult("🎰 Spinning the slot... please wait!");
    setRandomNum(null);

    let spins = 0;
    let intervalTime = 100; // fast at start
    let spinInterval;

    const spinNumbers = () => {
      const shuffleNum = Math.floor(Math.random() * 100) + 1;
      setRandomNum(shuffleNum);
      spins++;

      // slow down after certain spins
      if (spins > 20 && intervalTime < 400) {
        intervalTime += 30;
        clearInterval(spinInterval);
        spinInterval = setInterval(spinNumbers, intervalTime);
      }

      // stop after enough spins
      if (spins > 40) {
        clearInterval(spinInterval);

        const generatedNum = Math.floor(Math.random() * 100) + 1;
        setRandomNum(generatedNum);

        if (frozenBet === generatedNum) {
          const reward = frozenCoins * 100;
          setResult(
            `🎉 JACKPOT! Your number ${frozenBet} matched! You won ${reward} Coins`
          );
        } else {
          setResult(
           `❌ Bad luck! Draw number was ${generatedNum}, your bet was ${frozenBet}.`
          );
        }

        setLoading(false);
      }
    };

    spinInterval = setInterval(spinNumbers, intervalTime);
  };

  const resetGame = () => {
    setBetNumber("");
    setBetAmount("");
    setFrozenBet(null);
    setFrozenCoins(null);
    setRandomNum(null);
    setResult("");
    setLoading(false);
  };

  return (
    <>
      <StarBackground />
      <ThemeToggle />

      <div className="p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">💰 Lucky Bet Game 🎲</h2>

        {/* Input form */}
        {!frozenBet && (
          <div className="flex flex-col gap-3 mb-4">
            <input
              type="number"
              min="1"
              max="100"
              value={betNumber}
              onChange={(e) => setBetNumber(e.target.value)}
              className="border rounded px-4 py-2 w-80 text-center"
              placeholder="Enter betting number (1–100)"
            />
            <input
              type="number"
              min="1"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              className="border rounded px-4 py-2 w-80 text-center"
              placeholder="Enter betting Coins"
            />
            <button
              onClick={freezeBet}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Freeze Bet
            </button>
          </div>
        )}

        {/* Show frozen bet */}
        {frozenBet && (
          <p className="mt-10 text-2xl font-medium mb-3">
            🎯 Your bet: <span className="font-bold">{frozenBet}</span> | 🪙 Coins:{" "}
            <span className="font-bold">{frozenCoins}</span>
          </p>
        )}

        {/* Generate number */}
        {frozenBet && (
          <button
            onClick={generateAndCompare}
            disabled={loading}
            className={`mt-10 px-4 py-2 text-white rounded mb-3 ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Spinning..." : "Try Your Luck"}
          </button>
        )}




        {/* Slot-machine animation */}
        {loading && (
          <div className="mt-12 text-9xl font-extrabold text-purple-700 animate-pulse">
            {randomNum !== null ? randomNum : "🎰"}
          </div>
        )}

        {/* Final Result */}
        {result && !loading && (
          <p className="mt-20 text-3xl font-semibold border border-red-600 rounded-2xl p-5 text-center">
            {result}
          </p>
        )}

        {/* Reset */}
        {frozenBet && !loading && (
          <button
            onClick={resetGame}
            className="mt-20 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Reset Game
          </button>
        )}
      </div>
    </>
  );
};

export default BettingGame;

