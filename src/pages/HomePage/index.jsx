import { useEffect, useState } from 'react';
import { Joke } from './components/Joke';

export const HomePage = () => {
  const [dataObject, setDataObject] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/kolekce-dat');
      const data = await response.json();
      setDataObject(data.data);
    };
    fetchData();
  }, []);

  return (
    <div class="container">
      {dataObject.map((object) => {
        return (
          <Joke
            dislikes={object.dislikes}
            likes={object.likes}
            userAvatar={object.avatar}
            userName={object.name}
            text={object.text}
            key={object.id}
          />
        );
      })}
    </div>
  );
};
