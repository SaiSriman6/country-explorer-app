# Phase 3 – React Hooks & API Integration

## Project: Country Explorer 🌍

A React-based Country Explorer application where users can:

* Browse all countries in the world
* Search countries by name
* View countries in a responsive grid layout
* Fetch live country data from a public API

This project focuses on mastering:

* `useEffect`
* API Fetching
* Loading/Error handling
* `useRef`
* Component communication using props

---

# Topics Covered

## 1. useEffect in Depth

The project uses `useEffect` for:

* Fetching API data on component mount
* Triggering side effects
* Managing asynchronous operations

### Example

```javascript id="hm9k1t"
useEffect(() => {
  fetchCountries();
}, []);
```

---

# 2. Fetching Data from API

The application fetches live data using the Fetch API.

## APIs Used

### Fetch All Countries

[REST Countries API – All Countries](https://restcountries.com/v3.1/all?fields=name%2Ccapital%2Ccurrencies%2Cflags%2Cpopulation%2Cregion&utm_source=chatgpt.com)

### Search Country by Name

[REST Countries API – Search Country](https://restcountries.com/v3.1/name/india?utm_source=chatgpt.com)

---

# 3. Loading, Error & Success States

The application properly handles:

* Loading state while fetching data
* Error handling when API fails
* Success state after data loads

### Example States

```javascript id="o5w3r8"
const [countries, setCountries] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
```

---

# 4. useRef Hook

`useRef` is used for:

* Auto-focusing the search input
* Implementing debounce search
* Persisting timeout values without re-rendering

### Example

```javascript id="8a4dmc"
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
}, []);
```

---

# Project Features

## ✅ Core Features

* Fetch all countries on page load
* Search countries by name
* Display country details dynamically
* Responsive grid card layout
* Live API integration

## ✅ Advanced Features

* Debounced search using `useRef + setTimeout`
* Auto-focus search input
* Loading state handling
* Error state handling
* Clean component structure

---

# Component Structure

```plaintext
App.jsx
│
├── SearchBar.jsx
│      └── Handles search input
│      └── Uses useRef for autofocus
│
└── CountryList.jsx
       └── Renders country grid
       
            └── CountryCard.jsx
                   └── Displays country details
```

---

# Components Explanation

## App.jsx

Main parent component responsible for:

* Managing application state
* Fetching API data
* Handling loading and error states
* Filtering countries

### States Managed

```javascript id="i6wop2"
countries
loading
error
query
```

---

# SearchBar.jsx

Responsible for:

* Taking user input
* Triggering search functionality
* Auto-focus using `useRef`
* Debounce implementation

---

# CountryList.jsx

Acts as:

* Grid container
* Wrapper component
* Receives filtered countries via props

---

# CountryCard.jsx

Displays:

* Country Flag
* Country Name
* Capital
* Population
* Region

---

# Country Details Displayed

| Field      | Description        |
| ---------- | ------------------ |
| Flag       | Country flag image |
| Name       | Country name       |
| Capital    | Capital city       |
| Population | Total population   |
| Region     | Geographic region  |

---

# React Concepts Practiced

| Concept               | Usage                      |
| --------------------- | -------------------------- |
| `useState`            | State management           |
| `useEffect`           | API calls & side effects   |
| `useRef`              | DOM access & debounce      |
| Props                 | Parent-child communication |
| Conditional Rendering | Loading/Error handling     |
| Fetch API             | Data retrieval             |

---

# Debounce Search Concept

Debouncing helps reduce unnecessary API calls while typing.

### Logic Used

```javascript id="5k19pd"
clearTimeout(timerRef.current);

timerRef.current = setTimeout(() => {
  onSearch(value);
}, 500);
```

---

# Learning Outcomes

After completing this project, you learned:

* How React handles side effects
* How to fetch and display API data
* How to manage asynchronous UI states
* How to structure React applications
* How to use `useRef` effectively
* How debouncing improves performance

These concepts are essential for building modern applications using:

* React
* REST APIs
* Dynamic frontend systems

---

# Future Improvements

Possible future enhancements:

* Dark/Light mode
* Pagination
* Region-based filtering
* Table/List toggle view
* Sorting by population
* Favorites system
* Detailed country page

---

# Technologies Used

| Technology         | Purpose             |
| ------------------ | ------------------- |
| JavaScript         | Application logic   |
| React              | Frontend library    |
| CSS                | Styling             |
| Fetch API          | API communication   |
| REST Countries API | Country data source |
