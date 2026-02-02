// ===== 実装 =====
function add(a, b) {
  return a + b;
}

// ===== テスト =====
function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (e) {
    console.error(`❌ ${name}`);
    console.error(e.message);
    process.exit(1); // テスト失敗で終了コード1
  }
}

function expect(received) {
  return {
    toBe(expected) {
      if (received !== expected) {
        throw new Error(`Expected ${expected}, but got ${received}`);
      }
    },
  };
}

// ===== テスト実行 =====
test('add(1, 2) should be 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('add(-1, 1) should be 0', () => {
  expect(add(-1, 1)).toBe(0);
});
