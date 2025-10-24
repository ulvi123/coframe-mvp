import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// Client-side Supabase client
export const createBrowserClient = () => {
  return createClientComponentClient()
}

// Server-side Supabase client
export const createServerClient = () => {
  const cookieStore = cookies()
  return createServerComponentClient({ cookies: () => cookieStore })
}

// Database types
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          avatar_url: string | null
          created_at: string
        }
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
        }
        Update: {
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          tech_stack: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          tech_stack?: any
        }
        Update: {
          name?: string
          description?: string | null
          tech_stack?: any
        }
      }
      messages: {
        Row: {
          id: string
          project_id: string
          role: 'user' | 'assistant'
          content: string
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          role: 'user' | 'assistant'
          content: string
        }
      }
    }
  }
}