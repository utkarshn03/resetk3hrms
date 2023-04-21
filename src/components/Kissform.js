import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { nanoid } from "nanoid";
import data from "./data.json";
import Select from "react-select";

const { ipapi } = require("../config.json");

const Kissform = () => {
  document.title = "K3hrms · Kissform";

  // const [entry, setEntry] = useState(data);
  const [dataTable, setDataTable] = useState([]);
  const [options, setOptions] = useState([]);
  const [items, setItems] = useState([]);

  console.log(dataTable);
  console.log(items);

  const [kissinputs, setKissInputs] = useState({
    date: "",
    items: "",
    product_id: "",
    quantity: 1,
    price: "",
  });

  function handleChange(event) {
    console.log(kissinputs);
    console.log(event);
    setKissInputs((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(kissinputs);
  }

  function handleCart(event) {
    event.preventDefault();
    const newEntry = {
      id: nanoid(),
      date: kissinputs.date,
      items: kissinputs.items,
      product_id: kissinputs.product_id,
      quantity: kissinputs.quantity,
      price: kissinputs.price,
    };
    const add = [];
  }
  const Tablerow = ({ data, column }) => {
    return (
      <tbody>
        {data.map((item, index) => (
          <TableRow item={item} column={column} />
        ))}
      </tbody>
    );
  };

  const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
        if (columnItem.value.includes(".")) {
          const itemSplit = columnItem.value.split("."); //['address', 'city']
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
        }

        return <td>{item[`${columnItem.value}`]}</td>;
      })}
    </tr>
  );

  //axios
  const apikiss = ipapi + "/api/kiss/add";
  const apikissproducts = ipapi + "/api/kiss/products";

  useEffect(() => {
    axios(apikiss)
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get(apikissproducts)
      .then((res) => setItems(res.data))

      .catch((error) => console.log(error));
  }, []);

  //table columns

  const column = [
    { heading: "Product id", value: "product_id" },
    { heading: "Item Name", value: "items" },
    { heading: "Quantity", value: "quantity" },
    { heading: "Price", value: "price" },
  ];

  const [val, setVal] = useState([]);
  console.log(val);
  const [validated, setValidated] = useState([]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const loadOptions = async (inputValue, callback) => {
    try {
      const response = await axios.get(apikissproducts);
      const data = response.data;
      console.log(data);
      const options = data.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setOptions(options);
      callback(options);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container">
        <h4 className="text-success mb-0">Add Cart</h4>
        <p className="mb-3">
          <small className="text-muted">Add Product</small>
        </p>
        <form>
          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4">
              <h5 className="mb-4">Basic Details</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="mb-3">
                    <label for="dobfloatingInput">Date of Purchase</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dobfloatingInput"
                      required
                      onChange={handleChange}
                      name="date"
                    />
                  </div>
                </div>

                <div className="col-sm">
                  <div className="mb-3">
                    <label for="itemsfloatingInput">Items</label>
                    <select className="form-select">
                      {items.map((item) => (
                        <option key={item.pid} value={item.pid}>
                          {item.product_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Product Id"
                      placeholder="Product ID"
                      id="product_id"
                      readonly
                      disabled
                      onChange={handleChange}
                      value={kissinputs.product_id}
                      name="product_id"
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      label="Enter Quantity"
                      placeholder="Enter Quantity"
                      id="quantity"
                      onChange={handleChange}
                      value={kissinputs.quantity}
                      name="quantity"
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="input-group mb-3">
                    <span className="input-group-text">₹</span>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      disabled
                      readOnly
                      id="price"
                      onChange={handleChange}
                      name="price"
                      value={kissinputs.price * kissinputs.quantity}
                    />
                    <span className="input-group-text">.00</span>
                  </div>
                </div>

                <button
                  className="btn btn-success btn"
                  onClick={handleCart}
                  type="button"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 mb-4">
            <div className="border rounded-4 p-4">
              <h5 className="text-success mb-4">Cart</h5>
              <div className="row">
                <div className="col-sm">
                  <div className="table-responsive-sm">
                    <table
                      className="table table-hover table-responsive-sm"
                      id="admsearch"
                    >
                      <thead>
                        <tr>
                          {column.map((item, index) => (
                            <TableHeadItem item={item} />
                          ))}
                        </tr>
                      </thead>
                      <tbody className="">
                        {/* {
                      entry.map((e)=>{
                        // <tr>
                        //   <td>{e.product_id}</td>
                        //   <td>{e.items}</td>
                        //   <td>{e.quantity}</td>
                        //   <td>{e.price}</td>
                        // </tr>
                        
                      })
                    } */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!----><!----><!----> */}
          <div className="mt-3 mb-3">
            <div className="border rounded-4 p-4 text-end">
              <button type="button" className="btn btn-danger btn">
                Cancel
              </button>
              <button type="disabled" className="btn btn-success btn">
                Add
              </button>
            </div>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupFile01">
              Upload
            </label>
            <input
              type="file"
              className="form-control"
              id="inputGroupFile01"
              required
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Kissform;
