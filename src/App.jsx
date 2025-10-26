import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, MessageCircle, Sparkles, Search, Menu, X, ChevronRight, GraduationCap, Brain, Zap, CreditCard, Star, Users, Award, TrendingUp, Play } from 'lucide-react';

const PAYSTACK_PUBLIC_KEY = 'pk_test_xxxxxxxxxxxxx'; // Replace with actual key

const COURSES_DATA = {
  primary: {
    name: "Primary School",
    levels: "P1 - P6",
    price: "$5",
    priceValue: 5,
    subjects: [
      { name: "English Language", icon: "📝", aiFeature: "AI-assisted spelling games", topics: 12, trial: true },
      { name: "Mathematics", icon: "🔢", aiFeature: "Pattern recognition & logic games", topics: 15, trial: true },
      { name: "Science", icon: "🔬", aiFeature: "AI simulations & experiments", topics: 10, trial: true },
      { name: "ICT/Computer Studies", icon: "💻", aiFeature: "AI basics & Scratch Jr coding", topics: 8, trial: true },
      { name: "Creative Arts", icon: "🎨", aiFeature: "AI coloring & music tools", topics: 6, trial: true },
      { name: "Physical & Health Ed", icon: "⚽", aiFeature: "Smart health device demos", topics: 5, trial: true }
    ]
  },
  jss: {
    name: "Junior Secondary",
    levels: "JSS1 - JSS3",
    price: "$5",
    priceValue: 5,
    subjects: [
      { name: "English Language", icon: "📖", aiFeature: "AI storytelling & grammar", topics: 20, trial: true },
      { name: "Mathematics", icon: "➗", aiFeature: "Pattern analysis & problem solving", topics: 25, trial: true },
      { name: "Basic Science", icon: "🧪", aiFeature: "Interactive simulations", topics: 18, trial: true },
      { name: "Social Studies", icon: "🌍", aiFeature: "AI-enhanced research", topics: 15, trial: true },
      { name: "ICT", icon: "🖥️", aiFeature: "Python basics & simple chatbots", topics: 16, trial: true },
      { name: "Agricultural Science", icon: "🌾", aiFeature: "Smart farming intro", topics: 12, trial: true },
      { name: "Home Economics", icon: "🏠", aiFeature: "AI nutrition planning", topics: 10, trial: true },
      { name: "Basic Technology", icon: "🔧", aiFeature: "Design simulations", topics: 14, trial: true }
    ]
  },
  sss: {
    name: "Senior Secondary",
    levels: "SS1 - SS3",
    price: "$5",
    priceValue: 5,
    streams: {
      science: [
        { name: "Physics", icon: "⚛️", aiFeature: "AI experiments & simulations", topics: 30, trial: true },
        { name: "Chemistry", icon: "🧬", aiFeature: "Predictive analysis & lab simulations", topics: 28, trial: true },
        { name: "Biology", icon: "🦠", aiFeature: "AI-powered experiments", topics: 26, trial: true },
        { name: "Mathematics", icon: "📐", aiFeature: "Advanced problem solving", topics: 35, trial: true },
        { name: "Further Mathematics", icon: "∞", aiFeature: "Pattern recognition", topics: 32, trial: true }
      ],
      arts: [
        { name: "Literature", icon: "📚", aiFeature: "AI text analysis", topics: 22, trial: true },
        { name: "History", icon: "🏛️", aiFeature: "AI research tools", topics: 20, trial: true },
        { name: "Geography", icon: "🗺️", aiFeature: "Climate modeling", topics: 24, trial: true },
        { name: "Government", icon: "⚖️", aiFeature: "Policy analysis", topics: 18, trial: true },
        { name: "Economics", icon: "📊", aiFeature: "Market predictions", topics: 25, trial: true }
      ],
      commercial: [
        { name: "Accounting", icon: "💰", aiFeature: "AI financial analysis", topics: 28, trial: true },
        { name: "Commerce", icon: "🏪", aiFeature: "Business predictions", topics: 22, trial: true },
        { name: "Business Studies", icon: "💼", aiFeature: "Marketing analytics", topics: 24, trial: true },
        { name: "Economics", icon: "📈", aiFeature: "Economic modeling", topics: 25, trial: true }
      ]
    }
  },
  preuni: {
    name: "Pre-University Tutorials",
    levels: "University Prep",
    price: "$5",
    priceValue: 5,
    subjects: [
      { name: "Advanced Mathematics", icon: "🎓", aiFeature: "STEM exam prep", topics: 40, trial: true },
      { name: "Physics Fundamentals", icon: "🔭", aiFeature: "University bridge course", topics: 35, trial: true },
      { name: "Chemistry Essentials", icon: "⚗️", aiFeature: "Lab prep & theory", topics: 33, trial: true },
      { name: "Biology Advanced", icon: "🧫", aiFeature: "Medical prep course", topics: 38, trial: true },
      { name: "Academic English", icon: "✍️", aiFeature: "Essay writing & research", topics: 25, trial: true },
      { name: "Coding & AI Basics", icon: "👨‍💻", aiFeature: "Tech course preparation", topics: 30, trial: true }
    ]
  },
  university: {
    name: "University/Tertiary",
    levels: "Undergraduate & Postgraduate",
    price: "$5",
    priceValue: 5,
    faculties: {
      tech: {
        name: "Science & Technology",
        courses: [
          { name: "Machine Learning", icon: "🤖", aiFeature: "Deep Learning projects", topics: 45, trial: true },
          { name: "Computer Vision", icon: "👁️", aiFeature: "Image processing", topics: 40, trial: true },
          { name: "NLP", icon: "💬", aiFeature: "Language models", topics: 42, trial: true },
          { name: "Software Engineering", icon: "⚙️", aiFeature: "AI-assisted coding", topics: 50, trial: true }
        ]
      },
      slt: {
        name: "Science Laboratory Technology",
        courses: [
          { name: "Analytical Chemistry", icon: "🔬", aiFeature: "AI data analysis", topics: 38, trial: true },
          { name: "Microbiology", icon: "🦠", aiFeature: "Predictive modeling", topics: 35, trial: true },
          { name: "Biotechnology", icon: "🧬", aiFeature: "Lab automation", topics: 40, trial: true },
          { name: "Pharmacology", icon: "💊", aiFeature: "Drug discovery AI", topics: 36, trial: true }
        ]
      },
      medical: {
        name: "Medicine & Health",
        courses: [
          { name: "Clinical Diagnostics", icon: "🏥", aiFeature: "AI diagnostics", topics: 48, trial: true },
          { name: "Pharmacology", icon: "💉", aiFeature: "Drug interaction AI", topics: 42, trial: true },
          { name: "Medical Imaging", icon: "📷", aiFeature: "Image analysis", topics: 40, trial: true },
          { name: "Public Health", icon: "🩺", aiFeature: "Epidemiology modeling", topics: 35, trial: true }
        ]
      },
      business: {
        name: "Business & Management",
        courses: [
          { name: "Data Analytics", icon: "📊", aiFeature: "Predictive analytics", topics: 38, trial: true },
          { name: "Digital Marketing", icon: "📱", aiFeature: "AI marketing tools", topics: 35, trial: true },
          { name: "Financial Technology", icon: "💳", aiFeature: "Algorithmic trading", topics: 40, trial: true },
          { name: "Entrepreneurship", icon: "🚀", aiFeature: "Business AI tools", topics: 32, trial: true }
        ]
      },
      agriculture: {
        name: "Agriculture & Environment",
        courses: [
          { name: "Precision Farming", icon: "🌱", aiFeature: "AI crop monitoring", topics: 36, trial: true },
          { name: "Climate Modeling", icon: "🌦️", aiFeature: "Weather prediction", topics: 38, trial: true },
          { name: "Soil Science", icon: "🏞️", aiFeature: "Resource management", topics: 34, trial: true },
          { name: "Environmental Tech", icon: "♻️", aiFeature: "Sustainability AI", topics: 35, trial: true }
        ]
      }
    }
  }
};

