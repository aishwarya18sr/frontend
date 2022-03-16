import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import CreateTask from './CreateTask';
import { LISTS_ROUTE, TASKS_ROUTE } from '../../constants/routes';
import { MOCK_LISTS } from '../Mocks/lists';

describe('CreateTask', () => {
  const mockSetListData = jest.fn();
  const component = (
    <MemoryRouter initialEntries={[`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/create`]}>
      <Routes>
        <Route
          path={`${LISTS_ROUTE}/:listId`}
          element={<div>Mock Task Page</div>}
        />
        <Route
          path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/create`}
          element={(
            <CreateTask
              listData={MOCK_LISTS}
              setListData={mockSetListData}
            />
)}
        />
      </Routes>
    </MemoryRouter>
  );

  beforeEach(() => {
    mockSetListData.mockClear();
  });

  it('should render all the elements and change the input on user typing', () => {
    render(component);
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
