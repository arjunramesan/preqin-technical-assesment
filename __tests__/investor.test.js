import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Investor from '../pages/investor/[id]';
import React from 'react';
global.React = React;

describe("Investor page non empty state", () => {
    it("should render", () => {
        render(<Investor investorId={2792} error={false}/>);
        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
    });
});


describe("Investor page error state", () => {
    it("should render", () => {
        render(<Investor investorId={2792} error={true}/>);
        const main = screen.getByRole("main");
        expect(screen.getByText("Could not load data because of an internal error.")).toBeInTheDocument();
    });
});