import Home from '@/views/Home.vue'
import { render } from '@testing-library/vue'
import gifsStore from '@/store/modules/gifs'
import authStore from '@/store/modules/auth'
import { gifsMock } from '@/views/__mocks__/gifs'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        data: gifsMock,
      }),
  })
})

function renderVuexTestComponent() {
  return render(Home, {
    store: { modules: { gifs: { ...gifsStore }, auth: { ...authStore } } },
  })
}

describe('Home View', () => {
  it('should be rendered', () => {
    renderVuexTestComponent()
  })
  it('should have gif test', () => {
    const { getByText } = renderVuexTestComponent()
    const gif = getByText('Gif test')
    expect(gif).toBeDefined()
  })
})
