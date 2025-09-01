import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { School, Plus, List, Users, MapPin, Search, CheckCircle2, MessageSquare, Leaf, FileText } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <School className="w-20 h-20 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">SchoolHub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your comprehensive platform for managing and discovering educational institutions. 
            Add new schools to our directory or explore the schools already available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/add-school">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105">
                <Plus className="w-5 h-5 mr-2" />
                Add New School
              </Button>
            </Link>
            
            <Link href="/schools">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105">
                <List className="w-5 h-5 mr-2" />
                Browse Schools
              </Button>
            </Link>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <Plus className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Schools</h3>
              <p className="text-gray-600">
                Easily add new schools to our directory with detailed information and images.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-600">
                Browse through our comprehensive list of schools with detailed information.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect</h3>
              <p className="text-gray-600">
                Get in touch with schools directly through their contact information.
              </p>
            </CardContent>
          </Card>
        </div> */}

        {/* Why Uniform Application Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Uniform Application?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl">
              <CardContent>
                <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Common Application Form</h3>
                <p className="text-gray-600">Apply to multiple schools from the comfort of your home using one form.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl">
              <CardContent>
                <List className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">One-Stop Dashboard</h3>
                <p className="text-gray-600">Track all your applications in one place with our dashboard.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl">
              <CardContent>
                <Search className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Intuitive Search</h3>
                <p className="text-gray-600">Find the best school for your child based on your preferences.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl">
              <CardContent>
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Verified Information</h3>
                <p className="text-gray-600">Access verified details about each school’s contacts and admission procedure.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl">
              <CardContent>
                <MessageSquare className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Digital Communication</h3>
                <p className="text-gray-600">Communicate with schools digitally and get notified at every step.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl">
              <CardContent>
                <Leaf className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Paper Wastage</h3>
                <p className="text-gray-600">Reduce paper wastage with our completely online process.</p>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Best Schools in Your City Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Best Schools in your City</h2>
          <p className="text-center text-gray-600 mb-12">Choose from a wide variety of schools based on your priorities</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { city: "Lucknow", img: "/cities/lucknow.jpg" },
              { city: "New Delhi", img: "/cities/delhi.jpg" },
              { city: "Gurgaon", img: "/cities/gurgaon.jpg" },
              { city: "Noida", img: "/cities/noida.jpg" },
              { city: "Dehradun", img: "/cities/dehradun.jpg" },
              { city: "Hyderabad", img: "/cities/hyderabad.jpg" },
              { city: "Chennai", img: "/cities/chennai.jpg" },
              { city: "Faridabad", img: "/cities/faridabad.jpg" },
              { city: "Mumbai", img: "/cities/mumbai.jpg" },
              { city: "Kolkata", img: "/cities/kolkata.jpg" },
              { city: "Kanpur", img: "/cities/kanpur.jpeg" },
              { city: "Sitapur", img: "/cities/sitapur.jpg" },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-full h-40">
                  <Image src={item.img} alt={item.city} fill className="object-cover" />
                </div>
                <CardContent className="text-center py-4">
                  <h3 className="font-semibold text-gray-900">Best Schools in {item.city}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Footer Section */}
        <footer className="bg-gradient-to-r from-blue-600 to-indigo-900 text-white rounded-xl py-12 mt-auto px-1">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
              <p className="text-gray-200 text-sm mb-4">
                Get updated about admission forms, deadlines and helpful articles.
              </p>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="rounded-l-lg border-0 border-blue-50 focus:ring-0"
                />
                <Button className="px-2 rounded-xl bg-blue-500 hover:bg-indigo-400">Send</Button>
              </div>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Important Links</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li><Link href="#">Schools in India</Link></li>
                <li><Link href="#">Other Schools in India</Link></li>
                <li><Link href="#">Colleges in India</Link></li>
                <li><Link href="#">Advertise With Us</Link></li>
                <li><Link href="#">Common Admissions</Link></li>
                <li><Link href="#">Edunify India</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms and Conditions</Link></li>
                <li><Link href="#">Refund Policy</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">CGPA Converter</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-300 text-sm mt-10 border-t border-gray-500 pt-6">
            © {new Date().getFullYear()} SchoolHub. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}