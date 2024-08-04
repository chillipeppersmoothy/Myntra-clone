import { fireEvent, render, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Home from "../routes/Home";
import { items } from "./../data/items";

describe("Home", () => {
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

  afterEach(() => vi.resetAllMocks());

  it("should render Home component", () => {
    mockUseSelector.mockReturnValue({ items: [items[0]] });

    render(<Home />);

    expect(
      screen.getByRole("img", { name: "Rhodium-Plated CZ Floral Studs" })
    ).toBeInTheDocument();
    expect(screen.getByText("Carlton London")).toBeInTheDocument();
    expect(
      screen.getByText("Rhodium-Plated CZ Floral Studs")
    ).toBeInTheDocument();
    expect(screen.getByText("Rs 1045")).toBeInTheDocument();
    expect(screen.getByText("Rs 606")).toBeInTheDocument();
    expect(screen.getByText("(42% OFF)")).toBeInTheDocument();
    expect(screen.getByText("4.5 ⭐ (1400 reviews)")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add to Bag" })
    ).toBeInTheDocument();
  });

  it("should call dispatch click on Add to Bag button", () => {
    mockUseSelector.mockReturnValue({ items: [items[0]] });

    render(<Home />);

    const addToBagButton = screen.getByRole("button", {
      name: "Add to Bag",
    });
    expect(addToBagButton).toBeInTheDocument();
    fireEvent.click(addToBagButton);

    expect(mockUseDispatch).toHaveBeenCalledOnce();
  });
});
