import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../routes/App";
import { items } from "./../data/items";

describe("App", () => {
  vi.mock("react-redux", () => ({
    useSelector: vi.fn(),
  }));

  const mockUseSelector = vi.fn();

  beforeEach(() => {
    useSelector.mockImplementation(mockUseSelector);
  });

  it("should render App component", () => {
    mockUseSelector.mockReturnValue({ bagItems: items });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const myntraHome = screen.getByRole("link", { name: "Myntra Home" });
    const men = screen.getAllByRole("link", { name: "Men" });
    const women = screen.getAllByRole("link", { name: "Women" });
    const kids = screen.getAllByRole("link", { name: "Kids" });
    const homeLiving = screen.getAllByRole("link", { name: "Home & Living" });
    const beauty = screen.getAllByRole("link", { name: "Beauty" });
    const studio = screen.getAllByRole("link", { name: "Studio New" });
    const onlineShoping = screen.getAllByText("ONLINE SHOPPING");
    const giftCard = screen.getAllByRole("link", { name: "Gift Card" });
    const myntraInsider = screen.getAllByRole("link", {
      name: "Myntra Insider",
    });

    expect(myntraHome).toBeInTheDocument();
    expect(men[0]).toBeInTheDocument();
    expect(women[0]).toBeInTheDocument();
    expect(kids[0]).toBeInTheDocument();
    expect(homeLiving[0]).toBeInTheDocument();
    expect(beauty[0]).toBeInTheDocument();
    expect(studio[0]).toBeInTheDocument();
    expect(onlineShoping[0]).toBeInTheDocument();
    expect(giftCard[0]).toBeInTheDocument();
    expect(myntraInsider[0]).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Wishlist")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Bag 8" })).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for products, brands and more")
    ).toBeInTheDocument();
    expect(
      screen.getByText("© 2023 www.myntra.com. All rights reserved.")
    ).toBeInTheDocument();
  });

  it("should display 0 item in the bag", () => {
    mockUseSelector.mockReturnValue({ bagItems: [] });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: "Bag 0" })).toBeInTheDocument();
  });

  it("should display 1 item in the bag", () => {
    mockUseSelector.mockReturnValue({ bagItems: [items[0]] });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: "Bag 1" })).toBeInTheDocument();
  });
});
