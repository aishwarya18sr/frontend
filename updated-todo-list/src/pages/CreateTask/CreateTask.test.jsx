import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CreateTask from './CreateTask';

jest.mock('../../utils/makeRequest/makeRequest', () => () => Promise.resolve('Done'));
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useParams: () => ({ listId: 2 }),
}));

describe('CreateTask', () => {
  const mockSetListData = jest.fn();

  beforeEach(() => {
    mockSetListData.mockClear();
  });

  it('should render all the elements and change the input on user typing', () => {
    render(<CreateTask />);
    const mockTaskTitle = 'new task';
    const itemTitle = screen.getByTestId('itemTitle');
    const itemName = screen.getByTestId('itemName');
    const itemSubmitButton = screen.getByTestId('itemSubmitButton');
    const itemCancelButton = screen.getByTestId('itemCancelButton');
    expect(itemTitle).toBeInTheDocument();
    expect(itemName).toBeInTheDocument();
    expect(itemSubmitButton).toBeInTheDocument();
    expect(itemCancelButton).toBeInTheDocument();
    fireEvent.change(itemName, {
      target: { value: mockTaskTitle },
    });
    expect(itemName).toHaveAttribute(
      'value',
      mockTaskTitle,
    );
    expect(mockSetListData).not.toHaveBeenCalled();
  });
});
