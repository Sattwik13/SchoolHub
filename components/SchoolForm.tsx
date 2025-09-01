'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { schoolService } from '@/lib/schoolService'
import { useToast } from '@/hooks/use-toast'
import { Loader2, Upload, School, MapPin, Phone, Mail } from 'lucide-react'

const schoolSchema = z.object({
  name: z.string().min(2, 'School name must be at least 2 characters'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City name must be at least 2 characters'),
  state: z.string().min(2, 'State name must be at least 2 characters'),
  contact: z.string().regex(/^[0-9]{10}$/, 'Contact must be a valid 10-digit phone number'),
  email_id: z.string().email('Please enter a valid email address'),
  image: z.string().url('Please enter a valid image URL').optional().or(z.literal(''))
})

type SchoolFormData = z.infer<typeof schoolSchema>

export default function SchoolForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SchoolFormData>({
    resolver: zodResolver(schoolSchema)
  })

  const onSubmit = async (data: SchoolFormData) => {
    setIsSubmitting(true)
    
    try {
      console.log('Submitting form data:', data)
      await schoolService.addSchool({
        ...data,
        image: data.image || undefined
      })
      
      toast({
        title: "Success!",
        description: "School has been added successfully.",
      })
      
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to add school. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <School className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New School</h1>
          <p className="text-gray-600">Enter the school details to add to our directory</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-xl font-semibold">School Information</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <School className="w-4 h-4" />
                    School Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter school name"
                    {...register('name')}
                    className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email_id" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email_id"
                    type="email"
                    placeholder="school@example.com"
                    {...register('email_id')}
                    className={errors.email_id ? 'border-red-500 focus:border-red-500' : ''}
                  />
                  {errors.email_id && (
                    <p className="text-sm text-red-600">{errors.email_id.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Address
                </Label>
                <Input
                  id="address"
                  placeholder="Enter full address"
                  {...register('address')}
                  className={errors.address ? 'border-red-500 focus:border-red-500' : ''}
                />
                {errors.address && (
                  <p className="text-sm text-red-600">{errors.address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                    City
                  </Label>
                  <Input
                    id="city"
                    placeholder="Enter city"
                    {...register('city')}
                    className={errors.city ? 'border-red-500 focus:border-red-500' : ''}
                  />
                  {errors.city && (
                    <p className="text-sm text-red-600">{errors.city.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sm font-medium text-gray-700">
                    State
                  </Label>
                  <Input
                    id="state"
                    placeholder="Enter state"
                    {...register('state')}
                    className={errors.state ? 'border-red-500 focus:border-red-500' : ''}
                  />
                  {errors.state && (
                    <p className="text-sm text-red-600">{errors.state.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Number
                  </Label>
                  <Input
                    id="contact"
                    placeholder="1234567890"
                    {...register('contact')}
                    className={errors.contact ? 'border-red-500 focus:border-red-500' : ''}
                  />
                  {errors.contact && (
                    <p className="text-sm text-red-600">{errors.contact.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    School Image URL
                  </Label>
                  <Input
                    id="image"
                    placeholder="https://example.com/school-image.jpg"
                    {...register('image')}
                    className={errors.image ? 'border-red-500 focus:border-red-500' : ''}
                  />
                  {errors.image && (
                    <p className="text-sm text-red-600">{errors.image.message}</p>
                  )}
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Adding School...
                  </>
                ) : (
                  'Add School'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// 'use client'

// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
// import { schoolService } from '@/lib/schoolService'
// import { useToast } from '@/hooks/use-toast'
// import { Loader2, Upload, School, MapPin, Phone, Mail } from 'lucide-react'

// const schoolSchema = z.object({
//   name: z.string().min(2, 'School name must be at least 2 characters'),
//   address: z.string().min(5, 'Address must be at least 5 characters'),
//   city: z.string().min(2, 'City name must be at least 2 characters'),
//   state: z.string().min(2, 'State name must be at least 2 characters'),
//   contact: z.string().regex(/^[0-9]{10}$/, 'Contact must be a valid 10-digit phone number'),
//   email_id: z.string().email('Please enter a valid email address'),
//   image: z.string().url('Please enter a valid image URL').optional().or(z.literal(''))
// })

// type SchoolFormData = z.infer<typeof schoolSchema>

// export default function SchoolForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const { toast } = useToast()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset
//   } = useForm<SchoolFormData>({
//     resolver: zodResolver(schoolSchema)
//   })

//   const onSubmit = async (data: SchoolFormData) => {
//     setIsSubmitting(true)
    
//     try {
//       await schoolService.addSchool({
//         ...data,
//         image: data.image || undefined
//       })
      
//       toast({
//         title: "Success!",
//         description: "School has been added successfully.",
//       })
      
//       reset()
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to add school. Please try again.",
//         variant: "destructive"
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
//           <School className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New School</h1>
//           <p className="text-gray-600">Enter the school details to add to our directory</p>
//         </div>

//         <Card className="shadow-xl border-0">
//           <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
//             <CardTitle className="text-xl font-semibold">School Information</CardTitle>
//           </CardHeader>
//           <CardContent className="p-8">
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                     <School className="w-4 h-4" />
//                     School Name
//                   </Label>
//                   <Input
//                     id="name"
//                     placeholder="Enter school name"
//                     {...register('name')}
//                     className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
//                   />
//                   {errors.name && (
//                     <p className="text-sm text-red-600">{errors.name.message}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email_id" className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                     <Mail className="w-4 h-4" />
//                     Email Address
//                   </Label>
//                   <Input
//                     id="email_id"
//                     type="email"
//                     placeholder="school@example.com"
//                     {...register('email_id')}
//                     className={errors.email_id ? 'border-red-500 focus:border-red-500' : ''}
//                   />
//                   {errors.email_id && (
//                     <p className="text-sm text-red-600">{errors.email_id.message}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="address" className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                   <MapPin className="w-4 h-4" />
//                   Address
//                 </Label>
//                 <Input
//                   id="address"
//                   placeholder="Enter full address"
//                   {...register('address')}
//                   className={errors.address ? 'border-red-500 focus:border-red-500' : ''}
//                 />
//                 {errors.address && (
//                   <p className="text-sm text-red-600">{errors.address.message}</p>
//                 )}
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="city" className="text-sm font-medium text-gray-700">
//                     City
//                   </Label>
//                   <Input
//                     id="city"
//                     placeholder="Enter city"
//                     {...register('city')}
//                     className={errors.city ? 'border-red-500 focus:border-red-500' : ''}
//                   />
//                   {errors.city && (
//                     <p className="text-sm text-red-600">{errors.city.message}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="state" className="text-sm font-medium text-gray-700">
//                     State
//                   </Label>
//                   <Input
//                     id="state"
//                     placeholder="Enter state"
//                     {...register('state')}
//                     className={errors.state ? 'border-red-500 focus:border-red-500' : ''}
//                   />
//                   {errors.state && (
//                     <p className="text-sm text-red-600">{errors.state.message}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="contact" className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                     <Phone className="w-4 h-4" />
//                     Contact Number
//                   </Label>
//                   <Input
//                     id="contact"
//                     placeholder="1234567890"
//                     {...register('contact')}
//                     className={errors.contact ? 'border-red-500 focus:border-red-500' : ''}
//                   />
//                   {errors.contact && (
//                     <p className="text-sm text-red-600">{errors.contact.message}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="image" className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                     <Upload className="w-4 h-4" />
//                     School Image URL
//                   </Label>
//                   <Input
//                     id="image"
//                     placeholder="https://example.com/school-image.jpg"
//                     {...register('image')}
//                     className={errors.image ? 'border-red-500 focus:border-red-500' : ''}
//                   />
//                   {errors.image && (
//                     <p className="text-sm text-red-600">{errors.image.message}</p>
//                   )}
//                 </div>
//               </div>

//               <Button 
//                 type="submit" 
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                     Adding School...
//                   </>
//                 ) : (
//                   'Add School'
//                 )}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }