import React, { useEffect } from 'react';
import AdminHeader from '../adminHeader/adminHeader';
import "./AdminEditSection.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../Redux/Slice/ProductSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminEditSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Select products and status from Redux state
  const { productList, isLoading, fetchProductStatus } = useSelector((state) => state.product);

  // Handlers for edit and delete actions
  const handleEdit = (id) => {
    navigate(`/productAdding`, { state: { id } });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/deleteproducts/${id}`)
      .then((response) => {
        console.log(response);
        alert('Product deleted successfully!');
        dispatch(fetchProducts());
      })
      .catch((error) => {
        console.error(error);
        alert('Error deleting product. Please try again.');
      });

  };

  return (
    <div>
      <AdminHeader />
      <div className='adminViewContainer'>
        <h2>Plant Management</h2>
        {isLoading && <p>Loading...</p>}
        {fetchProductStatus !== 200 && <p>Error fetching products.</p>}
        {fetchProductStatus === 200 && (
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
              {productList.map((plant) => (
                <tr key={plant.Pno}>
                  <td>{plant.plantName}</td>
                  <td>{plant.plantPrice}</td>
                  <td>{plant.category}</td>
                  <td className='adminDecription'>{plant.plantDescriptionForCard}</td>
                  <td className='adminButtonContainer'>
                    <button className='adminEdit' onClick={() => handleEdit(plant.Pno)}>Edit</button>
                    <button className="adminDelete" onClick={() => handleDelete(plant.Pno)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminEditSection;
