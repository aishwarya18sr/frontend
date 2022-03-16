import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    const clickHandlerMock = jest.fn();
    beforeEach(() => {
        clickHandlerMock.mockClear();
      });
    it("should call the onclick function on clicking the button", () => {
        
        render(<Button icon='plus' text='CREATE LIST' onClick={clickHandlerMock}></Button>)
        const testButton = screen.getByTestId("createButton"); 
        expect(testButton).toBeInTheDocument();
        fireEvent.click(testButton);
        expect(clickHandlerMock).toHaveBeenCalledTimes(1);
    });
    it("should not call the onclick function without clicking the button", () => {
        render(<Button icon='plus' text='CREATE LIST' onClick={clickHandlerMock}></Button>)
        const testButton = screen.getByTestId("createButton"); 
        expect(testButton).toBeInTheDocument();
        expect(clickHandlerMock).toHaveBeenCalledTimes(0);
    });
});