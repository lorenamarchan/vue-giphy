import { createLocalVue } from '@vue/test-utils'
import vuex from 'vuex'
import gifsStore from '@/store/modules/gifs'
import { gifsMock } from '@/views/__mocks__/gifs'

describe('Gifs Store', () => {
  it('should have gifs', () => {
    const localVue = createLocalVue()
    localVue.use(vuex)
    const store = new vuex.Store({ ...gifsStore })
    expect(store.state.allGifs.length).toBe(0)
    store.commit('setAllGifs', gifsMock)
    expect(store.state.allGifs.length).toBe(1)
  })
})
