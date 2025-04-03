import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './sidebar/Sidebar';
import Banner from './banner/Banner';
import Products from './Products/Products';
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [datas, setDatas] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ category: '', color: '', pattern: '', price: '' });
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("data.json").then((response) => {
      let allProducts = [];
      ["suit", "blazer"].forEach((cate) => {
        if (response.data[cate]) {
          allProducts = allProducts.concat(response.data[cate].map(item => ({ ...item, category: cate })));
        }
      });
      setDatas(allProducts);
    });
  }, []);

  useEffect(() => {
    let filtered = datas;

    if (filters.category) {
      filtered = filtered.filter(({ category }) => category === filters.category);
    }

    if (query) {
      filtered = filtered.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));
    }

    if (filters.color) {
      filtered = filtered.filter(({ color }) => color.toLowerCase() === filters.color.toLowerCase());
    }

    if (filters.pattern) {
      filtered = filtered.filter(({ pattern }) => pattern.toLowerCase() === filters.pattern.toLowerCase());
    }

    if (filters.price) {
      const [minPrice, maxPrice] = filters.price.split('-').map(Number);
      filtered = filtered.filter(({ newPrice }) => parseFloat(newPrice) >= minPrice && parseFloat(newPrice) <= maxPrice);
    }

    setFilteredData(filtered);
  }, [datas, filters, query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
    <>
      <Header query={query} handleInputChange={handleInputChange} />
      <Banner />
      <div className='content'>
        <Sidebar
          handleFilterChange={handleFilterChange}
          filters={filters}
        />
        <div className='prod-container'>
          <Products result={filteredData.map(({ id, image, name, style, color, pattern, oldPrice, newPrice }) => (
            <Card
              key={id}
              image={image}
              name={name}
              style={style}
              color={color}
              pattern={pattern}
              oldPrice={oldPrice}
              newPrice={newPrice}
            />
          ))} />
        </div>
      </div>
    </>
  );
}

export default App;
