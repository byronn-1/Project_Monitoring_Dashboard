import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import ProjectList from "../ProjectList";




describe("Project list",  () => {
    it("renders default view",  () => {
        render(<App/>)
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

    it("renders correctly", () => {
        const { container } = render(<ProjectList />);
    
        expect(container).toMatchSnapshot();
    });
      
    it("extra-info list is visible on click", async () => {
        render(<ProjectList />);

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
});