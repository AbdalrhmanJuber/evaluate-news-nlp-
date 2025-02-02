const axios = require('axios');
require('dotenv').config(); // Load environment variables

test('Aylien News API should return news stories', async () => {
    jest.setTimeout(10000); // Increase timeout

    try {
        const response = await axios.get('https://api.aylien.com/news/stories', { // ✅ Correct URL
            headers: {
                'X-Application-Id': process.env.API_ID,  // Correct Authentication
                'X-Application-Key': process.env.API_KEY
            },
            params: {
                language: 'en',  // Fetch English news stories
                title: 'AI'      // Example query for news related to "AI"
            }
        });

        // Validate the response
        expect(response.data).toHaveProperty('stories');
        expect(response.data.stories.length).toBeGreaterThan(0);
    } catch (error) {
        console.error('Aylien API Error:', error.response?.data || error);
        throw error;
    }
});
