const assert = require("node:assert/strict");
const test = require("node:test");

test("CommonJS consumers can load every published package", () => {
  assert.equal(
    typeof require("opentelemetry-node-bundler-plugin-utils")
      .getInstrumentation,
    "function",
  );
  assert.equal(
    typeof require("opentelemetry-esbuild-plugin-node").openTelemetryPlugin,
    "function",
  );
  assert.equal(
    typeof require("opentelemetry-rollup-plugin-node").openTelemetryPlugin,
    "function",
  );
  assert.equal(
    typeof require("opentelemetry-unplugin-node").openTelemetryPlugin,
    "object",
  );
  assert.equal(
    typeof require("opentelemetry-unplugin-node").openTelemetryPlugin.rollup,
    "function",
  );
  assert.equal(
    typeof require("opentelemetry-webpack-plugin-node")
      .OpenTelemetryWebpackPlugin,
    "function",
  );
});
