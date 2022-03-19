import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Icon from './Icon';

describe('Icon', () => {
  const clickHandlerMock = jest.fn();
  beforeEach(() => {
    clickHandlerMock.mockClear();
  });
  it('should call the onclick function on clicking the icon', () => {
    render(<Icon icon="pencil" onClick={clickHandlerMock} />);
    expect(screen.queryByTestId('editIcon')).toBeTruthy();
    expect(screen.queryByTestId('pencilIcon')).toBeTruthy();
    fireEvent.click(screen.getByTestId('editIcon'));
    expect(clickHandlerMock).toHaveBeenCalledTimes(1);
  });
  it('should not call the onclick function without clicking the icon', () => {
    render(<Icon icon="pencil" onClick={clickHandlerMock} />);
    expect(screen.queryByTestId('editIcon')).toBeTruthy();
    expect(clickHandlerMock).toHaveBeenCalledTimes(0);
  });
});
