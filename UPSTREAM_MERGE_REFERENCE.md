# Upstream Merge Reference

Last updated: March 10, 2026

## Purpose

This file records the intentional fork-specific changes that should be preserved when syncing/merging from upstream.

## Keep These Change Scopes

1. OAuth / SSO label customization and related auth behavior:
   - `src/app/[variants]/(auth)/signin/*`
   - `src/libs/better-auth/sso/**`
   - `src/envs/auth.ts`
   - `src/server/globalConfig/index.ts`
   - `src/store/serverConfig/selectors.ts`
   - `packages/types/src/serverConfig.ts`
   - `src/locales/default/auth.ts`
   - `locales/en-US/auth.json`
   - `locales/zh-CN/auth.json`
   - `docs/self-hosting/auth.mdx`

2. Branding constant migration (`Lobe AI` -> `BRANDING_NAME`) and related UI usage:
   - `packages/business/const/src/branding.ts`
   - `src/locales/default/chat.ts`
   - `src/routes/(main)/eval/bench/[benchmarkId]/features/RunCreateModal/index.tsx`
   - `src/routes/(main)/eval/bench/[benchmarkId]/features/RunEditModal/index.tsx`
   - `src/routes/(main)/home/_layout/Body/Agent/List/InboxItem.tsx`
   - `src/routes/(main)/settings/stats/features/rankings/AssistantsRank.tsx`
   - `src/routes/(mobile)/(home)/features/SessionListContent/Inbox/index.tsx`

3. Branding-related test compatibility updates:
   - `src/server/manifest.test.ts`
   - `src/server/metadata.test.ts`
   - `src/store/chat/slices/topic/selectors.test.ts`

4. Repository-specific workflow and CI customizations:
   - `.github/actions/desktop-publish-s3/action.yml`
   - `.github/workflows/e2e.yml`
   - `.github/workflows/lighthouse.yml`
   - `.github/workflows/pr-build-docker.yml`
   - `.github/workflows/release-docker.yml`
   - `.github/workflows/sync.yml`
   - `.github/workflows/test.yml`

5. Branding assets:
   - `public/apple-touch-icon.png`
   - `public/favicon-32x32.ico`
   - `public/favicon.ico`
   - `public/icons/icon-192x192.maskable.png`
   - `public/icons/icon-192x192.png`
   - `public/icons/icon-512x512.maskable.png`
   - `public/icons/icon-512x512.png`

## Notes For Future Merge Sessions

1. Start from latest `upstream/main`.
2. Re-apply only the scopes listed above (plus any new explicitly requested additions).
3. Validate diff against `upstream/main` to ensure no unrelated carry-over changes are included.
