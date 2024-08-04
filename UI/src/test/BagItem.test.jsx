import { beforeEach, describe, expect, it, vi } from "vitest";
import BagItem from "../components/BagItem";
import { fireEvent, render, screen } from "@testing-library/react";
import { items } from "./../data/items";
import { useDispatch } from "react-redux";

describe("BagItem", () => {
  vi.mock("react-redux", () => ({
    useDispatch: vi.fn(),
  }));

  const mockUseDispatch = vi.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockUseDispatch);
  });

  it("should render BagItem component", () => {
    mockUseDispatch.mockReturnValue([items[0]]);

    render(<BagItem bagItem={items[0]} />);

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
  });

  it("should remove the component from the page on click of delete icon", () => {
    mockUseDispatch.mockReturnValue([items[0]]);

    render(<BagItem bagItem={items[0]} />);
    const deleteButton = screen.getByTestId("delete-icon");

    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);

    expect(mockUseDispatch).toHaveBeenCalledOnce();
  });
});
