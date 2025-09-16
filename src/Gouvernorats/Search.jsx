import React, { useState, useMemo } from "react";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import './search.css';
import { IoSearch } from "react-icons/io5";

const countries = ["Tunisie", "Algérie", "Maroc", "Libye", "Egypte"];
const regions_tunisie = [/* ... */];
const categories = [/* ... */];
const services = [/* ... */];

function Search() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");
  const [activity, setActivity] = useState("");

  const sortedCategories = useMemo(() => {
    return [...categories].sort((a, b) =>
      a.localeCompare(b, 'fr', { sensitivity: 'base' })
    );
  }, []);

  const handleSearch = () => {
    navigate(`/searchresult`, {
      state: {
        searchParams: { country, region, category, activity }
      },
    });
  };

  const countryOptions = countries.map(c => ({ value: c, label: c }));
  const regionOptions = regions_tunisie.map(r => ({ value: r, label: r }));
  const categoryOptions = sortedCategories.map(c => ({ value: c, label: c }));
  const serviceOptions = services.map(s => ({ value: s, label: s }));

  return (
    <section className="search-wrapper">
      <div className="search-box">
        <Select
          options={countryOptions}
          value={countryOptions.find(opt => opt.value === country)}
          onChange={(selected) => setCountry(selected?.value || "")}
          isClearable
          placeholder="Pays"
          classNamePrefix="react-select"
        />
        <Select
          options={regionOptions}
          value={regionOptions.find(opt => opt.value === region)}
          onChange={(selected) => setRegion(selected?.value || "")}
          isClearable
          placeholder="Ville"
          classNamePrefix="react-select"
        />
        <Select
          options={categoryOptions}
          value={categoryOptions.find(opt => opt.value === category)}
          onChange={(selected) => setCategory(selected?.value || "")}
          isClearable
          placeholder="Service"
          classNamePrefix="react-select"
        />
        <Select
          options={serviceOptions}
          value={serviceOptions.find(opt => opt.value === activity)}
          onChange={(selected) => setActivity(selected?.value || "")}
          isClearable
          placeholder="Mot clé"
          classNamePrefix="react-select"
        />
        <button className="search-button" onClick={handleSearch}>
          <IoSearch size={20} />
        </button>
      </div>
    </section>
  );
}

export default Search;
