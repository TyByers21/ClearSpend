
import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-finance-primary" />
              <span className="text-xl font-bold text-finance-dark">PocketPal</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Secure, intuitive personal finance management for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-finance-dark">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-600 hover:text-finance-primary">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-finance-primary">Pricing</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-finance-primary">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-finance-dark">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="text-gray-600 hover:text-finance-primary">Blog</Link></li>
              <li><Link to="/guides" className="text-gray-600 hover:text-finance-primary">Guides</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-finance-primary">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-finance-dark">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-finance-primary">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-finance-primary">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-finance-primary">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-finance-primary">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} PocketPal. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-finance-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-finance-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
