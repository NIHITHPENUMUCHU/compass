import { Tool } from '../types';

export const additional30Tools: Tool[] = [
  // More Text Generation Tools
  {
    id: 'text-13',
    name: 'Lex',
    description: 'AI-powered writing assistant designed for authors and long-form content creators',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Every',
    pricing: { type: 'freemium', startingPrice: '$8/month' },
    features: ['Long-form writing', 'Research integration', 'Version control', 'Collaboration', 'AI suggestions'],
    screenshots: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://lex.page',
    rating: 4.3,
    reviewCount: 2100,
    lastUpdated: '2024-11-20',
    releaseDate: '2022-03-15',
    tutorialSteps: [
      { title: 'Start Writing', description: 'Begin your document with AI assistance' },
      { title: 'Use AI Features', description: 'Leverage AI for research and suggestions' }
    ]
  },
  {
    id: 'text-14',
    name: 'Sudowrite',
    description: 'AI writing partner for creative fiction and storytelling with character development',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Sudowrite',
    pricing: { type: 'freemium', startingPrice: '$10/month' },
    features: ['Story writing', 'Character development', 'Plot suggestions', 'Dialogue generation', 'World building'],
    screenshots: [
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://sudowrite.com',
    rating: 4.5,
    reviewCount: 3200,
    lastUpdated: '2024-10-25',
    releaseDate: '2020-09-01',
    tutorialSteps: [
      { title: 'Create Story', description: 'Start your creative writing project' },
      { title: 'Develop Characters', description: 'Use AI to build compelling characters' }
    ]
  },
  {
    id: 'text-15',
    name: 'Simplified AI Writer',
    description: 'All-in-one content creation platform with AI writing, design, and social media tools',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Simplified',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: ['Content creation', 'Social media posts', 'Blog writing', 'Ad copy', 'Design integration'],
    screenshots: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://simplified.com',
    rating: 4.4,
    reviewCount: 5600,
    lastUpdated: '2024-11-15',
    releaseDate: '2021-01-01',
    tutorialSteps: [
      { title: 'Choose Template', description: 'Select from content templates' },
      { title: 'Generate Content', description: 'Create content with AI assistance' }
    ]
  },

  // More Image Creation Tools
  {
    id: 'image-11',
    name: 'Ideogram',
    description: 'AI image generator with excellent text rendering capabilities and creative control',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Ideogram',
    pricing: { type: 'freemium', startingPrice: '$8/month' },
    features: ['Text in images', 'Style control', 'High resolution', 'Commercial use', 'Fast generation'],
    screenshots: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://ideogram.ai',
    rating: 4.6,
    reviewCount: 4200,
    lastUpdated: '2024-11-28',
    releaseDate: '2023-08-01',
    tutorialSteps: [
      { title: 'Enter Prompt', description: 'Describe your image with text elements' },
      { title: 'Generate Image', description: 'Create images with perfect text rendering' }
    ]
  },
  {
    id: 'image-12',
    name: 'Flux AI',
    description: 'Advanced AI image generator with photorealistic capabilities and style transfer',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Black Forest Labs',
    pricing: { type: 'freemium', startingPrice: '$10/month' },
    features: ['Photorealistic images', 'Style transfer', 'High quality', 'Fast generation', 'API access'],
    screenshots: [
      'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://flux1.ai',
    rating: 4.7,
    reviewCount: 3800,
    lastUpdated: '2024-11-30',
    releaseDate: '2024-08-01',
    tutorialSteps: [
      { title: 'Choose Model', description: 'Select from available Flux models' },
      { title: 'Create Art', description: 'Generate high-quality images' }
    ]
  },
  {
    id: 'image-13',
    name: 'Krea AI',
    description: 'Real-time AI image generation with live canvas and instant feedback',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Krea',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: ['Real-time generation', 'Live canvas', 'Instant feedback', 'Style mixing', 'Collaborative editing'],
    screenshots: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://krea.ai',
    rating: 4.5,
    reviewCount: 2900,
    lastUpdated: '2024-11-22',
    releaseDate: '2023-06-01',
    tutorialSteps: [
      { title: 'Open Canvas', description: 'Start with the live canvas interface' },
      { title: 'Draw and Generate', description: 'Create art in real-time with AI' }
    ]
  },

  // More Code Assistant Tools
  {
    id: 'code-7',
    name: 'Sourcegraph Cody',
    description: 'AI coding assistant that understands your entire codebase for better suggestions',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Sourcegraph',
    pricing: { type: 'freemium', startingPrice: '$9/month' },
    features: ['Codebase understanding', 'Context-aware suggestions', 'Code search', 'Documentation', 'Multi-language'],
    screenshots: [
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://sourcegraph.com/cody',
    rating: 4.5,
    reviewCount: 2800,
    lastUpdated: '2024-11-25',
    releaseDate: '2023-07-01',
    tutorialSteps: [
      { title: 'Install Extension', description: 'Add Cody to your IDE' },
      { title: 'Index Codebase', description: 'Let Cody understand your project' }
    ]
  },
  {
    id: 'code-8',
    name: 'Blackbox AI',
    description: 'AI-powered code generation and completion with real-time suggestions',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Blackbox',
    pricing: { type: 'freemium', startingPrice: '$0.99/month' },
    features: ['Code completion', 'Error detection', 'Code explanation', 'Multiple languages', 'VS Code integration'],
    screenshots: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://blackbox.ai',
    rating: 4.3,
    reviewCount: 4100,
    lastUpdated: '2024-11-20',
    releaseDate: '2021-10-01',
    tutorialSteps: [
      { title: 'Install Plugin', description: 'Add Blackbox to your editor' },
      { title: 'Start Coding', description: 'Get AI-powered code suggestions' }
    ]
  },

  // More Audio & Speech Tools
  {
    id: 'audio-5',
    name: 'Descript',
    description: 'AI-powered audio and video editing with transcription and voice cloning',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'Descript',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: ['Audio editing', 'Video editing', 'Transcription', 'Voice cloning', 'Overdub'],
    screenshots: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://descript.com',
    rating: 4.6,
    reviewCount: 8900,
    lastUpdated: '2024-11-30',
    releaseDate: '2017-01-01',
    tutorialSteps: [
      { title: 'Upload Audio', description: 'Import your audio or video file' },
      { title: 'Edit with Text', description: 'Edit audio by editing the transcript' }
    ]
  },
  {
    id: 'audio-6',
    name: 'Podcastle',
    description: 'AI-powered podcast creation platform with recording, editing, and hosting',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'Podcastle',
    pricing: { type: 'freemium', startingPrice: '$11.99/month' },
    features: ['Podcast recording', 'AI editing', 'Noise removal', 'Voice enhancement', 'Hosting'],
    screenshots: [
      'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://podcastle.ai',
    rating: 4.4,
    reviewCount: 3200,
    lastUpdated: '2024-10-15',
    releaseDate: '2020-06-01',
    tutorialSteps: [
      { title: 'Start Recording', description: 'Record your podcast episode' },
      { title: 'AI Enhancement', description: 'Let AI improve audio quality' }
    ]
  },

  // More Video Creation Tools
  {
    id: 'video-6',
    name: 'Fliki',
    description: 'AI video generator that creates videos from text with realistic voiceovers',
    category: { id: '6', name: 'Video Creation', icon: 'video', description: 'AI-powered video editing and generation tools' },
    developer: 'Fliki',
    pricing: { type: 'freemium', startingPrice: '$21/month' },
    features: ['Text to video', 'AI voiceovers', 'Stock footage', 'Multiple languages', 'Brand customization'],
    screenshots: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://fliki.ai',
    rating: 4.5,
    reviewCount: 4800,
    lastUpdated: '2024-11-18',
    releaseDate: '2021-09-01',
    tutorialSteps: [
      { title: 'Enter Script', description: 'Provide your video script' },
      { title: 'Generate Video', description: 'AI creates video with voiceover' }
    ]
  },
  {
    id: 'video-7',
    name: 'HeyGen',
    description: 'AI avatar video generator for creating personalized video content',
    category: { id: '6', name: 'Video Creation', icon: 'video', description: 'AI-powered video editing and generation tools' },
    developer: 'HeyGen',
    pricing: { type: 'freemium', startingPrice: '$24/month' },
    features: ['AI avatars', 'Custom avatars', 'Multi-language', 'Video templates', 'API access'],
    screenshots: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://heygen.com',
    rating: 4.6,
    reviewCount: 3600,
    lastUpdated: '2024-11-25',
    releaseDate: '2020-12-01',
    tutorialSteps: [
      { title: 'Choose Avatar', description: 'Select or create your AI avatar' },
      { title: 'Create Video', description: 'Generate personalized video content' }
    ]
  },

  // More Website Making Tools
  {
    id: 'website-4',
    name: 'Framer AI',
    description: 'AI-powered website builder with advanced design capabilities and animations',
    category: { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
    developer: 'Framer',
    pricing: { type: 'freemium', startingPrice: '$5/month' },
    features: ['AI website generation', 'Advanced animations', 'Responsive design', 'CMS integration', 'Custom code'],
    screenshots: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://framer.com',
    rating: 4.7,
    reviewCount: 12000,
    lastUpdated: '2024-11-30',
    releaseDate: '2014-01-01',
    tutorialSteps: [
      { title: 'Describe Website', description: 'Tell AI what website you want' },
      { title: 'Customize Design', description: 'Refine the AI-generated design' }
    ]
  },
  {
    id: 'website-5',
    name: 'Hostinger AI Builder',
    description: 'AI website builder with hosting included and e-commerce capabilities',
    category: { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
    developer: 'Hostinger',
    pricing: { type: 'freemium', startingPrice: '$2.99/month' },
    features: ['AI website creation', 'Hosting included', 'E-commerce', 'SEO tools', 'Mobile optimization'],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://hostinger.com',
    rating: 4.4,
    reviewCount: 8500,
    lastUpdated: '2024-11-20',
    releaseDate: '2004-01-01',
    tutorialSteps: [
      { title: 'Answer Questions', description: 'Provide details about your business' },
      { title: 'Launch Website', description: 'AI builds and hosts your site' }
    ]
  },

  // More App Development Tools
  {
    id: 'app-5',
    name: 'Thunkable',
    description: 'Drag-and-drop app builder with AI features for creating native mobile apps',
    category: { id: '7', name: 'App Development', icon: 'smartphone', description: 'No-code and AI-powered app building platforms' },
    developer: 'Thunkable',
    pricing: { type: 'freemium', startingPrice: '$25/month' },
    features: ['Drag-and-drop builder', 'Native apps', 'AI components', 'Real-time testing', 'App store publishing'],
    screenshots: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://thunkable.com',
    rating: 4.3,
    reviewCount: 5200,
    lastUpdated: '2024-10-30',
    releaseDate: '2017-01-01',
    tutorialSteps: [
      { title: 'Design Interface', description: 'Create your app interface' },
      { title: 'Add Logic', description: 'Build app functionality with blocks' }
    ]
  },
  {
    id: 'app-6',
    name: 'AppSheet',
    description: 'Google\'s no-code platform for building apps from spreadsheets with AI automation',
    category: { id: '7', name: 'App Development', icon: 'smartphone', description: 'No-code and AI-powered app building platforms' },
    developer: 'Google',
    pricing: { type: 'freemium', startingPrice: '$5/month' },
    features: ['Spreadsheet integration', 'AI automation', 'Workflow automation', 'Data sync', 'Enterprise features'],
    screenshots: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://appsheet.com',
    rating: 4.2,
    reviewCount: 6800,
    lastUpdated: '2024-11-15',
    releaseDate: '2012-01-01',
    tutorialSteps: [
      { title: 'Connect Data', description: 'Link your spreadsheet or database' },
      { title: 'Build App', description: 'AI generates app from your data' }
    ]
  },

  // More Daily Life Tools
  {
    id: 'daily-8',
    name: 'Noom',
    description: 'AI-powered health and weight loss app with personalized coaching',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Noom',
    pricing: { type: 'freemium', startingPrice: '$59/month' },
    features: ['Personalized coaching', 'Food logging', 'Behavior change', 'Progress tracking', 'Community support'],
    screenshots: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://noom.com',
    rating: 4.1,
    reviewCount: 125000,
    lastUpdated: '2024-11-28',
    releaseDate: '2008-01-01',
    tutorialSteps: [
      { title: 'Set Goals', description: 'Define your health objectives' },
      { title: 'Start Coaching', description: 'Begin personalized AI coaching' }
    ]
  },
  {
    id: 'daily-9',
    name: 'Youper',
    description: 'AI emotional health assistant for mood tracking and mental wellness',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Youper',
    pricing: { type: 'freemium', startingPrice: '$9.99/month' },
    features: ['Mood tracking', 'AI conversations', 'Mental health insights', 'Personalized techniques', 'Progress monitoring'],
    screenshots: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://youper.ai',
    rating: 4.3,
    reviewCount: 8900,
    lastUpdated: '2024-10-20',
    releaseDate: '2017-01-01',
    tutorialSteps: [
      { title: 'Check In', description: 'Share how you\'re feeling' },
      { title: 'Get Support', description: 'Receive AI-powered guidance' }
    ]
  },
  {
    id: 'daily-10',
    name: 'Socratic by Google',
    description: 'AI-powered homework helper that explains concepts across subjects',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Google',
    pricing: { type: 'free' },
    features: ['Photo-based questions', 'Step-by-step explanations', 'Multiple subjects', 'Visual learning', 'Concept breakdown'],
    screenshots: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://socratic.org',
    rating: 4.5,
    reviewCount: 45000,
    lastUpdated: '2024-09-15',
    releaseDate: '2013-01-01',
    tutorialSteps: [
      { title: 'Take Photo', description: 'Capture your homework question' },
      { title: 'Get Explanation', description: 'Receive detailed AI explanations' }
    ]
  },

  // Additional Specialized Tools
  {
    id: 'design-1',
    name: 'Figma AI',
    description: 'AI-powered design assistant integrated into Figma for enhanced creativity',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Figma',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: ['Design generation', 'Auto-layout', 'Content generation', 'Style suggestions', 'Collaboration'],
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://figma.com',
    rating: 4.8,
    reviewCount: 89000,
    lastUpdated: '2024-11-30',
    releaseDate: '2016-01-01',
    tutorialSteps: [
      { title: 'Open Figma', description: 'Start a new design project' },
      { title: 'Use AI Features', description: 'Leverage AI for design assistance' }
    ]
  },
  {
    id: 'productivity-1',
    name: 'Motion',
    description: 'AI-powered calendar and task management that automatically schedules your day',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Motion',
    pricing: { type: 'freemium', startingPrice: '$19/month' },
    features: ['Auto-scheduling', 'Task management', 'Calendar optimization', 'Focus time', 'Team coordination'],
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://usemotion.com',
    rating: 4.6,
    reviewCount: 3400,
    lastUpdated: '2024-11-25',
    releaseDate: '2019-01-01',
    tutorialSteps: [
      { title: 'Add Tasks', description: 'Input your tasks and deadlines' },
      { title: 'Let AI Schedule', description: 'AI optimizes your calendar automatically' }
    ]
  },
  {
    id: 'research-1',
    name: 'Elicit',
    description: 'AI research assistant that helps find and summarize academic papers',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Ought',
    pricing: { type: 'freemium', startingPrice: '$10/month' },
    features: ['Paper search', 'Research summaries', 'Citation extraction', 'Question answering', 'Literature review'],
    screenshots: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://elicit.org',
    rating: 4.7,
    reviewCount: 2800,
    lastUpdated: '2024-11-20',
    releaseDate: '2021-01-01',
    tutorialSteps: [
      { title: 'Ask Question', description: 'Enter your research question' },
      { title: 'Review Results', description: 'Analyze AI-found papers and summaries' }
    ]
  },
  {
    id: 'music-1',
    name: 'AIVA',
    description: 'AI composer that creates original music for films, games, and commercials',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'AIVA Technologies',
    pricing: { type: 'freemium', startingPrice: '€11/month' },
    features: ['Music composition', 'Multiple genres', 'Custom styles', 'MIDI export', 'Commercial licensing'],
    screenshots: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://aiva.ai',
    rating: 4.4,
    reviewCount: 1900,
    lastUpdated: '2024-10-15',
    releaseDate: '2016-01-01',
    tutorialSteps: [
      { title: 'Choose Style', description: 'Select musical genre and mood' },
      { title: 'Generate Music', description: 'AI composes original soundtrack' }
    ]
  },
  {
    id: 'translation-1',
    name: 'DeepL',
    description: 'AI-powered translation service with superior accuracy and natural language processing',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'DeepL',
    pricing: { type: 'freemium', startingPrice: '$6.99/month' },
    features: ['High-quality translation', '31+ languages', 'Document translation', 'API access', 'Tone adjustment'],
    screenshots: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://deepl.com',
    rating: 4.8,
    reviewCount: 67000,
    lastUpdated: '2024-11-30',
    releaseDate: '2017-08-01',
    tutorialSteps: [
      { title: 'Enter Text', description: 'Input text to translate' },
      { title: 'Get Translation', description: 'Receive high-quality AI translation' }
    ]
  },
  {
    id: 'presentation-1',
    name: 'Gamma',
    description: 'AI-powered presentation maker that creates beautiful slides from prompts',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Gamma',
    pricing: { type: 'freemium', startingPrice: '$8/month' },
    features: ['AI slide generation', 'Beautiful templates', 'Interactive content', 'Real-time collaboration', 'Export options'],
    screenshots: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://gamma.app',
    rating: 4.6,
    reviewCount: 8200,
    lastUpdated: '2024-11-25',
    releaseDate: '2022-01-01',
    tutorialSteps: [
      { title: 'Describe Presentation', description: 'Tell AI what presentation you need' },
      { title: 'Customize Slides', description: 'Refine AI-generated content' }
    ]
  },
  {
    id: 'email-1',
    name: 'Superhuman',
    description: 'AI-powered email client with smart features for productivity and efficiency',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Superhuman',
    pricing: { type: 'paid', startingPrice: '$30/month' },
    features: ['AI email sorting', 'Smart compose', 'Read receipts', 'Keyboard shortcuts', 'Team collaboration'],
    screenshots: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://superhuman.com',
    rating: 4.7,
    reviewCount: 5600,
    lastUpdated: '2024-11-20',
    releaseDate: '2017-01-01',
    tutorialSteps: [
      { title: 'Setup Account', description: 'Connect your email accounts' },
      { title: 'Learn Shortcuts', description: 'Master AI-powered email workflow' }
    ]
  },
  {
    id: 'finance-1',
    name: 'Cleo',
    description: 'AI financial assistant that helps with budgeting, saving, and financial planning',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Cleo',
    pricing: { type: 'freemium', startingPrice: '$5.99/month' },
    features: ['Budget tracking', 'Spending insights', 'Savings goals', 'Bill reminders', 'Financial advice'],
    screenshots: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://meetcleo.com',
    rating: 4.3,
    reviewCount: 12000,
    lastUpdated: '2024-10-30',
    releaseDate: '2016-01-01',
    tutorialSteps: [
      { title: 'Connect Accounts', description: 'Link your bank accounts securely' },
      { title: 'Get Insights', description: 'Receive AI-powered financial advice' }
    ]
  },
  {
    id: 'shopping-1',
    name: 'Honey',
    description: 'AI-powered shopping assistant that finds coupons and deals automatically',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'PayPal',
    pricing: { type: 'free' },
    features: ['Automatic coupons', 'Price tracking', 'Cashback rewards', 'Deal alerts', 'Browser extension'],
    screenshots: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://joinhoney.com',
    rating: 4.5,
    reviewCount: 89000,
    lastUpdated: '2024-11-15',
    releaseDate: '2012-01-01',
    tutorialSteps: [
      { title: 'Install Extension', description: 'Add Honey to your browser' },
      { title: 'Shop and Save', description: 'AI finds deals automatically' }
    ]
  }
];