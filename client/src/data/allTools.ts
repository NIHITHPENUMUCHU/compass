import { Tool } from '../types';
import { expandedTools } from './expandedTools';
import { additional30Tools } from './additionalTools30';








// Combine all tools
export const allTools: Tool[] = [...expandedTools, ...additional30Tools];