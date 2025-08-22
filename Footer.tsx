'use client'

import { useState } from 'react'

interface FormState {
  email: string
  status: 'idle' | 'success' | 'error'
  message: string
}

export default function Footer() {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    status: 'idle',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formState.email) {
      setFormState({
        ...formState,
        status: 'error',
        message: 'Email is required'
      })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setFormState({
        ...formState,
        status: 'error',
        message: 'Please enter a valid email address'
      })
      return
    }

    setFormState({
      email: '',
      status: 'success',
      message: 'Successfully subscribed to our newsletter!'
    })

    setTimeout(() => {
      setFormState(prev => ({ ...prev, status: 'idle', message: '' }))
    }, 3000)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      email: e.target.value,
      status: 'idle',
      message: ''
    })
  }

  return (
    <footer className="bg-[#0B0F12] text-white/90">
      {/* Disclaimer Strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
          <p className="text-sm text-white/60">
            This site is operated by Landshare LLC, which is not a registered broker-dealer or investment advisor.
          </p>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5 lg:gap-x-12 xl:grid-cols-[repeat(4,minmax(0,1fr))_minmax(18rem,28rem)]">
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  BSC Scan
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  Github
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Token Trackers */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Token Trackers</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  CoinGecko
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  DexTools
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  DappRadar
                </a>
              </li>
            </ul>
          </div>

          {/* Exchanges */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Exchanges</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  PancakeSwap
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  Gate.io
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  MEXC
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  BitMart
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 opacity-80 hover:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0B0F12] rounded">
                  BingX
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-base font-semibold mb-2">Our News Letter</h3>
            <p className="text-sm opacity-80 mb-4">Get the latest info and enjoy the benefits</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 md:flex-col lg:flex-row">
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-input"
                  type="email"
                  value={formState.email}
                  onChange={handleEmailChange}
                  placeholder="Enter Email Address"
                  className="flex-1 min-w-0 px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-700 text-white text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0B0F12] min-w-[44px]"
                  aria-label="Subscribe to newsletter"
                >
                  →
                </button>
              </div>
              
              <div aria-live="polite" className="min-h-[1.25rem]">
                {formState.status === 'success' && (
                  <p className="text-sm text-emerald-400">{formState.message}</p>
                )}
                {formState.status === 'error' && (
                  <p className="text-sm text-red-400">{formState.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Social Icons */}
            <div className="flex gap-4">
              <button className="p-2 rounded-md hover:bg-white/5 focus:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <span className="sr-only">Discord</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.191.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </button>
              
              <button className="p-2 rounded-md hover:bg-white/5 focus:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <span className="sr-only">Telegram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </button>

              <button className="p-2 rounded-md hover:bg-white/5 focus:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>

              <button className="p-2 rounded-md hover:bg-white/5 focus:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>

              <button className="p-2 rounded-md hover:bg-white/5 focus:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <span className="sr-only">Email</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
            </div>

            {/* Copyright */}
            <p className="text-sm text-white/60">
              © 2025 Landshare LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}