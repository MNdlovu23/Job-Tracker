# Road2Hired

A full-stack job application tracker for graduates. Log applications, track statuses, and stay organised during your job search.

**Live app:** [job-tracker-tau-gules.vercel.app](https://job-tracker-tau-gules.vercel.app)

## Tech Stack

- Node.js, Express
- Supabase (PostgreSQL)
- Firebase Authentication
- Deployed on Vercel

## Features

- Sign up and log in
- Add, edit, and delete job applications
- Track status: Applied, Interview, Rejected, Offer

## Running locally

1. Clone the repo and install dependencies
```bash
   git clone https://github.com/MNdlovu23/Job-Tracker.git
   cd Job-Tracker
   npm install
```

2. Create a `.env` file in the root

```SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
```

3. Start the server
```bash
   npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/jobs?userId=` | Get all jobs for a user |
| POST | `/jobs` | Add a new job |
| PUT | `/jobs/:id` | Update a job |
| DELETE | `/jobs/:id` | Delete a job |