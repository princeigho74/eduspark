import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, MessageCircle, Sparkles, Search, Menu, X, ChevronRight, GraduationCap, Brain, Zap, CreditCard, Star, Users, Award, TrendingUp, Play, Target, Eye, Heart, CheckCircle, BarChart, Trophy, Clock, Download, Settings, PieChart, DollarSign, UserPlus, FileText, Activity, Shield, LogIn, LogOut, User, Mail } from 'lucide-react';

const LOGO_URL = "https://i.imgur.com/WFTXRvd.png";
const HERO_IMAGE_URL = "https://i.imgur.com/XN6eC0i.png";
const BACKGROUND_VIDEO_URL = "https://assets.grok.com/users/7ef6dcfd-8def-44f9-a7d5-b67c48e9fd6e/generated/a42d727a-8ce5-4052-a79d-6b2843f4df43/generated_video.mp4";

const ALUMNI_IMAGES = [
  { id: 1, url: "https://i.imgur.com/GDODK4l.png", name: "Sarah Johnson", role: "Software Engineer", course: "Computer Science", year: "2023" },
  { id: 2, url: "https://i.imgur.com/qqkwVbM.png", name: "Michael Chen", role: "Data Scientist", course: "Machine Learning", year: "2023" },
  { id: 3, url: "https://i.imgur.com/gF3mzDv.png", name: "Amina Ibrahim", role: "Medical Lab Scientist", course: "Science Lab Tech", year: "2022" }
];

const SUCCESS_GALLERY = [
  { id: 1, url: "https://i.imgur.com/MAHhM2i.png", title: "Graduation Ceremony 2023", category: "Events", type: "image" },
  { id: 2, url: "https://i.imgur.com/sRd0Ate.png", title: "Student Innovation Lab", category: "Facilities", type: "image" },
  { id: 3, url: "https://i.imgur.com/MAHhM2i.png", title: "Award Winners", category: "Achievements", type: "image" }
];

const SIDE_LOGO_URL = "https://i.imgur.com/WFTXRvd.png";
const FOUNDER_IMAGE_URL = "https://i.imgur.com/Py3bWNH.png";

const COURSES_DATA = {
  primary: {
    name: "Primary School",
    levels: "P1 - P6",
    plans: {
      trial: { name: "Free Trial", price: "$0", priceValue: 0, access: "3 lessons" },
      basic: { name: "Basic", price: "$1", priceValue: 1, access: "10 lessons" },
      standard: { name: "Standard", price: "$3", priceValue: 3, access: "Full course" },
      premium: { name: "Premium", price: "$5", priceValue: 5, access: "Full + AI tutoring" }
    },
    subjects: [
      { name: "English Language", icon: "📝", aiFeature: "AI-assisted spelling games", topics: 12, lessons: 24, trial: true },
      { name: "Mathematics", icon: "🔢", aiFeature: "Pattern recognition & logic games", topics: 15, lessons: 30, trial: true },
      { name: "Science", icon: "🔬", aiFeature: "AI simulations & experiments", topics: 10, lessons: 20, trial: true },
      { name: "ICT/Computer Studies", icon: "💻", aiFeature: "AI basics & Scratch Jr coding", topics: 8, lessons: 16, trial: true },
      { name: "Creative Arts", icon: "🎨", aiFeature: "AI coloring & music tools", topics: 6, lessons: 12, trial: true },
      { name: "Physical & Health Ed", icon: "⚽", aiFeature: "Smart health device demos", topics: 5, lessons: 10, trial: true }
    ]
  },
  jss: {
    name: "Junior Secondary",
    levels: "JSS1 - JSS3",
    plans: {
      trial: { name: "Free Trial", price: "$0", priceValue: 0, access: "3 lessons" },
      basic: { name: "Basic", price: "$1", priceValue: 1, access: "10 lessons" },
      standard: { name: "Standard", price: "$3", priceValue: 3, access: "Full course" },
      premium: { name: "Premium", price: "$5", priceValue: 5, access: "Full + AI tutoring" }
    },
    subjects: [
      { name: "English Language", icon: "📖", aiFeature: "AI storytelling & grammar", topics: 20, lessons: 40, trial: true },
      { name: "Mathematics", icon: "➗", aiFeature: "Pattern analysis & problem solving", topics: 25, lessons: 50, trial: true },
      { name: "Basic Science", icon: "🧪", aiFeature: "Interactive simulations", topics: 18, lessons: 36, trial: true },
      { name: "Social Studies", icon: "🌍", aiFeature: "AI-enhanced research", topics: 15, lessons: 30, trial: true },
      { name: "ICT", icon: "🖥", aiFeature: "Python basics & simple chatbots", topics: 16, lessons: 32, trial: true },
      { name: "Agricultural Science", icon: "🌾", aiFeature: "Smart farming intro", topics: 12, lessons: 24, trial: true }
    ]
  },
  sss: {
    name: "Senior Secondary",
    levels: "SS1 - SS3",
    plans: {
      trial: { name: "Free Trial", price: "$0", priceValue: 0, access: "3 lessons" },
      basic: { name: "Basic", price: "$1", priceValue: 1, access: "10 lessons" },
      standard: { name: "Standard", price: "$3", priceValue: 3, access: "Full course" },
      premium: { name: "Premium", price: "$5", priceValue: 5, access: "Full + AI tutoring" }
    },
    streams: {
      science: [
        { name: "Physics", icon: "⚛", aiFeature: "AI experiments & simulations", topics: 30, lessons: 60, trial: true },
        { name: "Chemistry", icon: "🧬", aiFeature: "Predictive analysis & lab simulations", topics: 28, lessons: 56, trial: true },
        { name: "Biology", icon: "🦠", aiFeature: "AI-powered experiments", topics: 26, lessons: 52, trial: true },
        { name: "Mathematics", icon: "📐", aiFeature: "Advanced problem solving", topics: 35, lessons: 70, trial: true }
      ],
      arts: [
        { name: "Literature", icon: "📚", aiFeature: "AI text analysis", topics: 22, lessons: 44, trial: true },
        { name: "History", icon: "🏛", aiFeature: "AI research tools", topics: 20, lessons: 40, trial: true },
        { name: "Geography", icon: "🗺", aiFeature: "Climate modeling", topics: 24, lessons: 48, trial: true },
        { name: "Government", icon: "⚖", aiFeature: "Policy analysis", topics: 18, lessons: 36, trial: true }
      ]
    }
  },
  university: {
    name: "University/Tertiary",
    levels: "Undergraduate & Postgraduate",
    plans: {
      trial: { name: "Free Trial", price: "$0", priceValue: 0, access: "3 lessons" },
      basic: { name: "Basic", price: "$5", priceValue: 5, access: "20 lessons" },
      standard: { name: "Standard", price: "$10", priceValue: 10, access: "Full course" },
      premium: { name: "Premium", price: "$20", priceValue: 20, access: "Full + AI tutoring + Research" }
    },
    faculties: {
      tech: {
        name: "Science & Technology",
        courses: [
          { name: "Machine Learning", icon: "🤖", aiFeature: "Deep Learning projects", topics: 45, lessons: 90, trial: true },
          { name: "Computer Vision", icon: "👁", aiFeature: "Image processing", topics: 40, lessons: 80, trial: true },
          { name: "Software Engineering", icon: "⚙", aiFeature: "AI-assisted coding", topics: 50, lessons: 100, trial: true }
        ]
      },
      medical: {
        name: "Medicine & Health",
        courses: [
          { name: "Clinical Diagnostics", icon: "🏥", aiFeature: "AI diagnostics", topics: 48, lessons: 96, trial: true },
          { name: "Pharmacology", icon: "💉", aiFeature: "Drug interaction AI", topics: 42, lessons: 84, trial: true }
        ]
      }
    }
  },
  professional: {
    name: "Professional Courses",
    levels: "Career Development & Certification",
    plans: {
      trial: { name: "Free Trial", price: "$0", priceValue: 0, access: "3 lessons" },
      basic: { name: "Basic", price: "$10", priceValue: 10, access: "20 lessons" },
      standard: { name: "Standard", price: "$20", priceValue: 20, access: "Full course + Certificate" },
      premium: { name: "Premium", price: "$50", priceValue: 50, access: "Full + AI tutoring + Career support" }
    },
    courses: [
      { name: "Health, Safety & Environment (HSE)", icon: "🦺", aiFeature: "AI risk assessment", topics: 50, lessons: 100, trial: true },
      { name: "Fire Safety & Prevention", icon: "🚒", aiFeature: "AI fire hazard detection", topics: 40, lessons: 80, trial: true },
      { name: "Science Laboratory Technology", icon: "🔬", aiFeature: "Advanced lab techniques", topics: 55, lessons: 110, trial: true },
      { name: "Artificial Intelligence Professional", icon: "🤖", aiFeature: "Enterprise AI solutions", topics: 60, lessons: 120, trial: true }
    ]
  }
};

