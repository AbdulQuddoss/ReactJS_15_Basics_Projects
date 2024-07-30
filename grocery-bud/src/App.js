import React from "react";
import { useState, useEffect } from "react";

import List from './list';
import Alert from './alert'

var storedList = JSON.parse(localStorage.getItem("list"));

function App() {
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});
  const [text, setText] = useState('');
  const [btnStatus, setBtnStatus] = useState(false);
  const [list, setList] = useState(storedList);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text){
      showAlert(true, 'please enter the value', 'danger')
    }
    else if(text && btnStatus){
      setList(list.map((item) => {
        if(item.id === editId){
          return {...item, title: text}
        }
        return item;
      }))
      setBtnStatus(false);
      setText('');
      setEditId(null);
      showAlert(true, 'item edided', 'success');
    }
    else{
      showAlert(true, 'item added to the list', 'success')
      const newItem = {id: new Date().getTime().toString(), title: text};
      setList([...list, newItem]);
      setText('');
    }
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type});
  }

  const handleAllClearItem = () => {
    showAlert(true, 'list are empty', 'danger')
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger')
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setBtnStatus(true);
    setEditId(specificItem.id);
    setText(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])
  return(
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type='text' className="grocery" placeholder="e.g. eggs" value={text} onChange={(e) => setText(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {btnStatus ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
        <List list={list} removeItem={removeItem} editItem={editItem}/>
        <button className="clear-btn" onClick={handleAllClearItem}>Clear items</button>
      </div>
      )}
    </section>
  )
}
export default App;