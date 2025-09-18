# Features

## Enable GPT-5 mini

To enable the server-side feature flag for GPT-5 mini for all clients, set the environment variable `ENABLE_GPT5_MINI=true` before starting the server. Example (PowerShell):

```powershell
$env:ENABLE_GPT5_MINI = 'true'
npm run server
```

To run both the server and the React dev server together (requires `concurrently`):

```powershell
npm install --save-dev concurrently
$env:ENABLE_GPT5_MINI = 'true'; npm run dev
```

Notes:
- Server holds model selection logic and should call your LLM provider using server-side API keys.
- Do not expose API keys or provider logic to the client.
