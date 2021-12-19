import React from "react";


const useToggle = (initialState = false) => {
    const [state, setState] = React.useState(initialState);

    const handlers = React.useMemo(() => ({
        on: () => {setState(true)},
        off: () => {setState(false)},
        toggle: () => {setState(s=> !s)},
        reset: () => {setState(initialState)}
    }), [initialState])

    return [state, handlers];
};


export default useToggle;

















































