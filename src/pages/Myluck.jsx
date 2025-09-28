// import { useState } from "react";
// import { Header } from "../components/Header";
// import { StarBackground } from "../components/StrarBackground";
// import { ThemeToggle } from "../components/ThemeToggle";

// const BettingGame = () => {
//   const [betNumber, setBetNumber] = useState("");
//   const [betAmount, setBetAmount] = useState("");
//   const [frozenBet, setFrozenBet] = useState(null);
//   const [frozenAmount, setFrozenAmount] = useState(null);
//   const [randomNum, setRandomNum] = useState(null);
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Freeze the bet
//   const freezeBet = () => {
//     if (!betNumber || betNumber < 1 || betNumber > 100) {
//       setResult("⚠️ Please enter a valid betting number (1–100).");
//       return;
//     }
//     if (!betAmount || betAmount <= 0) {
//       setResult("⚠️ Please enter a valid betting amount.");
//       return;
//     }
//     setFrozenBet(parseInt(betNumber));
//     setFrozenAmount(parseInt(betAmount));
//     setResult(`✅ Bet locked on number: ${betNumber} with amount: ₹${betAmount}`);
//     setRandomNum(null);
//   };

//   // Generate random number with suspense
//   const generateAndCompare = () => {
//     if (!frozenBet || !frozenAmount) {
//       setResult("⚠️ Please place your bet first!");
//       return;
//     }

//     setLoading(true);
//     setResult("🎲 Rolling the numbers... please wait!");
//     setRandomNum(null);

//     // suspense 3-5 seconds before showing result
//     setTimeout(() => {
//       const generatedNum = Math.floor(Math.random() * 100) + 1;
//       setRandomNum(generatedNum);

//       if (frozenBet === generatedNum) {
//         const reward = frozenAmount * 100;
//         setResult(`🎉 JACKPOT! Your number ${frozenBet} matched! You won ₹${reward}`);
//       } else {
//         setResult(
//           `❌ Bad luck! Random number was ${generatedNum}, your bet was ${frozenBet}.`
//         );
//       }

//       setLoading(false);
//     }, Math.floor(Math.random() * 3000) + 3000); // suspense between 3–6s
//   };

//   const resetGame = () => {
//     setBetNumber("");
//     setBetAmount("");
//     setFrozenBet(null);
//     setFrozenAmount(null);
//     setRandomNum(null);
//     setResult("");
//     setLoading(false);
//   };

//   return (
//     <>
    
//     <StarBackground />    
//     <ThemeToggle />



//     <div className="p-6 flex flex-col items-center">
//       <h2 className="text-3xl font-bold mb-4">💰 Lucky Bet Game 🎲</h2>

//       {/* Input form */}
//       {!frozenBet && (
//         <div className="flex flex-col gap-3 mb-4">
//           <input
//             type="number"
//             min="1"
//             max="100"
//             value={betNumber}
//             onChange={(e) => setBetNumber(e.target.value)}
//             className="border rounded px-3 py-2 w-60 text-center"
//             placeholder="Enter betting number (1–100)"
//           />
//           <input
//             type="number"
//             min="1"
//             value={betAmount}
//             onChange={(e) => setBetAmount(e.target.value)}
//             className="border rounded px-3 py-2 w-60 text-center"
//             placeholder="Enter betting amount"
//           />
//           <button
//             onClick={freezeBet}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Freeze Bet
//           </button>
//         </div>
//       )}

//       {/* Show frozen bet */}
//       {frozenBet && (
//         <p className="mt-20 text-3xl font-medium mb-3">
//           🎯 Your bet: <span className="font-bold">{frozenBet}</span> | 💵 Amount:{" "}
//           <span className="font-bold">₹{frozenAmount}</span>
//         </p>
//       )}

//       {/* Generate number */}
//       {frozenBet && (
//         <button
//           onClick={generateAndCompare}
//           disabled={loading}
//           className={`mt-10 px-4 py-2 text-white rounded mb-3 ${
//             loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
//           }`}
//         >
//           {loading ? "Rolling..." : "Get Me Luck"}
//         </button>
//       )}

//       {/* Show suspense animation */}
//       {loading && (
//         <div className="animate-bounce text-xl font-bold text-yellow-600 mt-3">
//           🎲 Spinning the wheel...
//         </div>
//       )}

