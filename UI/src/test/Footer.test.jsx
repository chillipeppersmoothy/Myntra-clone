import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("should render the footer component", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should display the footer text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2023 www.myntra.com. All rights reserved./i)
    ).toBeInTheDocument();
  });

  it("should render the footer component and have ONLINE SHOPPING text 3 times", () => {
    render(<Footer />);
    expect(screen.getAllByText("ONLINE SHOPPING")).toHaveLength(3);
  });
});
