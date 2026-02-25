// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { OpenAI, ClientOptions } from 'openai-mcp-test';

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { OpenAI } from "openai-mcp-test";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: OpenAI)`
    : `const run: (${functionSource.client}: OpenAI) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.completions.create',
    'client.chat.completions.create',
    'client.chat.completions.delete',
    'client.chat.completions.list',
    'client.chat.completions.retrieve',
    'client.chat.completions.update',
    'client.chat.completions.messages.list',
    'client.embeddings.create',
    'client.files.content',
    'client.files.create',
    'client.files.delete',
    'client.files.list',
    'client.files.retrieve',
    'client.images.createVariation',
    'client.images.edit',
    'client.images.generate',
    'client.audio.transcriptions.create',
    'client.audio.translations.create',
    'client.audio.speech.create',
    'client.moderations.create',
    'client.models.delete',
    'client.models.list',
    'client.models.retrieve',
    'client.fineTuning.jobs.cancel',
    'client.fineTuning.jobs.create',
    'client.fineTuning.jobs.list',
    'client.fineTuning.jobs.listEvents',
    'client.fineTuning.jobs.pause',
    'client.fineTuning.jobs.resume',
    'client.fineTuning.jobs.retrieve',
    'client.fineTuning.jobs.checkpoints.list',
    'client.fineTuning.checkpoints.permissions.create',
    'client.fineTuning.checkpoints.permissions.delete',
    'client.fineTuning.checkpoints.permissions.retrieve',
    'client.fineTuning.alpha.graders.run',
    'client.fineTuning.alpha.graders.validate',
    'client.vectorStores.create',
    'client.vectorStores.delete',
    'client.vectorStores.list',
    'client.vectorStores.retrieve',
    'client.vectorStores.search',
    'client.vectorStores.update',
    'client.vectorStores.files.content',
    'client.vectorStores.files.create',
    'client.vectorStores.files.delete',
    'client.vectorStores.files.list',
    'client.vectorStores.files.retrieve',
    'client.vectorStores.files.update',
    'client.vectorStores.fileBatches.cancel',
    'client.vectorStores.fileBatches.create',
    'client.vectorStores.fileBatches.listFiles',
    'client.vectorStores.fileBatches.retrieve',
    'client.webhooks.unwrap',
    'client.beta.chatkit.sessions.cancel',
    'client.beta.chatkit.sessions.create',
    'client.beta.chatkit.threads.delete',
    'client.beta.chatkit.threads.list',
    'client.beta.chatkit.threads.listItems',
    'client.beta.chatkit.threads.retrieve',
    'client.beta.assistants.create',
    'client.beta.assistants.delete',
    'client.beta.assistants.list',
    'client.beta.assistants.retrieve',
    'client.beta.assistants.update',
    'client.beta.threads.create',
    'client.beta.threads.createAndRun',
    'client.beta.threads.delete',
    'client.beta.threads.retrieve',
    'client.beta.threads.update',
    'client.beta.threads.runs.cancel',
    'client.beta.threads.runs.create',
    'client.beta.threads.runs.list',
    'client.beta.threads.runs.retrieve',
    'client.beta.threads.runs.submitToolOutputs',
    'client.beta.threads.runs.update',
    'client.beta.threads.runs.steps.list',
    'client.beta.threads.runs.steps.retrieve',
    'client.beta.threads.messages.create',
    'client.beta.threads.messages.delete',
    'client.beta.threads.messages.list',
    'client.beta.threads.messages.retrieve',
    'client.beta.threads.messages.update',
    'client.batches.cancel',
    'client.batches.create',
    'client.batches.list',
    'client.batches.retrieve',
    'client.uploads.cancel',
    'client.uploads.complete',
    'client.uploads.create',
    'client.uploads.parts.create',
    'client.responses.cancel',
    'client.responses.compact',
    'client.responses.create',
    'client.responses.delete',
    'client.responses.retrieve',
    'client.responses.inputItems.list',
    'client.responses.inputTokens.count',
    'client.realtime.clientSecrets.create',
    'client.realtime.calls.accept',
    'client.realtime.calls.hangup',
    'client.realtime.calls.refer',
    'client.realtime.calls.reject',
    'client.conversations.create',
    'client.conversations.delete',
    'client.conversations.retrieve',
    'client.conversations.update',
    'client.conversations.items.create',
    'client.conversations.items.delete',
    'client.conversations.items.list',
    'client.conversations.items.retrieve',
    'client.evals.create',
    'client.evals.delete',
    'client.evals.list',
    'client.evals.retrieve',
    'client.evals.update',
    'client.evals.runs.cancel',
    'client.evals.runs.create',
    'client.evals.runs.delete',
    'client.evals.runs.list',
    'client.evals.runs.retrieve',
    'client.evals.runs.outputItems.list',
    'client.evals.runs.outputItems.retrieve',
    'client.containers.create',
    'client.containers.delete',
    'client.containers.list',
    'client.containers.retrieve',
    'client.containers.files.create',
    'client.containers.files.delete',
    'client.containers.files.list',
    'client.containers.files.retrieve',
    'client.containers.files.content.retrieve',
    'client.skills.create',
    'client.skills.delete',
    'client.skills.list',
    'client.skills.retrieve',
    'client.skills.update',
    'client.skills.content.retrieve',
    'client.skills.versions.create',
    'client.skills.versions.delete',
    'client.skills.versions.list',
    'client.skills.versions.retrieve',
    'client.skills.versions.content.retrieve',
    'client.videos.create',
    'client.videos.delete',
    'client.videos.downloadContent',
    'client.videos.list',
    'client.videos.remix',
    'client.videos.retrieve',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new OpenAI({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const console = {
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    eval(`${code}\nrun_ = run;`);
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }
};

export default { fetch };
