# Facebook Account Checker & Intelligence API

[![OSINT Trace - Direct API (Recommended)](https://img.shields.io/badge/OSINT%20Trace-Direct%20API%20(Recommended)-00DF9A?style=for-the-badge&logo=shield)](https://osinttrace.com) [![API.Market](https://img.shields.io/badge/API.Market-8B5CF6?style=for-the-badge)](https://api.market/store/osint-trace-1/facebook-checker) [![RapidAPI](https://img.shields.io/badge/RapidAPI-black?style=for-the-badge&logo=rapidapi)](https://rapidapi.com/osint-org-osint-org-default/api/facebook-checker)

An enterprise-grade OSINT API to verify Facebook presence and extract rich profile intelligence (numeric FBIDs, canonical usernames, display names, biographies, follower counts, page likes, weekly engagement, custom avatar status, locales, entity types, canonical URLs, and Meta Accounts Center linked accounts) by vanity handle, direct profile URL, email address, or phone number.

> ⚠️ **Metadata Availability & Privacy Notice**:
> Extracted metadata is **conditional and never guaranteed**. Availability strictly depends on:
> 1. **Input Format**: Vanity handles and direct profile URLs inspect public profiles to extract numeric FBIDs (`user_id`), audience metrics (`followers`, `likes`, `talking_about`), and biographical info. Email and phone lookups query Meta Accounts Center (CAA) and login verification to confirm account existence, returning partial metadata (such as custom avatar or linked Instagram account) or presence-only (`live: true`) without audience metrics.
> 2. **Platform Constraints**: Upstream security controls and platform changes dictate exposed data.
> 3. **Target Privacy Settings**: Private profiles, restricted accounts, or unlisted directory settings omit public metadata attributes.

---

## Table of Contents
- [Features](#features)
- [Supported Identifiers & Formats](#supported-identifiers--formats)
- [Getting Started](#getting-started)
  - [1. Get API Key](#1-get-api-key)
  - [2. Base URL & Authentication](#2-base-url--authentication)
- [API Endpoints](#api-endpoints)
  - [Single Account Check](#single-account-check)
  - [Code Examples](#code-examples)
- [Response Format](#response-format)
- [HTTP Status Codes](#http-status-codes)
- [Requirements](#requirements)
- [Pricing](#pricing)
- [Support](#support)
- [Legal Compliance](#legal-compliance)

---

## Features

✅ **Instant Verification**: Real-time presence verification for personal profiles and Facebook Pages.  
✅ **Universal URL & Handle Normalization**: Query using vanity handles (`alexhonnold`, `@alexhonnold`), direct profile URLs (`https://facebook.com/alexhonnold`), numeric ID links (`profile.php?id=100044484697508`), email addresses, or E.164 phone numbers.  
✅ **Deep Profile & Engagement Intelligence**: When querying by username or profile URL, automatically extracts numeric FBID (`user_id`), canonical username, clean bio, followers, page likes, weekly engagement (`talking_about`), custom avatar status, locale, and entity type (`PROFILE` vs `PAGE`).  
✅ **Meta Accounts Center (CAA) Discovery**: Cross-references email and phone queries against Meta Accounts Center to detect presence, custom avatars, and cross-linked Instagram accounts.  
✅ **High Performance**: Asynchronous HTTP/2 architecture with 4 KB early-abort streaming, datacenter proxy hedging, and sub-second response times.  
✅ **Developer-Friendly**: Available via direct REST API on [OSINT Trace](https://osinttrace.com) (Recommended) and major developer marketplaces.

---

## Supported Identifiers & Formats

| Identifier Format | Supported | Resolution Mechanism | Extracted Metadata Scope |
| :--- | :---: | :--- | :--- |
| **Username & Vanity Handle** | ✅ | Public OpenGraph profile stream (`facebook.com/{user}`) | `user_id`, `username`, `name`, `bio`, `followers`, `likes`, `talking_about`, `avatar_url`, `has_custom_avatar`, `locale`, `entity_type`, `profile_url` |
| **Direct Profile URL** | ✅ | Universal URL normalization + stream (`facebook.com/...`, `profile.php?id=...`, `m.facebook.com/...`) | `user_id`, `username`, `name`, `bio`, `followers`, `likes`, `talking_about`, `avatar_url`, `has_custom_avatar`, `locale`, `entity_type`, `profile_url` |
| **Email Address** | ✅ | Meta Accounts Center (CAA) GraphQL search (`caa_ar_fb_account_search`) | `name`, `avatar_url`, `has_custom_avatar`, `linked_accounts` *(or presence-only `live: true`)* |
| **Phone Number** | ✅ | CAA Preflight + GraphQL login verification | `name`, `avatar_url`, `has_custom_avatar`, `linked_accounts` *(or presence-only `live: true`)* |

---

## Getting Started

### 1. Get API Key

- **OSINT Trace Direct (Recommended)**: Create an account on [OSINT Trace](https://osinttrace.com) and generate your API Key from the [Workspace Dashboard](https://app.osinttrace.com).
- **API.Market**: Subscribe via [API.Market Facebook Checker](https://api.market/store/osint-trace-1/facebook-checker).
- **RapidAPI**: Subscribe via [RapidAPI Facebook Checker](https://rapidapi.com/osint-org-osint-org-default/api/facebook-checker).

### 2. Base URL & Authentication

Authentication headers and endpoints vary by provider:

| Provider | Base URL | Auth Header | Endpoint |
|:---|:---|:---|:---|
| **OSINT Trace (Direct - Recommended)** | `https://api.osinttrace.com/v1` | `x-osint-key: YOUR_OSINT_KEY` | `POST /check/facebook` |
| **API.Market** | `https://prod.api.market/api/v1/osint-trace-1/facebook-checker` | `X-Api-Key: YOUR_API_KEY` | `POST /check/facebook` |
| **RapidAPI** | `https://facebook-checker.p.rapidapi.com` | `X-RapidAPI-Key: YOUR_API_KEY`<br>`X-RapidAPI-Host: facebook-checker.p.rapidapi.com` | `POST /check` |

---

## API Endpoints

### Single Account Check

**Endpoint (OSINT Trace Direct - Recommended):**
> `POST https://api.osinttrace.com/v1/check/facebook`

**Request Body (Username / Handle / URL):**
```json
{
  "input": "alexhonnold"
}
```

**Request Body (Email or Phone):**
```json
{
  "input": "target@example.com"
}
```

### Code Examples

<details open>
<summary><b>OSINT Trace Direct API (cURL) — Recommended</b></summary>

```bash
curl --request POST \
     --url https://api.osinttrace.com/v1/check/facebook \
     --header 'x-osint-key: YOUR_OSINT_KEY' \
     --header 'Content-Type: application/json' \
     --data '{"input": "alexhonnold"}'
```
</details>

<details>
<summary><b>API.Market (cURL)</b></summary>

```bash
curl --request POST \
     --url https://prod.api.market/api/v1/osint-trace-1/facebook-checker/check/facebook \
     --header 'X-Api-Key: YOUR_API_KEY' \
     --header 'Content-Type: application/json' \
     --data '{"input": "alexhonnold"}'
```
</details>

<details>
<summary><b>RapidAPI (cURL)</b></summary>

```bash
curl --request POST \
     --url https://facebook-checker.p.rapidapi.com/check \
     --header 'X-RapidAPI-Host: facebook-checker.p.rapidapi.com' \
     --header 'X-RapidAPI-Key: YOUR_API_KEY' \
     --header 'Content-Type: application/json' \
     --data '{"input": "alexhonnold"}'
```
</details>

> Additional code snippets for Python, Node.js, Go, PHP, C#, Java, and Shell are available in the [`examples/`](./examples) directory.

---

## Response Format

### 1. Account Found via Username or Profile URL (Full Profile & Metrics)
```json
{
  "live": true,
  "note": null,
  "metadata": {
    "user_id": "100044484697508",
    "username": "AlexHonnold",
    "name": "Alex Honnold",
    "bio": "It is what it is. And it's pretty good.",
    "avatar_url": "https://scontent-cdg6-1.xx.fbcdn.net/v/t39.30808-1/example.jpg",
    "has_custom_avatar": true,
    "followers": 1092502,
    "talking_about": 5161,
    "locale": "en_US",
    "entity_type": "PROFILE",
    "profile_url": "https://www.facebook.com/AlexHonnold"
  }
}
```

### 2. Account Found via Email or Phone (Meta CAA Presence & Linked Accounts)
```json
{
  "live": true,
  "note": null,
  "metadata": {
    "name": "Alex Honnold",
    "avatar_url": "https://scontent.xx.fbcdn.net/v/t1.30497-1/example.jpg",
    "has_custom_avatar": true,
    "linked_accounts": [
      {
        "name": "alexhonnold",
        "avatar_url": "https://instagram.fsof9-1.fna.fbcdn.net/example.jpg",
        "account_type": "INSTAGRAM"
      }
    ]
  }
}
```

### 3. Account Not Found
```json
{
  "live": false,
  "note": null,
  "metadata": null
}
```

---

## HTTP Status Codes

| Status Code | Description | Rationale |
|:---|:---|:---|
| **`200 OK`** | Success | Query processed and presence/metadata returned. |
| **`400 Bad Request`** | Validation Error | Malformed request body or input under minimum length. |
| **`401 Unauthorized`** | Authentication Required | Missing, invalid, or expired API key header. |
| **`403 Forbidden`** | Quota / Subscription Error | Quota balance exhausted or subscription inactive. |
| **`408 Request Timeout`** | Timeout | Upstream verification exceeded maximum execution window. |
| **`429 Too Many Requests`** | Rate Limit Exceeded | Exceeded 1 request/second limit. |

---

## Requirements

- **Minimum input length**: 3 characters
- **Supported input formats**:
  - Vanity handles (`alexhonnold`, `@alexhonnold`)
  - Direct profile URLs (`https://www.facebook.com/alexhonnold`, `profile.php?id=...`, `m.facebook.com/...`)
  - Email addresses (`user@example.com`)
  - Phone numbers (E.164 standard recommended: `+1234567890`)
- **Rate Limit**: 1 request per second per active API key (Trace-Credits queries processed up to 3 req/s).

---

## Pricing

- **Direct Plans (Recommended)**: Flexible subscription tiers and bulk volume pricing available on [OSINT Trace Pricing](https://osinttrace.com/pricing).
- **Marketplace Plans**: Subscriptions also available through [API.Market](https://api.market/store/osint-trace-1/facebook-checker) and [RapidAPI](https://rapidapi.com/osint-org-osint-org-default/api/facebook-checker/pricing).
- **Free Tier**: Free tier available for evaluation and testing.

---

## Support

For technical inquiries, enterprise SLA plans, or integration assistance:  
📧 Email: [support@osinttrace.com](mailto:support@osinttrace.com)  
🌐 Website: [osinttrace.com](https://osinttrace.com)

---

## Legal Compliance

This API is designed for legitimate cybersecurity investigation, fraud prevention, compliance auditing, and threat intelligence. Users must:
- Comply with applicable local and international data protection regulations (e.g., GDPR, CCPA).
- Adhere to Meta's Terms of Service and acceptable use policies.
- Ensure lawful basis for investigative data processing.

*This service is independently operated by OSINT Trace and is not affiliated with or endorsed by Meta Platforms, Inc.*
