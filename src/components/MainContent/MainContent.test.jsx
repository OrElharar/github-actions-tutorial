import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainContent from './MainContent.jsx';

// My tests!
// Add yet another comment

describe('MainContent', () => {
  it('should render a button', () => {
    render(<MainContent />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show the help area after clicking the button', async () => {
    render(<MainContent />);

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(screen.getByTestId('help-area')).toBeInTheDocument();
  });
});

// Dummy test that demonstrate the CI/CD pipeline
// describe('Dummy test that check env variables', () => {
//     it('should return the correct value of the env variable', () => {
//         expect(process.env.REACT_APP_TEST_ENV_VAR).toBe('test');
//     });
// });
