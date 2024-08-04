import { fireEvent, render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Header from "../components/Header.jsx";
import { items } from "../data/items.js";
import Bag from "../routes/Bag.jsx";

describe("Header", () => {
  vi.mock("react-redux", () => ({
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  }));

  const mockUseSelector = vi.fn();

  beforeEach(() => {
    useSelector.mockImplementation(mockUseSelector);
  });

  afterEach(() => vi.resetAllMocks());

  it("should render header component", () => {
    mockUseSelector.mockReturnValue(items);

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText("Men")).toBeInTheDocument();
    expect(screen.getByText("Women")).toBeInTheDocument();
    expect(screen.getByText("Kids")).toBeInTheDocument();
    expect(screen.getByText("Home & Living")).toBeInTheDocument();
    expect(screen.getByText("Beauty")).toBeInTheDocument();
    expect(screen.getByText("Studio")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Wishlist")).toBeInTheDocument();
    expect(screen.getByText("Bag")).toBeInTheDocument();
  });

  it("should display placeholder text", () => {
    mockUseSelector.mockReturnValue(items);

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText("Search for products, brands and more")
    ).toBeInTheDocument();
  });

  it("should display the number of items in the bag", () => {
    mockUseSelector.mockReturnValue({ bagItems: [items[0], items[1]] });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Bag 2" })).toBeInTheDocument();
  });

  it("should redirect to bag page when clicked on bag icon", () => {
    mockUseSelector.mockReturnValue({ bagItems: items });

    render(
      <MemoryRouter initialEntries={["/Myntra-clone"]}>
        <Routes>
          <Route path="/Myntra-clone" element={<Header />} />
          <Route path="/Myntra-clone/bag" element={<Bag />} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("link", { name: "Bag 8" }));
    expect(screen.getByText("PLACE ORDER")).toBeInTheDocument();
  });
});
