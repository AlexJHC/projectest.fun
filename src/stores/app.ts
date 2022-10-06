import { action, makeAutoObservable, observable, reaction } from 'mobx'

class AppStore {
  @observable isLoading: boolean = true
  @observable theme: 'dark' | 'light' = 'dark'

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.theme,
      (theme, prevTheme) => {
        localStorage.setItem('theme', theme)
        document.body.classList.remove(prevTheme)
        document.body.classList.add(theme)
      }
    )
  }

  @action setIsLoading(loading: boolean) {
    this.isLoading = loading
  }

  @action setTheme(darkMode: 'dark' | 'light') {
    this.theme = darkMode
  }

  @action setDefaultTheme() {
    const storedTheme = localStorage.getItem('theme')
    const defaultDark =
      storedTheme === 'dark' ||
      (storedTheme === null &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    defaultDark ? (this.theme = 'dark') : (this.theme = 'light')
    document.body.classList.add(this.theme)
  }
}

export default new AppStore()
