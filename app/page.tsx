// Imports
import { ArrowRight, Calendar, Smile, Shield } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// FeatureCard Props Type Definition
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

// TestimonialCard Props Type Definition
interface TestimonialCardProps {
  name: string;
  quote: string;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <div className="mb-4 text-sm font-medium">Innovative Dental Care</div>
          <h1 className="mb-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 lg:text-6xl">
            Your Smile, Our Passion
          </h1>
          <p className="mb-8 text-xl text-gray-600 max-w-2xl">
            Experience modern dental care with Dentelo cutting-edge technology and expert team. Your smile deserves the best.
          </p>


          <Button className="rounded-full" variant="contained">
            <Link href="/signup" aria-label="Get Started">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="w-screen">
          <Image
            src="/img.jpg"
            alt="Happy patient with a beautiful smile"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Smile className="h-10 w-10 text-purple-500" />}
            title="Preventive Care"
            description="Regular check-ups and cleanings to maintain your oral health"
            image="/img1.png"
          />
          <FeatureCard
            icon={<Smile className="h-10 w-10 text-blue-500" />}
            title="Cosmetic Dentistry"
            description="Enhance your smile with our advanced cosmetic treatments"
            image="/img2.png"
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-green-500" />}
            title="Restorative Procedures"
            description="State-of-the-art restorative treatments for damaged teeth"
            image="/img3.png"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Patients Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Sarah Johnson"
              quote="Dentelo transformed my smile and boosted my confidence. The team is professional and caring."
            />
            <TestimonialCard
              name="Michael Chen"
              quote="I have never felt more at ease at a dental office. The staff is friendly and the facilities are top-notch."
            />
            <TestimonialCard
              name="Emily Rodriguez"
              quote="From routine cleanings to complex procedures, Dentelo provides exceptional care every time."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready for a Brighter Smile?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Join thousands of satisfied patients and experience the Dentelo difference today.
          </p>
          <Button variant="contained" size="large" className="rounded-full">
            <Link href="/signup" aria-label="Book an Appointment">
              Book an Appointment <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

// FeatureCard Component with Props Validation
function FeatureCard({ icon, title, description, image }: FeatureCardProps) {
  return (
    <Card className="transition-all justify-center align-middle duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl text-center">{title}</h3>
      </CardHeader>
      <CardContent className="flex flex-col align-middle items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={200}
          height={150}
          className="mb-4 rounded-lg"
        />
        <p className="text-center">{description}</p>
      </CardContent>
      <CardActions className="flex justify-center">
        <Button variant="outlined">Learn More</Button>
      </CardActions>
    </Card>
  );
}

// TestimonialCard Component with Props Validation
function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <h3 className="text-lg">{name}</h3>
      </CardHeader>
      <CardContent>
        <p className="italic text-gray-600">"{quote}"</p>
      </CardContent>
    </Card>
  );
}
