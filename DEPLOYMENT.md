# Deployment Guide

This project uses a CI/CD pipeline that builds Docker images and deploys them to Vercel.

## Workflow Overview

1. **GitHub Actions**: Builds and pushes Docker image to Docker Hub
2. **Vercel**: Pulls the Docker image and deploys it to production

## Setup Requirements

### GitHub Secrets

Add these secrets to your GitHub repository:

- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password/token
- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### How to Get Vercel Credentials

1. **VERCEL_TOKEN**:
   - Go to https://vercel.com/account/tokens
   - Create a new token

2. **VERCEL_ORG_ID** and **VERCEL_PROJECT_ID**:
   - Run `vercel link` in your project directory
   - Check the `.vercel/project.json` file

## Deployment Process

1. Push code to the `main` branch
2. GitHub Actions automatically:
   - Builds Docker image
   - Pushes to Docker Hub with tags
   - Triggers Vercel deployment
3. Vercel pulls the Docker image and deploys

## Docker Image Tags

The workflow creates multiple tags:
- `latest`: Latest build from main branch
- `main-{sha}`: Specific commit SHA
- `{version}`: Semantic version tags (if using git tags)

## Manual Deployment

To manually trigger deployment:

```bash
# Push to trigger automatic deployment
git push origin main

# Or manually trigger the workflow from GitHub Actions tab
```

## Troubleshooting

### Docker Build Issues
- Check Dockerfile syntax
- Ensure all dependencies are properly installed
- Verify Next.js standalone output is configured

### Vercel Deployment Issues
- Verify Vercel secrets are correctly set
- Check Vercel project configuration
- Ensure Docker image is accessible from Vercel

### Environment Variables
- Set any required environment variables in Vercel dashboard
- Ensure Docker image can access these variables 