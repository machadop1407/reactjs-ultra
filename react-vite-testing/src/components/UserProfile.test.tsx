import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Mock, vi } from "vitest";
import UserProfile from "./UserProfile";

describe("User Profile", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("fetches and displays the user data properly", async () => {
    (globalThis.fetch as Mock).mockResolvedValueOnce({
      json: async () => ({ id: 3, name: "Pedro", email: "pedro@email.com" }),
    });
    render(<UserProfile userId="3" />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("pedro@email.com")).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: "Pedro" })
      ).toBeInTheDocument();
    });

    // expect(screen.getByText("pedro@email.com")).toBeInTheDocument();
  });
});
