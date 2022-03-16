import { fireEvent, render, screen } from "@testing-library/react";
import NewOrUpdateItemCard from "./NewOrUpdateItemCard";

describe("NewOrUpdateitemCard", () => {

  const mockAddListHandler = jest.fn();

  beforeEach(() => {
    mockAddListHandler.mockClear();
  });

    it("should call the mockAddListHandler when the button is clicked", () => {
        render( <NewOrUpdateItemCard title='Add List' initialValue="" submitClickHandler={mockAddListHandler}></NewOrUpdateItemCard>);
        const mockListTitle="new list";
        const itemTitle = screen.getByTestId("itemTitle"); 
        const itemName = screen.getByTestId("itemName"); 
        const itemSubmitButton = screen.getByTestId("itemSubmitButton"); 
        const itemCancelButton = screen.getByTestId("itemCancelButton"); 
        expect(itemTitle).toBeInTheDocument();
        expect(itemName).toBeInTheDocument();
        expect(itemSubmitButton).toBeInTheDocument();
        expect(itemCancelButton).toBeInTheDocument();
          fireEvent.change(itemName, {
            target: { value: mockListTitle },
          });
          expect(mockAddListHandler).toHaveBeenCalledTimes(0);
          expect(itemName).toHaveAttribute(
            "value",
            mockListTitle
          );
        fireEvent.click(itemSubmitButton);
        expect(mockAddListHandler).toHaveBeenCalledTimes(1);
        expect(mockAddListHandler).toHaveBeenCalledWith(mockListTitle);
    });
});