import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'AI FinOps — AI Spend Intelligence', description: 'Enterprise AI spend visibility and optimization.' }

export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }