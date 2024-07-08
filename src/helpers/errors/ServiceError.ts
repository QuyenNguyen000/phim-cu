class ServiceError extends Error {
    constructor(serviceName: string) {
        super(
            `Service ${serviceName} returns an error. Please check the error log in the console.`
        );
    }
}

export default ServiceError;
