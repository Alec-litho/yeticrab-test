// hooks/useAttractionsFilters.ts
import { useState, useMemo, useCallback } from 'react'
import { Attraction, Status } from '../types'

export const useAttractionsFilters = (initialData: Attraction[]) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [hideViewed, setHideViewed] = useState(false)
  const [sortBy, setSortBy] = useState('')

  const filteredData = useMemo(() => {
    let result = [...initialData]

    // Фильтрация по поисковому запросу
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      )
    }

    // Фильтрация по статусу
    if (hideViewed) {
      result = result.filter(item => item.status !== Status.VISITED)
    }

    // Сортировка
    switch (sortBy) {
      case 'name_asc':
        return [...result].sort((a, b) => a.name.localeCompare(b.name))
      case 'name_desc':
        return [...result].sort((a, b) => b.name.localeCompare(a.name))
      case 'rating_asc':
        return [...result].sort((a, b) => a.rating - b.rating)
      case 'rating_desc':
        return [...result].sort((a, b) => b.rating - a.rating)
      case 'date_asc':
        return [...result].sort((a, b) => 
          new Date(a.addedDate).getTime() - new Date(b.addedDate).getTime()
        )
      case 'date_desc':
        return [...result].sort((a, b) => 
          new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
        )
      default:
        return result
    }
  }, [initialData, searchQuery, hideViewed, sortBy])

  return {
    filteredData,
    setSearchQuery,
    setHideViewed,
    setSortBy,
    searchQuery,
    hideViewed,
    sortBy,
  }
}