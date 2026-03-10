import { describe, expect, it, vi } from 'vitest';

import { getServerAuthConfig } from './getServerAuthConfig';

vi.mock('@/envs/app', () => ({
  appEnv: {
    MARKET_TRUSTED_CLIENT_ID: 'id',
    MARKET_TRUSTED_CLIENT_SECRET: 'secret',
  },
}));

vi.mock('@/envs/auth', () => ({
  authEnv: {
    AUTH_DISABLE_EMAIL_PASSWORD: false,
    AUTH_EMAIL_VERIFICATION: true,
    AUTH_ENABLE_MAGIC_LINK: true,
    AUTH_SSO_PROVIDERS: 'okta',
  },
}));

vi.mock('@/libs/better-auth/sso', () => ({
  getBetterAuthSSOProviderLabels: vi.fn(() => ({ okta: 'JA I.D.' })),
}));

vi.mock('@/libs/better-auth/utils/server', () => ({
  parseSSOProviders: vi.fn(() => ['okta']),
}));

describe('getServerAuthConfig', () => {
  it('should include SSO provider labels for auth pages', () => {
    const config = getServerAuthConfig();

    expect(config.oAuthSSOProviders).toEqual(['okta']);
    expect(config.oAuthSSOProviderLabels).toEqual({ okta: 'JA I.D.' });
  });
});
