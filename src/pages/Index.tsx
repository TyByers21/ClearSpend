
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Shield, 
  BarChart3, 
  PieChart, 
  CreditCard, 
  TrendingUp, 
  BellRing, 
  Check,
  Sparkles
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart spending, <br />
                <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                  clearer future
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Take control of your finances with AI-powered insights, automated expense tracking, and real-time budget management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600"
                  asChild
                >
                  <Link to="/signup">Start For Free</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/features">See How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/fdd35e87-d2ac-4918-af2b-dd131e7247bb.png"
                  alt="Mobile app interface" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full filter blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need to manage your money</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to give you clarity and control over your finances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 inline-block p-3 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your finances in your pocket
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Access your financial dashboard anytime, anywhere. Track expenses, monitor budgets, and make informed decisions on the go.
              </p>
              <div className="space-y-6">
                {mobileFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-teal-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/lovable-uploads/8ac7f09d-1589-4715-87ea-25cef0df3be7.png"
                  alt="Mobile app screens" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-lg filter blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-finance-dark mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. Start free and upgrade anytime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-gray-500">Free</h3>
                <div className="mt-3">
                  <span className="text-4xl font-bold text-finance-dark">$0</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Core budgeting tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Manual transaction entry</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Basic reporting</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Up to 3 budgets</span>
                </li>
              </ul>
              
              <Link to="/signup" className="block">
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
            
            {/* Premium Tier */}
            <div className="bg-white rounded-xl shadow-xl border-2 border-finance-primary p-8 relative lg:-mt-4">
              <div className="absolute top-0 right-0 bg-finance-primary text-white px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-gray-500">Premium</h3>
                <div className="mt-3">
                  <span className="text-4xl font-bold text-finance-dark">$9.99</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Billed monthly or $99/year</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Automatic bank sync</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Advanced reporting</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Unlimited budgets</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Investment tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Bill reminders</span>
                </li>
                <li className="flex items-center">
                  <Sparkles className="h-5 w-5 text-finance-warning mr-2" />
                  <span>AI-driven insights</span>
                </li>
              </ul>
              
              <Link to="/signup?plan=premium" className="block">
                <Button className="w-full">
                  Start 14-day free trial
                </Button>
              </Link>
            </div>
            
            {/* Business Tier */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-gray-500">Business</h3>
                <div className="mt-3">
                  <span className="text-4xl font-bold text-finance-dark">$19.99</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Billed monthly or $199/year</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Multi-user access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Business expense categorization</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Tax reporting</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-finance-success mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
              
              <Link to="/signup?plan=business" className="block">
                <Button variant="outline" className="w-full">
                  Start 14-day free trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-finance-dark mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our users are saying about how PocketPal has transformed their financial lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "PocketPal has completely changed how I manage my finances. I can finally see where my money is going and make better decisions."
              </p>
              <div className="flex items-center">
                <div className="font-medium">
                  <p className="text-finance-dark">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">Marketing Specialist</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The investment tracking feature alone has saved me thousands. I can finally see my entire financial picture in one place."
              </p>
              <div className="flex items-center">
                <div className="font-medium">
                  <p className="text-finance-dark">David Chen</p>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a small business owner, the Business plan has been a game-changer for separating personal and business finances."
              </p>
              <div className="flex items-center">
                <div className="font-medium">
                  <p className="text-finance-dark">Maria Rodriguez</p>
                  <p className="text-gray-500 text-sm">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-finance-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take control of your finances?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of users who have transformed their financial lives with PocketPal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Get Started For Free
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

const features = [
  {
    icon: <BarChart3 className="h-6 w-6 text-teal-500" />,
    title: "Smart Budgeting",
    description: "Create and manage multiple budgets with AI-powered insights and automated categorization."
  },
  {
    icon: <CreditCard className="h-6 w-6 text-teal-500" />,
    title: "Expense Tracking",
    description: "Automatically categorize transactions and monitor your spending patterns."
  },
  {
    icon: <PieChart className="h-6 w-6 text-teal-500" />,
    title: "Financial Reports",
    description: "Generate visual reports to understand your financial health at a glance."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-teal-500" />,
    title: "Investment Tracking",
    description: "Monitor your investment portfolio and analyze performance over time."
  },
  {
    icon: <BellRing className="h-6 w-6 text-teal-500" />,
    title: "Bill Reminders",
    description: "Never miss a payment with customizable bill reminders and notifications."
  },
  {
    icon: <Shield className="h-6 w-6 text-teal-500" />,
    title: "Bank-Level Security",
    description: "Your data is protected with end-to-end encryption and multi-factor authentication."
  }
];

const mobileFeatures = [
  "Real-time transaction tracking",
  "Instant notifications for purchases",
  "Budget alerts and reminders",
  "Secure biometric authentication",
  "Offline access to your data"
];
