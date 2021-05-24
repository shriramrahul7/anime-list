import ItemList from './ItemList'
import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

function App() {

  const Day = new Date().getDay();
  const weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const [day, setDay] = useState(weekday[Day]);
  const { data, isLoading, error } = useFetch('https://api.jikan.moe/v3/schedule/' + day)
  const [items, setItems] = useState([]);

  const handleSelection = (e) => {
    setDay(e.target.value);
  }
  useEffect(() => {
    data && setItems(data[day]);
  }, [data, day])

  return (
    <div className="App m-4">
      <Navbar /><div className="mb-8"></div>
      <div className=" mx-auto max-w-0">
        <select name="Days" id="days" onChange={handleSelection}>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select></div>
      {error && <p>error</p>}
      {isLoading && "Loading........."}
      {items && <ItemList items={items} title={` ${day.toUpperCase()}'s schedule`} />}</div>
  );
}

export default App;
