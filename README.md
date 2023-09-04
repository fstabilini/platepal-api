# PlatePal: Your Culinary Companion

PlatePal is a recipe web application designed to make your culinary journey delightful and straightforward. With PlatePal, you can search for recipes, add your favorite dishes to your collection, craft your own recipes, and even send inquiries directly to us!

## Features

- **Search Recipes**: Dive into a vast collection and discover a world full of flavors.
- **Filter by Categories**: Find the perfect dish for any occasion by filtering recipes based on their categories.
- **Favorites**: Loved a dish? Add it to your favorites for quick access!
- **Craft New Recipes**: Got a special dish of your own? Add it and have it alongside your other favorites.
- **Contact Us**: Send us a mail directly from the app for any inquiries or feedback.

## Tech Stack

- **Frontend**: React.js with `react-router-dom` for routing.
- **Backend**: Node.js with Express.js.
- **Data Storage**: Instead of traditional databases, PlatePal uses the filesystem for storage.
- **External API**: TheMealDB, with the premium version accessed through a paid subscription.

## Installation & Setup

### Developer Environment

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fstabilini/platepal
   cd platepal
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

   This will start the development server, and the application should automatically open in your default web browser. If not, navigate to `http://localhost:3000`.

## API Reference

PlatePal utilizes the [TheMealDB API](https://www.themealdb.com/api.php). We're using the premium version, accessed through a paid PayPal subscription, to fetch an extensive range of recipes.
