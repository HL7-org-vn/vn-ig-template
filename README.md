# vn-ig-template

`hl7.fhir.vn.template`

Template package for HL7 FHIR implementation guides published by HL7 Vietnam.

This repository separates template concerns from individual implementation guides, following the same general direction used by CH Core: the IG repository stays focused on FSH, content, validation, and publication workflow, while the shared visual and translation layer lives in a dedicated template package.

## Scope

This template package currently provides:

- Header, navigation, and visual branding for HL7 Vietnam implementation guides.
- Vietnamese single-language template translations through `translations/stringsBase.xml` and `translations/stringsArtifacts.xml`.
- Shared layouts, includes, CSS, JavaScript, and publisher XSLT hooks required by the IG Publisher.
- A reproducible package structure that can be installed into the FHIR package cache and referenced from `ig.ini`.

## Boundaries

This repository does not fully solve all Vietnamese localization gaps in the IG Publisher.

In particular, the following still belong to Publisher-level i18n work, not template work:

- `Messages_vi.properties`, which controls internal Publisher messages.
- `source/rendering-phrases-vi.po`, which controls many generated narrative phrases.

Those items should be handled through an upstream contribution or a controlled Publisher patch process.

## Recommended Usage

For release builds, reference a fixed template version from the IG repository:

```ini
[IG]
template = hl7.fhir.vn.template#0.1.0
```

For local development, install this package into the local FHIR package cache before running the IG Publisher.

## Release Policy

- `0.x` versions are trial-use template releases.
- IG repositories should prefer fixed versions for public builds.
- `current` may be used only for development branches.

## Repository Quality Rules

- Do not commit local scratch files such as `.index.db`, `.index.json`, or `cache.ini`.
- Keep all Vietnamese template translations version-controlled in this repository.
- Keep Publisher-specific patches out of this repository unless they are strictly template-related.

## License

This template package is published under `CC0-1.0` so that shared template assets can be reused across HL7 Vietnam implementation guides with minimal friction.
