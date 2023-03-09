import { render, screen } from "@testing-library/react";
import { ClubCard } from "../../components/ClubCard"; 
import { BrowserRouter } from "react-router-dom"; 

jest.mock("axios"); 

describe("ClubCard Component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(
            <BrowserRouter>
                <ClubCard />
            </BrowserRouter>
        );
    });

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(
            <BrowserRouter>
                <ClubCard />
            </BrowserRouter>
        ); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("renders Latitude text", () => {
        render(
            <BrowserRouter>
                <ClubCard />
            </BrowserRouter>
        );
        const textElement = screen.getByText("Latitude:", { exact: false }); 
        expect(textElement).toBeInTheDocument(); 
    });

    // getByTestId
    test("it renders ClubCard div", () => {
        render(
            <BrowserRouter>
                <ClubCard />
            </BrowserRouter>
        );
        const testId = screen.getByTestId("clubCard"); 
        expect(testId).toBeInTheDocument(); 
    });

    // mocking axios but test not working... 
    // test.skip("renders clubList data [] returned by axios", async () => {
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
    //     axios.get.mockResolvedValueOnce({ data: mockData }); 

    //     render(
    //         <BrowserRouter>
    //             <ClubCard />
    //         </BrowserRouter>
    //     ); 
    //     const textElement = screen.getByText("Marina", { exact: false }); 
    //     expect(textElement).not.toBeInTheDocument(); 
    // });
}); 