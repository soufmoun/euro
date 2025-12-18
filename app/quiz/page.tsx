// app/quiz/page.tsx - COMPLETE WORKING VERSION
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface QuizAnswer {
  [key: string]: string | number;
}

const questions = [
  {
    id: 'budget',
    question: "What's your daily budget for this trip?",
    options: [
      { label: "Budget (€40-€60/day)", value: 'budget' },
      { label: "Mid-range (€60-€100/day)", value: 'midrange' },
      { label: "Luxury (€100+/day)", value: 'luxury' },
    ]
  },
  {
    id: 'duration',
    question: "How long are you planning to travel?",
    options: [
      { label: "Short trip (3-7 days)", value: 'short' },
      { label: "Medium trip (1-2 weeks)", value: 'medium' },
      { label: "Long trip (2+ weeks)", value: 'long' },
    ]
  },
  {
    id: 'travelStyle',
    question: "What's your travel style?",
    options: [
      { label: "Adventure & exploration", value: 'adventure' },
      { label: "Culture & history", value: 'culture' },
      { label: "Food & wine", value: 'food' },
      { label: "Relaxation & scenery", value: 'relaxation' },
    ]
  },
  {
    id: 'companion',
    question: "Who are you traveling with?",
    options: [
      { label: "Solo", value: 'solo' },
      { label: "Couple/Partner", value: 'couple' },
      { label: "Friends", value: 'friends' },
      { label: "Family", value: 'family' },
    ]
  },
  {
    id: 'experience',
    question: "Is this your first time in Europe?",
    options: [
      { label: "Yes, first time!", value: 'first' },
      { label: "No, I've been before", value: 'experienced' },
    ]
  },
  {
    id: 'season',
    question: "When are you planning to travel?",
    options: [
      { label: "Spring (Mar-May)", value: 'spring' },
      { label: "Summer (Jun-Aug)", value: 'summer' },
      { label: "Fall (Sep-Nov)", value: 'fall' },
      { label: "Winter (Dec-Feb)", value: 'winter' },
    ]
  }
];

export default function QuizPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer>({});
  const [isLoading, setIsLoading] = useState(false);

  const currentQuestion = questions[currentStep];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));

    // Auto-advance to next question
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    
    // Calculate recommendation based on answers
    const recommendation = calculateRecommendation(answers);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('quizAnswers', JSON.stringify(answers));
      localStorage.setItem('quizRecommendation', JSON.stringify(recommendation));
    }
    
    // Redirect to results
    router.push('/quiz/results');
  };

  const calculateRecommendation = (answers: QuizAnswer) => {
    const budget = answers.budget || 'midrange';
    const duration = answers.duration || 'medium';
    const travelStyle = answers.travelStyle || 'culture';
    
    // Simple recommendation logic
    let destination = 'Paris';
    let itinerary = 'Classic European';
    
    if (budget === 'budget' && travelStyle === 'culture') {
      destination = 'Prague';
      itinerary = 'Eastern Europe Budget';
    } else if (budget === 'luxury' && travelStyle === 'food') {
      destination = 'Rome';
      itinerary = 'Italian Food & Wine Tour';
    } else if (budget === 'budget' && duration === 'long') {
      destination = 'Barcelona';
      itinerary = 'Mediterranean Explorer';
    }
    
    return {
      destination,
      itinerary,
      duration: duration === 'short' ? '7 days' : 
               duration === 'medium' ? '14 days' : '21+ days',
      budget: budget === 'budget' ? '€40-€60/day' :
              budget === 'midrange' ? '€60-€100/day' : '€100+/day',
      matchScore: 85,
      reasons: [
        'Matches your budget preferences',
        'Fits your travel duration',
        'Aligns with your interests'
      ]
    };
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Find Your Perfect European Trip</h1>
            <p className="lead text-muted">
              Answer 6 quick questions to get a personalized itinerary recommendation
            </p>
            <div className="progress mb-4" style={{ height: '8px' }}>
              <div 
                className="progress-bar bg-primary" 
                style={{ width: `${progress}%` }}
                role="progressbar"
              ></div>
            </div>
            <div className="text-muted small">
              Question {currentStep + 1} of {questions.length}
            </div>
          </div>

          {/* Quiz Card */}
          <div className="card border-0 shadow-lg">
            <div className="card-body p-5">
              {currentStep < questions.length ? (
                <>
                  <h2 className="h3 mb-4 text-center">{currentQuestion.question}</h2>
                  
                  <div className="row g-3">
                    {currentQuestion.options.map((option, index) => (
                      <div key={index} className="col-md-6">
                        <button
                          className={`btn btn-outline-primary w-100 py-4 text-start ${answers[currentQuestion.id] === option.value ? 'active bg-primary text-white' : ''}`}
                          onClick={() => handleAnswer(currentQuestion.id, option.value)}
                          style={{ height: '100%' }}
                        >
                          <div className="d-flex align-items-center">
                            <span className="fs-4 me-3">
                              {index === 0 ? '💰' : 
                               index === 1 ? '🏛️' : 
                               index === 2 ? '🍝' : 
                               index === 3 ? '🌴' : '🌟'}
                            </span>
                            <span className="fw-medium">{option.label}</span>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="d-flex justify-content-between mt-5">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      disabled={currentStep === 0}
                    >
                      ← Previous
                    </button>
                    
                    <div className="text-center">
                      <span className="text-muted">
                        {currentStep + 1} of {questions.length}
                      </span>
                    </div>
                    
                    {currentStep === questions.length - 1 ? (
                      <button
                        className="btn btn-primary px-4"
                        onClick={handleSubmit}
                        disabled={Object.keys(answers).length < questions.length}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Calculating...
                          </>
                        ) : (
                          'See My Results →'
                        )}
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => setCurrentStep(prev => prev + 1)}
                        disabled={!answers[currentQuestion.id]}
                      >
                        Next →
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <h3>Calculating your results...</h3>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="row text-center mt-4">
            <div className="col-md-4">
              <div className="card border-0 bg-light">
                <div className="card-body">
                  <div className="fs-1 mb-2">🎯</div>
                  <h6 className="fw-bold">Personalized</h6>
                  <p className="text-muted small mb-0">Based on your preferences</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-light">
                <div className="card-body">
                  <div className="fs-1 mb-2">💰</div>
                  <h6 className="fw-bold">Budget-Focused</h6>
                  <p className="text-muted small mb-0">Real cost breakdowns</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-light">
                <div className="card-body">
                  <div className="fs-1 mb-2">✈️</div>
                  <h6 className="fw-bold"> Travelers</h6>
                  <p className="text-muted small mb-0">Successfully guided</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center mt-4">
            <Link href="/itineraries" className="text-decoration-none">
              ← Browse all itineraries instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}