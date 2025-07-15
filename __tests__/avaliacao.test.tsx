import { render, screen, fireEvent } from "@testing-library/react";
import { Rating } from "@/components/avaliacao/Rating";

describe("Rating Component", () => {
  it("deve selecionar 4 estrelas", () => {
    render(<Rating produtoId="test-id" />);
    const stars = screen.getAllByRole("button");
    fireEvent.click(stars[3]);
    expect(stars[3]).toHaveClass("text-yellow-400");
  });
});
