import App from "../App";

import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProvider } from "../testUtils";
import { Route, Routes } from "react-router-dom";

describe("App", () => {
    it("renders default view",  () => {
        renderWithProvider(<App />);
        expect(screen.getByText("Projects Dashboard")).toBeDefined();
    });

    it("renders a list of projects", () => {
      renderWithProvider(<App />);

        [
            "Inventory Project",
            "CSS React Project",
            "Meal Planning Project",
            "Staffing Planner Project",
            "Web3 Project"
        ].forEach((shortName) => {
            expect(screen.getByText(shortName)).toBeDefined();
        });
    });
    it("modal rendered when update project button clicked", () => {
    
    });


        
});