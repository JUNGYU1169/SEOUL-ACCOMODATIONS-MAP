# Frontend (React + Vite) — Instructions

This frontend is a skeleton that includes:
- Vite + React + TypeScript setup
- Tailwind config
- MapPage using react-kakao-maps-sdk (placeholder code)
- Example of fetching /api/hotels from backend

Steps:
1. Set KAKAO_JS_KEY in `frontend/.env` (VITE_KAKAO_JS_KEY)
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```

Notes:
- `react-kakao-maps-sdk` requires a Kakao JS key and domain whitelist.
- This skeleton uses mock API endpoints; update `vite.config.ts` proxy settings to point to your backend in development.