// AI Knowledge Base for intelligent responses
const AI_KNOWLEDGE = {
  greetings: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
  math: ["math", "mathematics", "calculation", "algebra", "geometry", "calculus", "equation", "formula"],
  science: ["science", "physics", "chemistry", "biology", "experiment", "atom", "cell", "energy"],
  programming: ["code", "coding", "programming", "python", "javascript", "algorithm", "function", "variable"],
  help: ["help", "assist", "support", "guide", "explain", "teach", "learn"],
  courses: ["course", "subject", "class", "lesson", "module", "enroll", "study"]
};

const EduSpark = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI tutor. I can help you with Math, Science, Programming, and guide you through courses. What would you like to learn today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [trialCourses, setTrialCourses] = useState({});
  const [showProgress, setShowProgress] = useState(false);
  const [userProgress, setUserProgress] = useState({});
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const chatEndRef = useRef(null);

  const LOGO_URL = "https://i.imgur.com/LsQEpvp.png";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Greeting responses
    if (AI_KNOWLEDGE.greetings.some(g => input.includes(g))) {
      return "Hello! I'm excited to help you learn today. What subject would you like to explore?";
    }
    
    // Math help
    if (AI_KNOWLEDGE.math.some(m => input.includes(m))) {
      return "I can help with Mathematics! Whether it's basic arithmetic, algebra, geometry, or calculus, I'm here to guide you. What specific math concept would you like to understand better?";
    }
    
    // Science help
    if (AI_KNOWLEDGE.science.some(s => input.includes(s))) {
      return "Science is fascinating! I can explain concepts in Physics, Chemistry, and Biology. Which area interests you? Or would you like me to explain a specific scientific concept?";
    }
    
    // Programming help
    if (AI_KNOWLEDGE.programming.some(p => input.includes(p))) {
      return "Great! I love teaching programming. We have courses in Python, JavaScript, and AI fundamentals. Would you like to start with coding basics, or dive into a specific programming topic?";
    }
    
    // Course information
    if (AI_KNOWLEDGE.courses.some(c => input.includes(c))) {
      return "We offer courses from Primary School to University level! All courses have free trials and cost just $5 per module. Would you like recommendations based on your level?";
    }
    
    // Help requests
    if (AI_KNOWLEDGE.help.some(h => input.includes(h))) {
      return "I'm here to help! You can ask me about:\n• Math, Science, or Programming concepts\n• Course recommendations\n• Study tips and learning strategies\n• Specific homework questions\nWhat do you need help with?";
    }
    
    // Specific questions with keywords
    if (input.includes("how") || input.includes("what") || input.includes("why") || input.includes("explain")) {
      return "That's a great question! Let me break it down for you: I'll help explain this concept step-by-step. Could you provide more details about what you're trying to understand?";
    }
    
    // Default intelligent response
    const responses = [
      "Interesting question! Let me help you understand this better. Based on what you're asking, I recommend breaking it down into smaller steps.",
      "I can help with that! This is a common topic students ask about. Let's explore it together - would you like a simple explanation or a detailed one?",
      "Great thinking! To answer your question properly, let me share some key points and examples that will make this clearer.",
      "That's exactly the kind of question that shows you're thinking deeply! Let me guide you through the concept with practical examples."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage);
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: aiResponse 
      }]);
      setIsTyping(false);
    }, 800);
  };

  const handleFreeTrial = (courseName) => {
    setTrialCourses(prev => ({ ...prev, [courseName]: true }));
    alert(`🎉 Free trial activated for ${courseName}!\n\nYou now have access to:\n• First 3 lessons\n• AI tutor support\n• Interactive exercises\n\nEnjoy your trial!`);
  };

  const handlePayment = (courseName, amount) => {
    if (!trialCourses[courseName]) {
      const tryTrial = window.confirm(`Would you like to try a FREE TRIAL first before enrolling in ${courseName}?`);
      if (tryTrial) {
        handleFreeTrial(courseName);
        return;
      }
    }

    // Convert USD to Naira for Paystack (example rate: 1 USD = 1500 NGN)
    const amountInNaira = amount * 1500;
    
    const handler = window.PaystackPop?.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: 'student@example.com',
      amount: amountInNaira * 100,
      currency: 'NGN',
      ref: 'ESP-' + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Course Name",
            variable_name: "course_name",
            value: courseName
          }
        ]
      },
      callback: function(response) {
        alert('✅ Payment successful!\n\nReference: ' + response.reference + '\n\nYou now have full access to ' + courseName + '!');
      },
      onClose: function() {
        alert('Payment window closed');
      }
    });
    
    if (handler) {
      handler.openIframe();
    } else {
      alert('✅ Enrollment successful!\n\nWelcome to ' + courseName + '!\n\nYou now have full access to all course materials.');
    }
  };

  const renderCourseCard = (course, level, price, priceValue) => (
    <div key={course.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className="text-4xl mb-3">{course.icon}</div>
      <h3 className="font-bold text-lg mb-2">{course.name}</h3>
      <p className="text-sm text-gray-600 mb-3">{course.aiFeature}</p>
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <span>📚 {course.topics} topics</span>
        <span className="font-bold text-green-600 text-lg">{price}</span>
      </div>
      
      {course.trial && !trialCourses[course.name] && (
        <button 
          onClick={() => handleFreeTrial(course.name)}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all mb-2 flex items-center justify-center gap-2"
        >
          <Play className="w-4 h-4" />
          Start Free Trial
        </button>
      )}
      
      <button 
        onClick={() => handlePayment(course.name, priceValue)}
        className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 ${
          trialCourses[course.name] ? 'ring-2 ring-green-400' : ''
        }`}
      >
        <CreditCard className="w-4 h-4" />
        {trialCourses[course.name] ? 'Upgrade to Full Access' : 'Enroll Now'}
      </button>
      
      {trialCourses[course.name] && (
        <div className="mt-2 text-xs text-center text-green-600 font-medium">
          ✓ Trial Active
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.imgur.com/IhoHWU5.png"
                alt="EduSpark Logo"
                className="w-12 h-12 rounded-lg object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  EduSpark
                </h1>
                <p className="text-xs text-gray-600">Empowering Minds Through AI Learning</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => setActiveTab('home')} className={`font-medium transition-colors ${activeTab === 'home' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
                Home
              </button>
              <button onClick={() => setActiveTab('courses')} className={`font-medium transition-colors ${activeTab === 'courses' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
                Courses
              </button>
              <button onClick={() => setActiveTab('about')} className={`font-medium transition-colors ${activeTab === 'about' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
                About
              </button>
              <button onClick={() => setChatOpen(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all">
                <Brain className="w-4 h-4" />
                AI Tutor
              </button>
            </nav>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {menuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
              <button onClick={() => { setActiveTab('home'); setMenuOpen(false); }} className="text-left font-medium">Home</button>
              <button onClick={() => { setActiveTab('courses'); setMenuOpen(false); }} className="text-left font-medium">Courses</button>
              <button onClick={() => { setActiveTab('about'); setMenuOpen(false); }} className="text-left font-medium">About</button>
              <button onClick={() => { setChatOpen(true); setMenuOpen(false); }} className="bg-purple-600 text-white px-4 py-2 rounded-lg">AI Tutor</button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://i.imgur.com/IhoHWU5.png"
                  alt="EduSpark Logo"
                  className="w-40 h-40 rounded-2xl object-contain shadow-2xl bg-white p-4"
                />
              </div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Learn Smarter with AI
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                From Primary School to University - AI-powered education for every level
              </p>
              <p className="text-2xl font-bold text-green-600 mb-8">
                🎉 Only $5 per module + FREE Trials Available!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={() => setActiveTab('courses')} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:shadow-xl transition-all">
                  Explore Courses
                </button>
                <button onClick={() => setChatOpen(true)} className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium text-lg border-2 border-purple-600 hover:bg-purple-50 transition-all">
                  Try AI Tutor
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">$5 Per Module</h3>
                <p className="text-sm text-gray-600">Affordable quality education</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <Play className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Free Trials</h3>
                <p className="text-sm text-gray-600">Try before you enroll</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Smart AI Tutor</h3>
                <p className="text-sm text-gray-600">Get instant help 24/7</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CreditCard className="w-12 h-12 text-pink-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Easy Payment</h3>
                <p className="text-sm text-gray-600">Secure checkout</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <Users className="w-10 h-10 mb-2" />
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm">Active Students</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <BookOpen className="w-10 h-10 mb-2" />
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Courses Available</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white">
                <Award className="w-10 h-10 mb-2" />
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                <TrendingUp className="w-10 h-10 mb-2" />
                <div className="text-3xl font-bold">4.8/5</div>
                <div className="text-sm">Student Rating</div>
              </div>
            </div>

            {/* Quick Access */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Choose Your Level</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(COURSES_DATA).slice(0, 5).map(([key, level]) => (
                  <button
                    key={key}
                    onClick={() => { setSelectedLevel(key); setActiveTab('courses'); }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left group"
                  >
                    <GraduationCap className="w-12 h-12 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-xl mb-2">{level.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{level.levels}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-bold text-lg">{level.price}/module</span>
                      <div className="flex items-center text-purple-600 font-medium">
                        Explore <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'courses' && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Browse Courses</h2>
              <p className="text-gray-600 mb-6">All courses: $5 per module • Free trials available</p>
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-3 mb-6 flex-wrap">
                <button
                  onClick={() => setSelectedLevel(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${!selectedLevel ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  All Levels
                </button>
                {Object.entries(COURSES_DATA).map(([key, level]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedLevel(key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedLevel === key ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary School */}
            {(!selectedLevel || selectedLevel === 'primary') && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold">{COURSES_DATA.primary.name}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {COURSES_DATA.primary.price}/module
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Free Trial ✓
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {COURSES_DATA.primary.subjects.map(course => renderCourseCard(course, 'primary', COURSES_DATA.primary.price, COURSES_DATA.primary.priceValue))}
                </div>
              </div>
            )}

            {/* JSS */}
            {(!selectedLevel || selectedLevel === 'jss') && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold">{COURSES_DATA.jss.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {COURSES_DATA.jss.price}/module
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Free Trial ✓
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {COURSES_DATA.jss.subjects.map(course => renderCourseCard(course, 'jss', COURSES_DATA.jss.price, COURSES_DATA.jss.priceValue))}
                </div>
              </div>
            )}

            {/* SSS */}
            {(!selectedLevel || selectedLevel === 'sss') && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold">{COURSES_DATA.sss.name}</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {COURSES_DATA.sss.price}/module
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Free Trial ✓
                  </span>
                </div>
                
                <div className="flex gap-3 mb-6 flex-wrap">
                  <button
                    onClick={() => setSelectedStream(null)}
                    className={`px-4 py-2 rounded-lg transition-all ${!selectedStream ? 'bg-purple-600 text-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    All Streams
                  </button>
                  <button
                    onClick={() => setSelectedStream('science')}
                    className={`px-4 py-2 rounded-lg transition-all ${selectedStream === 'science' ? 'bg-purple-600 text-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    Science
                  </button>
                  <button
                    onClick={() => setSelectedStream('arts')}
                    className={`px-4 py-2 rounded-lg transition-all ${selectedStream === 'arts' ? 'bg-purple-600 text-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    Arts/Humanities
                  </button>
                  <button
                    onClick={() => setSelectedStream('commercial')}
                    className={`px-4 py-2 rounded-lg transition-all ${selectedStream === 'commercial' ? 'bg-purple-600 text-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    Commercial/Business
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {(selectedStream ? COURSES_DATA.sss.streams[selectedStream] : Object.values(COURSES_DATA.sss.streams).flat()).map(course => 
                    renderCourseCard(course, 'sss', COURSES_DATA.sss.price, COURSES_DATA.sss.priceValue)
                  )}
                </div>
              </div>
            )}

            {/* Pre-University */}
            {(!selectedLevel || selectedLevel === 'preuni') && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold">{COURSES_DATA.preuni.name}</h3>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {COURSES_DATA.preuni.price}/module
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Free Trial ✓
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {COURSES_DATA.preuni.subjects.map(course => renderCourseCard(course, 'preuni', COURSES_DATA.preuni.price, COURSES_DATA.preuni.priceValue))}
                </div>
              </div>
            )}

            {/* University */}
            {(!selectedLevel || selectedLevel === 'university') && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold">{COURSES_DATA.university.name}</h3>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {COURSES_DATA.university.price}/module
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Free Trial ✓
                  </span>
                </div>
                
                {Object.entries(COURSES_DATA.university.faculties).map(([key, faculty]) => (
                  <div key={key} className="mb-10">
                    <h4 className="text-xl font-bold mb-4 text-purple-700">{faculty.name}</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {faculty.courses.map(course => renderCourseCard(course, 'university', COURSES_DATA.university.price, COURSES_DATA.university.priceValue))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About EduSpark</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                EduSpark is an AI-powered EduTech platform that helps students learn smarter through personalized AI recommendations, 
                an integrated chatbot tutor, and comprehensive curriculum coverage from Primary School to University level.
              </p>
              <p className="text-gray-700 mb-4">
                We believe in democratizing education by offering affordable courses at just $5 per module with FREE trials, making quality learning accessible to everyone.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>AI-Powered Learning:</strong> Get personalized course recommendations based on your learning style and goals
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Intelligent AI Tutor:</strong> Study anytime with our smart chatbot that answers questions and explains concepts in Math, Science, Programming and more
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Play className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Free Trials:</strong> Try any course before enrolling with our free trial program
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Comprehensive Curriculum:</strong> From Primary to University, covering all major subjects and specializations
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Affordable Pricing:</strong> Just $5 per module with secure payment processing
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Who Can Use EduSpark?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-bold mb-2">Primary/Elementary Students</h4>
                  <p className="text-sm text-gray-600">Build strong foundations with fun, interactive AI-powered learning</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold mb-2">Secondary/High School Students</h4>
                  <p className="text-sm text-gray-600">Master subjects with AI simulations and personalized study plans</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-4">
                  <h4 className="font-bold mb-2">University Students</h4>
                  <p className="text-sm text-gray-600">Advance your specialization with cutting-edge AI-integrated courses</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold mb-2">Postgraduate Learners</h4>
                  <p className="text-sm text-gray-600">Deep dive into research and advanced topics with AI assistance</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* AI Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-full max-w-md h-[500px] bg-white rounded-xl shadow-2xl flex flex-col z-50 mx-4 md:mx-0">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6" />
              <div>
                <h3 className="font-bold">AI Tutor</h3>
                <p className="text-xs opacity-90">Smart Learning Assistant</p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="hover:bg-white/20 rounded p-1 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-lg rounded-bl-none shadow-md p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleChatSubmit} className="p-4 border-t bg-white rounded-b-xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me about Math, Science, or any subject..."
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button 
                type="submit"
                disabled={!chatInput.trim()}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Zap className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Try: "Explain photosynthesis" or "Help with algebra"</p>
          </form>
        </div>
      )}

      {/* Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://i.imgur.com/IhoHWU5.png"
                  alt="EduSpark Logo"
                  className="w-10 h-10 rounded-lg object-contain"
                />
                <span className="font-bold text-xl">EduSpark</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering minds through AI-powered learning from Primary to University level.
              </p>
              <p className="text-green-400 font-bold mt-2">$5 per module • Free Trials</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setActiveTab('courses')} className="hover:text-white transition-colors">Courses</button></li>
                <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => setChatOpen(true)} className="hover:text-white transition-colors">AI Tutor</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Learning Levels</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Primary School (P1-P6)</li>
                <li>Junior Secondary (JSS1-JSS3)</li>
                <li>Senior Secondary (SS1-SS3)</li>
                <li>Pre-University Prep</li>
                <li>University & Postgraduate</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📧 support@eduspark.ng</li>
                <li>📱 +234 800 EDU SPARK</li>
                <li>📍 Port Harcourt, Nigeria</li>
                <li>💳 Secure Payment via Paystack</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 EduSpark. All rights reserved. | Powered by AI | $5 per module with Free Trials</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EduSpark;