//       {/* Result */}
//       {result && !loading && (
//         <p className="mt-20 text-4xl font-semibold border border-red-600 rounded-2xl p-5">{result}</p>
//       )}

//       {/* Reset */}
//       {frozenBet && !loading && (
//         <button
//           onClick={resetGame}
//           className="mt-40 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Reset Game
//         </button>
//       )}
//     </div>
//     </>
//   );
// };

// export default BettingGame;



// //////////////////////////////////////////////////////////////

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



// //////////////////////////////////////////////////////////////////////////////////////

//  ================================= IMPROVED VERSION ========================================== //



// import React, { useState, useEffect } from "react";
// import Confetti from "react-confetti";

// const LuckyBetGame = () => {
//   const [betNumber, setBetNumber] = useState("");
//   const [betAmount, setBetAmount] = useState("");
//   const [generatedNumber, setGeneratedNumber] = useState(null);
//   const [result, setResult] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [canGenerate, setCanGenerate] = useState(true);
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleGenerate = () => {
//     if (!betNumber || !betAmount) {
//       alert("Enter a bet number (1–100) and an amount!");
//       return;
//     }
//     setIsGenerating(true);
//     setResult("");
//     setGeneratedNumber(null);
//     setShowConfetti(false);
//     setCanGenerate(false);

//     // Animation suspense for 5s
//     setTimeout(() => {
//       const randomNum = Math.floor(Math.random() * 100) + 1;
//       setGeneratedNumber(randomNum);

//       if (randomNum === parseInt(betNumber)) {
//         const reward = parseInt(betAmount) * 100;
//         setResult(`🎉 Jackpot! You win ₹${reward}`);
//         setShowConfetti(true);
//       } else {
//         setResult(`❌ Sorry, you lost. Try again!`);
//       }
//       setIsGenerating(false);
//     }, 5000);
//   };

//   const handleReset = () => {
//     setBetNumber("");
//     setBetAmount("");
//     setGeneratedNumber(null);
//     setResult("");
//     setCanGenerate(true);
//     setShowConfetti(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-900 to-black text-white font-sans">
//       <h1 className="text-4xl font-bold mb-8">🎰 Lucky Bet Jackpot 🎰</h1>

//       <div className="bg-purple-800 p-6 rounded-2xl shadow-lg w-96 text-center">
//         <input
//           type="number"
//           min="1"
//           max="100"
//           placeholder="Enter your number (1-100)"
//           className="w-full mb-4 p-3 rounded-lg text-black"
//           value={betNumber}
//           onChange={(e) => setBetNumber(e.target.value)}
//           disabled={!canGenerate}
//         />
//         <input
//           type="number"
//           placeholder="Enter your bet amount"
//           className="w-full mb-4 p-3 rounded-lg text-black"
//           value={betAmount}
//           onChange={(e) => setBetAmount(e.target.value)}
//           disabled={!canGenerate}
//         />

//         <button
//           onClick={handleGenerate}
//           disabled={!canGenerate}
//           className={`w-full py-3 rounded-lg font-bold transition ${
//             canGenerate
//               ? "bg-green-500 hover:bg-green-600"
//               : "bg-gray-500 cursor-not-allowed"
//           }`}
//         >
//           {isGenerating ? "Generating..." : "Generate Number"}
//         </button>

//         <button
//           onClick={handleReset}
//           className="w-full mt-3 py-3 rounded-lg font-bold bg-red-500 hover:bg-red-600"
//         >
//           Reset
//         </button>

//         {/* Jackpot number reveal */}
//         {isGenerating && (
//           <div className="mt-6 text-3xl font-extrabold animate-pulse">
//             Spinning 🎲...
//           </div>
//         )}

//         {generatedNumber !== null && (
//           <div className="mt-6 text-6xl font-extrabold text-yellow-400 animate-grow">
//             {generatedNumber}
//           </div>
//         )}

//         {result && (
//           <p className="mt-4 text-2xl font-bold animate-fade">{result}</p>
//         )}
//       </div>

//       {/* Firecracker effect */}
//       {showConfetti && <Confetti numberOfPieces={500} recycle={false} />}
//     </div>
//   );
// };

// export default LuckyBetGame;
