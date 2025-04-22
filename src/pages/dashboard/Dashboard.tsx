
import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Plus,
  CreditCard,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  Cell, 
  Legend, 
  Line, 
  LineChart, 
  Pie, 
  PieChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis
} from "recharts";
import { motion } from "framer-motion";

// Mock data for dashboard
const accounts = [
  { name: "Checking", balance: 2549.23, type: "bank", change: 5.2 },
  { name: "Savings", balance: 15820.55, type: "bank", change: 1.8 },
  { name: "Investment", balance: 42650.73, type: "investment", change: -2.3 },
  { name: "Credit Card", balance: -1250.45, type: "credit", change: null },
];

const transactions = [
  { 
    id: 1, 
    description: "Amazon.com", 
    amount: -59.99, 
    date: "Today", 
    category: "Shopping",
    icon: <CreditCard className="h-4 w-4 text-gray-400" />
  },
  { 
    id: 2, 
    description: "Starbucks", 
    amount: -4.85, 
    date: "Today", 
    category: "Food & Dining",
    icon: <CreditCard className="h-4 w-4 text-gray-400" />
  },
  { 
    id: 3, 
    description: "Paycheck", 
    amount: 2400.00, 
    date: "Yesterday", 
    category: "Income",
    icon: <DollarSign className="h-4 w-4 text-green-400" />
  },
  { 
    id: 4, 
    description: "Netflix", 
    amount: -13.99, 
    date: "Jul 14", 
    category: "Entertainment",
    icon: <CreditCard className="h-4 w-4 text-gray-400" />
  },
  { 
    id: 5, 
    description: "Transfer to Savings", 
    amount: -500.00, 
    date: "Jul 13", 
    category: "Transfer",
    icon: <ArrowRight className="h-4 w-4 text-gray-400" />
  },
];

const budgets = [
  { category: "Food & Dining", spent: 420, total: 600, color: "rgb(59, 130, 246)" },
  { category: "Shopping", spent: 250, total: 300, color: "rgb(139, 92, 246)" },
  { category: "Entertainment", spent: 180, total: 200, color: "rgb(245, 158, 11)" },
  { category: "Transportation", spent: 120, total: 400, color: "rgb(34, 197, 94)" },
];

const upcomingBills = [
  { name: "Rent", amount: 1200, dueDate: "Jul 28", daysLeft: 6 },
  { name: "Electricity", amount: 85, dueDate: "Aug 03", daysLeft: 12 },
  { name: "Phone Bill", amount: 65, dueDate: "Aug 05", daysLeft: 14 },
];

// Chart data
const monthlySpendingData = [
  { name: 'Jan', amount: 2400 },
  { name: 'Feb', amount: 1398 },
  { name: 'Mar', amount: 9800 },
  { name: 'Apr', amount: 3908 },
  { name: 'May', amount: 4800 },
  { name: 'Jun', amount: 3800 },
  { name: 'Jul', amount: 4300 },
];

const categorySpendingData = [
  { name: 'Food', value: 400 },
  { name: 'Housing', value: 1200 },
  { name: 'Transport', value: 300 },
  { name: 'Entertainment', value: 200 },
  { name: 'Other', value: 278 },
];

