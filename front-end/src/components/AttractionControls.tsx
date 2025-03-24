// components/AttractionsControls.tsx
"use client";

import { useState } from "react";
import { TextInput, Select, Switch, Button } from "@gravity-ui/uikit";

interface AttractionsControlsProps {
  onSearch: (query: string) => void;
  onFilter: (hideViewed: boolean) => void;
  onSort: (sortBy: string) => void;
}

export const AttractionsControls = ({ onSearch, onFilter, onSort }: AttractionsControlsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hideViewed, setHideViewed] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="controls-container">
      <div className="controls-row">
        <TextInput placeholder="Поиск по названию и описанию" value={searchQuery} onUpdate={handleSearch} hasClear className="search-input" />

        <Select
          value={[sortBy]}
          onUpdate={(value) => {
            setSortBy(value[0]);
            onSort(value[0]);
          }}
          options={[
            { value: "", content: "Сортировка" },
            { value: "name_asc", content: "По имени (А-Я)" },
            { value: "name_desc", content: "По имени (Я-А)" },
            { value: "rating_asc", content: "По рейтингу (↑)" },
            { value: "rating_desc", content: "По рейтингу (↓)" },
          ]}
          className="sort-select"
        />

        <Switch
          checked={hideViewed}
          onUpdate={(checked) => {
            setHideViewed(checked);
            onFilter(checked);
          }}
          className="hide-switch"
        >
          Скрыть осмотренные
        </Switch>
      </div>
    </div>
  );
};
