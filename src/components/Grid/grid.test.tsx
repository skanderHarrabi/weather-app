import React from "react";
import {render, screen} from "@testing-library/react";
import Grid from "./index";

describe("Grid Component", () => {
  it("renders the component with a header and children", () => {
    render(
      <Grid header="Test Header">
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </Grid>
    );

    // Test that the header is displayed
    const headerElement = screen.getByText("Test Header");
    expect(headerElement).toBeInTheDocument();

    // Tet that child elements are rendered
    const child1 = screen.getByTestId("child-1");
    const child2 = screen.getByTestId("child-2");
    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
  });
});
