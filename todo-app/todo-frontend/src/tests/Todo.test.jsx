import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "../Todos/Todo";

let mockOnClickComplete;
let mockOnClickDelete;
let mockUser;

const mockTodo = { text: "Testing", done: false };

describe("Todo component", () => {
  beforeEach(async () => {
    mockOnClickComplete = vi.fn();
    mockOnClickDelete = vi.fn();
    mockUser = userEvent.setup();

    render(
      <Todo
        onClickComplete={mockOnClickComplete}
        onClickDelete={mockOnClickDelete}
        todo={mockTodo}
      />
    );
  });

  test("clicking 'set as done' calls the event handler once", async () => {
    const setAsDoneButton = screen.getByText("Set as done");
    await mockUser.click(setAsDoneButton);
    expect(mockOnClickComplete).toHaveBeenCalled();
  });

  test("renders the component", () => {
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });
});
