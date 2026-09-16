/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

import { encodeChatPathForWebSocket } from '../websocket-handler';

describe('encodeChatPathForWebSocket', () => {
  it('keeps a root-level chat path unchanged', () => {
    expect(encodeChatPathForWebSocket('untitled.chat')).toBe('untitled.chat');
  });

  it('preserves nested path separators', () => {
    expect(encodeChatPathForWebSocket('test/untitled.chat')).toBe(
      'test/untitled.chat'
    );
  });

  it('encodes spaces within path components', () => {
    expect(encodeChatPathForWebSocket('test/my chat.chat')).toBe(
      'test/my%20chat.chat'
    );
  });

  it('encodes reserved characters within individual path components', () => {
    expect(encodeChatPathForWebSocket('project #1/chat?.chat')).toBe(
      'project%20%231/chat%3F.chat'
    );
  });
});
