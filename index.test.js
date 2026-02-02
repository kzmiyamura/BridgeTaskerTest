// ===== 実装 =====
function add(a, b) {
  return a + b;
}

// ===== テストランナー =====
function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (e) {
    console.error(`❌ ${name}`);
    console.error(e.message);
    process.exit(1); // テスト失敗で終了コード1（GitHub Actionsが失敗と判定）
  }
}

// ===== アサーション =====
function expect(received) {
  return {
    toBe(expected) {
      if (received !== expected) {
        throw new Error(`Expected ${expected}, but got ${received}`);
      }
    },
    not: {
      toBe(expected) {
        if (received === expected) {
          throw new Error(`Expected NOT ${expected}, but got ${received}`);
        }
      },
    },
  };
}

// ===== テスト実行 =====
test('add(1, 2) should be 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('add(3, 4) should be 7', () => {
  expect(add(3, 4)).toBe(7);
});

test('add(-1, 1) should be 0', () => {
  expect(add(-1, 1)).toBe(0);
});

test('add(2, 3) should NOT be 6', () => {
  expect(add(2, 3)).not.toBe(6);
});
