import React, { useEffect, useState } from 'react';
import AdminHeader from '../adminHeader/adminHeader';
import "./AdminEditSection.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../Redux/Slice/ProductSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminEditSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // State to manage the confirmation popup
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

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

  // Show confirmation modal
  const confirmDelete = (id) => {
    setShowDeleteConfirmation(true);
    setProductToDelete(id);
  };

  // Handle delete after confirmation
  const handleDelete = () => {
    if (productToDelete) {
      axios.delete(`http://localhost:3001/api/deleteproducts/${productToDelete}`)
        .then((response) => {
          console.log(response);
          setShowDeleteConfirmation(false);
          dispatch(fetchProducts());
        })
        .catch((error) => {
          console.error(error);
          alert('Error deleting product. Please try again.');
        });
    }
  };

  // Close confirmation popup
  const closeDeleteConfirmation = () => {
    setShowDeleteConfirmation(false);
    setProductToDelete(null);
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
                    <button className="adminDelete" onClick={() => confirmDelete(plant.Pno)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Delete Confirmation Popup */}
      {showDeleteConfirmation && (
        <div className="deleteConfirmationModal">
          <div className="deleteConfirmationContent">
            <p>Are you sure you want to delete this product?</p>
            <div className="deleteConfirmationButtons">
              <button onClick={handleDelete} className="confirmDeleteButton">Yes</button>
              <button onClick={closeDeleteConfirmation} className="cancelDeleteButton">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminEditSection;
