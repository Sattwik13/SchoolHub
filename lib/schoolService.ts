import { supabase, School } from './supabase'

export const schoolService = {
  async addSchool(schoolData: Omit<School, 'id' | 'created_at' | 'updated_at'>): Promise<School> {
    console.log('Adding school with data:', schoolData)
    
    const { data, error } = await supabase
      .from('schools')
      .insert([schoolData])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      throw new Error(`Failed to add school: ${error.message}`)
    }

    console.log('School added successfully:', data)
    return data
  },

  async getAllSchools(): Promise<School[]> {
    console.log('Fetching all schools...')
    
    const { data, error } = await supabase
      .from('schools')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      throw new Error(`Failed to fetch schools: ${error.message}`)
    }

    console.log('Schools fetched successfully:', data?.length || 0, 'schools')
    return data || []
  },

  async getSchoolById(id: string): Promise<School | null> {
    const { data, error } = await supabase
      .from('schools')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return null
    }

    return data
  }
}



// import { supabase, School } from './supabase'

// export const schoolService = {
//   async addSchool(schoolData: Omit<School, 'id' | 'created_at' | 'updated_at'>): Promise<School> {
//     const { data, error } = await supabase
//       .from('schools')
//       .insert([schoolData])
//       .select()
//       .single()

//     if (error) {
//       throw new Error(`Failed to add school: ${error.message}`)
//     }

//     return data;
//   },

//   async getAllSchools(): Promise<School[]> {
//     const { data, error } = await supabase
//       .from('schools')
//       .select('*')
//       .order('created_at', { ascending: false })

//     if (error) {
//       throw new Error(`Failed to fetch schools: ${error.message}`)
//     }

//     return data || []
//   },

//   async getSchoolById(id: string): Promise<School | null> {
//     const { data, error } = await supabase
//       .from('schools')
//       .select('*')
//       .eq('id', id)
//       .single()

//     if (error) {
//       return null
//     }

//     return data
//   }
// }