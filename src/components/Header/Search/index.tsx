import { ChangeEvent, useEffect, useState } from 'react'
import { observer } from 'mobx-react'

import styles from './styles.module.scss'
import searchIcon from '../../../sources/images/icons/search.svg'
import { useStore } from '../../../stores'

type SearchPropsType = {
  isSearch: boolean
  hideSearch: () => void
}

export default observer(function Search({ isSearch, hideSearch }: SearchPropsType) {
  const { ProductsStore } = useStore()
  const { searchResult } = ProductsStore
  const [search, setSearch] = useState<string>('')
  const [isSuggestions, setSuggestions] = useState(false)

  const handleSearchResult = (search: string) =>
    ProductsStore.setSearchResult(search.trim().toLowerCase())

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  const handleHideSuggestions = () => setSuggestions(false)
  const handleShowSuggestions = () => setSuggestions(true)

  const showSearchStyle = isSearch ? `${styles.container} ${styles.show}` : styles.container

  const hideSuggestionsStyle = isSuggestions
    ? styles.autocomplete
    : `${styles.autocomplete} ${styles.hide}`

  const handleHideSearch = () => {
    hideSearch()
    setSearch('')
    handleHideSuggestions()
  }

  const noSearchMatches = searchResult.length === 0
  const suggestions = searchResult.map(suggestion => <span key={suggestion}>{suggestion}</span>)

  useEffect(() => {
    handleSearchResult(search)
  }, [search])

  return (
    <div className={showSearchStyle}>
      <div className={styles.search}>
        <div className={styles.wrapper}>
          <img src={searchIcon} alt="search icon" width="32" height="32" className={styles.icon} />
          <input
            type="text"
            placeholder="Search among millions of products"
            value={search}
            onChange={handleSearch}
            autoComplete="off"
            onFocus={handleShowSuggestions}
            onBlur={handleHideSuggestions}
          />
        </div>
        <button className={styles.clear} onClick={handleHideSearch}>
          <span>&#215;</span>
        </button>
      </div>
      <div className={hideSuggestionsStyle}>
        {suggestions}
        {noSearchMatches && <div>no results for '{search}'</div>}
      </div>
    </div>
  )
})
