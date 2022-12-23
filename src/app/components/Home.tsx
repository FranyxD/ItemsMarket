import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemInfo } from "../slices/itemsSlice";

export const Home = () => {
  // @ts-ignore
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchItems());
  }, []);
  const añadirItem = () => {};

  return (
    <main className="home">
      {/* BUSCADOR 
            <TextField className='buscador' id="filled-basic" label="Filled" variant="filled" /> 
            */}

      {/* AÑADIR ITEM */}
      <form className="add-item" action="" onSubmit={añadirItem}>
        <label htmlFor="">
          vender
          <input type="radio" name="wantTo" value="wts" />
        </label>
        <label htmlFor="">
          comprar
          <input type="radio" name="wantTo" value="wtb" />
        </label>
        <label htmlFor="">
          nombre
          <input type="text" name="nombre" />
        </label>
        <label htmlFor="">
          Precio
          <input type="number" />
        </label>
      </form>

      {/* WTS */}
      <section className="wts">
      <h2>Want to sell</h2>
        {

        items
          .map((item:itemInfo) => {
            return (
              <>
              
                
                <div key={item.id} className="want-to">
                  <sup>{item.wantTo}</sup>
                  <h3>{item.nombre}</h3>
                  <span>{item.precio}</span>
                </div>
              </>
            );
          })}
      </section>

      {/* WTB  */}
      <section className="wtb">
        <h2>Want to buy</h2>
        <div className="want-to">
          <sup>wtb</sup>
          <h3>item name</h3>
          <span>price</span>
        </div>
      </section>
    </main>
  );
};
