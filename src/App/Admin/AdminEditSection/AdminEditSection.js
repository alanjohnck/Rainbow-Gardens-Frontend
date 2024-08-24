import React, { useEffect } from 'react';
import NavbarWithBorder from '../../Navbar/NavbarWithBorder';
import AdminHeader from '../adminHeader/adminHeader';
import "./AdminEditSection.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../Redux/Slice/ProductSlice';
function AdminEditSection() {
  const products =[
    
    {
      id: 1,
      name: "Plant 1",
      price: 20,
      category: "Indoor",
      description: "This is a plant description"
    },
    {
      id: 2,
      name: "Plant 2",
      price: 30,
      category: "Outdoor",
      description: "This is a plant description"
    },
    {
      id: 3,
      name: "Plant 3",
      price: 40,
      category: "Indoor",
      description: "This is a plant description"
    },
    {
      id: 4,
      name: "Plant 4",
      price: 50,
      category: "Outdoor",
      description: "This is a plant description"
    }
  ]
  // Handlers for edit and delete actions
  const handleEdit = (id) => {
    console.log(`Edit plant with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete plant with ID: ${id}`);
  };

  return (
    <div>
      <AdminHeader />
      <div className='adminViewContainer'>
        <h2>Plant Management</h2>
        <table className="plantTable">
          <thead>
            <tr>
              <th>Plant Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((plant) => (
              <tr key={plant.id}>
                <td>{plant.name}</td>
                <td>{plant.price}</td>
                <td>{plant.category}</td>
                <td className='adminDecription'>{plant.description}</td>
                <td className='adminButtonContainer'>
                  <button className='adminEdit' onClick={() => handleEdit(plant.id)}>Edit</button>
                  <button className="adminDelete" onClick={() => handleDelete(plant.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminEditSection;
