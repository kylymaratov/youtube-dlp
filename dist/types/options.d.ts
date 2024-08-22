export interface TOptions {
    format?: "audio" | "video" | "all";
    checkWorkingLinks?: boolean;
    torRequest?: boolean;
}
export interface TResponseOptions {
    web: {
        userAgent: string;
        cookies: string;
    };
    android: {
        userAgent: string;
        cookies: string;
    };
}
export interface TTorOptions {
    host?: string;
    port?: number;
    password?: string;
}
