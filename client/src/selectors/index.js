import { createSelector } from "reselect";

const getTodos = state => state;

export const filterList = createSelector(
    [getTodos],
    todos => {
        return todos
            .sort((a, b) => {
                const listOrder = ["open", "completed", "deleted"];

                return (
                    listOrder.indexOf(a.currentStatus) -
                    listOrder.indexOf(b.currentStatus)
                );
            })
            .filter(todo => todo.currentStatus !== "deleted");
    }
);
