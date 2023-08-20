# flipkart_prefinal
# Re.com - Flipkart Grid 5.0

## Project Overview

This project is a submission for the Flipkart Grid 5.0 Hackathon, focused on developing a personalized product recommendation system. The project involves the utilization of various recommendation techniques and technologies to offer users tailored shopping experiences.

## Team Members

- Keerthi Sree Konkimalla
- Sanjana Racharla
- Bhanu Prakash Sanikommu

## Problem Statement

In the ever-changing realm of online shopping and e-commerce, delivering personalized product recommendations and rankings stands as a crucial factor for success. Users expect an experience tailored to their preferences and behaviors. The challenge is to devise an algorithm or model that generates accurate and relevant product recommendations and rankings for individual users. The solution should account for user-specific and product-related factors, encompassing historical interactions, product popularity, user similarities, and evolving market trends.

## Deliverables

The project encompasses the following core facets:

1. **Personalized Recommendation Engine:** A novel recommendation engine that furnishes personalized product suggestions based on historical interactions, individual preferences, and product popularity.

2. **Dynamic Ranking System:** A dynamic ranking system that adjusts in real-time. This system recalibrates recommendations based on user interactions and evolving preferences.

3. **Scalability and Efficiency:** A solution designed for scalability and efficiency, catering to extensive user bases and diverse product catalogs while upholding a seamless user experience.

## Subproblems and Approaches

### Web Scraping for Electronics Data

We conducted data extraction from electronics websites using Python3's BeautifulSoup library. The targeted websites encompassed Flipkart, Myntra, and Amazon. The gathered data included attributes such as product name, price, brand, and image links. This data was systematically organized and stored within a CSV file.

### Model Training

Models were trained on the raw electronics dataset to discern product patterns. We leveraged tools like Scikit-learn (sklearn) for both training and validation purposes.

### Popularity Metric Calculation

Our algorithm ascertained product popularity by amalgamating ratings and reviews. This metric formed the foundation for rank-based recommendations.

### API Creation and Usage for Recommendations

We developed APIs post model training, which were subsequently employed to recommend products. Flask was the chosen framework for crafting these APIs.

### Similarity-Based Collaborative Filtering

A similarity-based collaborative filtering approach was adopted to furnish personalized recommendations based on interactions of akin users. Cosine similarity served as the means to identify users with comparable preferences.

### Model-Based Collaborative Filtering

A model-based collaborative filtering technique was harnessed to supply tailored suggestions by leveraging historical behaviors. Singular Value Decomposition (SVD) was employed to truncate dimensionality and estimate projected ratings.

### API Integration and Web Interface

APIs for all three recommendation models were seamlessly integrated into a frontend web page via Flask. Users could directly access personalized recommendations through this web interface.

## Installation and Usage

### Prerequisites

- Python 3.x
- Git (for repository cloning)

### Installation Steps

1. **Install Python:** Ensure Python 3.x is installed on your system. You can obtain it from the official Python website: [Python Downloads](https://www.python.org/downloads/)

2. **Clone the Repository:** Clone this repository to your local machine. Open a terminal or command prompt, navigate to the desired folder, and execute:

   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

3. **Create a Virtual Environment (Optional but Recommended):** It's recommended to establish a virtual environment for managing project-specific dependencies. In your project folder, initiate:

   ```bash
   python -m venv venv
   ```

   - **Activate the Virtual Environment:**

     On Windows:

     ```bash
     venv\Scripts\activate
     ```

     On macOS and Linux:

     ```bash
     source venv/bin/activate
     ```

4. **Install Dependencies:** Within the project folder, install the necessary libraries using pip, the Python package manager. If you possess a `requirements.txt` file, utilize:

   ```bash
   pip install -r requirements.txt
   ```

   If a `requirements.txt` file is absent, manually install the libraries enumerated in your project documentation.

5. **Run the Flask App:** Initiate the Flask app by executing the following command in the terminal:

   ```bash
   python app.py
   ```

   This will launch the development server, and you'll observe output confirming the app's operation.

6. **Access the Web Interface:** Open your web browser and navigate to [http://127.0.0.1:5000/](http://127.0.0.1:5000/) to interact with the web interface. Refer to your project documentation for effective utilization instructions.

---
