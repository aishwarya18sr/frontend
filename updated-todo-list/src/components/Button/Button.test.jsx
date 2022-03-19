import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  const clickHandlerMock = jest.fn();
  beforeEach(() => {
    clickHandlerMock.mockClear();
  });
  it('should call the onclick function on clicking the button', () => {
    render(<Button icon="plus" text="CREATE LIST" onClick={clickHandlerMock} />);
    expect(screen.queryByTestId('createButton')).toBeTruthy();
    expect(screen.getByText('CREATE LIST')).toBeTruthy();
    expect(screen.getByTestId('plusIcon')).toBeTruthy();
    fireEvent.click(screen.getByTestId('createButton'));
    expect(clickHandlerMock).toHaveBeenCalledTimes(1);
  });
  it('should not call the onclick function without clicking the button', () => {
    render(<Button icon="plus" text="CREATE LIST" onClick={clickHandlerMock} />);
    expect(screen.queryByTestId('createButton')).toBeTruthy();
    expect(clickHandlerMock).toHaveBeenCalledTimes(0);
  });
});
