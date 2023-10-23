# Random Notes

### PyCharm

- If you don't want to commit some of your changes to the repository, you can set them aside for a while, by moving to a separate _changelist_, or by putting them to a shelf. Select such file in the **Local** tab of the **Changes** tool window, and on the context menu choose **Move to another changelist**, or **Shelve Changes**.
-
- https://clips.twitch.tv/GlamorousEnthusiasticTurtleCoolStoryBro

## January 17 2019

This performs the same fix-permissions

`find <path> -type f -exec chmod 644 {} \; -print`

`find <path> -type d -exec chmod 755 {} \; -print`

## January 30 2019

###### Changelog format

```markdown
## [<smt_version>](link-to-github-comit) (commit date)

- [changes ...]
```

```json
{ [Function: webpack]
  version: '4.29.0',
  WebpackOptionsDefaulter: [Function: WebpackOptionsDefaulter],
  WebpackOptionsApply: [Function: WebpackOptionsApply],
  Compiler: [Function: Compiler],
  MultiCompiler: [Function: MultiCompiler],
  NodeEnvironmentPlugin: [Function: NodeEnvironmentPlugin],
  validate: [Function: bound validateSchema],
  validateSchema: [Function: validateSchema],
  WebpackOptionsValidationError: [Function: WebpackOptionsValidationError],
  AutomaticPrefetchPlugin: [Getter],
  BannerPlugin: [Getter],
  CachePlugin: [Getter],
  ContextExclusionPlugin: [Getter],
  ContextReplacementPlugin: [Getter],
  DefinePlugin: [Getter],
  Dependency: [Getter],
  DllPlugin: [Getter],
  DllReferencePlugin: [Getter],
  EnvironmentPlugin: [Getter],
  EvalDevToolModulePlugin: [Getter],
  EvalSourceMapDevToolPlugin: [Getter],
  ExtendedAPIPlugin: [Getter],
  ExternalsPlugin: [Getter],
  HashedModuleIdsPlugin: [Getter],
  HotModuleReplacementPlugin: [Getter],
  IgnorePlugin: [Getter],
  LibraryTemplatePlugin: [Getter],
  LoaderOptionsPlugin: [Getter],
  LoaderTargetPlugin: [Getter],
  MemoryOutputFileSystem: [Getter],
  Module: [Getter],
  ModuleFilenameHelpers: [Getter],
  NamedChunksPlugin: [Getter],
  NamedModulesPlugin: [Getter],
  NoEmitOnErrorsPlugin: [Getter],
  NormalModuleReplacementPlugin: [Getter],
  PrefetchPlugin: [Getter],
  ProgressPlugin: [Getter],
  ProvidePlugin: [Getter],
  SetVarMainTemplatePlugin: [Getter],
  SingleEntryPlugin: [Getter],
  SourceMapDevToolPlugin: [Getter],
  Stats: [Getter],
  Template: [Getter],
  UmdMainTemplatePlugin: [Getter],
  WatchIgnorePlugin: [Getter],
  dependencies: { DependencyReference: [Getter] },
  optimize:
   { AggressiveMergingPlugin: [Getter],
     AggressiveSplittingPlugin: [Getter],
     ChunkModuleIdRangePlugin: [Getter],
     LimitChunkCountPlugin: [Getter],
     MinChunkSizePlugin: [Getter],
     ModuleConcatenationPlugin: [Getter],
     OccurrenceOrderPlugin: [Getter],
     OccurrenceModuleOrderPlugin: [Getter],
     OccurrenceChunkOrderPlugin: [Getter],
     RuntimeChunkPlugin: [Getter],
     SideEffectsFlagPlugin: [Getter],
     SplitChunksPlugin: [Getter],
     UglifyJsPlugin: [Getter],
     CommonsChunkPlugin: [Getter] },
  web:
   { FetchCompileWasmTemplatePlugin: [Getter],
     JsonpTemplatePlugin: [Getter] },
  webworker: { WebWorkerTemplatePlugin: [Getter] },
  node:
   { NodeTemplatePlugin: [Getter],
     ReadFileCompileWasmTemplatePlugin: [Getter] },
  debug: { ProfilingPlugin: [Getter] },
  util: { createHash: [Getter] } }
```

```bash
find EXPRESSION<[Tests][Actions][Global options][Positional options][Operators]>
```

## Find command

**syntax** `find [Test Actions Global-options Positional-options Operator]`

### Tests

Test return a true or false value, usually on the basis of some property of a file we are considering. the `-empty` test for example is true only when the current file is empty

### Actions

Actions have side effects (such as printing something on the standard output) and return either true or false, usually based on whether or not they are successful. the `-print` action for example prints the name of the current file on the `stdout`

### Global options

Global options affect the operation of tests and actions specified on any part of the command line. Global options **always return true**. the `-depth` option for example makes `find` traverse the file system in a depth-first order