const incomeVsExpenseData = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 1398 },
  { name: 'Mar', income: 2000, expenses: 9800 },
  { name: 'Apr', income: 2780, expenses: 3908 },
  { name: 'May', income: 1890, expenses: 4800 },
  { name: 'Jun', income: 2390, expenses: 3800 },
  { name: 'Jul', income: 3490, expenses: 4300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("month");

  // Calculate total balances
  const totalAssets = accounts.reduce(
    (total, account) => total + (account.balance > 0 ? account.balance : 0),
    0
  );

  const totalDebts = accounts.reduce(
    (total, account) => total + (account.balance < 0 ? Math.abs(account.balance) : 0),
    0
  );

  const netWorth = totalAssets - totalDebts;

  return (
    <DashboardLayout title="Dashboard" description="Welcome back! Here's your financial overview.">
      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Card className="bg-gradient-to-r from-blue-900 to-blue-800 border-blue-700 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-blue-600/10 rounded-md backdrop-blur-sm"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
              <CardTitle className="text-sm font-medium text-blue-100">Net Worth</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-200" />
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl font-bold text-white">${netWorth.toLocaleString()}</div>
              <div className="flex items-center mt-1">
                <ArrowUpRight className="h-4 w-4 mr-1 text-green-400" />
                <span className="text-xs text-green-400">2.5%</span>
                <span className="text-xs text-blue-200 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <Card className="bg-gradient-to-r from-indigo-900 to-indigo-800 border-indigo-700 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-indigo-600/10 rounded-md backdrop-blur-sm"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
              <CardTitle className="text-sm font-medium text-indigo-100">Total Assets</CardTitle>
              <Wallet className="h-4 w-4 text-indigo-200" />
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl font-bold text-white">${totalAssets.toLocaleString()}</div>
              <div className="flex items-center mt-1">
                <ArrowUpRight className="h-4 w-4 mr-1 text-green-400" />
                <span className="text-xs text-green-400">3.2%</span>
                <span className="text-xs text-indigo-200 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <Card className="bg-gradient-to-r from-violet-900 to-violet-800 border-violet-700 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-violet-600/10 rounded-md backdrop-blur-sm"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
              <CardTitle className="text-sm font-medium text-violet-100">Total Debts</CardTitle>
              <CreditCard className="h-4 w-4 text-violet-200" />
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl font-bold text-white">${totalDebts.toLocaleString()}</div>
              <div className="flex items-center mt-1">
                <ArrowDownRight className="h-4 w-4 mr-1 text-red-400" />
                <span className="text-xs text-red-400">0.8%</span>
                <span className="text-xs text-violet-200 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <Card className="bg-gradient-to-r from-cyan-900 to-cyan-800 border-cyan-700 shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-cyan-600/10 rounded-md backdrop-blur-sm"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
              <CardTitle className="text-sm font-medium text-cyan-100">Monthly Cashflow</CardTitle>
              <ArrowRight className="h-4 w-4 text-cyan-200" />
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl font-bold text-white">$1,250.55</div>
              <div className="flex items-center mt-1">
                <ArrowUpRight className="h-4 w-4 mr-1 text-green-400" />
                <span className="text-xs text-green-400">5.3%</span>
                <span className="text-xs text-cyan-200 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Monthly Spending Chart */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-white">Monthly Spending</CardTitle>
                <Tabs defaultValue="month" className="w-[160px]">
                  <TabsList className="bg-slate-600">
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full text-xs">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={monthlySpendingData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-slate-800 border border-slate-700 p-2 rounded shadow-lg">
                                <p className="text-gray-200">{`$${payload[0].value}`}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorAmount)"
                        activeDot={{ r: 6 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Income vs. Expenses */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-white">Income vs. Expenses</CardTitle>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  View Details <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full text-xs">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={incomeVsExpenseData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-slate-800 border border-slate-700 p-3 rounded shadow-lg">
                                <p className="text-green-400">{`Income: $${payload[0].value}`}</p>
                                <p className="text-red-400">{`Expenses: $${payload[1].value}`}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend />
                      <Bar dataKey="income" fill="#22c55e" />
                      <Bar dataKey="expenses" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Accounts Summary */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-white">Accounts</CardTitle>
                <Button variant="outline" size="sm" className="bg-slate-700 border-slate-600 text-gray-300 hover:text-white">
                  <Plus className="h-4 w-4 mr-1" /> Add Account
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accounts.map((account, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                          <Wallet className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{account.name}</h3>
                          <p className="text-xs text-gray-400 capitalize">{account.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${account.balance < 0 ? 'text-red-400' : 'text-white'}`}>
                          ${Math.abs(account.balance).toLocaleString()}
                        </div>
                        {account.change !== null && (
                          <div className="flex items-center justify-end text-xs mt-1">
                            {account.change >= 0 ? (
                              <>
                                <ArrowUpRight className="h-3 w-3 mr-1 text-green-400" />
                                <span className="text-green-400">{account.change}%</span>
                              </>
                            ) : (
                              <>
                                <ArrowDownRight className="h-3 w-3 mr-1 text-red-400" />
                                <span className="text-red-400">{Math.abs(account.change)}%</span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={7}
          >
            <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-white">Recent Transactions</CardTitle>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg hover:bg-slate-800/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center mr-3">
                          {transaction.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{transaction.description}</h3>
                          <div className="flex items-center text-xs text-gray-400">
                            <span>{transaction.date}</span>
                            <span className="mx-2">•</span>
                            <span>{transaction.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`font-medium ${transaction.amount < 0 ? 'text-white' : 'text-green-400'}`}>
                        {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toLocaleString()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="space-y-6">
          {/* Spending by Category */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={8}
          >
            <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-white">Spending by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categorySpendingData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categorySpendingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-slate-800 border border-slate-700 p-2 rounded shadow-lg">
                                <p className="text-gray-200">{`${payload[0].name}: $${payload[0].value}`}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Budget Overview */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={9}
          >
            <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-white">Budgets</CardTitle>
                <Tabs defaultValue="month" className="w-[160px]">
                  <TabsList className="bg-slate-600">
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {budgets.map((budget, index) => (
                    <motion.div 
                      key={index} 
                      className="space-y-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">{budget.category}</span>
                        <span className="font-medium text-white">
                          ${budget.spent} / ${budget.total}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full"
                          style={{ backgroundColor: budget.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${(budget.spent / budget.total) * 100}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                      <div className="flex justify-end text-xs text-gray-400">
                        {Math.round((budget.spent / budget.total) * 100)}% used
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button className="w-full mt-4 border-slate-600 text-gray-300 hover:text-white bg-slate-700 hover:bg-slate-600" variant="outline">
                  <Plus className="h-4 w-4 mr-1" /> Create New Budget
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Bills */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={10}
          >
            <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-700 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-white">Upcoming Bills</CardTitle>
                <Badge variant="outline" className="border-amber-600/30 bg-amber-500/10 text-amber-400">
                  {upcomingBills.length} due soon
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBills.map((bill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center mr-3">
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{bill.name}</h3>
                          <p className="text-xs text-gray-400">Due {bill.dueDate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white">${bill.amount}</div>
                        <Badge variant="outline" 
                          className={bill.daysLeft <= 7 
                            ? "border-red-600/30 bg-red-500/10 text-red-400" 
                            : "border-slate-600 bg-slate-700"
                          }
                        >
                          {bill.daysLeft} days left
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                  <Button className="w-full border-slate-600 text-gray-300 hover:text-white bg-slate-700 hover:bg-slate-600" variant="outline">
                    <Plus className="h-4 w-4 mr-1" /> Add Bill
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
