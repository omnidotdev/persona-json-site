import { NotFoundPage } from "@omnidotdev/thornberry/not-found";

import app from "@/lib/config/app.config";

/**
 * 404 not found. Renders the shared Omni `<NotFoundPage>` (in-shell,
 * theme-aware, prominent "404"), branded with persona.json's wordmark. Home points at the app root.
 */
const NotFound = () => <NotFoundPage appName={app.name} />;

export default NotFound;
