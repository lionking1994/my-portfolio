# Next.js Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Dark/light theme toggle
- Animated components
- Contact form
- Resume download
- Skills and experience sections
- Project showcase

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 22 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel Deployment with Docker and GitHub Actions

This project is configured for automated deployment to Vercel using Docker and GitHub Actions.

#### Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Docker Hub Account** (optional): For Docker image storage

#### Setup Steps

1. **Connect Vercel to GitHub**:
   - Go to your Vercel dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

2. **Get Vercel Tokens and IDs**:
   - Go to Vercel Settings → Tokens
   - Create a new token
   - Get your Organization ID and Project ID from the project settings

3. **Set up GitHub Secrets**:
   Go to your GitHub repository → Settings → Secrets and variables → Actions, and add:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID
   - `DOCKER_USERNAME`: Your Docker Hub username (optional)
   - `DOCKER_PASSWORD`: Your Docker Hub password (optional)

4. **Deploy**:
   - Push to `main` or `master` branch
   - GitHub Actions will automatically build and deploy to Vercel
   - Docker image will be built and pushed to Docker Hub (if configured)

#### Manual Deployment

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker Deployment

Build and run the Docker image:

```bash
# Build the image
docker build -t nextjs-portfolio .

# Run the container
docker run -p 3000:3000 nextjs-portfolio
```

## Project Structure

```
nextjs-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── resume/            # Resume page
├── components/            # React components
│   ├── ui/               # UI components
│   └── *.tsx             # Page sections
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── Dockerfile            # Docker configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build cache

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
