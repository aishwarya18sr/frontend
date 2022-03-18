import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import List from './List';
import { LISTS_ROUTE } from '../../constants/routes';
import { MOCK_LISTS } from '../Mocks/lists';

describe('List', () => {
  const mockSetListData = jest.fn();
  const component = (
    <MemoryRouter initialEntries={[LISTS_ROUTE]}>
      <Routes>
        <Route
          path={LISTS_ROUTE}
          element={<List listData={MOCK_LISTS} />}
        />
      </Routes>
    </MemoryRouter>
  );

  beforeEach(() => {
    mockSetListData.mockClear();
  });

  it('should render all the elements and change the input on user typing', () => {
    render(component);
    const testButton = screen.getByTestId('createButton');
    const listHeading = screen.getByTestId('listHeading');
    // const listItemText = screen.getAllByTestId('listItemText');
    expect(testButton).toBeInTheDocument();
    expect(listHeading).toBeInTheDocument();
    // listItemText.forEach((eachListItemText) => {
    //   expect(eachListItemText).toBeInTheDocument();
    // });
  });
});
