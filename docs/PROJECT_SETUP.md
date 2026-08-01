# Zinergi Health Platform — Project Setup

## Repository

- Repository: `MiekeDams/zinergi-testsite`
- Productiebranch: `main`
- Ontwikkelbranch: `develop`
- Testdomein: `test.zinergi.nl`

## Werkwijze

1. Nieuwe ontwikkeling gebeurt op `develop` of op een tijdelijke featurebranch vanaf `develop`.
2. De bestaande versie op `main` blijft beschikbaar totdat een nieuwe versie is getest.
3. Goedgekeurde wijzigingen worden via een pull request samengevoegd naar `main`.
4. Hosting publiceert `main` naar het testdomein totdat een afzonderlijke productieomgeving wordt ingericht.

## Doelstructuur

```text
/
├── apps/
│   ├── client/
│   ├── coach/
│   └── admin/
├── packages/
│   ├── design-system/
│   ├── localization/
│   ├── data/
│   └── shared/
├── supabase/
│   ├── migrations/
│   └── seed/
├── docs/
└── legacy/
```

## Talen

- Nederlands (`nl`)
- Engels (`en`)
- Bahasa Indonesia (`id`)

Alle zichtbare teksten worden later uit centrale vertaalbestanden geladen.

## Eerste technische mijlpaal

Alpha 0.1 bevat:

- registratie en login;
- onboarding;
- persoonlijk dashboard;
- voeding;
- training;
- gezondheid;
- profiel;
- basisrollen voor cliënt, coach en admin.

## Nog te koppelen

- Hostingproject en automatische deployment;
- Supabase-project;
- omgevingsvariabelen;
- authenticatieproviders;
- database en Row Level Security;
- testaccounts en voorbeelddata.
