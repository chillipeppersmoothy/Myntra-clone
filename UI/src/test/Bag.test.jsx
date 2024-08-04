import { fireEvent, render, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { items } from "./../data/items";
import Bag from "../routes/Bag";

describe("Bag", () => {
  vi.mock("react-redux", () => ({
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  }));

  const mockUseSelector = vi.fn();
  const mockUseDispatch = vi.fn();

  beforeEach(() => {
    useSelector.mockImplementation(mockUseSelector);
    useDispatch.mockReturnValue(mockUseDispatch);
  });

  it("should render bag component", () => {
    mockUseSelector.mockReturnValue({ bagItems: [items[0]] });

    render(<Bag />);

    expect(
      screen.getByRole("img", { name: "Rhodium-Plated CZ Floral Studs" })
    ).toBeInTheDocument();
    expect(screen.getByText("Carlton London")).toBeInTheDocument();
    expect(
      screen.getByText("Rhodium-Plated CZ Floral Studs")
    ).toBeInTheDocument();
    expect(screen.getByText("Rs 606")).toBeInTheDocument();
    expect(screen.getByText("Rs 1045")).toBeInTheDocument();
    expect(screen.getByText("(42% OFF)")).toBeInTheDocument();
    expect(screen.getByText("14 days")).toBeInTheDocument();
    expect(screen.getByText("10 Oct 2023")).toBeInTheDocument();
    expect(screen.getByTestId("delete-icon")).toBeInTheDocument();

    expect(screen.getByText("PRICE DETAILS (1 Items)")).toBeInTheDocument();
    expect(screen.getByText("Total MRP")).toBeInTheDocument();
    expect(screen.getByText("Discount on MRP")).toBeInTheDocument();
    expect(screen.getByText("Convenience Fee")).toBeInTheDocument();
    expect(screen.getByText("Total Amount")).toBeInTheDocument();
    expect(screen.getByText("PLACE ORDER")).toBeInTheDocument();

    expect(screen.getByText("₹1045")).toBeInTheDocument();
    expect(screen.getByText("-₹439")).toBeInTheDocument();
    expect(screen.getByText("₹99")).toBeInTheDocument();
    expect(screen.getByText("₹705")).toBeInTheDocument();
  });

  it("should render NoItems component", () => {
    mockUseSelector.mockReturnValue({ bagItems: [] });

    render(<Bag />);

    expect(
      screen.getByText("There are no items in the bag!")
    ).toBeInTheDocument();
  });

  it("should render NoItems component when item is removed from bag", () => {
    mockUseSelector.mockReturnValue({ bagItems: [items[0]] });

    const { rerender } = render(<Bag />);

    const deleteButton = screen.getByTestId("delete-icon");

    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(mockUseDispatch).toHaveBeenCalledOnce();

    mockUseSelector.mockReturnValue({ bagItems: [] });
    rerender(<Bag />);

    expect(
      screen.getByText("There are no items in the bag!")
    ).toBeInTheDocument();
  });
});
