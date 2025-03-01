# Digital Mirror - AI-Powered Personal Background Check

## Overview

Digital Mirror is a full-stack web application that uses AI to help individuals audit their own digital footprint. The app gathers public data about users from across the internet and compiles it into a private report. The focus is on providing users insight into their social media presence, public records, news mentions, sentiment analysis, and potential privacy risks – all through an intuitive dashboard.

By enabling people to "background check" themselves, the tool helps identify what others (like employers or colleagues) might find online. It is designed with privacy, transparency, and compliance in mind, ensuring users only access information about themselves in an ethical manner.

## Features

- **Comprehensive Data Collection**: Gathers information from search engines, social media, public records, news sources, and data breach databases
- **AI-Powered Analysis**: Uses advanced AI models to analyze sentiment, identify privacy risks, and generate insights
- **Interactive Dashboard**: Presents findings in a clean, organized interface with visual indicators
- **Privacy-First Design**: Built with strong privacy protections and ethical considerations
- **Continuous Monitoring**: Subscription options for ongoing alerts about new mentions or privacy concerns

## Technology Stack

- **Frontend**: Next.js with React and Tailwind CSS
- **Backend**: Python with FastAPI
- **AI Models**: Integration with DeepSeek, Grok, OpenAI GPT, and Anthropic Claude
- **Data Retrieval**: Web scraping and API integrations
- **Database**: PostgreSQL for user data and report storage
- **Deployment**: Docker containerization with cloud hosting

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app`: Next.js application pages and components
- `/components`: Reusable UI components
- `/lib`: Utility functions and helpers
- `/hooks`: Custom React hooks
- `/public`: Static assets

## License

[MIT](LICENSE) 