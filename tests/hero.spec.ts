import { expect, test } from '@playwright/test'
import path from 'node:path'

const reviewPath = (name: string) => path.join(process.cwd(), '.impeccable', 'review', name)

const loadWholePage = async (page: import('@playwright/test').Page) => {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 90))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(800)
}

test('a vitrine apresenta oferta, ação principal e novas seções', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/Seu espaço.*Do seu jeito/)
  await expect(page.getByRole('link', { name: /Começar um projeto/ })).toHaveAttribute('href', 'https://wa.me/5532988085566')
  await expect(page.getByRole('link', { name: /Abrir no Google Maps/ })).toHaveAttribute('href', 'https://maps.app.goo.gl/Kp2EEEhSHP4NGmGd6')
  await expect(page.getByRole('heading', { name: /Móveis pensados.*jeito de viver/ })).toBeVisible()
  await expect(page.locator('.brand-symbol')).toHaveCount(1)
  await expect(page.locator('.footer-logo')).toHaveCount(1)
  await expect(page.getByRole('heading', { name: /Ambientes que contam/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: /Ele muda a forma/ })).toBeVisible()
  await expect(page.getByTitle('Mapa da Movelaria Reis em Ubá, Minas Gerais')).toHaveAttribute('src', /-21\.1182957%2C-42\.9426853/)
  await loadWholePage(page)
  await page.screenshot({ path: reviewPath('desktop.png'), fullPage: true })
})

test('as abas filtram projetos e a galeria devolve foco', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('/')
  const quartos = page.getByRole('button', { name: 'Quartos', exact: true }).last()
  await quartos.click()
  await expect(quartos).toHaveAttribute('aria-pressed', 'true')
  const trigger = page.getByRole('button', { name: /Ampliar Trabalho e descanso/ })
  await expect(trigger).toBeVisible()
  await trigger.click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByRole('button', { name: /Fechar/ })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(trigger).toBeFocused()
})

test('cabeçalho móvel mantém a ação principal e não existe rolagem horizontal', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.getByRole('link', { name: /Pedir orçamento/ })).toBeVisible()
  await expect(page.getByRole('navigation', { name: 'Navegação do rodapé' })).toContainText('Início')
  await expect(page.getByRole('link', { name: /Conversar com a Movelaria Reis pelo WhatsApp/ })).toHaveAttribute('href', 'https://wa.me/5532988085566')
  const widths = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }))
  expect(widths.scroll).toBe(widths.client)
  await loadWholePage(page)
  await page.screenshot({ path: reviewPath('mobile.png'), fullPage: true })
})

test('não há erros locais nem erros de execução', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
  page.on('response', (response) => { if (response.status() >= 400 && response.url().startsWith('http://127.0.0.1:5173')) errors.push(`${response.status()} ${response.url()}`) })
  await page.goto('/')
  await page.waitForTimeout(1500)
  expect(errors).toEqual([])
})