const EduSpark = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: '👋 Hello! Welcome to EduSpark Online Academy!\n\nI\'m your AI learning assistant powered by GPT-5. I can help you with course recommendations, subject tutoring, and enrollment. What would you like to explore today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [trialCourses, setTrialCourses] = useState(() => {
    const saved = localStorage.getItem('eduSpark_trials');
    return saved ? JSON.parse(saved) : {};
  });
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const saved = localStorage.getItem('eduSpark_enrolled');
    return saved ? JSON.parse(saved) : {};
  });
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('eduSpark_progress');
    return saved ? JSON.parse(saved) : {};
  });
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('eduSpark_isAuth') === 'true';
  });
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('eduSpark_userName') || '';
  });
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem('eduSpark_userEmail') || '';
  });
  const [showPlansMenu, setShowPlansMenu] = useState(false);
  const [showTrialLessons, setShowTrialLessons] = useState(false);
  const [currentTrialCourse, setCurrentTrialCourse] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('eduSpark_completedLessons');
    return saved ? JSON.parse(saved) : {};
  });
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  useEffect(() => {
    localStorage.setItem('eduSpark_trials', JSON.stringify(trialCourses));
  }, [trialCourses]);

  useEffect(() => {
    localStorage.setItem('eduSpark_enrolled', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  useEffect(() => {
    localStorage.setItem('eduSpark_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem('eduSpark_completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const generateAdvancedAIResponse = async (userInput) => {
    const input = userInput.toLowerCase();
    
    // Greetings
    if (/\b(hello|hi|hey|good morning|good afternoon|good evening|howdy|greetings|sup|yo)\b/i.test(input)) {
      return "👋 Hello! I'm your AI learning assistant powered by GPT-5 technology. I can help you with:\n\n🎓 Course recommendations\n📚 Subject explanations\n💰 Pricing information\n🏆 Career guidance\n💡 Homework help\n\nWhat would you like to know?";
    }
    
    // Math queries with actual calculations
    if (/\b(math|mathematics|algebra|geometry|calculus|equation|formula|solve|calculate)\b/i.test(input)) {
      // Advanced calculation detection
      const calcMatch = input.match(/(\d+\.?\d*)\s*([\+\-\*\/\^])\s*(\d+\.?\d*)/);
      if (calcMatch) {
        const [, num1, operator, num2] = calcMatch;
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result;
        switch(operator) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '*': case 'x': case '×': result = a * b; break;
          case '/': case '÷': result = b !== 0 ? (a / b).toFixed(4) : 'undefined'; break;
          case '^': result = Math.pow(a, b); break;
        }
        return `🔢 **Calculation Result:**\n\n${a} ${operator} ${b} = **${result}**\n\n✓ Solution confirmed!\n\nNeed help with more problems? Just ask!`;
      }
      
      // Square root
      if (/square root|sqrt/i.test(input)) {
        const numMatch = input.match(/(\d+)/);
        if (numMatch) {
          const num = parseFloat(numMatch[1]);
          const result = Math.sqrt(num).toFixed(4);
          return `🔢 Square Root Calculation:\n\n√${num} = **${result}**\n\nWant to learn more about roots and powers?`;
        }
      }
      
      // Percentage calculations
      if (/percent|%/i.test(input)) {
        const percentMatch = input.match(/(\d+)\s*%\s*of\s*(\d+)/i);
        if (percentMatch) {
          const [, percent, number] = percentMatch;
          const result = (parseFloat(percent) / 100) * parseFloat(number);
          return `🔢 Percentage Calculation:\n\n${percent}% of ${number} = **${result}**\n\nFormula: (${percent} ÷ 100) × ${number} = ${result}`;
        }
      }
      
      return "📐 I can help you with mathematics! Try asking:\n\n• \"Calculate 25 + 17\"\n• \"What is 12 × 8?\"\n• \"Find square root of 144\"\n• \"15% of 200\"\n• \"Explain quadratic equations\"\n• \"Help me with fractions\"\n\nWhat math problem can I solve for you?";
    }
    
    // Science queries with detailed answers
    if (/\b(science|physics|chemistry|biology|experiment|cell|atom|energy|photosynthesis|force|gravity)\b/i.test(input)) {
      if (/photosynthesis/i.test(input)) {
        return "🌱 **Photosynthesis Explained:**\n\nPhotosynthesis is how plants make food!\n\n**Equation:**\n6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂\n\n**Simple Terms:**\nCarbon dioxide + Water + Sunlight → Glucose + Oxygen\n\n**Why It Matters:**\n• Plants create their own food\n• They release oxygen we breathe\n• Foundation of all food chains\n\nWant to learn more about plant biology?";
      }
      
      if (/gravity|newton/i.test(input)) {
        return "⚡ **Gravity & Newton's Laws:**\n\n**Gravity:** Force that pulls objects toward each other\n• On Earth: 9.8 m/s²\n• Keeps us grounded!\n• Makes things fall down\n\n**Newton's Laws:**\n1️⃣ Objects stay still or moving unless forced to change\n2️⃣ F = ma (Force = Mass × Acceleration)\n3️⃣ Every action has equal opposite reaction\n\n**Example:** When you jump, you push Earth down, Earth pushes you up!\n\nAny specific physics questions?";
      }
      
      if (/cell/i.test(input)) {
        return "🔬 **Cell Biology:**\n\nCells are the basic units of life!\n\n**Main Parts:**\n• Nucleus - Control center (contains DNA)\n• Mitochondria - Energy factory\n• Cell Membrane - Protective barrier\n• Cytoplasm - Jelly-like fluid\n\n**Fun Facts:**\n• Your body has 37 trillion cells!\n• Red blood cells live 120 days\n• Nerve cells can be 3 feet long!\n\nWant to explore more about cells?";
      }
      
      return "🔬 Science is amazing! I can explain:\n\n🧪 Chemistry - Atoms, reactions, periodic table\n⚡ Physics - Motion, energy, forces\n🦠 Biology - Cells, genetics, ecosystems\n🌍 Earth Science - Weather, rocks, climate\n\nWhat scientific concept would you like to understand?";
    }
    
    // Programming and coding help
    if (/\b(code|coding|programming|python|javascript|html|css|react|algorithm|software|function|variable|loop)\b/i.test(input)) {
      if (/python/i.test(input)) {
        return "🐍 **Python Programming:**\n\nPython is beginner-friendly!\n\n**Basic Example:**\n```python\n# Variables\nname = \"Student\"\nage = 15\n\n# Function\ndef greet(name):\n    return f\"Hello, {name}!\"\n\n# Loop\nfor i in range(5):\n    print(i)\n```\n\n**What Python Does:**\n• Web development\n• Data science\n• AI & Machine Learning\n• Automation\n\nWant to learn a specific Python concept?";
      }
      
      if (/javascript/i.test(input)) {
        return "💻 **JavaScript Basics:**\n\n**Example Code:**\n```javascript\n// Variables\nlet name = \"Student\";\nconst age = 15;\n\n// Function\nfunction greet(name) {\n    return `Hello, ${name}!`;\n}\n\n// Array\nconst numbers = [1, 2, 3, 4, 5];\n```\n\n**JavaScript Powers:**\n• Interactive websites\n• Web applications\n• Mobile apps\n• Games\n\nWhat JS topic interests you?";
      }
      
      return "💻 **Programming Help Available:**\n\n**Languages:**\n• Python - Beginner friendly\n• JavaScript - Web development\n• HTML/CSS - Website structure\n• React - UI frameworks\n\n**Concepts I Can Explain:**\n• Variables & data types\n• Functions & loops\n• Arrays & objects\n• Algorithms\n\nWhat programming question do you have?";
    }
    
    // Homework help
    if (/\b(homework|assignment|help me|explain|don't understand|confused|stuck)\b/i.test(input)) {
      return "📚 **Homework Help:**\n\nI'm here to help you understand!\n\n**How I Can Assist:**\n• Explain difficult concepts\n• Break down problems step-by-step\n• Provide examples\n• Guide you to the solution\n\n**Please share:**\n1. What subject?\n2. What specific topic?\n3. What part is confusing?\n\nExample: \"Help me understand fractions in math\" or \"Explain photosynthesis for my biology homework\"\n\nWhat do you need help with?";
    }
    
    // Course information
    if (/\b(course|class|subject|program|enroll|study|learn about|what courses)\b/i.test(input)) {
      return "📚 **EduSpark Courses:**\n\n🎒 **Primary (P1-P6)**\nEnglish, Math, Science, ICT, Arts\n\n📖 **Secondary (JSS & SSS)**\nCore subjects + Specialized streams\n\n🎓 **University**\n• Technology & Engineering\n• Medicine & Health\n• Business & Management\n• Science & Research\n\n🏅 **Professional**\n• HSE Certification\n• Fire Safety\n• Lab Technology\n• AI & Software Development\n\n💰 Plans: FREE Trial → $1 → $3-$20 → $50\n\nWhich level interests you?";
    }
    
    // Pricing
    if (/\b(price|cost|fee|payment|subscription|plan|how much|afford|cheap|expensive)\b/i.test(input)) {
      return "💰 **Flexible Pricing:**\n\n🎁 **FREE TRIAL**\n• 3 interactive lessons\n• AI tutor access\n• Try before you buy!\n\n💵 **BASIC: $1-$10**\n• 10-20 lessons\n• Progress tracking\n• Certificates\n\n💳 **STANDARD: $3-$20**\n• Full course access\n• All features unlocked\n• Priority support\n\n⭐ **PREMIUM: $5-$50**\n• Everything included\n• Career guidance\n• Job placement help\n\n**Why So Affordable?**\nWe believe education should be accessible to everyone!\n\nReady to start your free trial?";
    }
    
    // Career guidance
    if (/\b(career|job|work|employment|profession|future|salary|degree)\b/i.test(input)) {
      return "🎯 **Career Guidance:**\n\n**High-Demand Careers:**\n\n💻 **Technology**\n• Software Developer: $80k-$150k\n• Data Scientist: $90k-$160k\n• AI Engineer: $100k-$180k\n\n🏥 **Healthcare**\n• Lab Scientist: $50k-$90k\n• Medical Technician: $45k-$80k\n• Pharmacist: $100k-$140k\n\n🦺 **Safety & Compliance**\n• HSE Officer: $45k-$85k\n• Fire Safety Expert: $50k-$90k\n\n📊 **Business**\n• Data Analyst: $55k-$100k\n• Marketing Manager: $60k-$110k\n\n**Our Courses Prepare You For:**\n• Industry certifications\n• Job-ready skills\n• Portfolio building\n• Interview prep\n\nWhat career path interests you?";
    }
    
    // Study tips
    if (/\b(study|tips|how to learn|remember|memorize|exam|test)\b/i.test(input)) {
      return "📖 **Effective Study Tips:**\n\n**1. Active Learning**\n• Don't just read - practice!\n• Teach concepts to someone\n• Create your own examples\n\n**2. Spaced Repetition**\n• Review material over time\n• Don't cram everything at once\n• Use flashcards\n\n**3. Break It Down**\n• Study in 25-minute chunks\n• Take 5-minute breaks\n• Pomodoro Technique works!\n\n**4. Multiple Senses**\n• Read, write, listen, speak\n• Watch videos + take notes\n• Draw diagrams\n\n**5. Practice Tests**\n• Test yourself regularly\n• Identify weak areas\n• Review mistakes\n\n**Pro Tip:** Sleep 7-8 hours before exams - your brain needs rest!\n\nNeed subject-specific study strategies?";
    }
    
    // General knowledge questions
    if (/\b(what is|define|explain|tell me about|how does|why|when|where)\b/i.test(input)) {
      if (input.includes('eduspark')) {
        return "🌟 **About EduSpark:**\n\nWe're an AI-powered learning platform transforming education!\n\n**What We Offer:**\n• 500+ courses (Primary → Professional)\n• GPT-5 AI tutor (24/7 available)\n• Flexible pricing ($0-$50)\n• Interactive lessons\n• Industry certifications\n\n**Our Impact:**\n• 10,000+ active students\n• 150+ countries reached\n• 95% success rate\n• 4.8/5 student rating\n• 85% course completion\n\n**Mission:** Make quality education accessible to everyone, everywhere.\n\nWhat else would you like to know?";
      }
      
      return "🤔 **I'm Here to Help!**\n\nI can explain concepts, solve problems, and guide your learning.\n\n**Try asking:**\n• \"What is photosynthesis?\"\n• \"Explain Newton's laws\"\n• \"How do I learn Python?\"\n• \"What are fractions?\"\n• \"Define machine learning\"\n\n**Or get help with:**\n• Math calculations\n• Science experiments\n• Coding problems\n• Homework questions\n• Career planning\n\nWhat specific topic interests you?";
    }
    
    // Professional certifications
    if (/\b(hse|safety|fire|laboratory|lab tech|certification|professional|certificate)\b/i.test(input)) {
      return "🏅 **Professional Certifications:**\n\n**1. HSE (Health, Safety & Environment)**\n• 100 lessons • $10-$50\n• Risk assessment\n• Safety protocols\n• Industry certification\n\n**2. Fire Safety & Prevention**\n• 80 lessons • $10-$50\n• Fire hazard detection\n• Emergency response\n• Hands-on training\n\n**3. Science Lab Technology**\n• 110 lessons • $10-$50\n• Lab techniques\n• Equipment handling\n• Quality control\n\n**4. AI Professional**\n• 120 lessons • $10-$50\n• Machine learning\n• Deep learning\n• Enterprise AI\n\n**Benefits:**\n✓ Industry-recognized\n✓ Job placement assistance\n✓ Career advancement\n✓ Salary increase potential\n\nWhich certification interests you?";
    }
    
    // Motivational responses
    if (/\b(hard|difficult|can't|give up|frustrated|tired)\b/i.test(input)) {
      return "💪 **You've Got This!**\n\nLearning can be challenging, but that's how we grow!\n\n**Remember:**\n• Every expert was once a beginner\n• Mistakes are proof you're trying\n• Small progress is still progress\n• Your effort matters more than talent\n\n**Tips When Struggling:**\n1. Take a short break\n2. Review basics first\n3. Ask for help (like you're doing now!)\n4. Break problems into smaller steps\n5. Celebrate small wins\n\n\"Education is not the filling of a pail, but the lighting of a fire.\" - W.B. Yeats\n\nWhat specific challenge can I help you overcome?";
    }
    
    // Thank you
    if (/\b(thank|thanks|appreciate|helpful|great)\b/i.test(input)) {
      return "😊 **You're Welcome!**\n\nI'm happy I could help! Remember:\n\n• I'm available 24/7\n• No question is too small\n• Learning is a journey\n• You're doing great!\n\n**Keep Learning:**\n✓ Practice regularly\n✓ Stay curious\n✓ Ask questions\n✓ Never stop growing\n\nNeed anything else? Just ask!";
    }
    
    // Default intelligent response
    return `🤖 **I understand you said:** "${userInput}"\n\n**I can help with:**\n\n📚 **Subjects:** Math, Science, English, Programming\n🧮 **Calculations:** Math problems, percentages, conversions\n💡 **Explanations:** Concepts, theories, definitions\n📖 **Homework:** Step-by-step guidance\n🎓 **Courses:** Information about our 500+ courses\n💰 **Pricing:** Plans from FREE to $50\n🎯 **Career:** Job guidance and planning\n\n**Try asking:**\n• "Calculate 45 × 23"\n• "Explain photosynthesis"\n• "What Python courses do you have?"\n• "Help me with my math homework"\n• "What are your pricing plans?"\n\nHow can I assist you today?`;
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatInput('');
    setIsTyping(true);
    
    setTimeout(async () => {
      const aiResponse = await generateAdvancedAIResponse(userMessage);
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: aiResponse 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleAuth = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');

    if (authMode === 'register') {
      if (password.length < 6) {
        alert('⚠️ Password must be at least 6 characters long!');
        return;
      }

      const existingUsers = JSON.parse(localStorage.getItem('eduSpark_users') || '[]');
      const userExists = existingUsers.find(u => u.email === email);
      
      if (userExists) {
        alert('⚠️ This email is already registered!\n\nPlease login with your existing account.');
        setAuthMode('login');
        return;
      }

      const newUser = { 
        name, 
        email, 
        password, 
        registeredAt: new Date().toISOString(),
        userId: 'user_' + Date.now()
      };
      existingUsers.push(newUser);
      localStorage.setItem('eduSpark_users', JSON.stringify(existingUsers));
      
      localStorage.setItem('eduSpark_userName', name);
      localStorage.setItem('eduSpark_userEmail', email);
      localStorage.setItem('eduSpark_userId', newUser.userId);
      localStorage.setItem('eduSpark_isAuth', 'true');
      
      setUserName(name);
      setUserEmail(email);
      setIsAuthenticated(true);
      setShowAuthModal(false);
      
      alert(`🎉 Registration successful!\n\nWelcome to EduSpark, ${name}! You now have full access to all courses.`);
    } else {
      const existingUsers = JSON.parse(localStorage.getItem('eduSpark_users') || '[]');
      const user = existingUsers.find(u => u.email === email && u.password === password);
      
      if (!user) {
        alert('❌ Invalid email or password!');
        return;
      }

      localStorage.setItem('eduSpark_userName', user.name);
      localStorage.setItem('eduSpark_userEmail', user.email);
      localStorage.setItem('eduSpark_userId', user.userId);
      localStorage.setItem('eduSpark_isAuth', 'true');
      
      setUserName(user.name);
      setUserEmail(user.email);
      setIsAuthenticated(true);
      setShowAuthModal(false);
      
      alert(`✅ Welcome back, ${user.name}!`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('eduSpark_userName');
    localStorage.removeItem('eduSpark_userEmail');
    localStorage.setItem('eduSpark_isAuth', 'false');
    
    setIsAuthenticated(false);
    setUserName('');
    setUserEmail('');
    alert('👋 Logged out successfully!');
  };

  const handleCourseClick = (course, levelData) => {
    setSelectedCourse({ ...course, levelData });
    setShowCourseModal(true);
  };

  const handleFreeTrial = (courseName) => {
    if (!isAuthenticated) {
      alert('⚠️ Please login or register to start a free trial');
      setShowAuthModal(true);
      setAuthMode('register');
      return;
    }
    
    setTrialCourses(prev => ({ ...prev, [courseName]: true }));
    setUserProgress(prev => ({ ...prev, [courseName]: 15 }));
    setShowCourseModal(false);
    
    setCurrentTrialCourse(courseName);
    setShowTrialLessons(true);
  };

  const getTrialLessons = (courseName) => {
    const lessonTemplates = {
      'Mathematics': [
        { title: 'Introduction to Numbers', content: 'Learn about natural numbers, integers, and basic arithmetic operations.', duration: '10 min' },
        { title: 'Basic Addition & Subtraction', content: 'Master the fundamentals of adding and subtracting numbers.', duration: '15 min' },
        { title: 'Understanding Patterns', content: 'Discover mathematical patterns and sequences.', duration: '12 min' }
      ],
      'English': [
        { title: 'Alphabet & Phonics', content: 'Learn the English alphabet and letter sounds.', duration: '12 min' },
        { title: 'Basic Grammar Rules', content: 'Understanding nouns, verbs, and simple sentences.', duration: '15 min' },
        { title: 'Reading Comprehension', content: 'Practice reading and understanding passages.', duration: '18 min' }
      ],
      'Science': [
        { title: 'Introduction to Science', content: 'Discover the different branches of science.', duration: '10 min' },
        { title: 'The Scientific Method', content: 'Learn how scientists conduct experiments.', duration: '15 min' },
        { title: 'Matter & Energy', content: 'Explore solids, liquids, gases and energy forms.', duration: '20 min' }
      ],
      'Physics': [
        { title: 'Introduction to Physics', content: 'Understanding motion, forces, and energy.', duration: '15 min' },
        { title: 'Newton\'s Laws of Motion', content: 'Learn about inertia, force, and action-reaction.', duration: '20 min' },
        { title: 'Energy & Work', content: 'Explore kinetic and potential energy.', duration: '18 min' }
      ],
      'Chemistry': [
        { title: 'Atoms & Molecules', content: 'Discover the building blocks of matter.', duration: '15 min' },
        { title: 'The Periodic Table', content: 'Navigate the periodic table of elements.', duration: '18 min' },
        { title: 'Chemical Reactions', content: 'Learn how substances interact and transform.', duration: '20 min' }
      ],
      'Biology': [
        { title: 'Cells - The Building Blocks', content: 'Explore plant and animal cell structures.', duration: '15 min' },
        { title: 'Photosynthesis', content: 'Understand how plants make food.', duration: '18 min' },
        { title: 'Human Body Systems', content: 'Learn about major organ systems.', duration: '20 min' }
      ],
      'Machine Learning': [
        { title: 'What is Machine Learning?', content: 'Introduction to AI and ML concepts.', duration: '20 min' },
        { title: 'Data Preprocessing', content: 'Learn to clean and prepare data.', duration: '25 min' },
        { title: 'Your First ML Model', content: 'Build a simple regression model.', duration: '30 min' }
      ]
    };

    for (const [key, lessons] of Object.entries(lessonTemplates)) {
      if (courseName.includes(key)) {
        return lessons;
      }
    }

    return [
      { title: 'Introduction to ' + courseName, content: 'Get started with core concepts.', duration: '15 min' },
      { title: 'Basic Concepts', content: 'Dive into essential building blocks.', duration: '18 min' },
      { title: 'Practical Applications', content: 'See real-world examples.', duration: '20 min' }
    ];
  };

  const handleLessonComplete = (courseName, lessonIndex) => {
    const key = `${courseName}_${lessonIndex}`;
    setCompletedLessons(prev => ({ ...prev, [key]: true }));
    
    const lessons = getTrialLessons(courseName);
    const totalCompleted = lessons.filter((_, idx) => 
      completedLessons[`${courseName}_${idx}`] || idx === lessonIndex
    ).length;
    const newProgress = Math.round((totalCompleted / lessons.length) * 15);
    
    setUserProgress(prev => ({ ...prev, [courseName]: newProgress }));
    
    alert(`✅ Lesson completed! ${lessons.length - totalCompleted} more in your trial.`);
  };

  const handlePayment = (courseName, amount, planType) => {
    if (!isAuthenticated) {
      alert('⚠️ Please login or register to enroll');
      setShowAuthModal(true);
      setAuthMode('register');
      return;
    }
    
    setEnrolledCourses(prev => ({ ...prev, [courseName]: true }));
    setUserProgress(prev => ({ ...prev, [courseName]: 0 }));
    setShowCourseModal(false);
    alert(`✅ Payment Successful!\n\n🎉 Welcome to ${courseName}!\n💰 Amount: $${amount}`);
  };

  const simulateProgress = (courseName) => {
    const currentProgress = userProgress[courseName] || 0;
    const newProgress = Math.min(currentProgress + 10, 100);
    setUserProgress(prev => ({ ...prev, [courseName]: newProgress }));
    
    if (newProgress === 100) {
      alert(`🎉 Congratulations! You've completed ${courseName}!`);
    }
  };

  const renderCourseCard = (course, level, levelData) => {
    const isEnrolled = enrolledCourses[course.name];
    const hasTrial = trialCourses[course.name];
    const progress = userProgress[course.name] || 0;

    return (
      <div 
        key={course.name} 
        onClick={() => handleCourseClick(course, levelData)}
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
      >
        <div className="text-4xl mb-3">{course.icon}</div>
        <h3 className="font-bold text-lg mb-2 text-gray-800">{course.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{course.aiFeature}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {course.lessons} lessons
          </span>
          <span className="flex items-center gap-1">
            <Target className="w-3 h-3" />
            {course.topics} topics
          </span>
        </div>

        {isEnrolled && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-600">Progress</span>
              <span className="text-xs font-bold text-purple-600">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleCourseClick(course, levelData);
          }}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-md"
        >
          <Eye className="w-4 h-4" />
          View Details
        </button>
        
        {hasTrial && !isEnrolled && (
          <div className="mt-2 text-xs text-center text-green-600 font-medium flex items-center justify-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Trial Active
          </div>
        )}

        {isEnrolled && (
          <div className="mt-2 text-xs text-center text-blue-600 font-medium flex items-center justify-center gap-1">
            <Trophy className="w-3 h-3" />
            Enrolled
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative">
      <style>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .rainbow-text {
          background: linear-gradient(
            90deg,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #4b0082,
            #9400d3,
            #ff0000
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbow 3s linear infinite;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 opacity-5">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={BACKGROUND_VIDEO_URL} type="video/mp4" />
        </video>
      </div>
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-40 border-b-2 border-purple-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img src={LOGO_URL} alt="EduSpark" className="w-14 h-14 rounded-xl object-contain bg-gradient-to-br from-purple-100 to-blue-100 p-2 shadow-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold rainbow-text">
                  EduSpark Online Academy
                </h1>
                <p className="text-xs text-gray-600 font-medium">Empowering Minds Through AI Learning</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => setActiveTab('home')} className={`font-medium transition-all ${activeTab === 'home' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'}`}>
                Home
              </button>
              <button onClick={() => setActiveTab('courses')} className={`font-medium transition-all ${activeTab === 'courses' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'}`}>
                Courses
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShowPlansMenu(!showPlansMenu)} 
                  className="font-medium text-gray-600 hover:text-purple-600 flex items-center gap-1"
                >
                  Plans <ChevronRight className={`w-4 h-4 transition-transform ${showPlansMenu ? 'rotate-90' : ''}`} />
                </button>
                {showPlansMenu && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-4 w-64 z-50">
                    <div className="space-y-3">
                      <div className="border-b pb-2">
                        <h4 className="font-bold text-sm text-gray-700 mb-2">Subscription Plans</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="p-2 hover:bg-purple-50 rounded-lg cursor-pointer">
                          <div className="font-semibold text-green-600">Free Trial</div>
                          <div className="text-xs text-gray-600">3 lessons access</div>
                        </div>
                        <div className="p-2 hover:bg-purple-50 rounded-lg cursor-pointer">
                          <div className="font-semibold text-blue-600">Basic: $1-$10</div>
                          <div className="text-xs text-gray-600">10-20 lessons</div>
                        </div>
                        <div className="p-2 hover:bg-purple-50 rounded-lg cursor-pointer">
                          <div className="font-semibold text-purple-600">Standard: $3-$20</div>
                          <div className="text-xs text-gray-600">Full course access</div>
                        </div>
                        <div className="p-2 hover:bg-purple-50 rounded-lg cursor-pointer">
                          <div className="font-semibold text-pink-600">Premium: $5-$50</div>
                          <div className="text-xs text-gray-600">AI tutoring + Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button onClick={() => setActiveTab('alumni')} className={`font-medium transition-all ${activeTab === 'alumni' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'}`}>
                Alumni
              </button>
              <button onClick={() => setActiveTab('about')} className={`font-medium transition-all ${activeTab === 'about' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'}`}>
                About
              </button>
              <button onClick={() => setActiveTab('progress')} className={`font-medium transition-all ${activeTab === 'progress' ? 'text-purple-600 border-b-2 border-purple-600 pb-1' : 'text-gray-600 hover:text-purple-600'}`}>
                Progress
              </button>
              <button onClick={() => setChatOpen(true)} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:shadow-xl transition-all font-medium">
                <Brain className="w-4 h-4" />
                AI Tutor
              </button>
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-purple-100 px-3 py-2 rounded-lg">
                    <User className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">{userName}</span>
                  </div>
                  <button onClick={handleLogout} className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <button onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} className="bg-green-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-all font-medium">
                  <LogIn className="w-4 h-4" />
                  Login
                </button>
              )}
            </nav>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {menuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4 border-t pt-4">
              <button onClick={() => { setActiveTab('home'); setMenuOpen(false); }} className="text-left font-medium px-3 py-2 hover:bg-purple-50 rounded-lg">Home</button>
              <button onClick={() => { setActiveTab('courses'); setMenuOpen(false); }} className="text-left font-medium px-3 py-2 hover:bg-purple-50 rounded-lg">Courses</button>
              <button onClick={() => setShowPlansMenu(!showPlansMenu)} className="text-left font-medium px-3 py-2 hover:bg-purple-50 rounded-lg">Plans</button>
              {showPlansMenu && (
                <div className="ml-6 space-y-2 bg-purple-50 p-3 rounded-lg">
                  <div className="text-sm">
                    <div className="font-semibold text-green-600">Free Trial</div>
                    <div className="font-semibold text-blue-600">Basic: $1-$10</div>
                    <div className="font-semibold text-purple-600">Standard: $3-$20</div>
                    <div className="font-semibold text-pink-600">Premium: $5-$50</div>
                  </div>
                </div>
              )}
              <button onClick={() => { setActiveTab('alumni'); setMenuOpen(false); }} className="text-left font-medium px-3 py-2 hover:bg-purple-50 rounded-lg">Alumni</button>
              <button onClick={() => { setActiveTab('about'); setMenuOpen(false); }} className="text-left font-medium px-3 py-2 hover:bg-purple-50 rounded-lg">About</button>
              <button onClick={() => { setActiveTab('progress'); setMenuOpen(false); }} className="text-left font-medium px-3 py-2 hover:bg-purple-50 rounded-lg">Progress</button>
              <button onClick={() => { setChatOpen(true); setMenuOpen(false); }} className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium">AI Tutor</button>
              {!isAuthenticated && (
                <button onClick={() => { setShowAuthModal(true); setMenuOpen(false); }} className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium">Login / Register</button>
              )}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <>
            <div className="relative mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6 rainbow-text leading-tight">
                    Learn Smarter with AI
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
                    From Primary School to Professional Certifications
                  </p>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-6 mb-8 shadow-2xl">
                    <p className="text-2xl font-bold mb-4">🎉 Flexible Learning Plans!</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="text-3xl font-bold mb-1">FREE</div>
                        <div className="text-xs">Trial</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="text-3xl font-bold mb-1">$1</div>
                        <div className="text-xs">Basic</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="text-3xl font-bold mb-1">$3-$20</div>
                        <div className="text-xs">Standard</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="text-3xl font-bold mb-1">$50</div>
                        <div className="text-xs">Premium</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <button onClick={() => setActiveTab('courses')} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all">
                      Explore Courses
                    </button>
                    {!isAuthenticated && (
                      <button onClick={() => { setAuthMode('register'); setShowAuthModal(true); }} className="bg-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all">
                        Get Started
                      </button>
                    )}
                  </div>
                </div>
                <div className="hidden md:block">
                  <img src={HERO_IMAGE_URL} alt="Learning" className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center">Choose Your Level</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(COURSES_DATA).map(([key, level]) => (
                  <button
                    key={key}
                    onClick={() => { setSelectedLevel(key); setActiveTab('courses'); }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all text-left group transform hover:-translate-y-2"
                  >
                    <GraduationCap className="w-16 h-16 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-2xl mb-2">{level.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">{level.levels}</p>
                    <div className="flex items-center text-purple-600 font-semibold">
                      Explore <ChevronRight className="w-5 h-5 ml-1" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Play, title: "Free Trials", desc: "Try before subscribing", color: "green" },
                { icon: BookOpen, title: "Flexible Plans", desc: "$1-$50 options", color: "purple" },
                { icon: Brain, title: "AI Tutor", desc: "24/7 help", color: "blue" },
                { icon: CreditCard, title: "Easy Payment", desc: "Secure checkout", color: "pink" }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 md:p-6 shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <feature.icon className={`w-10 h-10 md:w-14 md:h-14 text-${feature.color}-600 mx-auto mb-3 md:mb-4`} />
                  <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'courses' && (
          <>
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 rainbow-text">Browse Courses</h2>
              <p className="text-gray-600 text-lg mb-6">Flexible plans • Free trials available</p>
              
              <div className="flex gap-3 mb-6 flex-wrap">
                <button onClick={() => setSelectedLevel(null)} className={`px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-medium text-sm md:text-base ${!selectedLevel ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'}`}>
                  All Levels
                </button>
                {Object.entries(COURSES_DATA).map(([key, level]) => (
                  <button key={key} onClick={() => setSelectedLevel(key)} className={`px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-medium text-sm md:text-base ${selectedLevel === key ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'}`}>
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            {(!selectedLevel || selectedLevel === 'primary') && (
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6">{COURSES_DATA.primary.name}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {COURSES_DATA.primary.subjects.map(course => renderCourseCard(course, 'primary', COURSES_DATA.primary))}
                </div>
              </div>
            )}

            {(!selectedLevel || selectedLevel === 'jss') && (
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6">{COURSES_DATA.jss.name}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {COURSES_DATA.jss.subjects.map(course => renderCourseCard(course, 'jss', COURSES_DATA.jss))}
                </div>
              </div>
            )}

            {(!selectedLevel || selectedLevel === 'sss') && (
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6">{COURSES_DATA.sss.name}</h3>
                {Object.entries(COURSES_DATA.sss.streams).map(([streamKey, courses]) => (
                  <div key={streamKey} className="mb-8">
                    <h4 className="text-xl font-bold mb-4 capitalize">{streamKey} Stream</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {courses.map(course => renderCourseCard(course, 'sss', COURSES_DATA.sss))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {(!selectedLevel || selectedLevel === 'university') && (
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6">{COURSES_DATA.university.name}</h3>
                {Object.entries(COURSES_DATA.university.faculties).map(([facultyKey, faculty]) => (
                  <div key={facultyKey} className="mb-8">
                    <h4 className="text-xl font-bold mb-4">{faculty.name}</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {faculty.courses.map(course => renderCourseCard(course, 'university', COURSES_DATA.university))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {(!selectedLevel || selectedLevel === 'professional') && (
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-6">{COURSES_DATA.professional.name}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {COURSES_DATA.professional.courses.map(course => renderCourseCard(course, 'professional', COURSES_DATA.professional))}
                </div>
              </div>
            )}

            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8 text-center">Why Choose EduSpark?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { icon: Play, title: "Free Trials", desc: "Try before subscribing", color: "green" },
                  { icon: BookOpen, title: "Flexible Plans", desc: "$1-$50 options", color: "purple" },
                  { icon: Brain, title: "AI Tutor", desc: "24/7 help", color: "blue" },
                  { icon: CreditCard, title: "Easy Payment", desc: "Secure checkout", color: "pink" }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 md:p-6 shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
                    <feature.icon className={`w-10 h-10 md:w-14 md:h-14 text-${feature.color}-600 mx-auto mb-3 md:mb-4`} />
                    <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'alumni' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 rainbow-text">Our Alumni</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ALUMNI_IMAGES.map(alumni => (
                <div key={alumni.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <img src={alumni.url} alt={alumni.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{alumni.name}</h3>
                    <p className="text-purple-600 font-semibold mb-1">{alumni.role}</p>
                    <p className="text-sm text-gray-600">{alumni.course} • Class of {alumni.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 text-center rainbow-text">About EduSpark Online Academy</h2>
            
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl mb-8">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <img src={LOGO_URL} alt="EduSpark" className="w-20 h-20 rounded-xl shadow-lg" />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-purple-600">Who We Are</h3>
                  <p className="text-gray-600">Pioneering AI-Powered Education Since 2020</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                EduSpark Online Academy combines cutting-edge AI with comprehensive curriculum design to deliver personalized learning experiences from primary school through professional certifications.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-purple-600">Meet Our Founder</h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img 
                  src={FOUNDER_IMAGE_URL} 
                  alt="Happy Umukoro - Founder & CEO" 
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-2xl border-4 border-purple-200 object-cover"
                />
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold mb-2">Happy Umukoro</h4>
                  <p className="text-purple-600 font-semibold text-lg mb-3">Founder & CEO</p>
                  <div className="text-gray-700 space-y-1">
                    <p>✓ Science Lab Scientist (NISLT)</p>
                    <p>✓ AI Software Engineer</p>
                    <p>✓ Software Developer</p>
                    <p>✓ EdTech Innovator</p>
                  </div>
                  <p className="text-gray-600 mt-4 italic">
                    "Passionate about democratizing education through AI and making quality learning accessible to everyone, everywhere."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                  To democratize quality education through AI, providing affordable and accessible learning that empowers students globally.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                  To become the world's leading AI-powered platform, creating lifelong learners equipped to shape the future.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="text-white/90 leading-relaxed space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Excellence</strong> in education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Innovation</strong> with AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Accessibility</strong> for all</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Join 10,000+ Students Worldwide</h3>
              <p className="text-xl mb-6">Start with a FREE trial today</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button onClick={() => setActiveTab('courses')} className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
                  Explore Courses
                </button>
                {!isAuthenticated && (
                  <button onClick={() => { setAuthMode('register'); setShowAuthModal(true); }} className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 rainbow-text">My Learning Progress</h2>
            {!isAuthenticated ? (
              <div className="bg-white rounded-xl p-12 text-center shadow-lg">
                <User className="w-20 h-20 mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl font-bold mb-4">Login to Track Progress</h3>
                <button onClick={() => setShowAuthModal(true)} className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold">
                  Login / Register
                </button>
              </div>
            ) : Object.keys(enrolledCourses).length === 0 && Object.keys(trialCourses).length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center shadow-lg">
                <BookOpen className="w-20 h-20 mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl font-bold mb-4">No Courses Yet</h3>
                <p className="text-gray-600 mb-6">Start your learning journey today!</p>
                <button onClick={() => setActiveTab('courses')} className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold">
                  Browse Courses
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {Object.entries(userProgress).map(([courseName, progress]) => (
                  <div key={courseName} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-xl">{courseName}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${enrolledCourses[courseName] ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                        {enrolledCourses[courseName] ? 'Enrolled' : 'Trial'}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="font-bold text-purple-600">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                    <button onClick={() => simulateProgress(courseName)} className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
                      Continue Learning
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{authMode === 'login' ? 'Welcome Back!' : 'Create Account'}</h3>
              <button onClick={() => setShowAuthModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {authMode === 'register' && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-purple-800">
                  <strong>🎉 One-time registration!</strong> Create your account once and enjoy lifetime access.
                </p>
              </div>
            )}
            
            <form onSubmit={handleAuth} className="space-y-4">
              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
                  <input 
                    name="name" 
                    type="text" 
                    required 
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" 
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email Address *</label>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Password *</label>
                <input 
                  name="password" 
                  type="password" 
                  required 
                  minLength="6"
                  placeholder={authMode === 'register' ? 'Create password (min 6 characters)' : 'Enter your password'}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" 
                />
                {authMode === 'register' && (
                  <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
                )}
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
                {authMode === 'login' ? '🔓 Login' : '🚀 Create Account'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <button 
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} 
                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                {authMode === 'login' ? "Don't have an account? Register" : 'Already have an account? Login'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Course Modal */}
      {showCourseModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl my-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-5xl mb-3">{selectedCourse.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedCourse.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">{selectedCourse.aiFeature}</p>
              </div>
              <button onClick={() => setShowCourseModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-600 mb-2" />
                <div className="text-2xl font-bold">{selectedCourse.lessons}</div>
                <div className="text-sm text-gray-600">Lessons</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <Target className="w-6 h-6 text-blue-600 mb-2" />
                <div className="text-2xl font-bold">{selectedCourse.topics}</div>
                <div className="text-sm text-gray-600">Topics</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">Available Plans</h4>
              <div className="space-y-3">
                {Object.entries(selectedCourse.levelData.plans).map(([key, plan]) => (
                  <div key={key} className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-600 transition-all">
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <div>
                        <div className="font-bold text-lg">{plan.name}</div>
                        <div className="text-sm text-gray-600">{plan.access}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{plan.price}</div>
                        {plan.priceValue > 0 && (
                          <button onClick={() => handlePayment(selectedCourse.name, plan.priceValue, plan.name)} className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
                            Enroll
                          </button>
                        )}
                        {plan.priceValue === 0 && !trialCourses[selectedCourse.name] && (
                          <button onClick={() => handleFreeTrial(selectedCourse.name)} className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">
                            Start Trial
                          </button>
                        )}
                        {plan.priceValue === 0 && trialCourses[selectedCourse.name] && (
                          <button onClick={() => { setCurrentTrialCourse(selectedCourse.name); setShowTrialLessons(true); setShowCourseModal(false); }} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                            Continue Trial
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trial Lessons Modal */}
      {showTrialLessons && currentTrialCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-4xl w-full shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-2xl md:text-3xl font-bold">{currentTrialCourse}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold">FREE TRIAL</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">Complete these 3 lessons!</p>
              </div>
              <button onClick={() => setShowTrialLessons(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {getTrialLessons(currentTrialCourse).map((lesson, idx) => {
                const lessonKey = `${currentTrialCourse}_${idx}`;
                const isCompleted = completedLessons[lessonKey];
                
                return (
                  <div key={idx} className={`border-2 rounded-xl p-4 md:p-6 transition-all ${isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-purple-300'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl ${isCompleted ? 'bg-green-500 text-white' : 'bg-purple-100 text-purple-600'}`}>
                        {isCompleted ? '✓' : idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h4 className="font-bold text-lg md:text-xl">{lesson.title}</h4>
                          <span className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {lesson.duration}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm md:text-base">{lesson.content}</p>
                        
                        {!isCompleted ? (
                          <button 
                            onClick={() => handleLessonComplete(currentTrialCourse, idx)}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
                          >
                            <Play className="w-4 h-4" />
                            Start Lesson
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 text-green-600 font-semibold">
                            <CheckCircle className="w-5 h-5" />
                            Completed!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
              <h4 className="font-bold text-lg mb-2">🎓 Want to learn more?</h4>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Unlock the full course with {selectedCourse?.lessons || '50+'} lessons!
              </p>
              <div className="flex gap-3 flex-wrap">
                <button 
                  onClick={() => { setShowTrialLessons(false); setShowCourseModal(true); }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
                >
                  View Plans
                </button>
                <button 
                  onClick={() => setChatOpen(true)}
                  className="bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all"
                >
                  Ask AI
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Chat */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-full max-w-md h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 mx-4 md:mx-0">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6" />
              <div>
                <span className="font-bold block">AI Tutor</span>
                <span className="text-xs text-white/80">Powered by GPT-5</span>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="hover:bg-white/20 rounded-lg p-1">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 ${msg.role === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  <div className="whitespace-pre-line text-sm">{msg.content}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          
          <form onSubmit={handleChatSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 text-sm"
              />
              <button type="submit" className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={LOGO_URL} alt="EduSpark" className="w-12 h-12 rounded-lg" />
                <span className="font-bold text-xl">EduSpark</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                AI-powered education from Primary to Professional.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-white">Home</button></li>
                <li><button onClick={() => setActiveTab('courses')} className="hover:text-white">Courses</button></li>
                <li><button onClick={() => setActiveTab('about')} className="hover:text-white">About</button></li>
                <li><button onClick={() => setActiveTab('alumni')} className="hover:text-white">Alumni</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Popular Courses</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => { setSelectedLevel('primary'); setActiveTab('courses'); }} className="hover:text-white">Primary</button></li>
                <li><button onClick={() => { setSelectedLevel('university'); setActiveTab('courses'); }} className="hover:text-white">University</button></li>
                <li><button onClick={() => { setSelectedLevel('professional'); setActiveTab('courses'); }} className="hover:text-white">Professional</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <a href="mailto:smartxpress74@gmail.com" className="hover:text-white break-all">
                    smartxpress74@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <a href="tel:+2349020779297" className="hover:text-white">
                    +234 902 077 9297
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <a href="https://www.linkedin.com/in/happy-umukoro-nislt-b62b07129" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 EduSpark Online Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EduSpark;
