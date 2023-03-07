import { render, screen, waitFor } from '@testing-library/react';
import AllHeadlines from './AllHeadlines';
import mockNewsData from '../../mockNewsData.json';
import axios from 'axios';

jest.mock('axios');

describe('AllHeadlines component', () => {
   
    beforeEach(() => {
 
        axios.get.mockResolvedValue({ data: mockNewsData });
    });

    //Cleanup
    afterEach(() => {

         jest.resetAllMocks();

    });

    test('renders the loading message', async () => {
        render(<AllHeadlines />);
        expect(screen.queryByText('Loading...')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
        });
    });
    
    test('renders 10 headlines with correct data', async () => {
        render(<AllHeadlines />);
        const headlineTitles = await screen.findAllByTestId('headline-title');
        expect(headlineTitles).toHaveLength(10);
    });

    test('renders 10 headline images', async () => {
        const { findAllByTestId } = render(<AllHeadlines />);
        const headlineImages = await findAllByTestId('headline-image');
        expect(headlineImages).toHaveLength(10);
    }); 

    test('each headline image matches the corresponding headline title', async () => {
        const { findAllByTestId } = render(<AllHeadlines />);

        // Find all headline images and titles
        const headlineImages = await findAllByTestId('headline-image');
        const headlineTitles = await findAllByTestId('headline-title');

        // Loop through each headline and check that the image and title match
        for (let i = 0; i < headlineImages.length; i++) {
            const imageData = headlineImages[i].getAttribute('src');
            const titleData = headlineTitles[i].textContent.trim();

        // Find the corresponding headline object in mockNewsData
        const headlineData = mockNewsData.response.results.find(
        (result) => result.fields.headline === titleData
        );

        // Check that the image and title are part of the same object in mockNewsData
        expect(headlineData).toHaveProperty('fields.thumbnail', imageData);
        expect(headlineData).toHaveProperty('fields.headline', titleData);
    }
});

    test('renders an error message when the API call fails', async () => {
    axios.get.mockRejectedValue('API is down');

    render(<AllHeadlines />);
    const errorMessage = await screen.findByText('Error fetching data');
    expect(errorMessage).toBeInTheDocument();
    });
});
