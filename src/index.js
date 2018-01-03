'use strict'

import fs from 'fs'

const fileName = './tasks.json'

// 同期的にファイルから復元
const load = fileName => {
  try {
    const data = fs.readFileSync(fileName, 'utf8')
    return new  Map(JSON.parse(data))
  } catch(ignore) {
    console.log(`${fileName}から復元できませんでした`)
    return new Map()
  }
}

// key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = load(fileName)

/**
 * タスクをファイルに保存する
 */
const saveTasks = () => {
  fs.writeFileSync(fileName, JSON.stringify(Array.from(tasks)), 'utf8')
}

/**
 * TODOを追加する
 * @param {string} task
 */
export const todo = task => {
  tasks.set(task, false)
  saveTasks()
}

/**
 * タスクと完了したかどうかが含まれる配列を受け取り、完了したかを返す
 * @param {array} taskAndIsDonePair
 * @return {boolean} 完了したかどうか
 */
const isDone = taskAndIsDonePair => taskAndIsDonePair[1]

/**
 * タスクと完了したかどうかが含まれる配列を受け取り、完了していないかを返す
 * @param {array} taskAndIsDonePair
 * @return {boolean} 完了していないかどうか
 */
const isNotDone = taskAndIsDonePair => !isDone(taskAndIsDonePair)

/**
 * TODOの一覧の配列を取得する
 * @return {array}
 */
export const list = () => Array.from(tasks).filter(isNotDone).map(e => e[0])

/**
 * TODOを完了状態にする
 * @param {string} task
 */
export const done = task => {
  if(tasks.has(task)) {
    tasks.set(task, true)
    saveTasks()
  }
}

/**
 * 完了済のタスクの一覧の配列を取得する
 * @return {array}
 */
export const donelist = () => Array.from(tasks).filter(isDone).map(e => e[0])

/**
 * 項目を削除する
 * @param {string} task
 */
export const del = task => {
  tasks.delete(task)
  saveTasks()
}
