import App from "../App";

import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProvider } from "../testUtils";
import { Route, Routes } from "react-router-dom";

describe("App", () => {
    it("renders default view",  () => {
        render(<App />)
        expect(screen.getByText("Projects Dashboard")).toBeDefined();
    });

    it("renders a list", () => {
         render(<App />);
        [
            "Inventory Project",
            "CSS React Project",
            "Meal Planning Project",
            "Staffing Planner Project",
            "Web3 Project"
        ].forEach((title) => {
            expect(screen.getByText(title)).toBeDefined();
        });
    });


});