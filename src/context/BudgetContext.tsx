import { useReducer, createContext, ReactNode } from "react";
import { BudgetActions, budgetReduce, BudgetState, initialSate } from "../reducers/budget-reduces";

type BudgetContextProps = {
    state: BudgetState,
    dispatch: React.ActionDispatch<[action: BudgetActions]>
}
type BudgetProvideProps = {
    children: ReactNode
}
export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({ children }: BudgetProvideProps) => {
    const [state, dispatch] = useReducer(budgetReduce, initialSate)

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}>
            {children}
        </BudgetContext.Provider>
    )
}