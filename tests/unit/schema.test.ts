import { describe, expect, it } from 'vitest';
import { SourceSchema, TechEventSchema, wordCount, sourceKey } from '@/data/schema';

describe('schema primitives', () => {
  it('accepts a well formed source and rejects a malformed one', () => {
    expect(SourceSchema.safeParse({ author: 'A', title: 'T', publisher: 'P', year: 2000 }).success).toBe(true);
    expect(SourceSchema.safeParse({ author: 'A', title: 'T', year: 2000 }).success).toBe(false);
  });
  it('rejects an event with a non kebab-case id', () => {
    const r = TechEventSchema.safeParse({ id: 'Not Kebab' });
    expect(r.success).toBe(false);
  });
  it('counts words and normalizes source keys', () => {
    expect(wordCount('one two  three')).toBe(3);
    expect(sourceKey({ author: 'C. Shannon', title: 'A Mathematical Theory', publisher: 'BSTJ', year: 1948 })).toBe(
      sourceKey({ author: 'c shannon', title: 'a mathematical theory', publisher: 'x', year: 1948 }),
    );
  });
});
