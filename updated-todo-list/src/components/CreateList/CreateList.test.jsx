import { fireEvent, render, screen } from "@testing-library/react";
import CreateList from './CreateList';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { LISTS_ROUTE} from "../../constants/routes";
import { MOCK_LISTS } from "../Mocks/lists"

describe("CreateList", () => {

  const mockSetListData = jest.fn();
  const component = (
    <MemoryRouter initialEntries={[`${LISTS_ROUTE}/create`]}>
      <Routes>
        <Route
          path={`${LISTS_ROUTE}/create`}
          element={<CreateList listData={MOCK_LISTS}
           setListData={mockSetListData}></CreateList>}>
        </Route>
        <Route
          path={LISTS_ROUTE}
          element={<div>Mock List Page</div>}
        ></Route>
      </Routes>
    </MemoryRouter>
  );

  beforeEach(() => {
    mockSetListData.mockClear();
  });

    it("should render all the elements and change the input on user typing", () => {
        render(component);
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
          expect(itemName).toHaveAttribute(
            "value",
            mockListTitle
          );
        expect(mockSetListData).not.toHaveBeenCalled();
    });
});