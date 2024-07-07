class ContextNotFoundError extends Error {
    constructor(contextName: string) {
        super(`Context ${contextName} must be called in its provider.`);
    }
}

export default ContextNotFoundError;