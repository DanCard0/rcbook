export function isBrowser() {
    return typeof window !== 'undefined';
}

// example: const store = isBrowser() ? configureStore(window.initialState) : {};

