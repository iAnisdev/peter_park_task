import { setActivePinia, createPinia } from 'pinia'
import { useRecordStore } from '../src/stores/counter'

describe('Record Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('record is object', () => {
    const store = useRecordStore()
    expect(store.record).toBe({})
  })

  it('records is list', () => {
    const store = useRecordStore()
    expect(store.records).toBe([])
  })
})