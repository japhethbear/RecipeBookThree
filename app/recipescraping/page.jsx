'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function TrimRecipe() {
  const [scrapedData, setScrapedData] = useState({
    title: '',
    ingredients: [],
    instructions: []
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInputURL = event.target.url.value;
    console.log('User input URL:', userInputURL)

    try {
      const response = await axios.post('/api/scrape-recipe', { url: userInputURL });
      setScrapedData(response.data);
      console.log('Scraped data:', response.data)
    } catch (error) {
      console.error('Error occurred while scraping the recipe:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          placeholder="Enter Recipe URL"
        />
        <button type="submit">Scrape Recipe</button>
      </form>
      <div>
        <h3>Title: {scrapedData.title}</h3>
        <h4>Ingredients:</h4>
        <ul>
          {scrapedData.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h4>Instructions:</h4>
        <ol>
          {scrapedData.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
