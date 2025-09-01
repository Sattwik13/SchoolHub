'use client'

import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Mail, Phone } from 'lucide-react'
import { School } from '@/lib/supabase'

interface SchoolCardProps {
  school: School
}

export default function SchoolCard({ school }: SchoolCardProps) {
  return (
    <Card className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
      <div className="relative overflow-hidden">
        <img
          src={school.image || 'https://images.pexels.com/photos/159844/school-hall-building-education-159844.jpeg'}
          alt={school.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'https://images.pexels.com/photos/159844/school-hall-building-education-159844.jpeg'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {school.name}
        </h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">{school.address}</p>
              <p>{school.city}, {school.state}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 pt-2">
            <Phone className="w-4 h-4 text-green-500" />
            <span className="font-medium">{school.contact}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-purple-500" />
            <span className="font-medium truncate">{school.email_id}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}