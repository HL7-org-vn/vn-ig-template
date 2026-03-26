# Review And Improvements

## What was improved in the initial split

- Replaced inherited `fhir2.base.template` metadata with `hl7.fhir.vn.template`.
- Added repository-level hygiene rules so scratch files are not version-controlled.
- Clarified the contract between the template package and the IG repository.
- Clarified the boundary between template-level localization and Publisher-level localization.
- Locked the first standalone template release to `0.1.0` so IG repositories can reference a fixed version.

## Why a dedicated template package is better than a local folder

- Public builds become reproducible across developer machines and CI runners.
- Multiple HL7 Vietnam guides can reuse one template without copying assets.
- Versioning becomes explicit, which makes release QA easier.
- The IG repository becomes smaller and easier to review.

## Improvements already handled here

- Vietnamese-first single-language presentation assets are now part of the template package.
- Shared includes, layouts, styles, scripts, and translation XML are kept in one place.
- Template metadata is ready for package-based installation.

## Improvements still outside this repository

- Add `Messages_vi.properties` to the IG Publisher stack to remove locale fallback messages.
- Add `source/rendering-phrases-vi.po` to the IG Publisher stack to translate generated narrative phrases more fully.
- Publish the template package to a FHIR package distribution channel if HL7 Vietnam wants to remove GitHub-based installation later.

## Release Guidance

- Keep `0.x` template releases small and traceable.
- Prefer fixed template versions in public IG releases.
- Avoid using `current` for public release builds.

