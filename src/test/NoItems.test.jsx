import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NoItems from "../components/NoItems";

describe("NoItems", () => {
  it("should display the no items text", () => {
    render(<NoItems />);
    expect(
      screen.getByText("There are no items in the bag!")
    ).toBeInTheDocument();
  });
});
