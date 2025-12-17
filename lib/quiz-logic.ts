// lib/quiz-logic.ts
export interface QuizAnswers {
    budget: string;
    duration: string;
    travelStyle: string;
    companion: string;
    experience: string;
    season: string;
  }
  
  export interface QuizRecommendation {
    destination: string;
    itinerary: string;
    duration: string;
    budget: string;
    matchScore: number;
    reasons: string[];
    destinations: Array<{
      name: string;
      match: number;
      reason: string;
    }>;
  }
  
  export function calculateRecommendation(answers: QuizAnswers): QuizRecommendation {
    let destinations = [];
    let matchScore = 0;
  
    // Budget logic
    if (answers.budget === 'budget') {
      destinations.push(
        { name: 'Prague', match: 90, reason: 'Excellent value for money' },
        { name: 'Budapest', match: 85, reason: 'Affordable luxury' },
        { name: 'Lisbon', match: 80, reason: 'Great weather & prices' }
      );
      matchScore += 25;
    } else if (answers.budget === 'midrange') {
      destinations.push(
        { name: 'Barcelona', match: 88, reason: 'Perfect balance of cost & experience' },
        { name: 'Rome', match: 85, reason: 'Reasonable prices for world-class sights' },
        { name: 'Amsterdam', match: 82, reason: 'Worth the splurge' }
      );
      matchScore += 20;
    } else {
      destinations.push(
        { name: 'Paris', match: 95, reason: 'Luxury experiences abound' },
        { name: 'Swiss Alps', match: 90, reason: 'Premium mountain experiences' },
        { name: 'French Riviera', match: 85, reason: 'Upscale coastal charm' }
      );
      matchScore += 15;
    }
  
    // Travel style logic
    if (answers.travelStyle === 'culture') {
      destinations.forEach(dest => {
        if (['Rome', 'Paris', 'Athens'].includes(dest.name)) {
          dest.match += 10;
          matchScore += 5;
        }
      });
    } else if (answers.travelStyle === 'food') {
      destinations.forEach(dest => {
        if (['Rome', 'Barcelona', 'Lisbon'].includes(dest.name)) {
          dest.match += 10;
          matchScore += 5;
        }
      });
    } else if (answers.travelStyle === 'adventure') {
      destinations.forEach(dest => {
        if (['Swiss Alps', 'Norwegian Fjords', 'Scottish Highlands'].includes(dest.name)) {
          dest.match += 10;
          matchScore += 5;
        }
      });
    }
  
    // Season logic
    if (answers.season === 'summer') {
      destinations.forEach(dest => {
        if (['Greek Islands', 'Croatian Coast', 'Barcelona'].includes(dest.name)) {
          dest.match += 10;
          matchScore += 5;
        }
      });
    } else if (answers.season === 'winter') {
      destinations.forEach(dest => {
        if (['Swiss Alps', 'Austrian Alps', 'Lapland'].includes(dest.name)) {
          dest.match += 10;
          matchScore += 5;
        }
      });
    }
  
    // Sort by match score
    destinations.sort((a, b) => b.match - a.match);
    const topDestination = destinations[0];
  
    // Generate final recommendation
    const itineraryMap: Record<string, string> = {
      'Paris': '7-Day Paris & French Countryside',
      'Rome': '10-Day Italian Food & Culture Tour',
      'Barcelona': '14-Day Mediterranean Explorer',
      'Prague': '8-Day Eastern Europe Budget Adventure',
      'Budapest': '7-Day Danube River Cities',
      'Lisbon': '10-Day Iberian Peninsula Road Trip',
      'Amsterdam': '9-Day Benelux Highlights',
      'Swiss Alps': '7-Day Alpine Adventure',
      'Greek Islands': '10-Day Island Hopping'
    };
  
    const durationMap = {
      'short': '7-10 days',
      'medium': '10-14 days',
      'long': '14-21 days'
    };
  
    const budgetMap = {
      'budget': '€40-€60/day',
      'midrange': '€60-€100/day',
      'luxury': '€100+/day'
    };
  
    return {
      destination: topDestination.name,
      itinerary: itineraryMap[topDestination.name] || 'Custom European Adventure',
      duration: durationMap[answers.duration as keyof typeof durationMap] || '10-14 days',
      budget: budgetMap[answers.budget as keyof typeof budgetMap] || '€60-€100/day',
      matchScore: Math.min(100, matchScore + topDestination.match / 2),
      reasons: [
        `Matches your ${answers.budget} budget preferences`,
        `Perfect for ${answers.travelStyle} travelers`,
        `Ideal for ${answers.companion} travel`,
        `Great during ${answers.season} season`
      ],
      destinations: destinations.slice(0, 3)
    };
  }
  
  // Quiz questions data
  export const quizQuestions = [
    {
      id: 'budget',
      question: "What's your daily budget for this trip?",
      options: [
        { label: "Budget (€40-€60/day)", value: 'budget', icon: '💰' },
        { label: "Mid-range (€60-€100/day)", value: 'midrange', icon: '🏛️' },
        { label: "Luxury (€100+/day)", value: 'luxury', icon: '🌟' },
      ]
    },
    {
      id: 'duration',
      question: "How long are you planning to travel?",
      options: [
        { label: "Short trip (3-7 days)", value: 'short', icon: '⏱️' },
        { label: "Medium trip (1-2 weeks)", value: 'medium', icon: '📅' },
        { label: "Long trip (2+ weeks)", value: 'long', icon: '🗓️' },
      ]
    },
    {
      id: 'travelStyle',
      question: "What's your travel style?",
      options: [
        { label: "Adventure & exploration", value: 'adventure', icon: '🧗' },
        { label: "Culture & history", value: 'culture', icon: '🏛️' },
        { label: "Food & wine", value: 'food', icon: '🍝' },
        { label: "Relaxation & scenery", value: 'relaxation', icon: '🌴' },
      ]
    },
    {
      id: 'companion',
      question: "Who are you traveling with?",
      options: [
        { label: "Solo", value: 'solo', icon: '👤' },
        { label: "Couple/Partner", value: 'couple', icon: '👫' },
        { label: "Friends", value: 'friends', icon: '👥' },
        { label: "Family", value: 'family', icon: '👨‍👩‍👧‍👦' },
      ]
    },
    {
      id: 'experience',
      question: "Is this your first time in Europe?",
      options: [
        { label: "Yes, first time!", value: 'first', icon: '🎯' },
        { label: "No, I've been before", value: 'experienced', icon: '🧭' },
      ]
    },
    {
      id: 'season',
      question: "When are you planning to travel?",
      options: [
        { label: "Spring (Mar-May)", value: 'spring', icon: '🌸' },
        { label: "Summer (Jun-Aug)", value: 'summer', icon: '☀️' },
        { label: "Fall (Sep-Nov)", value: 'fall', icon: '🍂' },
        { label: "Winter (Dec-Feb)", value: 'winter', icon: '❄️' },
      ]
    }
  ];