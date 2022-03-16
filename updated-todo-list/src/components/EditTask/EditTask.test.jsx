import { fireEvent, render, screen } from "@testing-library/react";
import EditTask from './EditTask';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { LISTS_ROUTE, TASKS_ROUTE } from "../../constants/routes";
import { MOCK_LISTS } from "../Mocks/lists"

describe("EditTask", () => {

    const mockSetListData = jest.fn();
    const component = (
        <MemoryRouter initialEntries={[`${LISTS_ROUTE}/1${TASKS_ROUTE}/1/update`]}>
            <Routes>
                <Route
                    path={`${LISTS_ROUTE}/1`}
                    element={<div>Mock Task Page</div>}>
                </Route>
                <Route
                    path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/:taskId/update`}
                    element={<EditTask listData={MOCK_LISTS}
                        setListData={mockSetListData}></EditTask>}>
                </Route>
            </Routes>
        </MemoryRouter>
    );

    beforeEach(() => {
        mockSetListData.mockClear();
    });


    it("should render all the elements and change the input on user typing", () => {
        render(component);
        const mockUpdatedTaskTitle = "updated task";
        const itemTitle = screen.getByTestId("itemTitle");
        const itemName = screen.getByTestId("itemName");
        const itemSubmitButton = screen.getByTestId("itemSubmitButton");
        const itemCancelButton = screen.getByTestId("itemCancelButton");
        expect(itemTitle).toBeInTheDocument();
        expect(itemName).toBeInTheDocument();
        expect(itemSubmitButton).toBeInTheDocument();
        expect(itemCancelButton).toBeInTheDocument();
        fireEvent.change(itemName, {
            target: { value: mockUpdatedTaskTitle },
        });
        expect(itemName).toHaveAttribute(
            "value",
            mockUpdatedTaskTitle
        );
        expect(mockSetListData).not.toHaveBeenCalled();
    });
});