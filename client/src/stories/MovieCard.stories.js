import React from 'react';
import MovieCard from '../components/MovieCard';
import {movies} from './stub'
// Default export defining metadata for the story
export default {
  title: 'Example/Movie Card',
  component: MovieCard,
  parameters: {
    layout: 'centered', // Centers the component in the Canvas
  },
  tags: ['autodocs'], // Autodocs tag for documentation
  args: {
    // Default props for the component, if any
    movie:movies[0],
  },
};
// Named export for the default story
export const Default = (args) => <MovieCard {...args} />;

