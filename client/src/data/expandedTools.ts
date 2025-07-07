import { Tool } from '../types';

export const expandedTools: Tool[] = [
  // Text Generation Tools
  {
    id: 'text-1',
    name: 'ChatGPT',
    description: 'OpenAI\'s advanced conversational AI for text generation, coding, analysis, and creative writing with free and paid tiers',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'OpenAI',
    pricing: { type: 'freemium', startingPrice: '$20/month' },
    features: ['Conversational AI', 'Code generation', 'Text analysis', 'Creative writing', 'Multiple languages'],
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://chat.openai.com',
    rating: 4.8,
    reviewCount: 50000,
    lastUpdated: '2024-12-01',
    releaseDate: '2022-11-30',
    tutorialSteps: [
      { title: 'Sign Up', description: 'Create your OpenAI account for free' },
      { title: 'Start Chatting', description: 'Begin conversations with ChatGPT' }
    ]
  },
  {
    id: 'text-2',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant for thoughtful conversations, analysis, and content creation with free usage limits',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Anthropic',
    pricing: { type: 'freemium', startingPrice: '$20/month' },
    features: ['Constitutional AI', 'Long conversations', 'Document analysis', 'Coding help', 'Safety focused'],
    screenshots: [
      'https://images.unsplash.com/photo-1655720033654-a3cde4b8f82b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://claude.ai',
    rating: 4.7,
    reviewCount: 25000,
    lastUpdated: '2024-11-15',
    releaseDate: '2022-04-11',
    tutorialSteps: [
      { title: 'Create Account', description: 'Sign up for free Claude access' },
      { title: 'Start Conversation', description: 'Begin chatting with Claude AI' }
    ]
  },
  {
    id: 'text-3',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar, spelling, style, and tone with free basic features',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Grammarly',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: ['Grammar checking', 'Style suggestions', 'Tone detection', 'Plagiarism detection', 'Browser extension'],
    screenshots: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://grammarly.com',
    rating: 4.6,
    reviewCount: 100000,
    lastUpdated: '2024-12-01',
    releaseDate: '2009-07-01',
    tutorialSteps: [
      { title: 'Install Extension', description: 'Add Grammarly to your browser' },
      { title: 'Start Writing', description: 'Get real-time suggestions as you type' }
    ]
  },
  {
    id: 'text-4',
    name: 'Copy.ai',
    description: 'AI copywriting tool for marketing content, social media posts, and business copy with free trial',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Copy.ai',
    pricing: { type: 'freemium', startingPrice: '$36/month' },
    features: ['Marketing copy', 'Social media content', 'Email templates', 'Blog posts', '90+ templates'],
    screenshots: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://copy.ai',
    rating: 4.5,
    reviewCount: 15000,
    lastUpdated: '2024-11-20',
    releaseDate: '2020-10-01',
    tutorialSteps: [
      { title: 'Choose Template', description: 'Select from 90+ copywriting templates' },
      { title: 'Generate Copy', description: 'Create marketing content in seconds' }
    ]
  },
  {
    id: 'text-5',
    name: 'Jasper AI',
    description: 'Enterprise-grade AI writing platform for teams and businesses with brand voice consistency',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Jasper',
    pricing: { type: 'paid', startingPrice: '$39/month' },
    features: ['Brand voice training', 'Team collaboration', 'Content templates', 'SEO mode', 'Plagiarism checker'],
    screenshots: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://jasper.ai',
    rating: 4.7,
    reviewCount: 4500,
    lastUpdated: '2024-02-15',
    releaseDate: '2021-02-01',
    tutorialSteps: [
      { title: 'Set Up Brand Voice', description: 'Train Jasper on your brand voice' },
      { title: 'Create Content', description: 'Generate on-brand content at scale' }
    ]
  },
  {
    id: 'text-6',
    name: 'Writesonic',
    description: 'AI writing assistant for creating articles, ads, emails, and website copy with SEO optimization',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Writesonic',
    pricing: { type: 'freemium', startingPrice: '$12.67/month' },
    features: ['Article writing', 'Ad copy creation', 'SEO optimization', 'Fact-checking', 'Plagiarism detection'],
    screenshots: [
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://writesonic.com',
    rating: 4.5,
    reviewCount: 2800,
    lastUpdated: '2024-03-01',
    releaseDate: '2020-08-01',
    tutorialSteps: [
      { title: 'Select Tool', description: 'Choose from various writing tools' },
      { title: 'Generate Content', description: 'AI creates optimized content for you' }
    ]
  },
  {
    id: 'text-7',
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion workspace for enhanced productivity and content creation',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Notion',
    pricing: { type: 'freemium', startingPrice: '$10/month' },
    features: ['Integrated workspace AI', 'Document generation', 'Meeting notes', 'Task automation', 'Content summarization'],
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://notion.so',
    rating: 4.6,
    reviewCount: 5200,
    lastUpdated: '2024-03-08',
    releaseDate: '2023-02-22',
    tutorialSteps: [
      { title: 'Enable AI', description: 'Activate Notion AI in your workspace' },
      { title: 'Use AI Commands', description: 'Type "/" to access AI writing features' }
    ]
  },

  // Image Creation Tools
  {
    id: 'image-1',
    name: 'DALL-E 3',
    description: 'OpenAI\'s advanced AI image generator that creates detailed images from text prompts with free credits',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'OpenAI',
    pricing: { type: 'freemium', startingPrice: '$20/month' },
    features: ['Text-to-image', 'High resolution', 'Artistic styles', 'Photo realistic', 'Creative concepts'],
    screenshots: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://openai.com/dall-e-3',
    rating: 4.8,
    reviewCount: 35000,
    lastUpdated: '2024-10-01',
    releaseDate: '2023-10-04',
    tutorialSteps: [
      { title: 'Access DALL-E', description: 'Use through ChatGPT Plus or API' },
      { title: 'Create Prompts', description: 'Describe the image you want to generate' }
    ]
  },
  {
    id: 'image-2',
    name: 'Midjourney',
    description: 'AI art generator creating stunning artistic images through Discord with free trial credits',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Midjourney',
    pricing: { type: 'freemium', startingPrice: '$10/month' },
    features: ['Artistic images', 'Discord bot', 'Style variations', 'Upscaling', 'Community gallery'],
    screenshots: [
      'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://midjourney.com',
    rating: 4.7,
    reviewCount: 40000,
    lastUpdated: '2024-11-15',
    releaseDate: '2022-07-12',
    tutorialSteps: [
      { title: 'Join Discord', description: 'Access Midjourney through Discord server' },
      { title: 'Use /imagine', description: 'Create images with the imagine command' }
    ]
  },
  {
    id: 'image-3',
    name: 'Stable Diffusion',
    description: 'Open-source AI image generator with free web interface and customizable models',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Stability AI',
    pricing: { type: 'free' },
    features: ['Open source', 'Local installation', 'Custom models', 'Inpainting', 'Style transfer'],
    screenshots: [
      'https://images.unsplash.com/photo-1686191128892-304dd5cb993a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://stablediffusionweb.com',
    rating: 4.6,
    reviewCount: 20000,
    lastUpdated: '2024-11-30',
    releaseDate: '2022-08-22',
    tutorialSteps: [
      { title: 'Choose Interface', description: 'Use web version or install locally' },
      { title: 'Enter Prompt', description: 'Describe your desired image' }
    ]
  },
  {
    id: 'image-4',
    name: 'Canva AI',
    description: 'AI-powered design platform with image generation, background removal, and design templates',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Canva',
    pricing: { type: 'freemium', startingPrice: '$15/month' },
    features: ['Design templates', 'Background removal', 'Magic resize', 'Brand kit', 'Collaboration'],
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://canva.com',
    rating: 4.7,
    reviewCount: 75000,
    lastUpdated: '2024-12-01',
    releaseDate: '2013-01-01',
    tutorialSteps: [
      { title: 'Sign Up Free', description: 'Create your Canva account' },
      { title: 'Choose Template', description: 'Select from millions of templates' }
    ]
  },
  {
    id: 'image-5',
    name: 'Leonardo AI',
    description: 'AI image generator with focus on game assets, concept art, and creative illustrations',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Leonardo AI',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: ['Game asset generation', 'Concept art creation', 'Multiple art styles', 'Image editing tools', 'Community models'],
    screenshots: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://leonardo.ai',
    rating: 4.7,
    reviewCount: 3500,
    lastUpdated: '2024-02-12',
    releaseDate: '2023-01-15',
    tutorialSteps: [
      { title: 'Create Account', description: 'Sign up for Leonardo AI platform' },
      { title: 'Generate Art', description: 'Use prompts to create stunning visuals' }
    ]
  },
  {
    id: 'image-6',
    name: 'Adobe Firefly',
    description: 'Adobe\'s AI-powered creative suite for image generation, text effects, and design enhancement',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Adobe',
    pricing: { type: 'freemium', startingPrice: '$22.99/month' },
    features: ['Text to image', 'Text effects', 'Generative fill', 'Vector recoloring', 'Creative Cloud integration'],
    screenshots: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://firefly.adobe.com',
    rating: 4.6,
    reviewCount: 12000,
    lastUpdated: '2024-11-20',
    releaseDate: '2023-03-21',
    tutorialSteps: [
      { title: 'Sign In', description: 'Use your Adobe ID to access Firefly' },
      { title: 'Create Images', description: 'Generate images with text prompts' }
    ]
  },

  // Code Assistant Tools
  {
    id: 'code-1',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code completions and entire functions with free trial for students',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'GitHub',
    pricing: { type: 'freemium', startingPrice: '$10/month' },
    features: ['Code completion', 'Function generation', 'Multi-language support', 'IDE integration', 'Context aware'],
    screenshots: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://github.com/features/copilot',
    rating: 4.6,
    reviewCount: 30000,
    lastUpdated: '2024-11-20',
    releaseDate: '2021-06-29',
    tutorialSteps: [
      { title: 'Install Extension', description: 'Add Copilot to your IDE' },
      { title: 'Start Coding', description: 'Get AI suggestions as you type' }
    ]
  },
  {
    id: 'code-2',
    name: 'Replit AI',
    description: 'AI coding assistant integrated into Replit IDE with free usage for basic features',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Replit',
    pricing: { type: 'freemium', startingPrice: '$7/month' },
    features: ['Code completion', 'Bug fixing', 'Code explanation', 'Deployment', 'Collaboration'],
    screenshots: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://replit.com',
    rating: 4.5,
    reviewCount: 18000,
    lastUpdated: '2024-12-01',
    releaseDate: '2016-01-01',
    tutorialSteps: [
      { title: 'Create Account', description: 'Sign up for free Replit account' },
      { title: 'Start Project', description: 'Create a new coding project' }
    ]
  },
  {
    id: 'code-3',
    name: 'Cursor',
    description: 'AI-first code editor built for pair programming with AI, featuring advanced code completion and chat',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Cursor',
    pricing: { type: 'freemium', startingPrice: '$20/month' },
    features: ['AI-first code editor', 'Advanced code completion', 'AI chat integration', 'Codebase understanding', 'Multi-file editing'],
    screenshots: [
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://cursor.sh',
    rating: 4.8,
    reviewCount: 2100,
    lastUpdated: '2024-03-13',
    releaseDate: '2024-02-14',
    tutorialSteps: [
      { title: 'Download Editor', description: 'Install Cursor code editor' },
      { title: 'Start Coding', description: 'Begin coding with AI assistance' }
    ]
  },
  {
    id: 'code-4',
    name: 'Tabnine',
    description: 'AI code completion tool that learns from your codebase for personalized suggestions',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Tabnine',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: ['Personalized completions', 'Team training', 'Privacy-focused', 'Local processing', 'Custom models'],
    screenshots: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://tabnine.com',
    rating: 4.5,
    reviewCount: 4200,
    lastUpdated: '2024-01-22',
    releaseDate: '2019-01-01',
    tutorialSteps: [
      { title: 'Install Extension', description: 'Add Tabnine to your editor' },
      { title: 'Train on Codebase', description: 'Let Tabnine learn from your code' }
    ]
  },

  // Audio & Speech Tools
  {
    id: 'audio-1',
    name: 'ElevenLabs',
    description: 'AI voice synthesis platform creating realistic speech from text with free character limits',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'ElevenLabs',
    pricing: { type: 'freemium', startingPrice: '$5/month' },
    features: ['Voice cloning', 'Text-to-speech', 'Multiple languages', 'Custom voices', 'API access'],
    screenshots: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://elevenlabs.io',
    rating: 4.8,
    reviewCount: 12000,
    lastUpdated: '2024-11-25',
    releaseDate: '2022-06-01',
    tutorialSteps: [
      { title: 'Sign Up', description: 'Create account with free credits' },
      { title: 'Generate Voice', description: 'Convert text to natural speech' }
    ]
  },
  {
    id: 'audio-2',
    name: 'Murf AI',
    description: 'AI voice generator for voiceovers, presentations, and podcasts with free trial',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'Murf',
    pricing: { type: 'freemium', startingPrice: '$23/month' },
    features: ['120+ voices', '20+ languages', 'Voice editing', 'Background music', 'Commercial use'],
    screenshots: [
      'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://murf.ai',
    rating: 4.6,
    reviewCount: 8000,
    lastUpdated: '2024-11-10',
    releaseDate: '2020-01-01',
    tutorialSteps: [
      { title: 'Choose Voice', description: 'Select from 120+ AI voices' },
      { title: 'Create Audio', description: 'Generate professional voiceovers' }
    ]
  },
  {
    id: 'audio-3',
    name: 'Speechify',
    description: 'AI-powered text-to-speech platform that converts any text into natural-sounding audio',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'Speechify',
    pricing: { type: 'freemium', startingPrice: '$11.58/month' },
    features: ['Natural text-to-speech', 'Speed control', 'Multiple voices', 'Document scanning', 'Offline listening'],
    screenshots: [
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://speechify.com',
    rating: 4.4,
    reviewCount: 6200,
    lastUpdated: '2024-03-09',
    releaseDate: '2017-01-01',
    tutorialSteps: [
      { title: 'Upload Text', description: 'Add text or documents to convert' },
      { title: 'Listen to Audio', description: 'Play back your text as natural speech' }
    ]
  },

  // Video Creation Tools
  {
    id: 'video-1',
    name: 'Runway ML',
    description: 'AI video generation and editing platform with text-to-video capabilities and free credits',
    category: { id: '6', name: 'Video Creation', icon: 'video', description: 'AI-powered video editing and generation tools' },
    developer: 'Runway',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: ['Text-to-video', 'Video editing', 'Motion graphics', 'Background removal', 'Style transfer'],
    screenshots: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://runwayml.com',
    rating: 4.7,
    reviewCount: 15000,
    lastUpdated: '2024-11-30',
    releaseDate: '2018-01-01',
    tutorialSteps: [
      { title: 'Sign Up', description: 'Create account with free credits' },
      { title: 'Generate Video', description: 'Create videos from text prompts' }
    ]
  },
  {
    id: 'video-2',
    name: 'Luma Dream Machine',
    description: 'AI video generator creating realistic videos from text prompts with free daily credits',
    category: { id: '6', name: 'Video Creation', icon: 'video', description: 'AI-powered video editing and generation tools' },
    developer: 'Luma AI',
    pricing: { type: 'freemium', startingPrice: '$9.99/month' },
    features: ['Text-to-video', 'Image-to-video', 'High quality', 'Multiple styles', 'Fast generation'],
    screenshots: [
      'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://lumalabs.ai/dream-machine',
    rating: 4.6,
    reviewCount: 9000,
    lastUpdated: '2024-11-15',
    releaseDate: '2024-06-12',
    tutorialSteps: [
      { title: 'Join Waitlist', description: 'Sign up for Dream Machine access' },
      { title: 'Create Videos', description: 'Generate videos from text' }
    ]
  },
  {
    id: 'video-3',
    name: 'Synthesia',
    description: 'AI video platform for creating professional videos with AI avatars and voiceovers',
    category: { id: '6', name: 'Video Creation', icon: 'video', description: 'AI-powered video editing and generation tools' },
    developer: 'Synthesia',
    pricing: { type: 'freemium', startingPrice: '$30/month' },
    features: ['AI avatars', 'Text-to-video', 'Multiple languages', 'Custom avatars', 'Professional templates'],
    screenshots: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://synthesia.io',
    rating: 4.5,
    reviewCount: 7500,
    lastUpdated: '2024-10-20',
    releaseDate: '2017-12-01',
    tutorialSteps: [
      { title: 'Choose Avatar', description: 'Select from 140+ AI avatars' },
      { title: 'Create Video', description: 'Generate professional videos with AI' }
    ]
  },

  // App Development Tools
  {
    id: 'app-1',
    name: 'Bubble',
    description: 'No-code platform for building web applications with AI assistance and free plan available',
    category: { id: '7', name: 'App Development', icon: 'smartphone', description: 'No-code and AI-powered app building platforms' },
    developer: 'Bubble',
    pricing: { type: 'freemium', startingPrice: '$25/month' },
    features: ['Visual programming', 'Database included', 'User authentication', 'API integrations', 'Mobile responsive'],
    screenshots: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://bubble.io',
    rating: 4.5,
    reviewCount: 25000,
    lastUpdated: '2024-11-20',
    releaseDate: '2012-01-01',
    tutorialSteps: [
      { title: 'Create Account', description: 'Sign up for free Bubble account' },
      { title: 'Build App', description: 'Use visual editor to create your app' }
    ]
  },
  {
    id: 'app-2',
    name: 'Glide',
    description: 'Create mobile apps from Google Sheets with AI features and free tier',
    category: { id: '7', name: 'App Development', icon: 'smartphone', description: 'No-code and AI-powered app building platforms' },
    developer: 'Glide',
    pricing: { type: 'freemium', startingPrice: '$19/month' },
    features: ['Google Sheets integration', 'Native mobile apps', 'Real-time sync', 'Custom branding', 'Offline support'],
    screenshots: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://glideapps.com',
    rating: 4.4,
    reviewCount: 12000,
    lastUpdated: '2024-11-10',
    releaseDate: '2018-01-01',
    tutorialSteps: [
      { title: 'Connect Sheets', description: 'Link your Google Sheets data' },
      { title: 'Design App', description: 'Customize your mobile app interface' }
    ]
  },
  {
    id: 'app-3',
    name: 'FlutterFlow',
    description: 'Visual app builder for creating Flutter apps with drag-and-drop interface and AI assistance',
    category: { id: '7', name: 'App Development', icon: 'smartphone', description: 'No-code and AI-powered app building platforms' },
    developer: 'FlutterFlow',
    pricing: { type: 'freemium', startingPrice: '$30/month' },
    features: ['Visual Flutter builder', 'Real-time preview', 'Custom code support', 'Firebase integration', 'App store deployment'],
    screenshots: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://flutterflow.io',
    rating: 4.6,
    reviewCount: 8500,
    lastUpdated: '2024-11-25',
    releaseDate: '2021-03-01',
    tutorialSteps: [
      { title: 'Start Project', description: 'Create new Flutter app project' },
      { title: 'Design Interface', description: 'Build UI with drag-and-drop' }
    ]
  },

  // Daily Life Tools
  {
    id: 'daily-1',
    name: 'Down Dog Yoga',
    description: 'AI-powered yoga app with personalized practices, free beginner content, and offline access',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Yoga Buddhi Co.',
    pricing: { type: 'freemium', startingPrice: '$7.99/month' },
    features: ['Personalized yoga', 'Voice guidance', 'Offline practice', 'Beginner friendly', 'Progress tracking'],
    screenshots: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506629905607-19d4d5bd2c5a?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://downdogapp.com',
    rating: 4.8,
    reviewCount: 45000,
    lastUpdated: '2024-11-15',
    releaseDate: '2015-01-01',
    tutorialSteps: [
      { title: 'Download App', description: 'Install from app store for free' },
      { title: 'Start Practice', description: 'Begin with beginner-friendly sessions' }
    ]
  },
  {
    id: 'daily-2',
    name: 'MyFitnessPal',
    description: 'AI-powered nutrition and fitness tracking with barcode scanning and free basic features',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'MyFitnessPal',
    pricing: { type: 'freemium', startingPrice: '$19.99/month' },
    features: ['Calorie tracking', 'Barcode scanner', 'Exercise logging', 'Social features', 'Recipe importer'],
    screenshots: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://myfitnesspal.com',
    rating: 4.6,
    reviewCount: 500000,
    lastUpdated: '2024-12-01',
    releaseDate: '2005-01-01',
    tutorialSteps: [
      { title: 'Create Profile', description: 'Set up your fitness goals' },
      { title: 'Track Food', description: 'Log meals with barcode scanner' }
    ]
  },
  {
    id: 'daily-3',
    name: 'Headspace',
    description: 'AI-guided meditation and mindfulness app with free basic meditations and sleep stories',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Headspace',
    pricing: { type: 'freemium', startingPrice: '$12.99/month' },
    features: ['Guided meditation', 'Sleep stories', 'Mindfulness exercises', 'Progress tracking', 'Courses'],
    screenshots: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://headspace.com',
    rating: 4.7,
    reviewCount: 200000,
    lastUpdated: '2024-11-20',
    releaseDate: '2010-01-01',
    tutorialSteps: [
      { title: 'Download App', description: 'Install Headspace for free' },
      { title: 'Start Meditating', description: 'Begin with basic meditations' }
    ]
  },
  {
    id: 'daily-4',
    name: 'PlantNet',
    description: 'AI plant identification app using image recognition, completely free for plant enthusiasts',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'PlantNet',
    pricing: { type: 'free' },
    features: ['Plant identification', 'Photo recognition', 'Species database', 'Offline mode', 'Community driven'],
    screenshots: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://plantnet.org',
    rating: 4.5,
    reviewCount: 30000,
    lastUpdated: '2024-11-01',
    releaseDate: '2013-01-01',
    tutorialSteps: [
      { title: 'Take Photo', description: 'Capture image of unknown plant' },
      { title: 'Get Identification', description: 'Receive plant species information' }
    ]
  },
  {
    id: 'daily-5',
    name: 'Replika',
    description: 'AI companion chatbot for emotional support, conversation, and personal growth',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Luka',
    pricing: { type: 'freemium', startingPrice: '$19.99/month' },
    features: ['AI companion', 'Emotional support', 'Personality development', 'Voice calls', 'Memory retention'],
    screenshots: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://replika.ai',
    rating: 4.3,
    reviewCount: 85000,
    lastUpdated: '2024-11-18',
    releaseDate: '2017-11-01',
    tutorialSteps: [
      { title: 'Create Replika', description: 'Set up your AI companion' },
      { title: 'Start Chatting', description: 'Begin conversations and build relationship' }
    ]
  }
];