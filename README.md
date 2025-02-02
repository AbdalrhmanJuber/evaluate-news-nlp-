# Evaluate a News Article with Natural Language Processing

This project is part of the Udacity Front End Web Developer Nanodegree. The goal of this project is to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. This tool uses the Aylien API to analyze the sentiment and subjectivity of the text.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [License](#license)

## Project Overview
The project is a web application that allows users to enter a URL of an article or blog. The application then uses the Aylien API to analyze the sentiment and subjectivity of the text from the URL. The results are displayed on the web page.

## Getting Started
To get a local copy up and running, follow these simple steps.

### Prerequisites
- Node.js
- npm (Node Package Manager)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/AbdalrhmanJuber/evaluate-news-nlp-.git
    ```
2. Navigate to the project directory:
    ```sh
    cd evaluate-news-nlp
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root of your project and add your Aylien API credentials:
    ```env
    API_ID=your_aylien_application_id
    API_KEY=your_aylien_application_key
    ```

## Usage
1. Start the development server:
    ```sh
    npm run build-dev
    ```
2. Open your browser and navigate to `http://localhost:8080`.

3. To build the project for production:
    ```sh
    npm run build-prod
    ```

4. To start the server:
    ```sh
    npm run start
    ```

## Testing
To run the tests, use the following command:
```sh
npm run test
