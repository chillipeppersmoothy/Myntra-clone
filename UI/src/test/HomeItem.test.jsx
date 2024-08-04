import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import HomeItem from "../components/HomeItem.jsx";
import { items } from "./../data/items";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice.js";

describe("HomeItem", () => {
  vi.mock("react-redux", () => ({
    useDispatch: vi.fn(),
    useSelector: vi.fn(),
  }));

  const mockDispatch = vi.fn();
  const mockUseSelector = vi.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation(mockUseSelector);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render HomeItem", () => {
    render(<HomeItem item={items[0]} />);

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

  it("renders Add to Bag button when item is not in bag", () => {
    mockUseSelector.mockReturnValue({ bagItems: [] });

    render(<HomeItem item={items[0]} />);

    expect(
      screen.getByRole("button", { name: "Add to Bag" })
    ).toBeInTheDocument();
  });

  it('renders "Remove from Bag" button when item is in bag', () => {
    mockUseSelector.mockReturnValue({ bagItems: [items[0]] });
    render(<HomeItem item={items[0]} />);

    expect(screen.getByText("Remove from Bag")).toBeInTheDocument();
  });

  it("should dispatch an action when Add to Bag button is clicked and display Remove from Bag", () => {
    mockUseSelector.mockReturnValueOnce({ bagItems: [] });
    const { rerender } = render(<HomeItem item={items[0]} />);

    const AddToBagButton = screen.getByRole("button", { name: "Add to Bag" });
    expect(AddToBagButton).toBeInTheDocument();

    fireEvent.click(AddToBagButton);
    expect(mockDispatch).toHaveBeenCalledWith(bagAction.addItem(items[0]));

    mockUseSelector.mockReturnValueOnce({ bagItems: [items[0]] });

    rerender(<HomeItem item={items[0]} />);

    const removeFromBagButton = screen.getByRole("button", {
      name: "Remove from Bag",
    });
    expect(removeFromBagButton).toBeInTheDocument();
  });

  it("should dispatch an action when Remove from Bag button is clicked and display Add to Bag", () => {
    mockUseSelector.mockReturnValueOnce({ bagItems: [items[0]] });

    const { rerender } = render(<HomeItem item={items[0]} />);

    const removeFromBagButton = screen.getByRole("button", {
      name: "Remove from Bag",
    });
    expect(removeFromBagButton).toBeInTheDocument();

    fireEvent.click(removeFromBagButton);
    expect(mockDispatch).toHaveBeenCalledOnce();
    expect(mockDispatch).toHaveBeenCalledWith(
      bagAction.removeItem({ id: items[0].id })
    );

    mockUseSelector.mockReturnValueOnce({ bagItems: [] });
    rerender(<HomeItem item={items[0]} />);

    const AddToBagButton = screen.getByRole("button", { name: "Add to Bag" });
    expect(AddToBagButton).toBeInTheDocument();
  });
});
