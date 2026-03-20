import { pgTable, serial, text, timestamp, boolean, integer, varchar } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 30 }),
  town: varchar("town", { length: 100 }).notNull(),
  propertyType: varchar("property_type", { length: 100 }),
  servicesNeeded: text("services_needed"),
  message: text("message"),
  howHeard: varchar("how_heard", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const caretakers = pgTable("caretakers", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 200 }).unique().notNull(),
  name: varchar("name", { length: 200 }).notNull(),
  tagline: varchar("tagline", { length: 300 }),
  description: text("description"),
  townsServed: text("towns_served"),  // JSON array stored as text
  services: text("services"),          // JSON array stored as text
  yearFounded: integer("year_founded"),
  bondedInsured: boolean("bonded_insured").default(false),
  acceptingClients: boolean("accepting_clients").default(true),
  differentiator: varchar("differentiator", { length: 300 }),
  phone: varchar("phone", { length: 30 }),
  email: varchar("email", { length: 255 }),
  website: varchar("website", { length: 500 }),
  imageUrl: varchar("image_url", { length: 500 }),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 300 }).unique().notNull(),
  title: varchar("title", { length: 500 }).notNull(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  author: varchar("author", { length: 200 }),
  imageUrl: varchar("image_url", { length: 500 }),
  published: boolean("published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
