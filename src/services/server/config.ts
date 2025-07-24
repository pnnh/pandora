import {IBrowserConfig} from "@/services/common/config";
import {ConfigOptions, initAppConfig} from "@/atom/server/config/config";

export interface IServerConfig {
    RUN_MODE: string
    PUBLIC_SELF_URL: string
    PUBLIC_PORTAL_URL: string
    PUBLIC_POLARIS_URL: string
}

let serverConfigInstance: IServerConfig | undefined;

export async function useServerConfig(): Promise<IServerConfig> {
    if (serverConfigInstance) {
        return serverConfigInstance
    }
    const configUrl = process.env.CONFIG;
    if (!configUrl) {
        throw new Error('CONFIG environment variable is required')
    }
    const runMode = getRunMode();
    const configOptions: ConfigOptions = {
        project: "huable",
        app: "polaris",
        env: runMode,
        svc: "pandora"
    }
    const appConfig = initAppConfig(configUrl, configOptions)
    const selfUrl = await appConfig.GetString('app.PUBLIC_PANDORA_URL');
    const portalUrl = await appConfig.GetString('app.PUBLIC_PORTAL_URL');
    const polarisUrl = await appConfig.GetString('app.PUBLIC_POLARIS_URL');

    if (!selfUrl) {
        throw new Error('PUBLIC_SELF_URL is required')
    }
    if (!portalUrl) {
        throw new Error('PUBLIC_PORTAL_URL is required')
    }
    if (!polarisUrl) {
        throw new Error('PUBLIC_POLARIS_URL is required')
    }
    serverConfigInstance = {
        RUN_MODE: runMode,
        PUBLIC_SELF_URL: selfUrl,
        PUBLIC_PORTAL_URL: portalUrl,
        PUBLIC_POLARIS_URL: polarisUrl
    };

    return serverConfigInstance;
}

export interface IServerConfig {
    PUBLIC_SELF_URL: string
    PUBLIC_PORTAL_URL: string
    PUBLIC_POLARIS_URL: string
}


export function runMode() {
    return process.env.RUN_MODE || 'development'
}

export function getRunMode() {
    return process.env.RUN_MODE || 'development'
}

export function isDev() {
    return process.env.RUN_MODE === 'development'
}

export function isTest() {
    return process.env.RUN_MODE === 'test'
}

export function isProd() {
    return process.env.RUN_MODE === 'production'
}

export function usePublicConfig(serverConfig: IServerConfig): IBrowserConfig {
    return {
        PUBLIC_SELF_URL: serverConfig.PUBLIC_SELF_URL,
        PUBLIC_MODE: runMode(),
        PUBLIC_PORTAL_URL: serverConfig.PUBLIC_PORTAL_URL,
        PUBLIC_POLARIS_URL: serverConfig.PUBLIC_POLARIS_URL,
    }
}
