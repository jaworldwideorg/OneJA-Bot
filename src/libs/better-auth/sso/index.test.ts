import { describe, expect, it, vi } from 'vitest';

vi.mock('@/envs/app', () => ({
  appEnv: {
    APP_URL: 'https://example.com',
  },
}));

vi.mock('@/envs/auth', () => ({
  authEnv: {
    AUTH_MICROSOFT_ID: 'test-microsoft-id',
    AUTH_MICROSOFT_LABEL: 'Corporate SSO',
    AUTH_MICROSOFT_SECRET: 'test-microsoft-secret',
    AUTH_SSO_PROVIDERS: 'microsoft-entra-id',
  },
}));

describe('getBetterAuthSSOProviderLabels', () => {
  it('should map custom label for both alias and canonical provider ids', async () => {
    const { getBetterAuthSSOProviderLabels } = await import('./index');

    const labels = getBetterAuthSSOProviderLabels();

    expect(labels['microsoft-entra-id']).toBe('Corporate SSO');
    expect(labels.microsoft).toBe('Corporate SSO');
  });
});
