
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pricing() {
  // Define pricing tiers
  const tiers = [
    {
      name: "Free",
      id: "free",
      price: { monthly: 0, annually: 0 },
      description: "Essential budgeting tools for individuals just getting started.",
      features: [
        "Core budgeting tools",
        "Manual transaction entry",
        "Basic reporting",
        "Up to 3 budgets",
        "Single user",
      ],
      limitations: [
        "No automatic bank sync",
        "No investment tracking",
        "Limited reports",
        "No bill reminders",
        "No AI insights",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Premium",
      id: "premium",
      price: { monthly: 9.99, annually: 99 },
      description: "Advanced features for comprehensive personal finance management.",
      features: [
        "Everything in Free",
        "Automatic bank sync",
        "Advanced reporting",
        "Unlimited budgets",
        "Investment tracking",
        "Bill reminders",
        "AI-driven insights",
        "CSV/OFX import & export",
        "Email support",
      ],
      limitations: [
        "No multi-user access",
        "No business features",
      ],
      cta: "Start 14-day trial",
      mostPopular: true,
      highlighted: true,
    },
    {
      name: "Business",
      id: "business",
      price: { monthly: 19.99, annually: 199 },
      description: "Powerful tools for small businesses and families.",
      features: [
        "Everything in Premium",
        "Multi-user access (up to 5)",
        "Business expense categorization",
        "Tax reporting",
        "Priority support",
        "Team permission management",
        "Advanced security controls",
        "API access",
      ],
      limitations: [],
      cta: "Start 14-day trial",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-finance-light to-white py-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-finance-dark mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade anytime.
          </p>
          
          <Tabs defaultValue="monthly" className="max-w-sm mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="annually">Annual Billing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="monthly">
              <div className="text-sm text-gray-500 mt-2">
                Pay month-to-month, cancel anytime.
              </div>
            </TabsContent>
            
            <TabsContent value="annually">
              <div className="text-sm text-gray-500 mt-2">
                Pay yearly and save up to 17%.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Pricing Tables */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="monthly"> {/* Add Tabs wrapper here */}
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`rounded-xl shadow-lg overflow-hidden ${
                    tier.highlighted ? 'border-2 border-finance-primary ring-2 ring-finance-primary/20' : 'border border-gray-200'
                  }`}
                >
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-finance-dark mb-2">{tier.name}</h2>
                    <p className="text-gray-600 mb-4 h-12">{tier.description}</p>
                    
                    <TabsContent value="monthly" className="mt-0">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-finance-dark">
                          ${tier.price.monthly}
                        </span>
                        {tier.price.monthly > 0 && (
                          <span className="text-gray-500 ml-2">/month</span>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="annually" className="mt-0">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-finance-dark">
                          ${tier.price.annually}
                        </span>
                        <span className="text-gray-500 ml-2">/year</span>
                      </div>
                      {tier.price.monthly > 0 && (
                        <p className="text-sm text-finance-success mt-1">
                          Save ${Math.round(tier.price.monthly * 12 - tier.price.annually)} per year
                        </p>
                      )}
                    </TabsContent>
                    
                    <Link
                      to={`/signup${tier.id !== "free" ? `?plan=${tier.id}` : ""}`}
                      className="block mt-6"
                    >
                      <Button
                        className={`w-full ${
                          tier.highlighted ? "" : "bg-white text-finance-primary border border-finance-primary hover:bg-finance-light"
                        }`}
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Features */}
                  <div className="bg-gray-50 p-8">
                    <h3 className="font-medium mb-4 text-gray-900">What's included:</h3>
                    <ul className="space-y-4">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-finance-success mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      
                      {tier.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start text-gray-400">
                          <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {tier.mostPopular && (
                    <div className="absolute top-0 right-0 bg-finance-primary text-white px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                      MOST POPULAR
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Tabs>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-finance-dark mb-16">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-finance-dark">Can I change my plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you'll be charged the prorated amount for the remainder of your billing cycle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-finance-dark">How do the free trials work?</h3>
              <p className="text-gray-600">
                Our 14-day free trials give you full access to all features of the plan. No credit card is required for the free plan, but premium trials will need payment info.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-finance-dark">Is my data secure?</h3>
              <p className="text-gray-600">
                Absolutely. We use bank-level encryption to protect your data, and we never sell your information to third parties. You can export or delete your data at any time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-finance-dark">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, and digital payment methods including PayPal and Apple Pay.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-finance-dark">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your paid features until the end of your current billing period.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-finance-dark">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee for annual plans. Monthly plans can be cancelled anytime but are not eligible for partial refunds.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-finance-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still not sure which plan is right for you?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Start with our free plan – no credit card required. Upgrade when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" variant="secondary">
                Get Started For Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
