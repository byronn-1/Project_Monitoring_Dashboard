import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProjectList from "../ProjectList";
import { renderWithProvider } from "../testUtils";
import { Route, Routes } from "react-router-dom";


describe("Project list",  () => {

    it("renders correctly", () => {
        const { container } = renderWithProvider(<ProjectList />);
    
        expect(container).toMatchSnapshot();
    });
      
    it("Dropdown rendered when view more button clicked", async() => { 
        renderWithProvider(<ProjectList />);
        
        await userEvent.click(screen.getAllByText("View More")[3]);
        expect(screen.getByText("Brief")).toBeDefined();

    });

    it("update project modal rendered on button click", async () => {
        renderWithProvider(<ProjectList />);

        await userEvent.click(screen.getAllByText("Update Project")[0]);
        
        expect(screen.getByText("Save")).toBeDefined();

    });
    it("update view more dropdown icon colour on click modal click", async () => {
      renderWithProvider(<ProjectList />);

      await userEvent.click(screen.getAllByText("Update Project")[0]);
      await userEvent.click(screen.getByText("Brief"));
      await userEvent.click(screen.getByText("Save"));
      await userEvent.click(screen.getAllByText("View More")[0]);

      expect(screen.getByText("Brief")).toHaveStyleRule('backgroundColor', 'green');
  });

    function renderWithRoute(projectId: string) {
        // Add routes to get the contents of useParams populated
        return renderWithProvider(
          <Routes>
            <Route path="project/:projectId" element={<ProjectList />} />
            <Route path="*" element={<div>Unknown path</div>} />
          </Routes>,
          {
            initialRoutes: ["/", `/project/${projectId}`],
          }
        );
    }
});