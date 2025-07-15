import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Rating } from "@/components/avaliacao/Rating";

describe("Rating Component", () => {
  it("deve selecionar 4 estrelas", () => {
    render(<Rating produtoId="test-id" />);
    const stars = screen.getAllByRole("button");
    fireEvent.click(stars[3]);
    expect(stars[3]).toHaveClass("text-yellow-400");
  });

  it("deve desabilitar o botão quando nenhuma estrela for selecionada", () => {
    render(<Rating produtoId="test-id" />);
    const button = screen.getByText("Enviar Avaliação");
    expect(button).toBeDisabled();
  });
});
