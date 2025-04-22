
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  BarChart3, 
  PieChart, 
  CreditCard, 
  TrendingUp, 
  Shield, 
  BellRing,
  Smartphone,
  Layers,
  BarChart2,
  Lock
} from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-finance-light to-white py-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-finance-dark mb-6">Powerful Features for Your Financial Success</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover all the tools you need to manage your money effectively, track expenses, plan budgets, and build wealth over time.
          </p>
          <Link to="/signup">
            <Button size="lg">
              Get Started For Free
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Main Features */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-finance-dark mb-6">Comprehensive Budgeting</h2>
              <p className="text-gray-600 mb-6">
                Create and manage multiple budgets with custom categories tailored to your specific needs. Track your spending in real-time and receive alerts when you're approaching your limits.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-finance-light p-1 rounded-full mr-3 mt-1">
                    <BarChart3 className="h-5 w-5 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Customizable Categories</h3>
                    <p className="text-gray-600">Create your own spending categories or use our recommended ones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-light p-1 rounded-full mr-3 mt-1">
                    <PieChart className="h-5 w-5 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Visual Budget Breakdowns</h3>
                    <p className="text-gray-600">See where your money goes with intuitive charts and graphs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-light p-1 rounded-full mr-3 mt-1">
                    <BellRing className="h-5 w-5 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Budget Alerts</h3>
                    <p className="text-gray-600">Get notified when you're approaching or exceeding budget limits</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-4 transform rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
                alt="Budget tracking interface" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-white rounded-xl shadow-xl p-4 transform -rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Transaction tracking" 
                className="rounded-lg shadow-lg" 
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-finance-dark mb-6">Smart Transaction Management</h2>
              <p className="text-gray-600 mb-6">
                Effortlessly track and manage all your transactions with powerful categorization tools and detailed insights into your spending patterns.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-finance-light p-1 rounded-full mr-3 mt-1">
                    <CreditCard className="h-5 w-5 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Multiple Account Support</h3>
                    <p className="text-gray-600">Track checking, savings, credit cards, and more in one place</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-light p-1 rounded-full mr-3 mt-1">
                    <Layers className="h-5 w-5 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Smart Categorization</h3>
                    <p className="text-gray-600">AI-powered automatic categorization of your transactions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-light p-1 rounded-full mr-3 mt-1">
                    <BarChart2 className="h-5 w-5 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Spending Analytics</h3>
                    <p className="text-gray-600">Detailed insights into your spending habits and trends</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-finance-dark mb-6">Investment Portfolio Tracking</h2>
              <p className="text-gray-600 mb-6">
                Monitor your investments in real-time, analyze performance, and make informed decisions to grow your wealth over time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-finance-light p-1 rounded-full mr-3 mt-1">
                    <TrendingUp className="h-5 w-5 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Real-time Market Data</h3>
                    <p className="text-gray-600">Stay updated with the latest prices and market trends</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-light p-1 rounded-full mr-3 mt-1">
                    <PieChart className="h-5 w-5 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Portfolio Diversification Analysis</h3>
                    <p className="text-gray-600">Visualize asset allocation and sector exposure</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-finance-light p-1 rounded-full mr-3 mt-1">
                    <BarChart3 className="h-5 w-5 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Performance Tracking</h3>
                    <p className="text-gray-600">Monitor returns, compare benchmarks, and track gains/losses</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-4 transform rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Investment tracking" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-finance-dark mb-16">More Powerful Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-finance-light inline-block p-3 rounded-lg mb-4">
                <Smartphone className="h-6 w-6 text-finance-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cross-Device Sync</h3>
              <p className="text-gray-600">
                Access your financial data from any device with real-time synchronization. Stay on top of your finances whether you're at home or on the go.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-finance-light inline-block p-3 rounded-lg mb-4">
                <Lock className="h-6 w-6 text-finance-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bank-Level Security</h3>
              <p className="text-gray-600">
                Your data is protected with end-to-end encryption, multi-factor authentication, and secure data storage practices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-finance-light inline-block p-3 rounded-lg mb-4">
                <Shield className="h-6 w-6 text-finance-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Privacy First</h3>
              <p className="text-gray-600">
                We never sell your data to third parties. You have complete control over your information with easy export and deletion options.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-finance-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take control of your finances?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Start for free today and discover why thousands of users trust PocketPal for their financial management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Get Started For Free
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
