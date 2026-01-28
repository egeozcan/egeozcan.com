# TypeScript Migration Design

## Goal

Convert the two JavaScript processor files to TypeScript using jstatico's `_processors/` directory structure.

## Current State

- `src/blog/blogPages.processor.js` - paginated blog index (5 posts/page)
- `src/notlar/blogPages.processor.js` - paginated notlar index (10 posts/page)

Both use CommonJS and global `FileResult`/`FileResultArray` classes.

## New Structure

```
src/
├── _processors/
│   └── postprocessors/
│       ├── blogPages.ts
│       └── notlarPages.ts
├── blog/
│   ├── blogPages.processor.ts    (trigger file)
│   └── post/
├── notlar/
│   ├── notlarPages.processor.ts  (trigger file)
│   └── post/
```

## Implementation

Each processor exports a `Postprocessor` object with:
- `match: RegExp` - matches trigger files
- `process(context)` - creates paginated FileResultArray

Processors use jstatico's typed exports:
- `import type { Postprocessor, TreeContext } from "jstatico"`
- `import { FileResult, FileResultArray } from "jstatico"`

## Migration Steps

1. Create `src/_processors/postprocessors/` directory
2. Create `blogPages.ts` and `notlarPages.ts`
3. Create empty trigger files in content directories
4. Delete old `.processor.js` files
5. Test build with `bun run build`
