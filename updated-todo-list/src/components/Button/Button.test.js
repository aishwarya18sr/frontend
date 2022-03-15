import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    it("should call the onclick function on clicking", () => {
        const onClickMock = jest.fn();
        render(<Button icon='plus' text='CREATE LIST' onClick={onClickMock}></Button>)
        const testButton = screen.getByTestId("createButton");
        console.log(testButton);  
        fireEvent.click(testButton);
        expect(onClickMock).toHaveBeenCalled();
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});