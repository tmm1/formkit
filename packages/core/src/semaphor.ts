type Model = Record<string, unknown> | unknown[]

const semaphore = new WeakMap<Model, number>()

export default {
  touch(model: Model) {
    if (semaphore.has(model)) {
      // semaphore.get
    }
  },
}
