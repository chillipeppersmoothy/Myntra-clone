import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoadingSpinner from "../components/LoadingSpinner";

describe("LoadingSpinner", () => {
  it("should render the loading spinner", () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("should display the loading spinner text", () => {
    render(<LoadingSpinner />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("should display the correct class for loading spinner", () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole("status")).toHaveClass("spinner-border");
  });
});
