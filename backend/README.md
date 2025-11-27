# Backend (Express + TypeScript) — Instructions

This backend skeleton includes:
- Express + TypeScript
- Simple /api/hotels endpoint returning sample hotels
- /api/upload-url stub for S3 presigned URL (not functional until AWS creds set)

Steps:
1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```

To enable S3 presign, set AWS_REGION, S3_BUCKET and credentials in environment or use IAM role.
