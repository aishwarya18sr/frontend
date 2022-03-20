import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import NewOrUpdateItemCard from './NewOrUpdateItemCard';

const mockSubmitHandler = jest.fn();

const mockCancelClickHandler = jest.fn();

const mockMakeRequest = () => ({
  toDoTask: [
    {
      id: 2,
      name: 'Yoga',
      List: {
        id: 2,
        listName: 'Personal',
        createdAt: '2022-03-03T07:21:40.429Z',
        updatedAt: '2022-03-03T07:21:40.429Z',
      },
    },
  ],
});

jest.mock('../../utils/makeRequest/makeRequest', () => () => {
  const response = mockMakeRequest();
  return Promise.resolve(response);
});

describe('NewOrUpdateitemCard', () => {
  beforeEach(() => {
    mockSubmitHandler.mockClear();
    mockCancelClickHandler.mockClear();
  });

  it('should call the mockSubmitHandler when the title is Add List and submit button is clicked', () => {
    render(<NewOrUpdateItemCard title="Add List" oldTask={{}} submitClickHandler={mockSubmitHandler} cancelClickHandler={mockCancelClickHandler} />);
    const mockListTitle = 'new list';
    const itemTitle = screen.queryByTestId('itemTitle');
    const itemName = screen.queryByTestId('itemName');
    const itemSubmitButton = screen.queryByTestId('itemSubmitButton');
    const itemCancelButton = screen.queryByTestId('itemCancelButton');
    expect(screen.getByText('Add List')).toBeTruthy();
    expect(itemTitle).toBeTruthy();
    expect(itemName).toBeTruthy();
    expect(itemSubmitButton).toBeTruthy();
    expect(itemCancelButton).toBeTruthy();
    fireEvent.change(itemName, {
      target: { value: mockListTitle },
    });
    expect(mockSubmitHandler).toHaveBeenCalledTimes(0);
    expect(itemName).toHaveAttribute(
      'value',
      mockListTitle,
    );
    fireEvent.click(itemSubmitButton);
    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    expect(mockSubmitHandler).toHaveBeenCalledWith(mockListTitle);
  });

  it('should call the mockSubmitHandler when the title is Add Task and submit button is clicked', () => {
    render(<NewOrUpdateItemCard title="Add Task" oldTask={{}} submitClickHandler={mockSubmitHandler} cancelClickHandler={mockCancelClickHandler} />);
    const mockTaskTitle = 'new task';
    const itemTitle = screen.queryByTestId('itemTitle');
    const itemName = screen.queryByTestId('itemName');
    const itemSubmitButton = screen.queryByTestId('itemSubmitButton');
    const itemCancelButton = screen.queryByTestId('itemCancelButton');
    expect(screen.getByText('Add Task')).toBeTruthy();
    expect(itemTitle).toBeTruthy();
    expect(itemName).toBeTruthy();
    expect(itemSubmitButton).toBeTruthy();
    expect(itemCancelButton).toBeTruthy();
    fireEvent.change(itemName, {
      target: { value: mockTaskTitle },
    });
    expect(mockSubmitHandler).toHaveBeenCalledTimes(0);
    expect(itemName).toHaveAttribute(
      'value',
      mockTaskTitle,
    );
    fireEvent.click(itemSubmitButton);
    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    expect(mockSubmitHandler).toHaveBeenCalledWith(mockTaskTitle);
  });

  it('should call the mockSubmitHandler when the title is Update Task and submit button is clicked', async () => {
    render(<NewOrUpdateItemCard title="Update Task" oldTask={{ listId: 2, taskId: 2 }} submitClickHandler={mockSubmitHandler} cancelClickHandler={mockCancelClickHandler} />);
    const mockTaskTitle = 'updated task';
    const itemTitle = screen.queryByTestId('itemTitle');
    const itemName = screen.queryByTestId('itemName');
    const itemSubmitButton = screen.queryByTestId('itemSubmitButton');
    const itemCancelButton = screen.queryByTestId('itemCancelButton');
    expect(screen.getByText('Update Task')).toBeTruthy();
    expect(await screen.findByDisplayValue('Yoga')).toBeTruthy();
    expect(itemTitle).toBeTruthy();
    expect(itemName).toBeTruthy();
    expect(itemSubmitButton).toBeTruthy();
    expect(itemCancelButton).toBeTruthy();
    fireEvent.change(itemName, {
      target: { value: mockTaskTitle },
    });
    expect(mockSubmitHandler).toHaveBeenCalledTimes(0);
    expect(itemName).toHaveAttribute(
      'value',
      mockTaskTitle,
    );
    fireEvent.click(itemSubmitButton);
    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    expect(mockSubmitHandler).toHaveBeenCalledWith(mockTaskTitle);
  });

  it('should call the mockCancelClickHandler when the cancel button is clicked', () => {
    render(<NewOrUpdateItemCard title="Add List" oldTask={{}} submitClickHandler={mockSubmitHandler} cancelClickHandler={mockCancelClickHandler} />);
    const itemCancelButton = screen.queryByTestId('itemCancelButton');
    expect(itemCancelButton).toBeTruthy();
    fireEvent.click(itemCancelButton);
    expect(mockCancelClickHandler).toHaveBeenCalledTimes(1);
  });
});
