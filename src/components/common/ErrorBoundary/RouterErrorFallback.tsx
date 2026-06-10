import { useNavigate, useRouteError } from "react-router-dom";
import { ErrorFallback } from "./ErrorFallback";

export const RouterErrorFallback = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const normalizedError = error instanceof Error ? error : new Error(String(error));

    return <ErrorFallback error={normalizedError} onReset={() => navigate("/")} />;
};
