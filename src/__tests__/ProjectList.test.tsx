import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProjectList from "../ProjectList";
import { renderWithProvider } from "../testUtils";
import { Route, Routes } from "react-router-dom";


describe("Project list",  () => {

    it("renders correctly", () => {
        const { container } = render(<ProjectList />);
    
        expect(container).toMatchSnapshot();
    });
      
        
    it.only("extra-info list is visible on click", async () => {
        renderWithProvider(<ProjectList />);

        const viewMore = screen.getAllByText("View More")
        
         viewMore.forEach((button) => {
            expect(button).toBeVisible();
        });
        
        await viewMore.forEach((element) => {
            userEvent.click(element);
        });
        

        screen.getAllByText("See More Details").forEach((element) => {
            expect(element).toBeInTheDocument();
        });
    });
    it("update project modal visible on button click", async () => {
        render(<ProjectList />);

        const updateProject = screen.getAllByText("Update Project");

        await updateProject.forEach((element) => {
            userEvent.click(element);
        });

        screen.getAllByText("Brief").forEach((element) => {
            expect(element).toBeInTheDocument();
        });
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