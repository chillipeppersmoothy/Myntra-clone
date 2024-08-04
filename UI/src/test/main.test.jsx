import { fireEvent, render, screen } from "@testing-library/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { items } from "../data/items";
import App from "../routes/App";
import Bag from "../routes/Bag";
import Home from "../routes/Home";
import store from "../store";

describe("Main", () => {
  vi.mock("react-redux", async (importOriginal) => {
    const actual = await importOriginal();
    return {
      ...actual,
      Provider: actual.Provider,
      useSelector: vi.fn(),
      useDispatch: vi.fn(),
    };
  });
  const mockUseSelector = vi.fn();
  const mockUseDispatch = vi.fn();

  beforeEach(() => {
    useSelector.mockImplementation(mockUseSelector);
    useDispatch.mockReturnValue(mockUseDispatch);
  });

  const router = createMemoryRouter(
    [
      {
        path: "/Myntra-clone/",
        element: <App />,
        children: [
          {
            path: "/Myntra-clone/",
            element: <Home />,
          },
          {
            path: "/Myntra-clone/bag",
            element: <Bag />,
          },
        ],
      },
    ],
    { initialEntries: ["/Myntra-clone/"] }
  );

  it("should render Main component", () => {
    mockUseSelector.mockReturnValue({ bagItems: items });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
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

  it("should display 1 item in the bag", () => {
    mockUseSelector.mockReturnValue({ bagItems: [items[0]] });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    expect(screen.getByRole("link", { name: "Bag 1" })).toBeInTheDocument();
  });

  it("should render HomeItem components", () => {
    mockUseSelector.mockReturnValue({ items: [items[0]] });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const addToBagButtons = screen.getAllByRole("button", {
      name: "Add to Bag",
    });

    fireEvent.click(addToBagButtons[0]);
    expect(mockUseDispatch).toHaveBeenCalledOnce();
  });
});
