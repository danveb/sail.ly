import { render, screen } from "@testing-library/react";
import ClubCard from "../../components/ClubCard"; 
import { BrowserRouter as Router } from "react-router-dom"; 

describe("ClubCard Component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(
            <Router>
                <ClubCard />
            </Router>
        );
    });

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(
            <Router>
                <ClubCard />
            </Router>
        ); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("renders Latitude text", () => {
        render(
            <Router>
                <ClubCard />
            </Router>
        );
        const textElement = screen.getByText("Latitude:", { exact: false }); 
        expect(textElement).toBeInTheDocument(); 
    });

    // getByTestId
    test("it renders ClubCard div", () => {
        render(
            <Router>
                <ClubCard />
            </Router>
        );
        const testId = screen.getByTestId("clubCard"); 
        expect(testId).toBeInTheDocument(); 
    });

    // mocking fetch API but test not working... 
    // test.skip("renders clubList data [] returned by fetch API", async () => {
    //     const mockData = [
    //         {
    //             id: 1, 
    //             name: "Soverel Harbour Marina", 
    //             city: "Palm Beach Gardens", 
    //             state: "FL",
    //             zip: 33410,
    //             lat: 26.8460138009802,
    //             lon: -80.0703925850772,
    //             tel: "561-691-9554",
    //             url: "https://soverelmarina.com",
    //             snake: "soverel-harbour-marina",
    //         },
    //         {
    //             id: 2, 
    //             name: "Sunrise Harbor Marina", 
    //             city: "Fort Lauderdale", 
    //             state: "FL",
    //             zip: 33304,
    //             lat: 26.1391917026305,
    //             lon: -80.1093938879056,
    //             tel: "954-667-6720",
    //             url: "https://www.sunriseharbormarina.net",
    //             snake: "sunrise-harbor-marina",
    //         },
    //     ]; 
    //     // global.fetch = jest.fn().mockResolvedValue({
    //     //     json: () => Promise.resolve(mockData), 
    //     // });
    //     jest.spyOn(global, 'fetch').mockResolvedValue({
    //         json: jest.fn().mockResolvedValue(mockData),
    //     });
    //     render(
    //         <Router>
    //             <ClubCard />
    //         </Router>
    //     ); 
    // });
}); 