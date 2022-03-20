/* eslint-disable max-len */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CreateList from './CreateList';

// jest.mock('../../components/NewOrUpdateItemCard/NewOrUpdateItemCard', () => function () {
//   function NewOrUpdateItemCard() { return <p data-testid="itemTitle" className="itemTitle">'Create Title'</p>; }
//   return <NewOrUpdateItemCard />;
// });
jest.mock('../../utils/makeRequest/makeRequest', () => () => Promise.resolve('Done'));
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }));

describe('CreateList', () => {
  const mockSetListData = jest.fn();

  beforeEach(() => {
    mockSetListData.mockClear();
  });

  it('should render all the elements and change the input on user typing', async () => {
    render(<CreateList />);
    const mockListTitle = 'new list';
    const itemTitle = screen.getByTestId('itemTitle');
    const itemName = screen.getByTestId('itemName');
    const itemSubmitButton = screen.getByTestId('itemSubmitButton');
    const itemCancelButton = screen.getByTestId('itemCancelButton');
    expect(itemTitle).toBeInTheDocument();
    expect(itemName).toBeInTheDocument();
    expect(itemSubmitButton).toBeInTheDocument();
    expect(itemCancelButton).toBeInTheDocument();
    fireEvent.change(itemName, {
      target: { value: mockListTitle },
    });
    expect(itemName).toHaveAttribute(
      'value',
      mockListTitle,
    );
    fireEvent.click(itemSubmitButton);
  });
});
