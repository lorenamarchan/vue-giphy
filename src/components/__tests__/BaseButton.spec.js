import { fireEvent, render } from '@testing-library/vue'
import BaseButton from '@/components/BaseButton.vue'
describe('BaseButton Component', () => {
  it('should render button', () => {
    render(BaseButton)
  })
  it('should emit click event when button is clicked', async () => {
    const { getByRole, emitted } = render(BaseButton)
    const button = getByRole('button')
    await fireEvent.click(button)
    expect(emitted().click).toBeTruthy()
  })
  it('should have the primary theme', () => {
    const { getByRole } = render(BaseButton, {
      props: { theme: 'primary' },
    })
    const button = getByRole('button')
    expect(button.classList).toContain('primary')
  })
})
