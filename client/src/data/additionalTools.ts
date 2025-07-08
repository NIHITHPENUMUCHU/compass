import { Tool } from '../types';

export const additionalTools: Tool[] = [
  // More Text Generation Tools
  {
    id: 'text-8',
    name: 'Perplexity AI',
    description: 'AI-powered search engine that provides accurate answers with real-time information and citations',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Perplexity',
    pricing: { type: 'freemium', startingPrice: '$20/month' },
    features: ['Real-time search results', 'Source citations', 'Follow-up questions', 'Multiple AI models', 'Academic mode'],
    screenshots: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://perplexity.ai',
    rating: 4.7,
    reviewCount: 3400,
    lastUpdated: '2024-03-16',
    releaseDate: '2022-12-07',
    tutorialSteps: [
      { title: 'Ask Questions', description: 'Type your question or search query' },
      { title: 'Get Cited Answers', description: 'Receive answers with source citations' }
    ]
  },
  {
    id: 'text-9',
    name: 'Quillbot',
    description: 'AI-powered paraphrasing tool for rewriting and improving text with multiple modes',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'QuillBot',
    pricing: { type: 'freemium', startingPrice: '$8.33/month' },
    features: ['Paraphrasing modes', 'Grammar checker', 'Plagiarism detector', 'Citation generator', 'Summarizer'],
    screenshots: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://quillbot.com',
    rating: 4.4,
    reviewCount: 15600,
    lastUpdated: '2024-11-28',
    releaseDate: '2017-01-01',
    tutorialSteps: [
      { title: 'Paste Text', description: 'Enter text you want to paraphrase' },
      { title: 'Choose Mode', description: 'Select paraphrasing style and rewrite' }
    ]
  },
  {
    id: 'text-10',
    name: 'Rytr',
    description: 'AI writing assistant for creating content across 40+ use cases and 30+ languages',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Rytr',
    pricing: { type: 'freemium', startingPrice: '$9/month' },
    features: ['40+ use cases', '30+ languages', 'Tone selection', 'Plagiarism checker', 'Team collaboration'],
    screenshots: [
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://rytr.me',
    rating: 4.3,
    reviewCount: 8900,
    lastUpdated: '2024-10-15',
    releaseDate: '2021-04-01',
    tutorialSteps: [
      { title: 'Select Use Case', description: 'Choose from 40+ content types' },
      { title: 'Generate Content', description: 'Create AI-powered content instantly' }
    ]
  },
  {
    id: 'text-11',
    name: 'Wordtune',
    description: 'AI writing companion that understands what you\'re trying to say and suggests ways to make your writing clearer',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'AI21 Labs',
    pricing: { type: 'freemium', startingPrice: '$13.99/month' },
    features: ['Rewrite suggestions', 'Tone adjustment', 'Length control', 'Browser extension', 'Mobile app'],
    screenshots: [
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://wordtune.com',
    rating: 4.5,
    reviewCount: 12000,
    lastUpdated: '2024-11-15',
    releaseDate: '2020-10-01',
    tutorialSteps: [
      { title: 'Install Extension', description: 'Add Wordtune to your browser' },
      { title: 'Start Writing', description: 'Get suggestions as you type' }
    ]
  },
  {
    id: 'text-12',
    name: 'Anyword',
    description: 'AI copywriting platform that predicts which copy will perform best for your audience',
    category: { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
    developer: 'Anyword',
    pricing: { type: 'freemium', startingPrice: '$39/month' },
    features: ['Performance prediction', 'A/B testing', 'Brand voice', 'Analytics', 'Team collaboration'],
    screenshots: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://anyword.com',
    rating: 4.4,
    reviewCount: 3200,
    lastUpdated: '2024-10-20',
    releaseDate: '2013-01-01',
    tutorialSteps: [
      { title: 'Set Target Audience', description: 'Define your audience parameters' },
      { title: 'Generate Copy', description: 'Create optimized content with performance scores' }
    ]
  },

  // More Image Creation Tools
  {
    id: 'image-7',
    name: 'Artbreeder',
    description: 'Collaborative AI art platform for creating and evolving images through genetic algorithms',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Artbreeder',
    pricing: { type: 'freemium', startingPrice: '$8.99/month' },
    features: ['Genetic algorithm art', 'Collaborative creation', 'Portrait generation', 'Landscape creation', 'Style mixing'],
    screenshots: [
      'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://artbreeder.com',
    rating: 4.4,
    reviewCount: 2200,
    lastUpdated: '2024-02-18',
    releaseDate: '2018-12-01',
    tutorialSteps: [
      { title: 'Browse Gallery', description: 'Explore existing artworks for inspiration' },
      { title: 'Breed Images', description: 'Combine and evolve images to create new art' }
    ]
  },
  {
    id: 'image-8',
    name: 'NightCafe',
    description: 'AI art generator with multiple algorithms and styles for creating unique digital artwork',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'NightCafe',
    pricing: { type: 'freemium', startingPrice: '$5.99/month' },
    features: ['Multiple AI algorithms', 'Style transfer', 'Community challenges', 'Print services', 'Bulk generation'],
    screenshots: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://nightcafe.studio',
    rating: 4.5,
    reviewCount: 4100,
    lastUpdated: '2024-03-02',
    releaseDate: '2019-08-01',
    tutorialSteps: [
      { title: 'Choose Algorithm', description: 'Select from various AI art algorithms' },
      { title: 'Create Art', description: 'Generate and customize your artwork' }
    ]
  },
  {
    id: 'image-9',
    name: 'Photosonic',
    description: 'AI art generator by Writesonic for creating digital artwork from text descriptions',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Writesonic',
    pricing: { type: 'freemium', startingPrice: '$12.67/month' },
    features: ['Text-to-image', 'Multiple art styles', 'High resolution', 'Commercial use', 'API access'],
    screenshots: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://photosonic.writesonic.com',
    rating: 4.3,
    reviewCount: 1800,
    lastUpdated: '2024-09-20',
    releaseDate: '2022-10-01',
    tutorialSteps: [
      { title: 'Enter Description', description: 'Describe the image you want to create' },
      { title: 'Generate Art', description: 'Create stunning AI artwork instantly' }
    ]
  },
  {
    id: 'image-10',
    name: 'Playground AI',
    description: 'Free AI image generator with advanced editing capabilities and community features',
    category: { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
    developer: 'Playground AI',
    pricing: { type: 'freemium', startingPrice: '$15/month' },
    features: ['Free daily credits', 'Advanced editing', 'Community gallery', 'Multiple models', 'Canvas editor'],
    screenshots: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://playgroundai.com',
    rating: 4.6,
    reviewCount: 8500,
    lastUpdated: '2024-11-10',
    releaseDate: '2021-01-01',
    tutorialSteps: [
      { title: 'Create Account', description: 'Sign up for free daily credits' },
      { title: 'Generate Images', description: 'Create art with various AI models' }
    ]
  },

  // More Code Assistant Tools
  {
    id: 'code-5',
    name: 'Codeium',
    description: 'Free AI code completion tool with support for 70+ programming languages',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Codeium',
    pricing: { type: 'freemium', startingPrice: '$12/month' },
    features: ['70+ language support', 'Unlimited completions', 'Chat interface', 'Code explanation', 'Bug detection'],
    screenshots: [
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://codeium.com',
    rating: 4.6,
    reviewCount: 3200,
    lastUpdated: '2024-01-15',
    releaseDate: '2022-09-01',
    tutorialSteps: [
      { title: 'Install Plugin', description: 'Add Codeium to your IDE' },
      { title: 'Get Suggestions', description: 'Receive intelligent code completions' }
    ]
  },
  {
    id: 'code-6',
    name: 'Amazon CodeWhisperer',
    description: 'AI coding companion by Amazon for real-time code suggestions and security scanning',
    category: { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
    developer: 'Amazon',
    pricing: { type: 'freemium', startingPrice: '$19/month' },
    features: ['Real-time suggestions', 'Security scanning', 'Reference tracking', 'Multi-language support', 'IDE integration'],
    screenshots: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://aws.amazon.com/codewhisperer',
    rating: 4.4,
    reviewCount: 2800,
    lastUpdated: '2024-11-05',
    releaseDate: '2022-06-23',
    tutorialSteps: [
      { title: 'Setup AWS Account', description: 'Create AWS account for CodeWhisperer' },
      { title: 'Install Extension', description: 'Add to your preferred IDE' }
    ]
  },

  // More Audio & Speech Tools
  {
    id: 'audio-4',
    name: 'Resemble AI',
    description: 'AI voice generator for creating custom voices and speech synthesis with real-time capabilities',
    category: { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
    developer: 'Resemble AI',
    pricing: { type: 'freemium', startingPrice: '$0.006/second' },
    features: ['Custom voice creation', 'Real-time voice conversion', 'Emotional control', 'API integration', 'Voice cloning'],
    screenshots: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://resemble.ai',
    rating: 4.5,
    reviewCount: 1200,
    lastUpdated: '2024-10-30',
    releaseDate: '2019-01-01',
    tutorialSteps: [
      { title: 'Record Voice', description: 'Create your custom voice model' },
      { title: 'Generate Speech', description: 'Convert text to your custom voice' }
    ]
  },

  // More Video Creation Tools
  {
    id: 'video-4',
    name: 'Pictory',
    description: 'AI video creation platform that turns scripts and blog posts into engaging videos',
    category: { id: '6', name: 'Video Creation', icon: 'video', description: 'AI-powered video editing and generation tools' },
    developer: 'Pictory',
    pricing: { type: 'freemium', startingPrice: '$19/month' },
    features: ['Script to video', 'Blog to video', 'Auto captions', 'Voice synthesis', 'Stock footage'],
    screenshots: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://pictory.ai',
    rating: 4.4,
    reviewCount: 3200,
    lastUpdated: '2024-09-15',
    releaseDate: '2020-01-01',
    tutorialSteps: [
      { title: 'Upload Script', description: 'Provide your script or blog post' },
      { title: 'Generate Video', description: 'AI creates video with visuals and audio' }
    ]
  },
  {
    id: 'video-5',
    name: 'InVideo',
    description: 'AI-powered video creation platform with templates and automated editing features',
    category: { id: '6', name: 'Video Creation', icon: 'video', description: 'AI-powered video editing and generation tools' },
    developer: 'InVideo',
    pricing: { type: 'freemium', startingPrice: '$15/month' },
    features: ['5000+ templates', 'Text-to-video', 'Auto subtitles', 'Brand customization', 'Stock media library'],
    screenshots: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://invideo.io',
    rating: 4.3,
    reviewCount: 8700,
    lastUpdated: '2024-11-12',
    releaseDate: '2017-01-01',
    tutorialSteps: [
      { title: 'Choose Template', description: 'Select from thousands of templates' },
      { title: 'Customize Video', description: 'Edit with AI-powered tools' }
    ]
  },

  // More App Development Tools
  {
    id: 'app-4',
    name: 'Adalo',
    description: 'No-code platform for building native mobile and web apps with AI-powered features',
    category: { id: '7', name: 'App Development', icon: 'smartphone', description: 'No-code and AI-powered app building platforms' },
    developer: 'Adalo',
    pricing: { type: 'freemium', startingPrice: '$45/month' },
    features: ['Native mobile apps', 'Web apps', 'Database included', 'Push notifications', 'App store publishing'],
    screenshots: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://adalo.com',
    rating: 4.2,
    reviewCount: 4500,
    lastUpdated: '2024-10-08',
    releaseDate: '2018-01-01',
    tutorialSteps: [
      { title: 'Choose Template', description: 'Start with pre-built app template' },
      { title: 'Customize App', description: 'Design and configure your app' }
    ]
  },

  // More Daily Life Tools
  {
    id: 'daily-6',
    name: 'Otter.ai',
    description: 'AI-powered meeting transcription and note-taking assistant with real-time collaboration',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Otter.ai',
    pricing: { type: 'freemium', startingPrice: '$8.33/month' },
    features: ['Real-time transcription', 'Meeting notes', 'Speaker identification', 'Keyword search', 'Team collaboration'],
    screenshots: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://otter.ai',
    rating: 4.5,
    reviewCount: 12000,
    lastUpdated: '2024-11-22',
    releaseDate: '2016-01-01',
    tutorialSteps: [
      { title: 'Start Recording', description: 'Record meetings or conversations' },
      { title: 'Get Transcripts', description: 'Receive accurate AI transcriptions' }
    ]
  },
  {
    id: 'daily-7',
    name: 'Lensa AI',
    description: 'AI photo editor for portrait enhancement, background removal, and artistic filters',
    category: { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' },
    developer: 'Prisma Labs',
    pricing: { type: 'freemium', startingPrice: '$7.99/month' },
    features: ['Portrait enhancement', 'Background removal', 'Artistic filters', 'Magic avatars', 'One-tap editing'],
    screenshots: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    ],
    websiteUrl: 'https://prisma-ai.com/lensa',
    rating: 4.2,
    reviewCount: 45000,
    lastUpdated: '2024-10-12',
    releaseDate: '2018-12-01',
    tutorialSteps: [
      { title: 'Upload Photo', description: 'Select photo from your gallery' },
      { title: 'Apply AI Effects', description: 'Enhance with AI-powered tools' }
    ]
  }
];