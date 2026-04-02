# Changelog

## 0.2.0 (2026-04-02)

Full Changelog: [v0.1.1...v0.2.0](https://github.com/kwhinnery/openai-mcp-test/compare/v0.1.1...v0.2.0)

### Features

* **mcp:** add an option to disable code tool ([23ac65f](https://github.com/kwhinnery/openai-mcp-test/commit/23ac65f72ed94e099a3a6803de5a2d629e4f8137))


### Bug Fixes

* **client:** preserve URL params already embedded in path ([4a531b9](https://github.com/kwhinnery/openai-mcp-test/commit/4a531b9de1371ccd9b56c0d4806bfa46a2b006dc))
* **docs/contributing:** correct pnpm link command ([1fe898b](https://github.com/kwhinnery/openai-mcp-test/commit/1fe898b99eaab8f3f1d6182875c9f4d09f8d3483))
* **internal:** gitignore generated `oidc` dir ([843bcb3](https://github.com/kwhinnery/openai-mcp-test/commit/843bcb36973aa4036ed09433e1ff111a71fd62ad))
* **mcp:** update prompt ([026deec](https://github.com/kwhinnery/openai-mcp-test/commit/026deecb4b0b316e796aaf2c5c8f498915b895d3))


### Chores

* **ci:** escape input path in publish-npm workflow ([21f50d5](https://github.com/kwhinnery/openai-mcp-test/commit/21f50d5619ea6cbd4d8b45e20090db637fa8946e))
* **ci:** skip lint on metadata-only changes ([c9e1fe2](https://github.com/kwhinnery/openai-mcp-test/commit/c9e1fe279771331f6042bb37947d35a787932d5e))
* **ci:** skip uploading artifacts on stainless-internal branches ([c5b222d](https://github.com/kwhinnery/openai-mcp-test/commit/c5b222da538e8b3d99b2d3f3b7e7ce85b65bec9a))
* **internal:** bump @modelcontextprotocol/sdk, @hono/node-server, and minimatch ([2cd7825](https://github.com/kwhinnery/openai-mcp-test/commit/2cd782516c204880e4e4138dac73d5ee84eb3ff4))
* **internal:** codegen related update ([5b076c9](https://github.com/kwhinnery/openai-mcp-test/commit/5b076c9d705c679e6877a08cb865c22ab1009baf))
* **internal:** codegen related update ([d186f71](https://github.com/kwhinnery/openai-mcp-test/commit/d186f71b6054919eba481404d8c9e7d62cef1364))
* **internal:** codegen related update ([3f37dfc](https://github.com/kwhinnery/openai-mcp-test/commit/3f37dfc29fcfb80426d941ad990233e0865360ca))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([73510ce](https://github.com/kwhinnery/openai-mcp-test/commit/73510ce3f9e970807c7f07717a358fa566186bcc))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([e03fcb6](https://github.com/kwhinnery/openai-mcp-test/commit/e03fcb6672b0bf33cb81746a9e1498aff85a1dfb))
* **internal:** fix MCP server TS errors that occur with required client options ([4f5ca2d](https://github.com/kwhinnery/openai-mcp-test/commit/4f5ca2d5a494b3300402bf0331ee8bf2889337df))
* **internal:** improve import alias names ([dfef328](https://github.com/kwhinnery/openai-mcp-test/commit/dfef328d40d24eabad93c2d78a190a4988138c37))
* **internal:** improve local docs search for MCP servers ([281fe73](https://github.com/kwhinnery/openai-mcp-test/commit/281fe734197061bbf0c0a561135c3e6bd8fdf21e))
* **internal:** improve local docs search for MCP servers ([8e712f6](https://github.com/kwhinnery/openai-mcp-test/commit/8e712f602f8ce656c6c4626f31f219279d986b1d))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([633f1a7](https://github.com/kwhinnery/openai-mcp-test/commit/633f1a7599b0cbae6e2132e44221aada52fdec81))
* **internal:** make MCP code execution location configurable via a flag ([42d6901](https://github.com/kwhinnery/openai-mcp-test/commit/42d690178fb3f0d81a482479b0c50b9b73411e8c))
* **internal:** move stringifyQuery implementation to internal function ([0075d93](https://github.com/kwhinnery/openai-mcp-test/commit/0075d9369af002316a5307f0dc7154782b17ae7c))
* **internal:** refactor sse event parsing ([3a23f69](https://github.com/kwhinnery/openai-mcp-test/commit/3a23f6935e45802aa28e8c8ed6778ec55ca61c82))
* **internal:** support custom-instructions-path flag in MCP servers ([00de525](https://github.com/kwhinnery/openai-mcp-test/commit/00de5253d6de6e272583bd42f501fa918118ac71))
* **internal:** support local docs search in MCP servers ([ae5049b](https://github.com/kwhinnery/openai-mcp-test/commit/ae5049b230a41ecd34912fcc200a9cb236a85972))
* **internal:** support type annotations when running MCP in local execution mode ([a548a03](https://github.com/kwhinnery/openai-mcp-test/commit/a548a0328fc4023d0066ff8bbed5d59ca4f99b58))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([72bc1cf](https://github.com/kwhinnery/openai-mcp-test/commit/72bc1cf3295caa220664b96881e5a67b40344c83))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([91c77cd](https://github.com/kwhinnery/openai-mcp-test/commit/91c77cd38f29693791c43401866e681f3a9cbf47))
* **internal:** tweak CI branches ([b3fb66d](https://github.com/kwhinnery/openai-mcp-test/commit/b3fb66d6367aa4bbb87995ff3fc20cce600ca576))
* **internal:** update dependencies to address dependabot vulnerabilities ([d74f089](https://github.com/kwhinnery/openai-mcp-test/commit/d74f0891e3ffb5a0f63be6acec9527db17f75e5f))
* **internal:** update gitignore ([8e8e409](https://github.com/kwhinnery/openai-mcp-test/commit/8e8e40999db3f78854077a6caa16234ae51fd9c7))
* **internal:** update multipart form array serialization ([1374c61](https://github.com/kwhinnery/openai-mcp-test/commit/1374c61b47881b8b5cd55d331ed65d20b25c5212))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([5e38db7](https://github.com/kwhinnery/openai-mcp-test/commit/5e38db780aaff59e3262a7d4a1c768fcfb9b7c81))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([528d9ed](https://github.com/kwhinnery/openai-mcp-test/commit/528d9ed079771cae8c3c2315f79c892998723799))
* **mcp-server:** add support for session id, forward client info ([d7cab76](https://github.com/kwhinnery/openai-mcp-test/commit/d7cab76ba234a82aa77960b69aa6de3cc04b3961))
* **mcp-server:** improve instructions ([7d6abae](https://github.com/kwhinnery/openai-mcp-test/commit/7d6abae9a90f3bdff1c5d953a00a6a591aa12a7c))
* **mcp-server:** return access instructions for 404 without API key ([000f0da](https://github.com/kwhinnery/openai-mcp-test/commit/000f0dac609dd3588991dfa38a038a28d91f4c6d))
* **test:** do not count install time for mock server timeout ([abb7cda](https://github.com/kwhinnery/openai-mcp-test/commit/abb7cda30b2148ce4379681c338fc3db70745574))
* **tests:** bump steady to v0.19.4 ([8f46070](https://github.com/kwhinnery/openai-mcp-test/commit/8f46070932a111f475c8fe07391d92ef16ca3347))
* **tests:** bump steady to v0.19.5 ([c9aeffb](https://github.com/kwhinnery/openai-mcp-test/commit/c9aeffb8d9e6dc737b41a4b845d2db21ce431a56))
* **tests:** bump steady to v0.19.6 ([fa2ab31](https://github.com/kwhinnery/openai-mcp-test/commit/fa2ab319d01e78c9ac7545f315fc42b84879cc48))
* **tests:** bump steady to v0.19.7 ([953152a](https://github.com/kwhinnery/openai-mcp-test/commit/953152a1fbbc454cbb1c5c6c34b783efe61e4137))
* **tests:** bump steady to v0.20.1 ([6fea82e](https://github.com/kwhinnery/openai-mcp-test/commit/6fea82ed998d06cf871ef8061e25304bad7ca456))
* **tests:** bump steady to v0.20.2 ([59f3d36](https://github.com/kwhinnery/openai-mcp-test/commit/59f3d36f27aa515f67855bd1e61b00108164d646))
* update placeholder string ([2f578eb](https://github.com/kwhinnery/openai-mcp-test/commit/2f578eb8865b1050ba1f7b692d7b06e67d30e9dd))


### Refactors

* **tests:** switch from prism to steady ([c2b2187](https://github.com/kwhinnery/openai-mcp-test/commit/c2b2187b592f2576b81f0686ebfa2c69e117a8d2))

## 0.1.1 (2026-02-23)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/kwhinnery/openai-mcp-test/compare/v0.1.0...v0.1.1)

### Chores

* update SDK settings ([30d8790](https://github.com/kwhinnery/openai-mcp-test/commit/30d87904858a441b6d78603218f3119f153c3a49))
* update SDK settings ([ec6dc2a](https://github.com/kwhinnery/openai-mcp-test/commit/ec6dc2aed400e0330ae903f6e1a1386d7d78746c))

## 0.1.0 (2026-02-23)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/kwhinnery/openai-mcp-test/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([a27cd87](https://github.com/kwhinnery/openai-mcp-test/commit/a27cd8762f9d8d3b5562e2f3dcf8738da75783e6))
* **api:** manual updates ([e20d4e8](https://github.com/kwhinnery/openai-mcp-test/commit/e20d4e8fce0e2abc62e7b2d807362173cc9777ad))


### Chores

* configure new SDK language ([8aee4c5](https://github.com/kwhinnery/openai-mcp-test/commit/8aee4c570dfc81bfe670683dc746f5cd05e61926))
* **internal:** configure MCP Server hosting ([77082ba](https://github.com/kwhinnery/openai-mcp-test/commit/77082ba4008630bafbe854e27c19d2655ea07d47))
* update SDK settings ([2fc259a](https://github.com/kwhinnery/openai-mcp-test/commit/2fc259a5451890d511714a0e357f836a4396d93c))
