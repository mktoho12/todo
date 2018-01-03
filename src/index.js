'use strict'

// key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map()

/**
 * TODOを追加する
 * @param {string} task
 */
export const todo = task => {
  tasks.set(task, false)
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
  }
}

/**
 * 完了済のタスクの一覧の配列を取得する
 * @return {array}
 */
export const doneList = () => Array.from(tasks).filter(isDone).map(e => e[0])

/**
 * 項目を削除する
 * @param {string} task
 */
export const del = task => {
  tasks.delete(task)
}
