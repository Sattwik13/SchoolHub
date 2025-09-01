'use client'

import { useState, useEffect } from 'react'
import { schoolService } from '@/lib/schoolService'
import { School } from '@/lib/supabase'
import SchoolCard from './SchoolCard'
import { Loader2, School as SchoolIcon, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function SchoolGrid() {
  const [schools, setSchools] = useState<School[]>([])
  const [filteredSchools, setFilteredSchools] = useState<School[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchSchools()
  }, [])

  useEffect(() => {
    if (searchTerm) {
      const filtered = schools.filter(school =>
        school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.state.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredSchools(filtered)
    } else {
      setFilteredSchools(schools)
    }
  }, [searchTerm, schools])

  const fetchSchools = async () => {
    try {
      console.log('Fetching schools from service...')
      const data = await schoolService.getAllSchools()
      console.log('Received schools data:', data)
      setSchools(data)
      setFilteredSchools(data)
    } catch (error) {
      console.error('Error fetching schools:', error)
      // Show user-friendly error message
      if (error instanceof Error && error.message.includes('Missing Supabase environment variables')) {
        console.error('Please configure your Supabase environment variables')
      }
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-lg text-gray-600">Loading schools...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <SchoolIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">School Directory</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and explore schools in your area. Find the perfect educational institution for your needs.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search schools by name, city, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {filteredSchools.length === 0 ? (
          <div className="text-center py-16">
            <SchoolIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {searchTerm ? 'No schools found' : 'No schools added yet'}
            </h3>
            <p className="text-gray-500">
              {searchTerm 
                ? 'Try adjusting your search terms' 
                : 'Add some schools to see them here'
              }
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredSchools.length} of {schools.length} schools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSchools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}


// 'use client'

// import { useState, useEffect } from 'react'
// import { schoolService } from '@/lib/schoolService'
// import { School } from '@/lib/supabase'
// import SchoolCard from './SchoolCard'
// import { Loader2, School as SchoolIcon, Search } from 'lucide-react'
// import { Input } from '@/components/ui/input'

// export default function SchoolGrid() {
//   const [schools, setSchools] = useState<School[]>([])
//   const [filteredSchools, setFilteredSchools] = useState<School[]>([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     fetchSchools()
//   }, [])

//   useEffect(() => {
//     if (searchTerm) {
//       const filtered = schools.filter(school =>
//         school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         school.state.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//       setFilteredSchools(filtered)
//     } else {
//       setFilteredSchools(schools)
//     }
//   }, [searchTerm, schools])

//   const fetchSchools = async () => {
//     try {
//       const data = await schoolService.getAllSchools()
//       setSchools(data)
//       setFilteredSchools(data)
//     } catch (error) {
//       console.error('Error fetching schools:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
//           <p className="text-lg text-gray-600">Loading schools...</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center mb-12">
//           <SchoolIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">School Directory</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover and explore schools in your area. Find the perfect educational institution for your needs.
//           </p>
//         </div>

//         <div className="max-w-md mx-auto mb-8">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <Input
//               type="text"
//               placeholder="Search schools by name, city, or state..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {filteredSchools.length === 0 ? (
//           <div className="text-center py-16">
//             <SchoolIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-600 mb-2">
//               {searchTerm ? 'No schools found' : 'No schools added yet'}
//             </h3>
//             <p className="text-gray-500">
//               {searchTerm 
//                 ? 'Try adjusting your search terms' 
//                 : 'Add some schools to see them here'
//               }
//             </p>
//           </div>
//         ) : (
//           <>
//             <div className="mb-6">
//               <p className="text-gray-600">
//                 Showing {filteredSchools.length} of {schools.length} schools
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredSchools.map((school) => (
//                 <SchoolCard key={school.id} school={school} />
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }