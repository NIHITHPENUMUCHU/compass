import { db } from "./db.js";
import { users, categories, tools, type User, type InsertUser, type Category, type InsertCategory, type Tool, type InsertTool } from "../shared/schema.js";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Category methods
  getCategories(): Promise<Category[]>;
  getCategoryById(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // Tool methods
  getTools(): Promise<Tool[]>;
  getToolById(id: string): Promise<Tool | undefined>;
  getToolsByCategory(categoryId: string): Promise<Tool[]>;
  createTool(tool: InsertTool): Promise<Tool>;
  updateTool(id: string, tool: Partial<InsertTool>): Promise<Tool | undefined>;
  deleteTool(id: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    try {
      const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.error('Database error in getUser:', error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
      return result[0];
    } catch (error) {
      console.error('Database error in getUserByUsername:', error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const result = await db.insert(users).values(insertUser).returning();
      return result[0];
    } catch (error) {
      console.error('Database error in createUser:', error);
      throw error;
    }
  }

  // Category methods
  async getCategories(): Promise<Category[]> {
    try {
      return await db.select().from(categories);
    } catch (error) {
      console.error('Database error in getCategories:', error);
      return [];
    }
  }

  async getCategoryById(id: string): Promise<Category | undefined> {
    try {
      const result = await db.select().from(categories).where(eq(categories.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.error('Database error in getCategoryById:', error);
      return undefined;
    }
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    try {
      const result = await db.insert(categories).values(category).returning();
      return result[0];
    } catch (error) {
      console.error('Database error in createCategory:', error);
      throw error;
    }
  }

  // Tool methods
  async getTools(): Promise<Tool[]> {
    try {
      return await db.select().from(tools);
    } catch (error) {
      console.error('Database error in getTools:', error);
      return [];
    }
  }

  async getToolById(id: string): Promise<Tool | undefined> {
    try {
      const result = await db.select().from(tools).where(eq(tools.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.error('Database error in getToolById:', error);
      return undefined;
    }
  }

  async getToolsByCategory(categoryId: string): Promise<Tool[]> {
    try {
      return await db.select().from(tools).where(eq(tools.categoryId, categoryId));
    } catch (error) {
      console.error('Database error in getToolsByCategory:', error);
      return [];
    }
  }

  async createTool(tool: InsertTool): Promise<Tool> {
    try {
      const result = await db.insert(tools).values(tool).returning();
      return result[0];
    } catch (error) {
      console.error('Database error in createTool:', error);
      throw error;
    }
  }

  async updateTool(id: string, tool: Partial<InsertTool>): Promise<Tool | undefined> {
    try {
      const result = await db.update(tools).set(tool).where(eq(tools.id, id)).returning();
      return result[0];
    } catch (error) {
      console.error('Database error in updateTool:', error);
      return undefined;
    }
  }

  async deleteTool(id: string): Promise<boolean> {
    try {
      const result = await db.delete(tools).where(eq(tools.id, id)).returning();
      return result.length > 0;
    } catch (error) {
      console.error('Database error in deleteTool:', error);
      return false;
    }
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<string, Category>;
  private tools: Map<string, Tool>;
  currentUserId: number;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.tools = new Map();
    this.currentUserId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Add sample categories
    const sampleCategories = [
      { id: '1', name: 'Text Generation', icon: 'message-square', description: 'AI tools for generating and processing text' },
      { id: '2', name: 'Image Creation', icon: 'image', description: 'AI-powered image generation and editing tools' },
      { id: '3', name: 'Code Assistant', icon: 'code', description: 'AI tools for coding and development' },
      { id: '4', name: 'Audio & Speech', icon: 'mic', description: 'Voice synthesis and audio processing tools' },
      { id: '5', name: 'Website Making', icon: 'globe', description: 'AI tools for creating and enhancing websites' },
      { id: '6', name: 'Video Creation', icon: 'video', description: 'AI-powered video editing and generation tools' },
      { id: '7', name: 'App Development', icon: 'smartphone', description: 'No-code and AI-powered app building platforms' },
      { id: '8', name: 'Daily Life', icon: 'heart', description: 'AI tools to enhance your everyday life and wellness' }
    ];

    sampleCategories.forEach(cat => {
      const category: Category = {
        ...cat,
        description: cat.description,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.categories.set(cat.id, category);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Category methods
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryById(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const id = crypto.randomUUID();
    const newCategory: Category = { 
      ...category, 
      id, 
      description: category.description ?? null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.categories.set(id, newCategory);
    return newCategory;
  }

  // Tool methods
  async getTools(): Promise<Tool[]> {
    return Array.from(this.tools.values());
  }

  async getToolById(id: string): Promise<Tool | undefined> {
    return this.tools.get(id);
  }

  async getToolsByCategory(categoryId: string): Promise<Tool[]> {
    return Array.from(this.tools.values()).filter(tool => tool.categoryId === categoryId);
  }

  async createTool(tool: InsertTool): Promise<Tool> {
    const id = crypto.randomUUID();
    const newTool: Tool = { 
      ...tool, 
      id,
      categoryId: tool.categoryId ?? null,
      pricingAmount: tool.pricingAmount ?? null,
      videoUrl: tool.videoUrl ?? null,
      rating: tool.rating ?? "0",
      reviewCount: tool.reviewCount ?? 0,
      features: tool.features ?? [],
      screenshots: tool.screenshots ?? [],
      createdAt: new Date(),
      updatedAt: new Date(),
      lastUpdated: new Date()
    };
    this.tools.set(id, newTool);
    return newTool;
  }

  async updateTool(id: string, tool: Partial<InsertTool>): Promise<Tool | undefined> {
    const existing = this.tools.get(id);
    if (!existing) return undefined;
    
    const updated: Tool = { 
      ...existing, 
      ...tool,
      updatedAt: new Date(),
      lastUpdated: new Date()
    };
    this.tools.set(id, updated);
    return updated;
  }

  async deleteTool(id: string): Promise<boolean> {
    return this.tools.delete(id);
  }
}

// Use MemStorage as fallback if database connection fails
export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();