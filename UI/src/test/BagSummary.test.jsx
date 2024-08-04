import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { beforeEach, describe, expect, it, vi } from "vitest";
import BagSummary from "../components/BagSummary";
import { items } from "./../data/items";

describe("BagSummary", () => {
  vi.mock("react-redux", () => ({
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  }));

  const mockUseSelector = vi.fn();

  beforeEach(() => {
    useSelector.mockImplementation(mockUseSelector);
  });

  it("should render bag summary component", () => {
    mockUseSelector.mockReturnValue({ bagItems: [items[0]] });
    render(<BagSummary />);

    expect(screen.getByText("PRICE DETAILS (1 Items)")).toBeInTheDocument();
    expect(screen.getByText("Total MRP")).toBeInTheDocument();
    expect(screen.getByText("Discount on MRP")).toBeInTheDocument();
    expect(screen.getByText("Convenience Fee")).toBeInTheDocument();
    expect(screen.getByText("Total Amount")).toBeInTheDocument();
    expect(screen.getByText("PLACE ORDER")).toBeInTheDocument();
  });

  it("should display 3 items and calculate the correct amount", () => {
    mockUseSelector.mockReturnValue({
      bagItems: [items[0], items[1], items[2]],
    });
    render(<BagSummary />);

    expect(screen.getByText("PRICE DETAILS (3 Items)")).toBeInTheDocument();
    expect(screen.getByText("₹5243")).toBeInTheDocument();
    expect(screen.getByText("-₹2635")).toBeInTheDocument();
    expect(screen.getByText("₹99")).toBeInTheDocument();
    expect(screen.getByText("₹2707")).toBeInTheDocument();
  });
});
