import { useState } from 'react';
import { X, Sparkles, Trophy, RefreshCw } from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    question: "Which high-energy DJ Headliner is performing live on Day 2 of PULSE 2026?",
    options: ["DJ Snake", "DJ KSHMR", "Martin Garrix", "David Guetta"],
    answer: 1,
  },
  {
    question: "What is the top prize pool for the HackPulse 24hr Hackathon?",
    options: ["$1,000", "$2,500", "$4,000", "$10,000"],
    answer: 2,
  },
  {
    question: "Which e-sports game will be featured on 240Hz monitors at Gaming Zone B?",
    options: ["Overwatch 2", "Valorant", "Call of Duty", "Apex Legends"],
    answer: 1,
  },
];

export default function MiniQuizModal({ onClose, onWinVipPass }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (idx) => {
    setSelectedOption(idx);
  };

  const handleNext = () => {
    let newScore = score;
    if (selectedOption === QUIZ_QUESTIONS[currentStep].answer) {
      newScore += 1;
      setScore(newScore);
    }

    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
      if (newScore === QUIZ_QUESTIONS.length) {
        onWinVipPass();
      }
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setScore(0);
    setQuizFinished(false);
    setSelectedOption(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-lg rounded-3xl overflow-hidden border-white/20 shadow-2xl relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white bg-white/5 border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {!quizFinished ? (
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> Trivia Challenge ({currentStep + 1}/{QUIZ_QUESTIONS.length})
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              {QUIZ_QUESTIONS[currentStep].question}
            </h3>

            <div className="space-y-3 mb-8">
              {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-4 rounded-xl text-left text-sm font-semibold border transition-all ${
                    selectedOption === idx
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              disabled={selectedOption === null}
              onClick={handleNext}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {currentStep + 1 === QUIZ_QUESTIONS.length ? 'Submit Quiz' : 'Next Question'}
            </button>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center mx-auto border border-yellow-500/30">
              <Trophy className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">Quiz Completed!</h3>
            <p className="text-sm text-gray-300">
              You scored <span className="text-cyan-400 font-bold">{score}/{QUIZ_QUESTIONS.length}</span> correct answers!
            </p>

            {score === QUIZ_QUESTIONS.length ? (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                🎉 Perfect Score! You unlocked a VIP Backstage Pass upgrade!
              </div>
            ) : (
              <p className="text-xs text-gray-400">
                Score 3/3 to unlock a complimentary VIP upgrade.
              </p>
            )}

            <div className="flex gap-3 justify-center pt-2">
              <button
                onClick={handleRestart}
                className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs flex items-center gap-1.5 hover:bg-white/20"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Try Again
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
