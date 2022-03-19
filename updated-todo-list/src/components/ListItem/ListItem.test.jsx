import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';
import { LISTS_ROUTE } from '../../constants/routes';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

describe('ListItem', () => {
  it('should render the necessary components and navigate to the list details page on clicking the card', () => {
    render(<ListItem id={2} title="Personal" />);
    expect(screen.queryByTestId('listItemCard')).toBeTruthy();
    expect(screen.queryByTestId('listItemText')).toBeTruthy();
    expect(screen.getByText('Personal')).toBeTruthy();
    fireEvent.click(screen.getByTestId('listItemCard'));
    expect(useNavigate()).toHaveBeenCalledTimes(1);
    expect(useNavigate()).toHaveBeenCalledWith(`${LISTS_ROUTE}/${2}`);
  });
  it('should not not navigate to the list details page without clicking the card', () => {
    render(<ListItem id={2} title="Personal" />);
    expect(screen.queryByTestId('listItemCard')).toBeTruthy();
    expect(useNavigate()).toHaveBeenCalledTimes(0);
  });
});
