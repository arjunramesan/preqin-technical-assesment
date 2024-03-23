import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import React from 'react';
global.React = React;

describe("Home page non empty state", () => {
    it("should render", () => {
        const mockData = {
            investorTableColumns: [
                {
                    "display_name": "Firm ID",
                    "key_name": "firm_id"
                },
                {
                    "display_name": "Firm Name",
                    "key_name": "firm_name"
                },
                {
                    "display_name": "Firm Type",
                    "key_name": "firm_type"
                },
                {
                    "display_name": "Date Added",
                    "key_name": "date_added"
                },
                {
                    "display_name": "Address",
                    "key_name": "address"
                }
            ],
            investorTableData: [
                {
                    "firm_id": 2670,
                    "firm_name": "Mjd Jedi fund",
                    "AUM": 426920827,
                    "date_added": "2010-06-08T00:00:00Z",
                    "last_updated": "2024-02-21T00:00:00Z",
                    "established_at": "2010-06-08T00:00:00Z",
                    "firm_type": "bank",
                    "city": "Hong Kong",
                    "country": "China",
                    "address": "29 Nathan Road, Hong Kong",
                    "postal_code": "37E"
                },
                {
                    "firm_id": 2792,
                    "firm_name": "Ibx Skywalker ltd",
                    "AUM": 307975834,
                    "date_added": "1997-07-21T00:00:00Z",
                    "last_updated": "2024-02-21T00:00:00Z",
                    "established_at": "1997-07-21T00:00:00Z",
                    "firm_type": "asset manager",
                    "city": "New York",
                    "country": "United States",
                    "address": "19 Fifth Avenue, New York",
                    "postal_code": "00347"
                },
                {
                    "firm_id": 332,
                    "firm_name": "Cza Weasley fund",
                    "AUM": 177250016,
                    "date_added": "2002-05-29T00:00:00Z",
                    "last_updated": "2024-02-21T00:00:00Z",
                    "established_at": "2002-05-29T00:00:00Z",
                    "firm_type": "wealth manager",
                    "city": "London",
                    "country": "United Kingdom",
                    "address": "31 Baker Street, London",
                    "postal_code": "WCL 43"
                },
                {
                    "firm_id": 3611,
                    "firm_name": "Ioo Gryffindor fund",
                    "AUM": 199319719,
                    "date_added": "2000-07-06T00:00:00Z",
                    "last_updated": "2024-02-21T00:00:00Z",
                    "established_at": "2000-07-06T00:00:00Z",
                    "firm_type": "fund manager",
                    "city": "Singapore",
                    "country": "Singapore",
                    "address": "36 Marina Bay, Singapore",
                    "postal_code": "9 20"
                }
            ],
            error: false,
        }
        render(<Home {...mockData}/>);
        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
    });
});

describe("Home page empty state", () => {
    it("displays 'No data available' when there is no data", () => {
        const mockData = {
            investorTableColumns: [
                {
                    "display_name": "Firm ID",
                    "key_name": "firm_id"
                },
                {
                    "display_name": "Firm Name",
                    "key_name": "firm_name"
                },
                {
                    "display_name": "Firm Type",
                    "key_name": "firm_type"
                },
                {
                    "display_name": "Date Added",
                    "key_name": "date_added"
                },
                {
                    "display_name": "Address",
                    "key_name": "address"
                }
            ],
            investorTableData: [],
            error: false,
        }
        render(<Home {...mockData} />);
        expect(screen.getByText("No data available.")).toBeInTheDocument();

    });
});

describe("Home page error state", () => {
    it("displays 'Could not load data because of an API error.' when there is no data", () => {
        const mockData = {
            investorTableColumns: [
                {
                    "display_name": "Firm ID",
                    "key_name": "firm_id"
                },
                {
                    "display_name": "Firm Name",
                    "key_name": "firm_name"
                },
                {
                    "display_name": "Firm Type",
                    "key_name": "firm_type"
                },
                {
                    "display_name": "Date Added",
                    "key_name": "date_added"
                },
                {
                    "display_name": "Address",
                    "key_name": "address"
                }
            ],
            investorTableData: [],
            error: true,
        }
        render(<Home {...mockData} />);
        expect(screen.getByText("Could not load data because of an API error.")).toBeInTheDocument();

    });
});

