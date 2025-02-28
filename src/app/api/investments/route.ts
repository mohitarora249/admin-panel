import { NextResponse } from 'next/server';
import type { InvestmentData } from '@/types/api';

export async function GET() {
  const investments: InvestmentData[] = [
    {
      id: "inv_1",
      name: "Apple Inc.",
      type: "Stock",
      symbol: "AAPL",
      shares: 100,
      purchasePrice: 150.25,
      currentPrice: 175.50,
      purchaseDate: "2023-06-15T10:30:00Z",
      lastUpdated: "2024-03-15T10:30:00Z",
      performance: 16.81,
      value: 17550.00
    },
    {
      id: "inv_2",
      name: "Vanguard S&P 500 ETF",
      type: "ETF",
      symbol: "VOO",
      shares: 50,
      purchasePrice: 350.75,
      currentPrice: 380.25,
      purchaseDate: "2023-08-20T14:20:00Z",
      lastUpdated: "2024-03-15T10:30:00Z",
      performance: 8.41,
      value: 19012.50
    },
    {
      id: "inv_3",
      name: "Bitcoin",
      type: "Crypto",
      symbol: "BTC",
      shares: 1.5,
      purchasePrice: 35000.00,
      currentPrice: 65000.00,
      purchaseDate: "2023-11-01T09:15:00Z",
      lastUpdated: "2024-03-15T10:30:00Z",
      performance: 85.71,
      value: 97500.00
    },
    {
      id: "inv_4",
      name: "Fidelity Growth Fund",
      type: "Mutual Fund",
      symbol: "FDGRX",
      shares: 200,
      purchasePrice: 75.50,
      currentPrice: 82.25,
      purchaseDate: "2023-07-10T11:45:00Z",
      lastUpdated: "2024-03-15T10:30:00Z",
      performance: 8.94,
      value: 16450.00
    },
    {
      id: "inv_5",
      name: "US Treasury Bond 2025",
      type: "Bond",
      symbol: "T-2025",
      shares: 100,
      purchasePrice: 1000.00,
      currentPrice: 1025.00,
      purchaseDate: "2023-12-01T15:30:00Z",
      lastUpdated: "2024-03-15T10:30:00Z",
      performance: 2.50,
      value: 102500.00
    }
  ];

  return NextResponse.json(investments);
} 