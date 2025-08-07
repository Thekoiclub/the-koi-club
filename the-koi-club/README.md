# The Koi Club (MVP Starter)

This is a minimal, upload-ready starter for The Koi Club. It includes:
- Vite + React + Tailwind
- Basic routes (Home, Water, Parasites, Cart, Login)
- Supabase client placeholder
- Sample parasite data and placeholder images

## Setup

1) Install deps:
```bash
npm install
```

2) Add environment variables (Replit → Secrets or a local .env):
```
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxx
VITE_ONESIGNAL_APP_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

3) Run dev server:
```bash
npm run dev
```

## Notes
- This is a **starter**; swap placeholders and wire real logic (Stripe checkout page, Supabase tables, OneSignal) as needed.
