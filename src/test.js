'use strict'

import * as todo from './index.js'
import assert from 'assert'

// todoとlistのテスト
todo.todo('ノートを買う')
todo.todo('鉛筆を買う')
assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う'])

// doneとdoneListのテスト
todo.done('ノートを買う')
assert.deepEqual(todo.list(), ['鉛筆を買う'])
assert.deepEqual(todo.doneList(), ['ノートを買う'])

// delのテスト
todo.del('鉛筆を買う')
todo.del('ノートを買う')
assert.deepEqual(todo.list(), [])
assert.deepEqual(todo.doneList(), [])

console.log('テストが正常に完了しました')
